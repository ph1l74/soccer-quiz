from flask import Flask, json, send_from_directory, redirect
from flask_restful import Api, Resource
from flask_cors import CORS
import files_parser


app = Flask(__name__, static_url_path='/', static_folder='src-frontend/build')
flask_api = Api(app)
CORS(app)


@app.route('/')
def no_index():
    return redirect("/index.html", code=302)


@app.route('/<path:path>')
def index(path):
    return send_from_directory('/src-frontend/build', path)


class Coefficient(Resource):

    def __init__(self):
        self.questions = []

    @staticmethod
    def parse_csv(self):
        self.questions = files_parser.parse()
        return self.questions

    def get(self):
        questions = self.parse_csv(self)
        response = app.response_class(
                response=json.dumps(questions),
                status=200,
                mimetype='application/json'
            )
        return response


flask_api.add_resource(Coefficient, '/api/coef')


if __name__ == '__main__':
    app.run(host='127.0.0.1', port='80')
