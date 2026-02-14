---
name: Gemini Agentic Skills
description: Advanced reasoning, Thinking Mode, and Live API capabilities using the Google Gen AI SDK (2026 Standard).
---

# Gemini Agentic Skills

This skill enables the use of Gemini 3 series models for complex reasoning, real-time multimodal interaction, and agentic workflows.

## Core Capabilities

### 1. Thinking Mode (Deep Think)
Allows the model to perform internal reasoning before generating a response.
- **Thinking Levels**: `low`, `medium`, `high`.
- **Thought Signatures**: Must be maintained in multi-turn conversations.

### 2. Gemini Live API
Enables low-latency, bidirectional voice and video interactions via WebSockets.
- **VAD**: Voice Activity Detection for natural turn-taking.
- **Multimodality**: Processing camera feeds and audio natively.

### 3. Agentic Tools
- **Computer Use**: Interacting with UI (screens, mouse, keyboard).
- **URL Context**: Direct browsing and extraction from URLs.
- **Google Search Grounding**: Usage-based live web data integration.

## Usage Instructions

### Python Implementation
```python
from google import genai
from google.genai import types

client = genai.Client(api_key="YOUR_API_KEY")

response = client.models.generate_content(
    model="gemini-3-pro-preview",
    contents="Your complex query here",
    config=types.GenerateContentConfig(
        thinking_config=types.ThinkingConfig(
            thinking_level="high"
        )
    )
)
print(response.thought_summary) # The reasoning
print(response.text)            # The answer
```

### Environment Setup
1. Install SDK: `pip install -U google-genai python-dotenv`
2. Configure `.env`: `GOOGLE_API_KEY=your_key_here`

## Best Practices
- Use `thinking_level="high"` for math, coding architecture, and structural estimations.
- Use `thinking_level="medium"` for general planning and creative reasoning.
- Always check `thought_summary` to understand the model's logic before the final output.
