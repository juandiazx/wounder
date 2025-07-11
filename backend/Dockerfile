# Use the official TensorFlow image as a base image
FROM tensorflow/tensorflow:2.18.0

# Set working directory in the container
WORKDIR /app

# Install system dependencies for Flask and OpenCV
RUN apt-get update && apt-get install -y \
    python3-pip \
    libgl1-mesa-glx \
    libglib2.0-0 \
    libsm6 \
    libxext6 \
    libxrender1 \
    python3-venv  # Install python3-venv for creating virtual environments

# Upgrade pip to the latest version
RUN python3 -m pip install --upgrade pip

# Create a virtual environment inside the container
RUN python3 -m venv /venv

# Copy requirements.txt and install Python packages
COPY requirements.txt .
RUN /venv/bin/pip install --no-cache-dir -r requirements.txt

# Copy the application code into the container
COPY . /app

# Set environment variables to use the virtual environment
ENV PATH="/venv/bin:$PATH"

# Expose the API port (5000 by default for Flask)
EXPOSE 8080

# Set the command to run the Flask application using the virtual environment
CMD ["python", "app.py"]

