import os
import pydf
import datetime
from flask import Flask, request, render_template, jsonify, send_file, redirect
# from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename
from models import db, Paste
from nocache import nocache


app = Flask(__name__, static_folder='./build/static',
            template_folder='./build')

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024
# for development
# cors = CORS(app)
# app.config['CORS_HEADERS'] = 'Content-Type'
db.init_app(app)

ALLOWED_EXTENSIONS = set([
    'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'ppt', 'doc',
    'docx', 'xlsx', 'xls', 'pptx', 'mp3', 'c', 'py', 'js',
    'html', 'java', 'svg', 'tiff', 'php', 'cpp', 'mp4'
])
APP_ROOT = os.path.dirname(os.path.abspath(__file__))


@app.route('/', defaults={'path': ''}, methods=['GET'])
@app.route('/<path:path>', methods=['GET'])
def index(path):
    return render_template('index.html')


@app.route('/d/upload', methods=['POST'])
def geturl():
    url = request.get_json().get('url')
    language = request.get_json().get('language')
    foundPaste = Paste.query.filter_by(url=url).first()
    if foundPaste is not None:
        return jsonify({'success': False, 'status': 'URL already exists'})
    file = open('files/' + url + '.txt', 'w')
    file.write(request.get_json().get('pasteData'))
    file.close()
    try:
        now = datetime.datetime.now()
        newPaste = Paste(
            url=url,
            date=now.strftime("%d-%m-%Y"),
            language=language,
            uploadType='code'
        )
        db.session.add(newPaste)
        db.session.commit()
        return jsonify({'success': True})
    except Exception as e:
        print(e)
        return jsonify({'success': False})


@app.route('/d/getall', methods=['GET'])
@nocache
def getall():
    try:
        pastes = Paste.query.all()
        return jsonify([e.serialize() for e in pastes])
    except Exception as e:
        return (str(e))


@app.route('/d/<url>')
@nocache
def downloadAsTxt(url):
    try:
        path = 'files/' + url + '.txt'
        return send_file(path, as_attachment=True)
    except Exception as e:
        print(e)
        return redirect('/error')


@app.route('/d/view/<url>', methods=['GET'])
@nocache
def sendData(url):
    filePath = 'files/' + url + '.txt'
    try:
        file = open(filePath, 'r')
        pasteData = file.read()
        file.close()
    except Exception as e:
        print(e)
        return redirect('/error')
    try:
        foundPaste = Paste.query.filter_by(url=url).first()
        return jsonify(foundPaste.serialize(pasteData))
    except Exception as e:
        print(str(e))
        return redirect('/error')


@app.route('/d/edit', methods=['POST'])
def editPaste():
    url = request.get_json().get('url')
    filePath = 'files/' + url + '.txt'
    try:
        file = open(filePath, 'w')
        file.write(request.get_json().get('pasteData'))
        file.close()
        return jsonify({'success': True})
    except Exception as e:
        print(e)
        return redirect('/error')


@app.route('/d/delete/', methods=['POST'])
def deletePaste():
    url = request.get_json().get('url')
    login = request.get_json().get('login')
    if(login == 'true'):
        try:
            foundPaste = Paste.query.filter_by(url=url).delete()
            db.session.commit()
        except Exception as e:
            print(e)
            return redirect('/error')
        try:
            filePath = 'files/' + url + '.txt'
            os.unlink(filePath)
        except:
            pass
        try:
            filePath = 'files/' + url
            os.unlink(filePath)
        except:
            pass
        try:
            pdfFilePath = 'files/' + url + '.pdf'
            os.unlink(pdfFilePath)
        except:
            pass
        return jsonify({'success': True})
    else:
        return jsonify({'success': False, 'reason': 'authentication failed'})


@app.route('/d/pdf/<url>', methods=['GET'])
@nocache
def handlePdf(url):
    if createPdf(url):
        return handlePdfDownload(url)
    return redirect('/error')


@app.route('/d/pdf/<size>/<url>', methods=['GET'])
@nocache
def handlePdfDynamicSize(size, url):
    if createPdf(url, size):
        return handlePdfDownload(url)
    return redirect('/error')


def createPdf(url, size='15'):
    filePath = 'files/' + url + '.txt'
    try:
        file = open(filePath, 'r')
        pasteData = file.read()
        file.close()
        pdfFilePath = 'files/' + url + '.pdf'
        pdf = pydf.generate_pdf('<p style="font-size:' +
                                size+'px">'+pasteData+'</p>')
        with open(pdfFilePath, 'wb') as f:
            f.write(pdf)
            f.close()
        return True
    except Exception as e:
        print(e)
        return False


def handlePdfDownload(url):
    pdfFilePath = 'files/' + url + '.pdf'
    return send_file(pdfFilePath, as_attachment=True)


def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS


@app.route('/d/uploadfile/', methods=['POST'])
def uploadFile():
    f = request.files['file']
    if allowed_file(f.filename):
        foundPaste = Paste.query.filter_by(url=f.filename).first()
        if foundPaste is not None:
            return redirect('/error')
        try:
            now = datetime.datetime.now()
            newPaste = Paste(
                url=f.filename,
                date=now.strftime("%d-%m-%Y"),
                language='none',
                uploadType='file'
            )
            db.session.add(newPaste)
            db.session.commit()
        except Exception as e:
            print(e)
            return redirect('/error')
        filename = secure_filename(f.filename)
        f.save(os.path.join(APP_ROOT + '/files/')+filename)
        return redirect('/')
    else:
        return redirect('/error')


@app.route('/d/file/<url>', methods=['GET'])
def downloadFile(url):
    try:
        path = 'files/' + url
        return send_file(path, as_attachment=True)
    except Exception as e:
        print(e)
        return redirect('/error')


@app.route('/auth/login', methods=['POST'])
def authenticate():
    username = request.get_json().get('username')
    password = request.get_json().get('password')
    # for production
    if(username == os.environ.get('USERNAME') and password == os.environ.get('PASSWORD')):
    # for development
    # if(username == 'dummy' and password == 'dummy'):
        return jsonify({'login': True})
    else:
        return jsonify({'login': False})


@app.errorhandler(413)
def error413(e):
    return 'File too large', 413


if __name__ == '__main__':
    app.run()
