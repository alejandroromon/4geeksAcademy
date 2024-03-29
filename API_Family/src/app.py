"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
import os
from flask import Flask, request, jsonify, url_for
from flask_cors import CORS
from utils import APIException, generate_sitemap
from datastructures import FamilyStructure

app = Flask(__name__)
app.url_map.strict_slashes = False
CORS(app)

# create the jackson family object
jackson_family = FamilyStructure("Jackson")

member1 = { "id" : jackson_family._generateId(),
            "firstname" : "John",
            "lastname" : jackson_family.last_name,
            "age" : 33,
            "luckyNumbers" : [7, 13, 22]}
member2 = { "id" : jackson_family._generateId(),
            "firstname" :"Jane", 
            "lastname": jackson_family.last_name,
            "age" : 35, 
            "luckyNumbers": [10, 14, 3]}
member3 = { "id" : jackson_family._generateId(),
            "firstname" :"Jimmy", 
            "lastname": jackson_family.last_name,
            "age" : 5, 
            "luckyNumbers": [1]}
jackson_family.add_member(member1)
jackson_family.add_member(member2)
jackson_family.add_member(member3)

# Handle/serialize errors like a JSON object
@app.errorhandler(APIException)
def handle_invalid_usage(error):
    return jsonify(error.to_dict()), error.status_code

# generate sitemap with all your endpoints
@app.route('/')
def sitemap():
    return generate_sitemap(app)

@app.route('/members', methods=['GET'])
def get_member():

    # this is how you can use the Family datastructure by calling its methods
    members = FamilyStructure.get_all_members(jackson_family)
    response_body = {
        "result": True,
        "family": members
    }
    return jsonify(response_body), 200

@app.route('/member', methods=['POST'])
def post_member():

    miembro = request.get_json() 
    if miembro["age"] <= 0:
        return jsonify({"mensaje":"Edad incorrecta"}), 404
    if miembro["id"] is None:
        miembro["id"] = jackson_family._generateId()
    member = { 
            "id" : miembro["id"],
            "firstname" :miembro["firstname"], 
            "age" : miembro["age"], 
            "luckyNumbers": miembro["luckyNumbers"]
            }
    new_member = jackson_family.add_member(member)

    return jsonify(new_member), 200
    

@app.route('/member/<int:member_id>', methods=['DELETE'])
def delete_member(member_id):
    miembro = jackson_family.delete_member(member_id)
    if miembro is None:
        return "Miembro no encontrado", 404
    resultado = {
        "id": member_id,
        "result": True,
        "status": 200,
        "mensaje": "miembro eliminado de la familia"
    }
    return jsonify(resultado), 200

@app.route('/member/<int:member_id>', methods=['GET'])
def get_member(member_id):
    miembro = jackson_family.get_member(member_id)
    if miembro is None:
        return "Miembro no encontrado", 404
    resultado = {
        "id": member_id,
        "result": True,
        "status": 200,
        "mensaje": "miembro eliminado de la familia"
    }
    return jsonify(resultado), 200

# this only runs if `$ python src/app.py` is executed
if __name__ == '__main__':
    PORT = int(os.environ.get('PORT', 3000))
    app.run(host='0.0.0.0', port=PORT, debug=True)
