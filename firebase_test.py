import unittest
from unittest import mock
import json
import flask
from flask_webtest import TestApp
import app

class TestFirebaseServices(unittest.TestCase):

    def setUp(self):
        """Creates  test fixture"""
        self.test_app = TestApp(app.app)

        self.headers = {
            'Content-Type': 'application/json',
        }

        self.characterName = 'Tester'
        self.userEmail = 'antgreen88@gmail.com'

        self.character = {
            'name': 'Tester',
            'race': 'Human',
            'class': 'Fighter',
            'userEmail': 'antgreen88@gmail.com',
            'attributes': {
                'str': 15,
                'dex': 14,
                'con': 13,
                'int': 12,
                'wis': 10,
                'cha': 8,
            }
        }

    def test_create_app(self):
        self.assertIsNotNone(flask.current_app)

    @mock.patch('app.firebase')
    def test_save_character(self, mock_firebase):
        mock_firebase.return_value = 200
        response = self.test_app.post('/firebase/saveCharacter', json.dumps(self.character), headers=self.headers)
        self.assertEqual(response.status_code, 200)

    @mock.patch('app.firebase')
    def test_read_character(self, mock_firebase):
        mock_firebase.return_value = 200
        endpoint = f'/firebase/list?userEmail={self.userEmail}&characterName={self.characterName}'
        response = self.test_app.get(endpoint)
        character = json.loads(response.text)
        self.assertEqual(response.status_code, 200)
        self.assertEqual(character, self.character)
    
    @mock.patch('app.firebase')
    def test_delete_character(self, mock_firebase):
        mock_firebase.return_value = 200
        endpoint = f'/firebase/delete?userEmail={self.userEmail}&characterName={self.characterName}'
        response = self.test_app.delete(endpoint)
        self.assertEqual(response.status_code, 200)

if __name__ =='main':
    unittest.main()
    