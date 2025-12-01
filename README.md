# n8n Deno Deploy

Esta es una implementación mínima para desplegar n8n en Deno Deploy usando el proxy oficial.

## Cómo funciona

- `main.ts` actúa como proxy hacia tu instancia de n8n Cloud o Self-Hosted.
- Compatible con Deno Deploy.
- Usa una versión fija del commit donde el archivo `proxy.ts` existe.

## Deploy automático

Cada vez que haces commit, Deno Deploy vuelve a construir automáticamente.
