import os
import requests

API_URL = 'http://127.0.0.1:5000/api/v1/evaluate-wound'
IMAGES_DIR = 'never_seen_images'

mime_types = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
}

for filename in os.listdir(IMAGES_DIR):
    ext = os.path.splitext(filename)[1].lower()
    if ext in mime_types:
        filepath = os.path.join(IMAGES_DIR, filename)
        with open(filepath, 'rb') as img_file:
            files = {'image': (filename, img_file, mime_types[ext])}
            try:
                response = requests.post(API_URL, files=files)
                print(f'Imagen: {filename}')
                print('Respuesta:', response.json())
                print('-' * 40)
            except Exception as e:
                print(f'Error enviando {filename}: {e}')
