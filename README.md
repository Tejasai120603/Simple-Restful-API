# 🚀 Simple RESTful API

A lightweight RESTful API built using modern backend development principles. This project demonstrates CRUD (Create, Read, Update, Delete) operations, REST architecture, API routing, request handling, and JSON-based data exchange.

## 📌 Overview

This project was developed to understand and implement the core concepts of RESTful web services. It provides endpoints for managing resources through standard HTTP methods while maintaining a clean and scalable project structure.

## ✨ Features

- RESTful API architecture
- CRUD Operations
- JSON request and response handling
- HTTP Status Code implementation
- Error handling and validation
- Modular code structure
- Easy to extend and maintain

## 🛠️ Tech Stack

- Backend: Python
- Framework: Flask / FastAPI *(update based on your project)*
- Database: SQLite / PostgreSQL / MySQL *(update if applicable)*
- API Testing: Postman
- Version Control: Git & GitHub

## 📂 Project Structure

```bash
Simple-Restful-API/
│
├── app.py
├── routes/
├── models/
├── database/
├── requirements.txt
├── README.md
└── ...
```

## ⚙️ Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Tejasai120603/Simple-Restful-API.git
```

### 2. Navigate to the Project Directory

```bash
cd Simple-Restful-API
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

### 4. Activate Virtual Environment

**Windows**

```bash
venv\Scripts\activate
```

**Linux/macOS**

```bash
source venv/bin/activate
```

### 5. Install Dependencies

```bash
pip install -r requirements.txt
```

### 6. Run the Application

```bash
python app.py
```

The server will start on:

```bash
http://localhost:5000
```

## 📡 API Endpoints

| Method | Endpoint | Description |
|----------|----------|-------------|
| GET | /api/resources | Retrieve all records |
| GET | /api/resources/{id} | Retrieve a specific record |
| POST | /api/resources | Create a new record |
| PUT | /api/resources/{id} | Update an existing record |
| DELETE | /api/resources/{id} | Delete a record |

## 📥 Sample Request

### Create Resource

```http
POST /api/resources
Content-Type: application/json
```

```json
{
    "name": "Sample Item",
    "description": "This is a sample resource"
}
```

## 📤 Sample Response

```json
{
    "message": "Resource created successfully",
    "id": 1
}
```

## 🧪 Testing the API

You can test the endpoints using:

- Postman
- Thunder Client
- cURL
- Swagger UI (if implemented)

Example:

```bash
curl -X GET http://localhost:5000/api/resources
```

## 🎯 Learning Outcomes

Through this project, I gained practical experience in:

- REST API Development
- HTTP Methods and Status Codes
- Backend Application Design
- API Testing and Debugging
- JSON Data Handling
- Version Control using Git and GitHub

## 🔮 Future Improvements

- JWT Authentication
- User Authorization
- Database Integration
- API Documentation with Swagger
- Docker Deployment
- Unit Testing
- CI/CD Integration

## 👨‍💻 Author

**Teja Sai Yallamelli**

Final Year B.Tech Student | Electronics and Computer Engineering

- GitHub: https://github.com/Tejasai120603
- LinkedIn: (https://www.linkedin.com/in/teja-sai-yallamelli-a5685b320/)


## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub. It helps others discover the project and motivates future improvements.
