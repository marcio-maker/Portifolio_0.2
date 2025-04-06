from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import pytz
from datetime import datetime
import os
import re

app = Flask(__name__, static_folder='static', template_folder='templates')
CORS(app)  # Habilitar CORS para todas as rotas

# Expressão regular para validação de email
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/api/timezone')
def get_timezone():
    timezone = request.args.get('tz', 'UTC')
    
    try:
        visitor_tz = pytz.timezone(timezone)
        brt_tz = pytz.timezone('America/Sao_Paulo')
        
        return jsonify({
            'visitor_time': datetime.now(visitor_tz).strftime('%H:%M'),
            'marcio_time': datetime.now(brt_tz).strftime('%H:%M'),
            'timezone': timezone
        })
    except pytz.UnknownTimeZoneError:
        return jsonify({
            'error': 'Invalid timezone',
            'visitor_time': datetime.utcnow().strftime('%H:%M'),
            'marcio_time': datetime.now(pytz.timezone('America/Sao_Paulo')).strftime('%H:%M'),
            'timezone': 'UTC'
        }), 400

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    data = request.json
    
    # Validação dos campos
    if not data.get('name') or len(data.get('name', '').strip()) < 2:
        return jsonify({'status': 'error', 'message': 'Nome deve ter pelo menos 2 caracteres'}), 400
        
    if not data.get('email') or not EMAIL_REGEX.match(data['email']):
        return jsonify({'status': 'error', 'message': 'Por favor, forneça um email válido'}), 400
        
    if not data.get('message') or len(data.get('message', '').strip()) < 10:
        return jsonify({'status': 'error', 'message': 'A mensagem deve ter pelo menos 10 caracteres'}), 400
        
    # Em produção, você poderia adicionar:
    # - Envio de email
    # - Armazenamento em banco de dados
    print(f"New contact form submission from {data['email']}")
    
    return jsonify({
        'status': 'success',
        'message': 'Message received! I will get back to you soon.'
    })

if __name__ == '__main__':
    app.run(debug=True)
