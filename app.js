const Koa = require('koa');
const router = require('koa-router')()
const app = new Koa()

app.use(router.routes())

router.get('/',async(ctx,next)=>{
    ctx.response.body = `<h1>index page</h1>`
})

router.get('/home',async(ctx,next)=>{
    ctx.response.body = '<h1>HOME page</h1>'
})

router.get('/404',async(ctx,next)=>{
    ctx.response.body = '<h1>404 Not Found</h1>'
})


app.listen(3000, () => {
    console.log('server is running at http://localhost:3000')
})