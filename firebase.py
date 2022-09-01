"""Server endpoints for database interactions."""

import flask
import logging
import json
from datetime import datetime
from firebase_admin import credentials, firestore, initialize_app

blueprint = flask.Blueprint('firebase', __name__, url_prefix='/firebase')

# Initialize Firestore DB
cred = credentials.Certificate('key.json')
default_app = initialize_app(cred)
db = firestore.client()

@blueprint.route('/list', methods=['GET'])
def read():
    """
      read() : Fetches documents from Firestore collection as JSON.
      user_email : Return document that matches query email.
        
    """
    try:
        # Check if user email was passed to URL query
        user_email = flask.request.args.get('userEmail')
        character_name = flask.request.args.get('characterName')

        if user_email:
            character_data = db.collection(user_email)
            if character_name:
              character = character_data.document(character_name).get()
              return flask.jsonify(character.to_dict()), 200
            else:
              all_characters = [doc.to_dict() for doc in character_data.stream()]
              return flask.jsonify(all_characters), 200

    except Exception as e:
        return f"An Error Occurred: {e}"

@blueprint.route('/saveCharacter', methods=['POST'])
def save():
  """
    create() : Add document to Firestore collection with request body.
    Ensure you pass a custom ID as part of json body in post request,
    e.g. json={'id': '1', 'title': 'Write a blog post'}
  """
  if flask.request.method == 'POST':
    user_email = flask.request.json['userEmail']
    character_name = flask.request.json['name']
    doc_ref = db.collection(user_email).document(character_name)
    doc_ref .set(flask.request.json)
    return flask.jsonify({"success": True}), 200
  else:
    return flask.jsonify({"failure": True}), 400