const koa = require("koa");
const Router = require("koa-router");

const app = new koa();
const router = new Router();
const port = 3000;

router.get("/", (ctx, next) => {
  ctx.body = "<h1>INDEX PAGE</h1>";
});

router.get("/hakkimda", (ctx, next) => {
  ctx.body = "<h1>HAKKIMDA PAGE</h1>";
});
router.get("/iletisim", (ctx, next) => {
  ctx.body = "<h1>ILETISIM PAGE</h1>";
});

app.use(router.routes());

app.listen(port, function () {
  console.log(`Server running on ${port} port`);
});
