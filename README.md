# 🩺 HealthBridge

A unified, AI-powered platform enhancing communication, safety, and early detection in healthcare—built with empathy, precision, and purpose.

---

## 🌟 Overview

**HealthBridge** empowers doctors and patients with intelligent tools that simplify clinical communication, improve medication safety, and assist with early diagnosis—especially designed for diverse, multilingual communities in India.

---

## 🚀 Features

### 1. 📝 AI Medical Scribe  
Generates **real-time clinical notes** from doctor-patient conversations.

> ✅ Structured SOAP notes  
> ✅ Real-time or post-consultation mode  
> ✅ Designed with privacy in mind

---

### 2. 💊 Medication Safety Checker  
Checks for **potential drug interactions** using patient history and verified databases.

> ✅ Personalized alerts  
> ✅ Indian pharmacopeia support  
> ✅ EHR-ready integration

---

### 3. 🧠 Health Literacy Translator  
Rewrites complex medical terms into **simple, reassuring language** for patients.

> ✅ Improves patient comprehension  
> ✅ Friendly tone for low-literacy audiences  
> ✅ Auto-explains diagnoses and instructions

---

### 4. 🌍 Universal Language Bridge  
Delivers **clinical-grade translations** across 15+ Indian languages to eliminate communication gaps.

> ✅ Text and voice translation  
> ✅ Doctor-patient dialogue support  
> ✅ Supports regional dialects

---

### 5. 🎗 Breast Cancer Detection (India-focused)  
Uses AI to assist in early **breast cancer detection** with a focus on Indian-specific data and risk factors.

> ✅ Trained on Indian imaging datasets  
> ✅ Image upload and analysis  
> ✅ Explains findings visually and verbally

---

## ⚙️ Tech Stack

- Next.js
- Tailwind CSS
- Axios for API communication
- Express.js
- Python microservices (for AI processing)
- Google Gemini API, HuggingFace, LangChain
- Qdrant (vector search)
- OpenCV, TensorFlow (for image models)

---

## Setup Instructions

### Frontend:
-cd frontend
#### Install Dependencies
-npm install
#### Run Server
-npm run dev

### Backend:
-cd backend
#### Create Virtual Environment
-python -m venv myenv
#### Activate virtual environment
-venv/Scripts/activate(depends on OS)
#### Install Dependencies
-pip install -r requirements.txt
#### Run Server
-uvicorn app.main:app --reload

### ML Models:
-cd models
#### Create Virtual Environment
-python -m venv venv
#### Activate virtual environment
-venv/Scripts/activate(depends on OS)
#### Install Dependencies
-pip install -r requirements.txt
#### Add your API keys to .env file
- GOOGLE_API_KEY = "YOUR_GEMINI_API_KEY"
- LANGCHAIN_API_KEY = "YOUR_LANGCHAIN_API_KEY"
- LANGCHAIN_PROJECT = "langchain_project"
- LANGCHAIN_TRACING_V2 = "true"
- GLADIA_API_KEY = "YOUR_GLADIA_API_KEY"
- GLADIA_URL = "https://api.gladia.io/audio/text/audio-transcription/"
#### Run Server
-python app.py