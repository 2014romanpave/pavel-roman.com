import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { execSync } from 'node:child_process';
import { defineConfig } from 'vite';

let sha = process.env.VERCEL_GIT_COMMIT_SHA || '';
if (!sha) { try { sha = execSync('git rev-parse HEAD').toString().trim(); } catch { sha = 'local'; } }

export default defineConfig({
  plugins: [react(), tailwindcss()],
  define: { __BUILD_DATE__: JSON.stringify(new Date().toISOString().slice(0, 10)), __COMMIT__: JSON.stringify(sha.slice(0, 7)) },
});
