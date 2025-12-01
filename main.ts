// main.ts — servidor mínimo para n8n en Deno Deploy

import { serve } from "https://deno.land/std@0.207.0/http/server.ts";
import { createProxy } from "https://raw.githubusercontent.com/n8n-io/n8n-deno/main/utils/proxy.ts";

const handler = createProxy();

serve(handler);
console.log("✅ n8n-Deno Deploy iniciado");
