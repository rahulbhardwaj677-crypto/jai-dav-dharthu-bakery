
import os
import json
from flask import Flask, request, jsonify
from flask_cors import CORS
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

app = Flask(__name__)
CORS(app)

# Initialize Gemini Client
api_key = os.getenv("GOOGLE_API_KEY")
client = None

if api_key:
    client = genai.Client(api_key=api_key)

@app.route('/api/calculate', methods=['POST'])
def calculate():
    if not client:
        return jsonify({"error": "Gemini API key not configured. Please add it to your .env file."}), 500
    
    data = request.json
    mode = data.get('mode', 'construction')
    prompt = ""
    thinking_level = "medium"

    if mode == "construction":
        prompt = "Calculate the total steel required for a 145 sqm slab with 1% reinforcement."
        thinking_level = "medium"
    elif mode == "bakery":
        prompt = "Plan a wedding order for 50kg Black Forest Cake. List ingredients and quantities with 5% wastage buffer."
        thinking_level = "high"
    elif mode == "inventory":
        # Load local inventory
        inventory_context = "Unknown stock levels."
        try:
            with open('data/inventory.json', 'r') as f:
                inv_data = json.load(f)
                inventory_context = json.dumps(inv_data, indent=2)
        except Exception as e:
            print(f"Error reading inventory: {e}")

        prompt = f"""
        ACTUAL CURRENT INVENTORY:
        {inventory_context}

        TASK:
        Based on these ACTUAL stock levels and a high-demand weekend (200 cakes/day), 
        identify which items are CRITICAL (below safety levels). 
        Calculate precisely how much more of each ingredient we need to buy to survive the weekend 
        with a 15% safety buffer.
        """
        thinking_level = "high"
    elif mode == "production":
        prompt = "Create a 3nd-degree tiered cake production schedule. Start from sponge baking, cooling, soaking, layering, crumb coating, and final decoration. Ensure optimal cooling times for structural stability."
        thinking_level = "medium"
    elif mode == "business_insights":
        # Load analytics log
        analytics_context = "No visitor data yet."
        try:
            with open('data/analytics_log.json', 'r') as f:
                logs = json.load(f)
                analytics_context = f"Total Events: {len(logs)}\nRecent activity: " + json.dumps(logs[-10:], indent=2)
        except: pass
        
        # Load contact messages
        contact_context = "No messages yet."
        try:
            with open('data/contact_messages.json', 'r') as f:
                msgs = json.load(f)
                contact_context = f"Total Conversations: {len(msgs)}\nMessages: " + json.dumps(msgs[-5:], indent=2)
        except: pass

        prompt = f"""
        ACT AS: JAI DEV DHARTHU BUSINESS CONSULTANT.
        
        DATA FEED:
        - CUSTOMER EVENTS: {analytics_context}
        - CONTACT INQUIRIES: {contact_context}
        
        TASK:
        1. Summarize customer behavior (what are they adding to cart?).
        2. Analyze conversion: Are they beginning checkout but not finishing?
        3. Prioritize contact messages (is there an urgent order inquiry?).
        4. Give 3 ACTIONABLE tips to increase revenue today.
        """
        thinking_level = "high"
    else:
        prompt = data.get('custom_prompt', "Help me plan a bakery menu.")

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-preview",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(
                    thinking_level=thinking_level
                )
            )
        )
        
        return jsonify({
            "thought": getattr(response, 'thought_summary', "Processing logic..."),
            "answer": response.text,
            "prompt": prompt
        })

from PIL import ImageGrab
import io

@app.route('/api/inventory', methods=['GET'])
def get_inventory():
    try:
        with open('data/inventory.json', 'r') as f:
            return jsonify(json.load(f))
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/inventory', methods=['POST'])
def update_inventory():
    try:
        data = request.json
        with open('data/inventory.json', 'w') as f:
            json.dump(data, f, indent=4)
        return jsonify({"message": "Inventory updated successfully"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/vision-audit', methods=['POST'])
def vision_audit():
    if not client:
        return jsonify({"error": "Gemini API key not configured."}), 500
    
    try:
        # Capture screen
        screenshot = ImageGrab.grab()
        img_byte_arr = io.BytesIO()
        screenshot.save(img_byte_arr, format='PNG')
        image_data = img_byte_arr.getvalue()

        prompt = "Analyze this screenshot of my 'Jai Dev Dharthu AI' dashboard. Identify if the UI looks premium and suggest one major visual enhancement. Focus on font usage and spacing."

        response = client.models.generate_content(
            model="gemini-3-pro-preview",
            contents=[
                prompt,
                types.Part.from_bytes(data=image_data, mime_type="image/png")
            ],
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(
                    thinking_level="medium"
                )
            )
        )
        
        return jsonify({
            "thought": getattr(response, 'thought_summary', "Analyzing visual pixels..."),
            "answer": response.text
        })
@app.route('/api/analytics', methods=['POST'])
def log_analytics():
    try:
        event_data = request.json
        # Store analytics in a list in a local file
        history_file = 'data/analytics_log.json'
        history = []
        if os.path.exists(history_file):
            with open(history_file, 'r') as f:
                history = json.load(f)
        
        history.append(event_data)
        
        # Keep only last 100 events to prevent bloat
        if len(history) > 100:
            history = history[-100:]
            
        with open(history_file, 'w') as f:
            json.dump(history, f, indent=4)
            
        return jsonify({"status": "success"})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/api/contact', methods=['POST'])
def handle_contact():
    try:
        data = request.json
        contact_file = 'data/contact_messages.json'
        messages = []
        if os.path.exists(contact_file):
            with open(contact_file, 'r') as f:
                messages = json.load(f)
        
        messages.append(data)
        
        with open(contact_file, 'w') as f:
            json.dump(messages, f, indent=4)
            
        return jsonify({"message": "Message received! We will get back to you soon."})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000, debug=True)
