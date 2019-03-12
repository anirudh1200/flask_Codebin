from flask_sqlalchemy import SQLAlchemy

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
