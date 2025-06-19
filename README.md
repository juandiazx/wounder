# Wounder

Wounder is a web application that uses AI to analyze images of wounds and determine if they are infected. It provides a quick and accessible way for users to get an initial assessment of their wound and find nearby health centers if necessary.

## Running the Project

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/)
- [Node.js](https://nodejs.org/en/download/)
- [pnpm](https://pnpm.io/installation)

### Backend

The backend is a Python Flask server that provides the AI analysis. It is run using Docker.

1.  **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2.  **Build the Docker image:**

    ```bash
    docker build -t wounder-backend .
    ```

3.  **Run the Docker container:**
    ```bash
    docker run -p 8080:8080 wounder-backend
    ```

The backend will be available at `http://localhost:8080`.

### Frontend

The frontend is a Next.js application.

1.  **Navigate to the frontend directory:**

    ```bash
    cd frontend
    ```

2.  **Install dependencies:**

    ```bash
    pnpm install
    ```

3.  **Run the development server:**
    ```bash
    pnpm dev
    ```

The frontend will be available at `http://localhost:3000`.
