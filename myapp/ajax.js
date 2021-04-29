// 1.引入experss
const { response } = require('express');
const experss = require('express')

// 2.创建对象
const app = experss();

// 3.创建路由规则 里面的形参 request与response（自己可以随便定义的名字）
// 建议写成 request与response 见名思意
// request 队请求报文的封装
// respons饿对响应报文的封装

app.get('/',(request,response)=>{
    // 设置响应
    response.send('HELLO EXRESS express')
});

// 4.监听端口启动服务
// 这里listen（8000）后面添加一个回调，用来提示，告诉自己是否监听成功
app.listen(8000,()=>{
    console.log("服务器已经启动，8000端口监听中......")
})

