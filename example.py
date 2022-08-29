"""An example 'controller' with a basic route."""
import os
import time

from flask import Flask, request, jsonify, Blueprint
import logging
import requests
from firebase_admin import credentials, firestore, initialize_app

blueprint = Blueprint('example', __name__, url_prefix="/example")

# Initialize Firestore DB
# cred = credentials.Certificate('key.json')
# default_app = initialize_app(cred)
# db = firestore.client()
# todo_ref = db.collection('characters')


@blueprint.route("/ping")
def hello():
  return 'pong'

