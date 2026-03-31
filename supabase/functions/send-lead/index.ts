import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const WEBHOOK_URL = 'https://services.leadconnectorhq.com/hooks/yiFVAZdDuHVfYsh1D4pt/webhook-trigger/76a78c81-7bce-4913-8e22-365fc56f5ffc';

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return new Response(JSON.stringify({ error: 'name and phone are required' }), {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      });
    }

    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone }),
    });

    const responseText = await response.text();
    console.log('GHL response:', response.status, responseText);

    return new Response(JSON.stringify({ success: response.ok }), {
      status: response.ok ? 200 : 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error sending lead:', error);
    return new Response(JSON.stringify({ error: 'Failed to send lead' }), {
      status: 500,
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  }
});
