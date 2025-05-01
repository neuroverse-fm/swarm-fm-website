import { corsHeaders } from "..";

export const onRequest = async () => {
  try {
    const response = {
      error:
        "If you're seeing this, the uptime worker isn't quite working right now.",
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
