from firebase_admin import firestore, credentials, initialize_app
from dotenv import load_dotenv
import os 
load_dotenv()

def get_individuals():
    try:
        cred = credentials.ApplicationDefault()
        
        initialize_app(cred, {'projectId': f'{os.getenv("PROJECT_ID","your-project-id-goes-here")}',})
        
        db = firestore.client()

        individuals = db.collection(u'individuals') \
            .where(u'hobbies', u'array_contains', u'cycling') \
            .where(u'hobbies', u'array_contains', u'tennis') \
            .stream()

        result = []
        for individual in individuals:
            result.append(individual.to_dict())
        print(result)

    except Exception as e:
        print(e)


if __name__ == '__main__':
    get_individuals()