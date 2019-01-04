const Koa = require('koa')

//创建一个Koa对象表示web app本身
const app = new Koa()

//任何请求，app将调用该异步函数处理请求(ES7)
app.use(async (ctx, next) => {
    await next();
    ctx.response.type = 'text/html';
    ctx.response.body = '<h1>hello KOA!</h1>'
})

app.listen(12000)
console.log('app started at port 12000')

