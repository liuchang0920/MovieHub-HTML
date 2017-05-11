const CONFIG       = require('process').argv[2];
const Router       = require('koa-router');
const send         = require('koa-send');

let router         = new Router();

let STATIC_PATH = '';
if (CONFIG === 'dev') {
    STATIC_PATH = 'http://localhost:8080/';
} else if (CONFIG === 'dist') {
    STATIC_PATH = '/';
}

router.get('/', (ctx, next)=> {
    return ctx.render('../views/index.html', {
        staticPath: STATIC_PATH
    });
});

router.get('/main.min.css', (ctx, next)=> {
    return send(ctx, './dist/main.min.css')
});

router.get('/bundle.js', (ctx, next)=> {
    return send(ctx, './dist/bundle.js')
});
module.exports = router;