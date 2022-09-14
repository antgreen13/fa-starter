import os
import json
from ntpath import join 
from google.cloud import bigquery
from google.oauth2 import service_account

#os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = 'bigquery-key.json'
# credentials = service_account.Credentials.from_service_account_file('bigquery-key.json')
# project_id = 'noble-conduit-359019'

db = bigquery.Client()

def get_popular_classes(race):
    """Returns the top three most popular classes"""
    classes = {}
    query = f'''
                SELECT class as player_class, count(class) AS most_common
                FROM `noble-conduit-359019.dndcharacters.character_data` 
                WHERE race = @race
                GROUP BY class
                ORDER BY most_common desc
                LIMIT 3;
            '''
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("race", "STRING", race),
        ]
    )
    query_job = db.query(query, job_config=job_config)

    results = query_job.result()

    for row in results:
        classes[row.player_class] = row.most_common

    return classes

def get_popular_attributes(player_class):
    """Returns two highest attributes based on class"""
    attributes = {}
    query = f'''
                SELECT 
                    AVG(str) AS Strength, 
                    AVG(dex) AS Dexterity, 
                    AVG(con) AS Constitution, 
                    AVG(int) AS Intelligence, 
                    AVG(wis) AS Wisdom,
                    AVG(cha) AS Charisma
                FROM `noble-conduit-359019.dndcharacters.character_data` 
                WHERE class = @class
                '''
    job_config = bigquery.QueryJobConfig(
        query_parameters=[
            bigquery.ScalarQueryParameter("class", "STRING", player_class),
        ]
    )
    query_job = db.query(query, job_config=job_config)

    results = query_job.result()
    for row in results:
        attributes['Strength'] = row.Strength
        attributes['Dexterity'] = row.Dexterity
        attributes['Constitution'] = row.Constitution
        attributes['Intelligence'] = row.Intelligence
        attributes['Wisdom'] = row.Wisdom
        attributes['Charisma'] = row.Charisma

    return attributes