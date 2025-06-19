from flask import Flask, request, jsonify
from flask_cors import CORS
from keras.models import load_model
from keras.applications.mobilenet_v3 import preprocess_input
import numpy as np
import io
from PIL import Image

app = Flask(__name__)
CORS(app)

# Carga del modelo entrenado
model = load_model('my_image_classification_model.keras')

# Preprocesado
IMG_SIZE = (224, 224)

@app.route('/api/v1/evaluate-wound', methods=['POST'])
def evaluate_wound():
    """
    Endpoint para evaluar una imagen de herida usando un modelo de TensorFlow.
    Espera un archivo en el campo 'image' (formato JPEG o PNG recomendado).
    Devuelve si la herida está infectada y el nivel de confianza.
    """
    if 'image' not in request.files:
        return jsonify({'error': 'No se encontró el archivo de imagen en la petición.'}), 400

    file = request.files['image']
    if file.filename == '':
        return jsonify({'error': 'No se seleccionó ningún archivo.'}), 400

    # Validar tipo de archivo
    allowed_types = {'image/jpeg', 'image/png'}
    if file.mimetype not in allowed_types:
        return jsonify({'error': f'Tipo de archivo no permitido: {file.mimetype}. Solo se permiten JPEG y PNG.'}), 400

    try:
        img_bytes = file.read()
        if len(img_bytes) > 5 * 1024 * 1024:  # 5MB límite
            return jsonify({'error': 'La imagen es demasiado grande (máx 5MB).'}), 400
        
        # Save the received image for inspection
        original_image = Image.open(io.BytesIO(img_bytes)).convert('RGB')
        
        # Process the image for AI analysis
        image = original_image.resize(IMG_SIZE)
        img_array = np.asarray(image, dtype=np.float32)
        img_array = np.expand_dims(img_array, axis=0)
        img_array = preprocess_input(img_array)
        preds = model.predict(img_array)
        
        # Si la salida es softmax (2 clases), usar el valor máximo y su índice
        if preds.shape[-1] == 2:
            pred_class = int(np.argmax(preds[0]))
            confidence = float(np.max(preds[0]))
            infected = pred_class == 0  # Asumiendo clase 0 = infected, clase 1 = normal
        else:
            # Salida sigmoide (1 sola neurona)
            prob = float(preds[0][0])
            infected = prob > 0.5
            confidence = prob if infected else 1 - prob
        return jsonify({
            'filename': file.filename,
            'infected': bool(infected),
            'confidence': confidence
        }), 200
    except Exception as e:
        return jsonify({'error': f'Error procesando la imagen: {str(e)}'}), 500

if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
