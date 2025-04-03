from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import os

app = Flask(__name__, static_folder='./build', static_url_path='')
CORS(app)
# Serve React static files
@app.route('/', defaults={'path': ''})
@app.route('/<path:path>')
def serve(path):
    if path != "" and os.path.exists(os.path.join(app.static_folder, path)):
        return send_from_directory(app.static_folder, path)
    else:
        return send_from_directory(app.static_folder, 'index.html')

@app.route('/api/checkInHardware', methods=['GET'])
def check_in_hardware():
    project_id = request.args.get('projectId')
    qty = request.args.get('qty')
    
    return jsonify({
        "projectId": project_id,
        "qty": qty,
    })

# Endpoint for checking out hardware
@app.route('/api/checkOutHardware', methods=['GET'])
def check_out_hardware():
    project_id = request.args.get('projectid')
    qty = request.args.get('qty')
    
    return jsonify({
        "projectId": project_id,
        "qty": qty,
    })

# Endpoint for joining a project
@app.route('/api/joinProject', methods=['GET'])
def join_project():
    project_id = request.args.get('projectid')
    
    return jsonify({
        "projectId": project_id,
    })

# Endpoint for leaving a project
@app.route('/api/leaveProject', methods=['GET'])
def leave_project():
    project_id = request.args.get('projectid')

    return jsonify({
        "projectId": project_id,
    })

if __name__ == '__main__':
    # app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
    app.run(debug=True)