"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Task
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


@api.route('/tasks', methods=['GET'])
def get_all_tasks():
    all_tasks = Task.query.all()
    tasks = list(map(lambda x: x.serialize(), all_tasks))
    return jsonify({"content": tasks, "msg": "Lista de tareas"}), 200

@api.route('/task', methods=['POST'])
def create_tasks():
    new_task_label = request.json.get("label",None)
    if new_task_label is not None:
        task = Task(label = new_task_label)
        db.session.add(task)
        db.session.commit()
        return jsonify({"msg": "Tarea creada correctamente"}), 200
    return jsonify({"msg": "La tarea no se ha creado"}),400

@api.route('/task/<int:new_task_id>', methods=['DELETE'])
def delete_tasks(new_task_id):
    delete_task_label = Task.query.get(new_task_id)
    db.session.delete(delete_task_label)
    db.session.commit()
    return jsonify({"msg": "La tarea se ha eliminado correctamente"}),200