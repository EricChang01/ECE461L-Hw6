from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='../client/build', static_url_path='')
CORS(app)
# Serve React static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

# Endpoint for checking in hardware (POST)
@app.route('/api/checkInHardware', methods=['POST'])
def check_in_hardware():
    data = request.get_json() or {}
    project_id = data.get('projectId')
    qty = data.get('qty')
    
    return jsonify({
        "projectId": project_id,
        "qty": qty,
    })

# Endpoint for checking out hardware (POST)
@app.route('/api/checkOutHardware', methods=['POST'])
def check_out_hardware():
    data = request.get_json() or {}
    project_id = data.get('projectId')
    qty = data.get('qty')
    
    return jsonify({
        "projectId": project_id,
        "qty": qty,
    })

# Endpoint for joining a project (POST)
@app.route('/api/joinProject', methods=['POST'])
def join_project():
    data = request.get_json() or {}
    project_id = data.get('projectId')
    
    return jsonify({
        "projectId": project_id,
    })

# Endpoint for leaving a project (POST)
@app.route('/api/leaveProject', methods=['POST'])
def leave_project():
    data = request.get_json() or {}
    project_id = data.get('projectId')

    return jsonify({
        "projectId": project_id,
    })

if __name__ == '__main__':
    app.run(debug=True)