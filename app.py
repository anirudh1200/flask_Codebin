import os
import pydf
from flask import Flask, request, render_template, jsonify, send_file, redirect
from flask_cors import CORS, cross_origin
from models import db, Paste
from nocache import nocache

app = Flask(__name__, static_folder='./build/static',
            template_folder='./build')

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
db.init_app(app)


@app.route('/', defaults={'path': ''}, methods=['GET'])
@app.route('/<path:path>', methods=['GET'])
def index(path):
    return render_template('index.html')


@app.route('/d/upload', methods=['POST'])
def geturl():
    url = request.get_json().get('url')
    date = request.get_json().get('date')
    language = request.get_json().get('language')
    file = open('files/' + url + '.txt', 'w')
    file.write(request.get_json().get('pasteData'))
    file.close()
    try:
        newPaste = Paste(
            url=url,
            date=date,
            language=language
        )
        db.session.add(newPaste)
        db.session.commit()
        return jsonify({'success': 'true'})
    except Exception as e:
        print(e)
        return jsonify({'success': 'false'})


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
        return jsonify({'success': 'true'})
    except Exception as e:
        print(e)
        return redirect('/error')


@app.route('/d/delete', methods=['POST'])
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
        except Exception as e:
            print(e)
        try:
            pdfFilePath = 'files/' + url + '.pdf'
            os.unlink(pdfFilePath)
        except Exception as e:
            print(e)
        return jsonify({'success': 'true'})
    else:
        return jsonify({'success': 'false', 'reason': 'authentication failed'})


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


@app.route('/auth/login', methods=['POST'])
def authenticate():
    username = request.get_json().get('username')
    passwrod = request.get_json().get('password')
    # for production
    # if(username == os.environ.get('USERNAME') and password == os.environ.get('PASSWORD')):
    # for development
    if(username == 'dummy' and passwrod == 'dummy'):
        return jsonify({'login': 'true'})
    else:
        return jsonify({'login': 'flase'})


if __name__ == '__main__':
    app.run()
