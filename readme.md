# FAQ Management API (Node.js + Express + MongoDB)

## 📌 Overview
This is a *FAQ Management API* built using *Node.js, Express, and MongoDB*. It allows users to:

- Add FAQs with automatic translation to English before saving.
- Retrieve FAQs in different languages.
- Efficiently manage translations using caching and API integration.

---

## 🛠 Tech Stack
- *Backend*: Node.js, Express.js
- *Database*: MongoDB
- *Translation API*: Google Translate API
- *Caching*: Redis

---

## 🐂 Project Structure

📆 faq-management-api
├── 📆 controllers/   # Business function (fetchController, postController.)
├── 📆 models/        # Mongoose Schema (FAQ model)
├── 📆 routes/        # Express Routes (API Endpoints)
├── 📆 utils/         # Utility functions (Translation, etc.)
├── server.js        # Main entry point
├── package.json     # Dependencies & Scripts
├── README.md        # Documentation


---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository
bash
git clone https://github.com/your-repo/faq-management-api.git
cd faq-management-api


### 2️⃣ Install Dependencies
bash
npm install


### 3️⃣ Set Up Environment Variables
Create a .env file in the root directory and configure the following:
env
PORT=8000
MONGO_URI=your_mongodb_connection_string
REDIS_HOST=your_redis_host
REDIS_PORT=your_redis_port
PASSWORD=redis_password


### 4️⃣ Start the Server
bash
npm start


### 5️⃣ Run in Development Mode (with Nodemon)
bash
npm run dev


---

## 🛠 API Endpoints

### ✅ Create a New FAQ (Auto-Translate to English)
*Endpoint:* POST /api/faqs

*Request Body:*
json
{
  "question": "¿Qué es Python?",
  "answer": "Python es un lenguaje de programación de alto nivel utilizado para desarrollo web, análisis de datos y más."
}


*Response:*
json
{
    "question": "What is Python?",
    "answer": "Python is a high-level programming language used for web development, data analysis, and more.",
    "translations": {
        "fr": {
            "question": "Qu'est-ce que Python?",
            "answer": "Python est un langage de programmation de haut niveau utilisé pour le développement web, l'analyse de données et plus encore."
        },
        "de": {
            "question": "Was ist Python?",
            "answer": "Python ist eine Hochsprache, die für Webentwicklung, Datenanalyse und mehr verwendet wird."
        }
    },
    "_id": "679e448bdc8810088c8e91cf",
    "__v": 0
}


---

### ✅ Retrieve All FAQs (Default: English)
*Endpoint:* GET /api/faqs

*Response:*
json
[
    {
        "question": "What is HTML?",
        "answer": "HTML stands for HyperText Markup Language and is used to create webpages."
    },
    {
        "question": "What is the capital of France?",
        "answer": "Paris"
    },
    {
        "question": "How many continents are there?",
        "answer": "7"
    },
    {
        "question": "What is an API?",
        "answer": "An API is an Application Programming Interface that allows different software applications to communicate."
    }
]


---

### ✅ Retrieve FAQs in a Specific Language
**Endpoint:** GET /api/faqs?lang=fr

**Response:** (Translated to French)
json
[
    {
        "question": "Qu'est-ce que HTML?",
        "answer": "HTML signifie HyperText Markup Language et est utilisé pour créer des pages Web."
    },
    {
        "question": "Quelle est la capitale de la France?",
        "answer": "Paris"
    },
    {
        "question": "Combien y a-t-il de continents?",
        "answer": "7"
    },
    {
        "question": "Qu'est-ce qu'une API?",
        "answer": "Une API est une interface de programmation qui permet à différentes applications logicielles de communiquer."
    }
]

---
### ✅ Retrieve Specific FAQ in a Specific Language
*Endpoint:* GET /api/faqs?lang=de&id=<faqid>

*Response:* (Specific FAQ translated to German)
json
{
    "question": "Was ist die Hauptstadt von Deutschland?",
    "answer": "Berlin"
}

---

## 🧪 Running Tests
To run unit tests:
bash
npm test


---

## 🐳 Docker Support
To run using Docker:
1. Build the Docker image:
bash
docker build -t faq-api .

2. Run the container:
bash
docker run -p 8000:8000 faq-api