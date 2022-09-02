import unittest
import json
import flask
from flask_webtest import TestApp
import app

class TestFirebaseServices(unittest.TestCase):

    def setUp(self):
        """Creates  test fixture"""
        self.test_app = TestApp(app.app)

    def test_create_app(self):
        self.assertIsNotNone(flask.current_app)

    def test_upper(self):
        self.assertEqual('foo'.upper(), 'FOO')

    
if __name__ =='main':
    unittest.main()
    