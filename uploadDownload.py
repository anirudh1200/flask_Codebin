from flask import Blueprint, request, jsonify, send_file, redirect
from werkzeug.utils import secure_filename
from models import db, Paste
from nocache import nocache
import datetime
import pydf
import os

uploadDownload = Blueprint('uploadDownload', __name__)

ALLOWED_EXTENSIONS = set([
    'txt', 'pdf', 'png', 'jpg', 'jpeg', 'gif', 'ppt', 'doc',
    'docx', 'xlsx', 'xls', 'pptx', 'mp3', 'c', 'py', 'js',
    'html', 'java', 'svg', 'tiff', 'php', 'cpp', 'mp4'
])
APP_ROOT = os.path.dirname(os.path.abspath(__file__))

@uploadDownload.route('/d/upload', methods=['POST'])
def geturl():
    url = request.get_json().get('url')
    language = request.get_json().get('language')
    username = request.get_json().get('username')
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
            uploadType='code',
            username=username
        )
        db.session.add(newPaste)
        db.session.commit()
        return jsonify({'success': True})
    except Exception as e:
        print(e)
        return jsonify({'success': False})

@uploadDownload.route('/d/<url>')
@nocache
def downloadAsTxt(url):
    try:
        path = 'files/' + url + '.txt'
        return send_file(path, as_attachment=True)
    except Exception as e:
        print(e)
        return redirect('/error')

@uploadDownload.route('/d/pdf/<url>', methods=['GET'])
@nocache
def handlePdf(url):
    if createPdf(url):
        return handlePdfDownload(url)
    return redirect('/error')


@uploadDownload.route('/d/pdf/<size>/<url>', methods=['GET'])
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


@uploadDownload.route('/d/uploadfile/', methods=['POST'])
def uploadFile():
    f = request.files['file']
    if allowed_file(f.filename):
        foundPaste = Paste.query.filter_by(url=f.filename).first()
        if foundPaste is not None:
            return redirect('/error')
        try:
            now = datetime.datetime.now()
            username = request.form['username']
            print('username', username)
            newPaste = Paste(
                url=f.filename,
                date=now.strftime("%d-%m-%Y"),
                language='none',
                uploadType='file',
                username=username
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


@uploadDownload.route('/d/file/<url>', methods=['GET'])
def downloadFile(url):
    try:
        path = 'files/' + url
        return send_file(path, as_attachment=True)
    except Exception as e:
        print(e)
        return redirect('/error')


@uploadDownload.errorhandler(413)
def error413(e):
    return 'File too large', 413
