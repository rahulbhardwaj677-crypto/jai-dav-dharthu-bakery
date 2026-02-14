---
description: How to use and maintain the Gemini Agentic Skill
---

# Gemini API Skill Workflow

## Prerequisites
- Python 3.9+
- Gemini API Key from Google AI Studio

## 1. Installation
// turbo
Run the following command to ensure all dependencies are installed:
```bash
pip install -U google-genai python-dotenv flask flask-cors
```

## 2. Configuration
1. Open `scripts/.env`.
2. Add your key: `GOOGLE_API_KEY=YOUR_KEY_HERE`.

## 3. Running the AI Dashboard
// turbo
1. Start the backend server:
```bash
python scripts/server.py
```
2. Open `ai-dashboard.html` in your browser.

## 4. Using Thinking Mode
In the dashboard, select a mode (Bakery/Construction) or use the Custom Prompt field.
- **Bakery Mode**: High-level reasoning for large-scale production.
- **Construction Mode**: Structural calculations.
- **Custom Mode**: Any complex logic-based query.

## 5. Troubleshooting
If the dashboard shows a connection error, verify that `server.py` is running on port 5000.
