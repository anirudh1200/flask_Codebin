from flask import Blueprint, jsonify, redirect, request, render_template
from models import db, Paste
from nocache import nocache
import os

main = Blueprint('main', __name__)

@main.route('/', defaults={'path': ''}, methods=['GET'])
@main.route('/<path:path>', methods=['GET'])
def index(path):
    return render_template('index.html')


@main.route('/d/getall', methods=['GET'])
@nocache
def getall():
    try:
        pastes = Paste.query.all()
        return jsonify([e.serialize() for e in pastes])
    except Exception as e:
        return (str(e))

@main.route('/d/view/<url>', methods=['GET'])
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


@main.route('/d/edit', methods=['POST'])
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


@main.route('/d/delete/', methods=['POST'])
def deletePaste():
    url = request.get_json().get('url')
    login = request.get_json().get('login')
    if(login == 'true'):
        try:
            Paste.query.filter_by(url=url).delete()
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
