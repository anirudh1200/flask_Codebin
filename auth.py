from flask import Blueprint, request, jsonify
from models import db, User

auth = Blueprint('auth', __name__)

@auth.route('/auth/signin', methods=['POST'])
def signin():
    username = request.get_json().get('username')
    password = request.get_json().get('password')
    if username is None or password is None:
        return jsonify(({'login': False}))
    if User.query.filter_by(username=username).first() is not None:
        return jsonify({'login': False, 'status': 'username already exists'})
    newUser = User(username=username)
    newUser.hash_password(password)
    db.session.add(newUser)
    db.session.commit()
    return jsonify({'login': True})


@auth.route('/auth/login', methods=['POST'])
def verify_password():
    username = request.get_json().get('username')
    password = request.get_json().get('password')
    user = User.query.filter_by(username=username).first()
    if not user or not user.verify_password(password):
        return jsonify({'login': False})
    return jsonify({'login': True})
