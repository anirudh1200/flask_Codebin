import os
from flask import Flask, request, render_template, jsonify, send_file
from flask_cors import CORS, cross_origin
from models import db, Paste

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
def getall():
    try:
        pastes = Paste.query.all()
        return jsonify([e.serialize() for e in pastes])
    except Exception as e:
        return (str(e))


@app.route('/d/<url>')
def downloadAsTxt(url):
    try:
        path = 'files/' + url + '.txt'
        return send_file(path, as_attachment=True)
    except Exception as e:
        print(e)
        return jsonify({'success': 'false'})


@app.route('/d/view/<url>', methods=['GET'])
def printurl(url):
    return url


if __name__ == '__main__':
    app.run()
