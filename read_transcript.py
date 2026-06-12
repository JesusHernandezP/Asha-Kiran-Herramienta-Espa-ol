import json
import sys

sys.stdout.reconfigure(encoding='utf-8')

log_path = r"C:\Users\santi\.gemini\antigravity\brain\45ab49c1-7b7a-425a-b896-6846aaa034c8\.system_generated\logs\transcript.jsonl"

print("User messages found in transcript:")
with open(log_path, 'r', encoding='utf-8') as f:
    for line in f:
        try:
            step = json.loads(line)
            source = step.get("source")
            step_type = step.get("type")
            content = step.get("content")
            
            if source == "USER_EXPLICIT" or step_type == "USER_INPUT":
                print(f"\n--- USER INPUT ({step.get('step_index')}) ---")
                print(content)
        except Exception as e:
            pass
