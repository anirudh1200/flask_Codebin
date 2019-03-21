from flask_sqlalchemy import SQLAlchemy
from passlib.apps import custom_app_context as pwd_context

db = SQLAlchemy()


class Paste(db.Model):
    __tablename__ = 'pastes'

    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String())
    date = db.Column(db.String())
    language = db.Column(db.String())
    uploadType = db.Column(db.String())

    def __init__(self, url, date, language, uploadType):
        self.url = url
        self.date = date
        self.language = language
        self.uploadType = uploadType

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def serialize(self, pasteData=None):
        return {
            'id': self.id,
            'url': self.url,
            'date': self.date,
            'language': self.language,
            'pasteData': pasteData,
            'uploadType': self.uploadType
        }


class User(db.Model):
    __tablename__ = 'users'

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(32), index=True)
    password_hash = db.Column(db.String(128))

    def __init__(self, username, password):
        self.username = username
        self.password = password

    def __repr__(self):
        return '<id {}>'.format(self.id)

    def hash_password(self, password):
        self.password_hash = pwd_context.encrypt(password)

    def verify_password(self, password):
        return pwd_context.verify(password, self.password_hash)
