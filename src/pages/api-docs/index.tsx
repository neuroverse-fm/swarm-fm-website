import { useState } from "preact/hooks";
import { Layout } from "../../layouts/Layout";
import Block from "../../components/Blocks";
import CodeBlock from "../../components/CodeBlock";
import {
  BackupStatusAPIResources,
  LivestreamAPIResources,
  UptimeAPIResources,
} from "./api-docs-resources/";
import { JSX } from "preact/jsx-runtime";
import StyledLink from "../../components/StyledLink";

interface APIRouteDocsProps {
  title: string;
  type: "HTTP" | "WebSocket";
  route: string;
  explainer: JSX.Element;
  json: {
    successful: string;
    failed?: string;
  };
  code: {
    curl?: string;
    powershell?: string;
    python?: string;
    javascript?: string;
    typescript?: string;
  };
}

const APIRouteDocs: APIRouteDocsProps[] = [
  {
    title: "Get the latest livestream link",
    type: "HTTP",
    route: "/livestream",
    explainer: (
      <div class="text-md text-center my-5">
        <p>
          This HTTP API acts as a relay to the YouTube Data API v3. It provides:
        </p>
        <ul>
          <li>- The raw video code</li>
          <li>- The livestream link</li>
          <li>- The embed link</li>
          <li>- The nocookie embed link</li>
        </ul>
      </div>
    ),
    json: {
      successful: LivestreamAPIResources.SuccessAPIResponse,
      failed: LivestreamAPIResources.FailedAPIResponse,
    },
    code: {
      curl: LivestreamAPIResources.cURLCommand,
      powershell: LivestreamAPIResources.PowerShellCode,
      python: LivestreamAPIResources.PythonCode,
      javascript: LivestreamAPIResources.JavaScriptCode,
      typescript: LivestreamAPIResources.TypeScriptInterface,
    },
  },
  {
    title: "WebSocket connect to get uptime status updates",
    type: "WebSocket",
    route: "/uptime",
    explainer: (
      <div class="text-md text-center my-5">
        <p>
          This WebSocket API allows you to listen for stream uptime updates.
        </p>
        <p>
          Sending anything through the connection will return back with the
          current status of the stream.
        </p>
        <p>
          If the Upgrade Protocol handshake fails and you see a very short JSON
          file, the Cloudflare Worker powering this is probably down.
        </p>
      </div>
    ),
    json: {
      successful: UptimeAPIResources.SuccessAPIResponse,
      failed: UptimeAPIResources.FailedAPIResponse,
    },
    code: {
      python: UptimeAPIResources.PythonCode,
      javascript: UptimeAPIResources.JavaScriptCode,
      typescript: UptimeAPIResources.TypeScriptInterface,
    },
  },
  {
    title: "Backup status API",
    type: "HTTP",
    route: "/uptime/status",
    explainer: (
      <div class="text-md text-center my-5">
        <p>
          This HTTP API essentially acts as a one-time version of the WebSocket
          API.
        </p>
        <p>
          This API will return the same JSON structure as a successful WebSocket
          upgrade.
        </p>
      </div>
    ),
    json: {
      successful: BackupStatusAPIResources.SuccessAPIResponse,
      failed: BackupStatusAPIResources.FailedAPIResponse,
    },
    code: {
      python: BackupStatusAPIResources.PythonCode,
      javascript: BackupStatusAPIResources.JavaScriptCode,
      typescript: BackupStatusAPIResources.TypeScriptInterface,
    },
  },
];

export function APIDocs() {
  const [view, setView] = useState<"explainer" | "json" | "code">("explainer");

  return (
    <Layout title="Secret API docs">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">
          Unofficial API's official docs
        </h1>
        <p class="mt-4 text-xl text-center">
          This site's unofficial API simply acts as a non-API-key, more
          convenient relay to the YouTube Data API v3.
        </p>
        <p class="text-bold mt-4 mb-5 text-xl text-center">
          Note: All API routes live under <code>/api/{"{route}"}</code>
        </p>
        <div class="flex justify-center space-x-4 mb-5">
          <button
            class={`px-4 py-2 rounded ${
              view === "explainer"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setView("explainer")}
          >
            Explainers
          </button>
          <button
            class={`px-4 py-2 rounded ${
              view === "json"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setView("json")}
          >
            JSON Responses
          </button>
          <button
            class={`px-4 py-2 rounded ${
              view === "code"
                ? "bg-blue-500 text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setView("code")}
          >
            Code Samples
          </button>
        </div>
        {APIRouteDocs.map((route: APIRouteDocsProps) => (
          <Block title={route.title} key={`${view}-${route.route}`}>
            Route: <code>{route.route}</code>
            <hr class="my-5 border-gray-300" />
            {(() => {
              switch (view) {
                case "explainer":
                  return route.explainer;
                case "json":
                  return (
                    <>
                      <div class="text-md text-center my-5">
                        {route.type === "WebSocket"
                          ? `On successful upgrades, you can expect to see these packets like these`
                          : `A successful call's JSON response looks something like this`}
                        :
                        <CodeBlock
                          key={`${view}-${route.route}-json-success`}
                          language="json"
                          code={route.json.successful}
                        />
                      </div>
                      {route.json.failed ? (
                        <div class="text-md text-center my-5">
                          A failed call's JSON response looks something like
                          this:
                          <CodeBlock
                            key={`${view}-${route.route}-json-failed`}
                            language="json"
                            code={route.json.failed}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
                case "code":
                  return (
                    <>
                      {route.code.curl ? (
                        <div class="text-md text-center my-5">
                          <p>Bash (via cURL)</p>
                          <CodeBlock
                            key={`${view}-${route.route}-curl`}
                            language="bash"
                            code={route.code.curl}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {route.code.powershell ? (
                        <div class="text-md text-center my-5">
                          <p>PowerShell</p>
                          <CodeBlock
                            key={`${view}-${route.route}-powershell`}
                            language="powershell"
                            code={route.code.powershell}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {route.code.python ? (
                        <div class="text-md text-center my-5">
                          <p>Python</p>
                          <CodeBlock
                            key={`${view}-${route.route}-python`}
                            language="python"
                            code={route.code.python}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {route.code.javascript ? (
                        <div class="text-md text-center my-5">
                          <p>JavaScript</p>
                          <CodeBlock
                            key={`${view}-${route.route}-javascript`}
                            language="javascript"
                            code={route.code.javascript}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                      {route.code.typescript ? (
                        <div class="text-md text-center my-5">
                          <p>TypeScript types</p>
                          <CodeBlock
                            key={`${view}-${route.route}-typescript`}
                            language="typescript"
                            code={route.code.typescript}
                          />
                        </div>
                      ) : (
                        ""
                      )}
                    </>
                  );
              }
            })()}
          </Block>
        ))}
        <p class="text-center my-5 italic">
          The APIs are open-source. You can see the website API code{" "}
          <StyledLink href="https://github.com/neuroverse-fm/swarm-fm-website/tree/main/functions/api">
            here
          </StyledLink>{" "}
          and the Worker code{" "}
          <StyledLink href="https://github.com/neuroverse-fm/swarm-fm-uptime-worker">
            here
          </StyledLink>
          .
        </p>
      </div>
    </Layout>
  );
}

export default APIDocs;
