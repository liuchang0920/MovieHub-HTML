const Koa   = require('koa');
const views = require('koa-views');
const send  = require('koa-send');
const app   = new Koa();

const index = require('./routes/index');

app
    .use(views(__dirname + '/views', {
        map: {
            html: 'ejs'
        }
    }))
    .use(index.routes())
    .use(index.allowedMethods())
    .use(async (ctx) => {
        await send(ctx, ctx.path, { root: __dirname + '/views' });
    });


app.listen(8081);