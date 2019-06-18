from flask_cors import CORS, cross_origin
from flask_compress import Compress
from flask import Flask
from models import db
import os

app = Flask(__name__, static_folder='./build/static',
            template_folder='./build')

app.config.from_object(os.environ['APP_SETTINGS'])
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['MAX_CONTENT_LENGTH'] = 5 * 1024 * 1024
# for development
cors = CORS(app)
app.config['CORS_HEADERS'] = 'Content-Type'
db.init_app(app)
Compress(app)

from auth import auth as auth_blueprint
app.register_blueprint(auth_blueprint)

from uploadDownload import uploadDownload as uploadDOwnload_blueprint
app.register_blueprint(uploadDOwnload_blueprint)

from main import main as main_blueprint
app.register_blueprint(main_blueprint)

if __name__ == '__main__':
    app.run()
