export const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};


export const onRequest: PagesFunction = async () => {
  const response = {
    message: "Welcome to the API!",
    docs: "https://swarmfm.ktrain5369.me/api-docs",
  };

  return new Response(JSON.stringify(response), {
    headers: {
      "Content-Type": "application/json",
      ...corsHeaders
    },
  });
};