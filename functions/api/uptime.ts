import { corsHeaders } from ".";

export const onRequest = async () => {
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
};
