export namespace LivestreamAPIResources {
  export const SuccessAPIResponse: string = `{
    "rawVideoCode": "abc123",
    "livestreamUrl": "https://youtu.be/abc123",
    "embedUrl": "https://youtube.com/embed/abc123",
    "nocookieUrl": "https://youtube-nocookie.com/embed/abc123"
}`;

  export const FailedAPIResponse: string = `{
    "error": "API error",
    "status": 500,
    "statusText": "API is down for maintenance",
    "details": "Lorem ipsum"
}`;

  export const JavaScriptCode: string = `
fetch('https://swarmfm.ktrain5369.me/api/livestream')
    .then(response => response.json())
    .then(data => console.log(data));
`;

  export const PythonCode: string = `
import requests

headers = {
    "Content-Type": "application/json"
}

def getYouTubeStreamCode(key: str) -> str:
    try:
        response = requests.get("https://swarmfm.ktrain5369.me/api/livestream", headers=headers)
        json_object = response.json()
        return json_object[key]
    except requests.exceptions.RequestException as e:
        return f"An error occurred: {e}"
    except KeyError:
        return f"{key} not found in response JSON."

print(getYouTubeStreamCode("livestreamUrl"))
`;

  export const cURLCommand: string = `
curl -X GET "https://swarmfm.ktrain5369.me/api/livestream" \\
     -H "Content-Type: application/json"
`;

  export const PowerShellScript: string = `
$headers = @{
    "Content-Type" = "application/json"
}

$response = Invoke-RestMethod -Uri "https://swarmfm.ktrain5369.me/api/livestream" -Headers $headers -Method Get
Write-Output $response.rawVideoCode
`;

  export const TypeScriptInterface: string = `
interface SuccessfulLivestreamResponse {
    rawVideoCode: string;
    livestreamUrl: string;
    embedUrl: string;
    nocookieUrl: string;
}

interface FailedLivestreamResponse {
    error: string;
    status?: number;
    statusText?: string;
    details?: string;
}
`;
}
