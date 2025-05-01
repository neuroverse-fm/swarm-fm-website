export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET",
  "Access-Control-Allow-Headers": "Content-Type",
};

interface Env {
  API_ENABLED: string;
}

export const onRequest: PagesFunction<Env> = async ({ env }) => {
  try {
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
  } catch (error) {
    return new Response(
      JSON.stringify({
        error: "Internal Server Error",
        status: 500,
        statusText: "Something went wrong while processing your request.",
        details: error instanceof Error ? error.message : String(error),
      }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};
