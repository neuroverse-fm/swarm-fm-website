export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

interface Env {
  API_ENABLED: string;
}

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  const response = {
    message:
      env.API_ENABLED === "true"
        ? "Welcome to the API!"
        : "The API has been disabled.",
    docs: "https://swarmfm.ktrain5369.me/api-docs",
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
};
