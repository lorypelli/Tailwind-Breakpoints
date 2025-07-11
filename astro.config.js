import cloudflare from '@astrojs/cloudflare';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';

export default defineConfig({
    output: 'server',
    vite: {
        plugins: [tailwindcss()],
        resolve: {
            alias: import.meta.env.PROD
                ? { 'react-dom/server': 'react-dom/server.edge' }
                : {},
        },
    },
    adapter: cloudflare(),
    integrations: [react()],
});
