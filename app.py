from flask import Flask, request
from flask_sqlalchemy import SQLAlchemy
import os

app = Flask(__name__)

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

from models import Paste

@app.route('/', methods=['GET'])
def hello():
    return 'Hello World'


@app.route('/d/upload', methods=['POST'])
def geturl():
    url = request.form.get('url')
    return url


@app.route('/d/view/<url>', methods=['GET'])
def printurl(url):
    return url


if __name__ == '__main__':
    app.run()
