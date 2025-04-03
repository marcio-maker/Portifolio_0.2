"""
Aplicação Flask principal do portfólio de Marcio Maker
Responsável por servir a página web e endpoints da API
"""

from flask import Flask, render_template, request, jsonify
from datetime import datetime
import pytz
from flask_cors import CORS
import os
from dotenv import load_dotenv

# Carrega variáveis de ambiente do arquivo .env
load_dotenv()

# Inicializa a aplicação Flask
app = Flask(__name__)

# Configura CORS para permitir requisições de diferentes origens
CORS(app)

# Configuração da chave secreta a partir de variáveis de ambiente
app.config['SECRET_KEY'] = os.getenv('SECRET_KEY', 'chave_secreta_padrao')

@app.route('/')
def index():
    """
    Rota principal que renderiza a página inicial
    Retorna:
        - Template index.html ou mensagem de erro se o template não for encontrado
    """
    try:
        return render_template('index.html')
    except FileNotFoundError:
        return "Index page not found. Please ensure 'index.html' exists in the templates folder."

@app.route('/translate', methods=['POST'])
def translate_text():
    """
    Endpoint para tradução de texto (mockado para demonstração)
    Método: POST
    Parâmetros esperados no JSON:
        - text: texto a ser traduzido
        - lang: idioma de destino (pt, es, en)
    Retorna:
        - JSON com a tradução ou texto original se não houver tradução
    """
    data = request.get_json()
    text = data.get('text', '')
    target_lang = data.get('lang', 'en')
    
    # Dicionário de traduções mockadas
    translations = {
        'pt': {'hello': 'olá', 'goodbye': 'adeus'},
        'es': {'hello': 'hola', 'goodbye': 'adiós'},
        'en': {'hello': 'hello', 'goodbye': 'goodbye'}
    }
    
    # Retorna a tradução ou o texto original se não encontrar
    translated_text = translations.get(target_lang, {}).get(text.lower(), text)
    return jsonify({'translation': translated_text})

@app.route('/check_availability', methods=['POST'])
def check_availability():
    """
    Endpoint para verificar sobreposição de horários
    Método: POST
    Parâmetros esperados no JSON:
        - timezone: fuso horário do cliente
    Retorna:
        - JSON com horas de sobreposição ou mensagem de erro
    """
    data = request.get_json()
    client_tz = data.get('timezone', 'UTC')
    
    try:
        # Obtém horário atual no fuso do cliente
        client_time = datetime.now(pytz.timezone(client_tz))
        client_hour = client_time.hour
        
        # Obtém horário atual no fuso do desenvolvedor (America/Sao_Paulo)
        my_time = datetime.now(pytz.timezone('America/Sao_Paulo'))
        my_hour = my_time.hour
        
        # Horário de trabalho do desenvolvedor (9AM-5PM)
        my_work_start = 9
        my_work_end = 17
        
        # Cálculo simplificado da sobreposição
        overlap = min(my_work_end, client_hour + 1) - max(my_work_start, client_hour + 1)
        overlap = max(0, overlap)  # Garante que não seja negativo
        
        return jsonify({
            'status': 'success',
            'overlap': overlap,
            'message': f'Daily overlap: {overlap} hours'
        })
    except pytz.UnknownTimeZoneError:
        return jsonify({
            'status': 'error',
            'message': 'Unknown timezone'
        }), 400

@app.route('/weather', methods=['GET'])
def get_weather():
    """
    Endpoint mockado para dados meteorológicos
    Método: GET
    Retorna:
        - JSON com dados de clima mockados
    """
    return jsonify({
        'temp': 25,
        'city': 'Sao Paulo',
        'condition': 'Cloudy'
    })

if __name__ == '__main__':
    # Inicia o servidor Flask em modo debug
    app.run(debug=True)