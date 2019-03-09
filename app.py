import os
from flask import Flask, request, render_template
from models import db
from models import Paste

app = Flask(__name__, static_folder='./build/static',template_folder='./build')

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db.init_app(app)

@app.route('/', methods=['GET'])
def index():
    return render_template('index.html')


@app.route('/d/upload', methods=['POST'])
def geturl():
    url = request.form.get('url')
    book = Paste(
        url=url
    )
    db.session.add(book)
    db.session.commit()
    return url


@app.route('/d/view/<url>', methods=['GET'])
def printurl(url):
    return url


if __name__ == '__main__':
    app.run()
