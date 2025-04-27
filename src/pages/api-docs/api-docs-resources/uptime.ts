export namespace UptimeAPIResources {
  export const SuccessAPIResponse: string = `{
    // If the stream is online
    "live": true,
    "videoId": "abc123"
}

{
    // If the stream is offline
    "live": false,
    "videoId": null
}`;

  export const FailedAPIResponse: string = `{
    // WebSocket upgrade fail
    "error": "Expected WebSocket upgrade on /ws"
}
    
{
    // Worker is offline
    "error": "If you're seeing this, the uptime worker isn't quite working right now."
}`;

  export const PythonCode: string = `
import asyncio
import json
import websockets

async def watch():
    uri = "wss://swarmfm.ktrain5369.me/api/uptime"
    async with websockets.connect(uri) as ws:
        print("Connected, requesting status…")
        await ws.send("")  # trigger a state message

        async for msg in ws:
            data = json.loads(msg)
            if data["live"]:
                print("🔴 LIVE! https://youtu.be/" + data["videoId"])
            else:
                print("⚪️ offline")
            # keep listening…

asyncio.run(watch())
`;

  export const JavaScriptCode: string = `
import WebSocket from 'ws';

const URL = 'wss://swarmfm.ktrain5369.me/api/uptime';

async function main() {
  const socket = new WebSocket(URL);

  socket.on('open', () => {
    console.log('▶ Connected to WebSocket');
    // send an empty message (or anything) to trigger the current-state reply
    socket.send('');
  });

  socket.on('message', (data) => {
    try {
      const { live, videoId } = JSON.parse(data.toString());
      if (live) {
        console.log(\`🔴 LIVE! Video ID: \${videoId}\`);
      } else {
        console.log('⚪️ Offline (no live video)');
      }
    } catch (e) {
      console.error('⚠️ Failed to parse message', e);
    }
  });

  socket.on('error', (err) => {
    console.error('❌ WebSocket error:', err);
  });

  socket.on('close', (code, reason) => {
    console.log(\`⏹ Connection closed (code=\${code}, reason=\${reason})\`);
  });
}

main();

`;

  export const TypeScriptInterface: string = `
interface successfulWSConnection {
    live: boolean;
    videoId: string | null;
}

interface failedWSConnection {
    error: string;
}
`;
}

export namespace BackupStatusAPIResources {
  export const SuccessAPIResponse: string = `{
    // If the stream is online
    "live": true,
    "videoId": "abc123"
}

{
    // If the stream is offline
    "live": false,
    "videoId": null
}`;

  export const FailedAPIResponse: string = `{
    // WebSocket upgrade fail
    "error": "Expected WebSocket upgrade on /ws"
}
    
{
    // Worker is offline
    "error": "If you're seeing this, the uptime worker isn't quite working right now."
}`;

  export const PythonCode: string = `
import requests

def get_status():
    try:
        resp = requests.get("https://swarmfm.ktrain5369.me/api/uptime/status")
        resp.raise_for_status()
        data = resp.json()  # {'live': True/False, 'videoId': 'xyz' or None}
        if data["live"]:
            print(f"🔴 LIVE! Video ID: {data['videoId']}")
        else:
            print("⚪️ Currently offline")
    except requests.RequestException as e:
        print("Error fetching status:", e)

if __name__ == "__main__":
    get_status()
`;

  export const JavaScriptCode: string = `
import axios from 'axios';

async function getStatus() {
  try {
    const response = await axios.get('https://swamrfm.ktrain5369.me/api/uptime/status');
    // { live: boolean, videoId: string | null }
    const { live, videoId } = response.data;
    if (live) {
      console.log(\`🔴 LIVE! Video ID: \${videoId}\`);
    } else {
      console.log('⚪️ Currently offline');
    }
  } catch (err) {
    console.error('Error fetching status:', err);
  }
}

getStatus();

`;

  export const TypeScriptInterface: string = `
interface SuccessfulHTTPResponse {
    live: boolean;
    videoId: string | null;
}

interface FailedWSConnection {
    error: string;
}
`;
}
