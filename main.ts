// main.ts — Proxy estable para n8n en Deno Deploy
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

// Import desde un commit donde proxy.ts sí existe
import { handleRequest } from "https://raw.githubusercontent.com/n8n-io/n8n-deno/726caf2c1db59bd4cb84ce8e96bd1ebea6d1f456/utils/proxy.ts";

console.log("🚀 n8n para Deno Deploy iniciado...");

serve(handleRequest);
