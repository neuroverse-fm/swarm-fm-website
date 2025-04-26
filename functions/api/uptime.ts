export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export const onRequest = async () => {
  const response = {
    message: "If you're seeing this, the uptime worker isn't quite working right now.",
    docs: "https://swarmfm.ktrain5369.me/api-docs",
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders,
    },
  });
};