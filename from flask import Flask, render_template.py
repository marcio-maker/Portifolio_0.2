from flask import Flask, render_template, request, jsonify
import pytz
from datetime import datetime
import os

app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/timezone')
def get_timezone():
    timezone = request.args.get('tz', 'UTC')
    
    try:
        # Get visitor's time
        visitor_tz = pytz.timezone(timezone)
        brt_tz = pytz.timezone('America/Sao_Paulo')
        
        return jsonify({
            'visitor_time': datetime.now(visitor_tz).strftime('%H:%M'),
            'marcio_time': datetime.now(brt_tz).strftime('%H:%M'),
            'timezone': timezone
        })
    except pytz.UnknownTimeZoneError:
        # Fallback to UTC if timezone is invalid
        return jsonify({
            'visitor_time': datetime.utcnow().strftime('%H:%M'),
            'marcio_time': datetime.now(pytz.timezone('America/Sao_Paulo')).strftime('%H:%M'),
            'timezone': 'UTC'
        })

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    
    # Basic validation
    if not data.get('name') or not data.get('email') or not data.get('message'):
        return jsonify({'status': 'error', 'message': 'Missing required fields'}), 400
        
    # In a real app, you would save this to a database or send an email
    print(f"New contact form submission: {data}")
    
    return jsonify({
        'status': 'success',
        'message': 'Message received! I will get back to you soon.'
    })

if __name__ == '__main__':
    app.run(debug=True)