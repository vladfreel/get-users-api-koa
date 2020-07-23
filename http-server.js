import Koa from 'koa';
import mount from 'koa-mount';
import apiV1 from './app/api/v1';

const app = new Koa();

const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || 'localhost';
app.use(mount('/api/v1', apiV1.routes()));
app.listen(PORT, () => {
  console.log(`Server started on http://${HOST}:${PORT}`);
});

export default app;
