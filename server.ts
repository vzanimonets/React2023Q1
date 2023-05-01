import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import { createServer as createViteServer } from 'vite';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const template = fs.readFileSync(path.resolve(__dirname, 'index.html'), 'utf-8');

async function createServer() {
  const app = express();

  const vite = await createViteServer({
    server: { middlewareMode: true },
    appType: 'custom',
  });

  app.use(vite.middlewares);

  app.use('*', async (req, res, next) => {
    const url = req.originalUrl;

    try {
      const transformTemplate = await vite.transformIndexHtml(url, template);
      const html = transformTemplate.split(`<!--app-html-->`);
      const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
      const { pipe } = await render(url, {
        onAllReady() {
          res.setHeader('Content-Type', 'text/html');
          res.write(html[0]);
          pipe(res);
          res.end(html[1]);
        },
      });
    } catch (e) {
      vite.ssrFixStacktrace(e as Error);
      next(e);
    }
  });

  app.listen(4173, () => {
    console.log('Server running on PORT http://localhost:4173');
  });
}

createServer();
