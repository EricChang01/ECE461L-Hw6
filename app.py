from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='./build', static_url_path='/')
CORS(app)
# Endpoint for checking in hardware
@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/checkInHardware', methods=['GET'])
def check_in_hardware():
    project_id = request.args.get('projectId')
    qty = request.args.get('qty')
    
    return jsonify({
        "projectId": project_id,
        "qty": qty,
    })

# Endpoint for checking out hardware
@app.route('/checkOutHardware', methods=['GET'])
def check_out_hardware():
    project_id = request.args.get('projectid')
    qty = request.args.get('qty')
    
    return jsonify({
        "projectId": project_id,
        "qty": qty,
    })

# Endpoint for joining a project
@app.route('/joinProject', methods=['GET'])
def join_project():
    project_id = request.args.get('projectid')
    
    return jsonify({
        "projectId": project_id,
    })

# Endpoint for leaving a project
@app.route('/leaveProject', methods=['GET'])
def leave_project():
    project_id = request.args.get('projectid')

    return jsonify({
        "projectId": project_id,
    })

if __name__ == '__main__':
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))