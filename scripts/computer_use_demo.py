
import os
import base64
import io
from PIL import Image, ImageGrab
from dotenv import load_dotenv
from google import genai
from google.genai import types

load_dotenv()

def capture_screen():
    print("Capturing full screen...")
    screenshot = ImageGrab.grab()
    
    # Save to bytes for Gemini
    img_byte_arr = io.BytesIO()
    screenshot.save(img_byte_arr, format='PNG')
    return img_byte_arr.getvalue()

def computer_use_vision_analysis():
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        print("Error: GOOGLE_API_KEY not found in .env")
        return

    client = genai.Client(api_key=api_key)
    
    # Get the vision data
    image_data = capture_screen()
    
    print("Sending screen context to Gemini for Computer Use analysis...")
    
    prompt = """
    You are observing my screen via the Computer Use tool. 
    Analyze the current visual state of the 'Jai Dev Dharthu Bakery' website or dashboard if it is visible.
    
    1. Identify any UX/UI flaws.
    2. Suggest 3 premium aesthetic improvements based on modern design trends (glassmorphism, micro-interactions).
    3. If you see code, suggest a structural optimization.
    
    Provide your response in a structured 'Agent Audit' format.
    """

    try:
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
        
        print("\n--- GEMINI COMPUTER USE AGENT AUDIT ---")
        if hasattr(response, 'thought_summary'):
            print(f"\nREASONING:\n{response.thought_summary}")
        
        print(f"\nAUDIT FINDINGS:\n{response.text}")

    except Exception as e:
        print(f"Vision analysis failed: {e}")

if __name__ == "__main__":
    # Small delay to let the user switch focus to the dashboard/website if needed
    import time
    print("Agent will capture your screen in 3 seconds. Please bring the dashboard/website to focus...")
    time.sleep(3)
    computer_use_vision_analysis()
