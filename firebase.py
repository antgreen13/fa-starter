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
    character : Return document that matches query email and name.
      all_characters :  Return all characters in a user collection.
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
      return f"An Error Occurred when trying to fetch character data: {e}. Args: {user_email}, {character_name}"

@blueprint.route('/saveCharacter', methods=['POST'])
def save():
  """
    save() : Add document to Firestore collection with request body.
    Ensure you pass a custom userEmail and characterName as part of json body in post request
  """
  try:
    user_email = flask.request.json['userEmail']
    character_name = flask.request.json['name']
    doc_ref = db.collection(user_email).document(character_name)
    doc_ref.set(flask.request.json)
    return flask.jsonify({"success": True}), 200
    
  except Exception as e:
        return f"An Error Occurred when trying to save/update character data: {e}. Args: {user_email}, {character_name}"

@blueprint.route('/delete', methods=['GET', 'DELETE'])
def delete():
    """
        delete() : Delete a character document from Firestore collection.
    """
    try:
        # Check for userEmail and characterName in URL query
        user_email = flask.request.args.get('userEmail')
        character_name = flask.request.args.get('characterName')
        character_data = db.collection(user_email)
        character_data.document(character_name).delete()
        return flask.jsonify({"success": True}), 200
    except Exception as e:
        return f"An Error Occurred when trying to delete character data: {e}. Args: {user_email}, {character_name}"

