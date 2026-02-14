
import asyncio
import os
import sys
from dotenv import load_dotenv

# Try to import the new google-genai SDK
try:
    from google import genai
except ImportError:
    print("Error: The 'google-genai' library is not installed.")
    exit(1)

load_dotenv()

async def interactive_live_session():
    api_key = os.getenv("GOOGLE_API_KEY")
    if not api_key:
        print("Error: GOOGLE_API_KEY not found in .env")
        return

    # Initialize client with v1alpha for Live API features
    client = genai.Client(api_key=api_key, http_options={'api_version': 'v1alpha'})
    
    model_id = "gemini-3-flash-preview" # Optimized for low-latency live interactions

    print(f"\n--- Starting Gemini Live API Session ({model_id}) ---")
    print("Connecting to live websocket...")

    try:
        async with client.aio.live.connect(model=model_id) as session:
            print("Connected! You can now send text messages (simulating voice input).")
            print("Type 'exit' or 'quit' to end.\n")

            # This demo uses text input to simulate the 'Voice' trigger for now
            # as system-level audio streaming in a remote environment can be unstable.
            
            while True:
                user_input = await asyncio.get_event_loop().run_in_executor(None, input, "You: ")
                
                if user_input.lower() in ['exit', 'quit']:
                    break

                await session.send(user_input, end_of_turn=True)
                
                print("Gemini: ", end="", flush=True)
                async for message in session:
                    # Message contains text or audio chunks
                    if message.text:
                        print(message.text, end="", flush=True)
                print("\n")

    except Exception as e:
        print(f"Live session error: {e}")

if __name__ == "__main__":
    if sys.platform == 'win32':
        asyncio.set_event_loop_policy(asyncio.WindowsSelectorEventLoopPolicy())
    asyncio.run(interactive_live_session())
