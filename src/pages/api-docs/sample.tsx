import { useState } from "preact/hooks";
import { Layout } from "../../layouts/Layout";
import Block from "../../components/Blocks";
import CodeBlock from "../../components/CodeBlock";
import { livestreamAPIResources } from "./api-docs-resources/livestream";

interface APIRouteDocsProps {
  title: string;
}

const APIRouteDocs = [
  {
    title: "Get the latest livestream link",
    route: "/livestream",
    explainer: (
      <div class="text-md text-center my-5">
        <p>This API acts as a relay to the YouTube Data API v3. It provides:</p>
        <ul>
          <li>- The raw video code</li>
          <li>- The livestream link</li>
          <li>- The embed link</li>
          <li>- The nocookie embed link</li>
        </ul>
      </div>
    ),
    json: {
      successful: livestreamAPIResources.SuccessAPIResponse,
      failed: livestreamAPIResources.FailedAPIResponse,
    },
    code: {
      curl: livestreamAPIResources.cURLCommand,
      powershell: livestreamAPIResources.PowerShellCode,
      python: livestreamAPIResources.PythonCode,
      javascript: livestreamAPIResources.JavaScriptCode,
      typescript: livestreamAPIResources.TypeScriptInterface,
    },
  },
];

export function APIDocs() {
  const [view, setView] = useState<"explainer" | "json" | "code">("explainer");

  const renderContent = () => {
    switch (view) {
      case "json":
        return (
          <>
            <div class="text-md text-center my-5">
              A successful call's JSON response looks something like this:
              <CodeBlock
                language="json"
                code={livestreamAPIResources.SuccessAPIResponse}
              />
            </div>
            <div class="text-md text-center my-5">
              A failed call's JSON response looks something like this:
              <CodeBlock
                language="json"
                code={livestreamAPIResources.FailedAPIResponse}
              />
            </div>
          </>
        );
      case "code":
        return (
          <div class="text-md text-center my-5">
            <p>
              Here you can provide code samples for using the API in different
              programming languages.
            </p>
            <CodeBlock
              language="javascript"
              code={`fetch('/api/livestream')
    .then(response => response.json())
    .then(data => console.log(data));`}
            />
          </div>
        );
      case "explainer":
        return (
          <div class="text-md text-center my-5">
            <p>
              This API acts as a relay to the YouTube Data API v3. It provides:
            </p>
            <ul>
              <li>- The raw video code</li>
              <li>- The livestream link</li>
              <li>- The embed link</li>
              <li>- The nocookie embed link</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Layout title="Secret API docs">
      <div class="flex flex-col items-center">
        <h1 class="text-3xl font-bold text-center">
          Unofficial API's official docs
        </h1>
        <p class="mt-4 text-xl text-center">
          This site's unofficial API simply acts as a relay to the YouTube Data
          API v3.
        </p>
        <p class="text-bold mt-4 mb-5 text-xl text-center">
          Note: All API routes live under <code>/api/{"{route}"}</code>
        </p>
        <div class="flex justify-center space-x-4 my-4">
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
        {APIRouteDocs.map((route) => (
          <Block title={route.title}>
            Route: <code>{route.route}</code>
            <hr class="my-5 border-gray-300" />
            {() => {
              switch (view) {
                case "explainer":
                  return route.explainer;
                case "json":
                  return (
                    <>
                      <div class="text-md text-center my-5">
                        A successful call's JSON response looks something like
                        this:
                        <CodeBlock
                          language="json"
                          code={route.json.successful}
                        />
                      </div>
                      {route.json.failed ? (
                        <div class="text-md text-center my-5">
                          A failed call's JSON response looks something like
                          this:
                          <CodeBlock language="json" code={route.json.failed} />
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
                          <CodeBlock language="bash" code={route.code.curl} />
                        </div>
                      ) : (
                        ""
                      )}
                      {route.code.powershell ? (
                        <div class="text-md text-center my-5">
                          <p>PowerShell</p>
                          <CodeBlock
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
            }}
          </Block>
        ))}
        <Block title="Get the latest livestream link">
          Route: <code>/livestream</code>
          <hr class="my-5 border-gray-300" />
          {renderContent()}
          {() => {
            switch (view) {
              case "json":
                return (
                  <>
                    <div class="text-md text-center my-5">
                      A successful call's JSON response looks something like
                      this:
                      <CodeBlock
                        language="json"
                        code={livestreamAPIResources.SuccessAPIResponse}
                      />
                    </div>
                    <div class="text-md text-center my-5">
                      A failed call's JSON response looks something like this:
                      <CodeBlock
                        language="json"
                        code={livestreamAPIResources.FailedAPIResponse}
                      />
                    </div>
                  </>
                );
            }
          }}
        </Block>
      </div>
    </Layout>
  );
}

export default APIDocs;
