
import os
import argparse
from dotenv import load_dotenv

# Try to import the new google-genai SDK
try:
    from google import genai
    from google.genai import types
except ImportError:
    print("Error: The 'google-genai' library is not installed.")
    print("Please install it using: pip install -U google-genai")
    exit(1)

def setup_client():
    load_dotenv()
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        print("Error: GOOGLE_API_KEY environment variable not found.")
        print("Please check your .env file.")
        exit(1)
    
    # Initialize the client for Gemini 3 API
    client = genai.Client(api_key=api_key)
    return client

def calculate_building_materials(client):
    """
    Demonstrates Thinking Mode for complex calculation.
    """
    print("\n--- Thinking Mode: Building Material Quantities ---")
    prompt = "Calculate the total steel required for a 145 sqm slab with 1% reinforcement."
    
    print(f"Prompt: {prompt}\n")
    print("Running with thinking_level='medium'...\n")

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-preview",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(
                    thinking_level="medium" # Options: low, medium, high
                )
            )
        )
        
        if hasattr(response, 'thought_summary'):
             print(f"Thought Process:\n{response.thought_summary}\n")
        
        print(f"Final Answer:\n{response.text}")

    except Exception as e:
        print(f"An error occurred: {e}")

def bakery_menu_planning(client):
    """
    Demonstrates Live API concept (simulated via text for now as CLI) 
    or just another Thinking Mode example for bakery specific logic.
    """
    print("\n--- Thinking Mode: Bakery Quantity Planning ---")
    prompt = "I need to bake 50kg of Black Forest Cake for a wedding. Calculate the exact quantity of flour, eggs, cherries, cream, and chocolate shavings required based on a standard professional recipe. Account for 5% wastage."
    
    print(f"Prompt: {prompt}\n")
    print("Running with thinking_level='high'...\n")

    try:
        response = client.models.generate_content(
            model="gemini-3-pro-preview",
            contents=prompt,
            config=types.GenerateContentConfig(
                thinking_config=types.ThinkingConfig(
                    thinking_level="high"
                )
            )
        )
        
        if hasattr(response, 'thought_summary'):
             print(f"Thought Process:\n{response.thought_summary}\n")
        
        print(f"Final Answer:\n{response.text}")

    except Exception as e:
        print(f"An error occurred: {e}")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Gemini API Skills Demo")
    parser.add_argument("--mode", type=str, choices=["construction", "bakery"], default="construction", help="Select the demo mode")
    
    args = parser.parse_args()
    
    client = setup_client()
    
    if args.mode == "construction":
        calculate_building_materials(client)
    elif args.mode == "bakery":
        bakery_menu_planning(client)
