const stripe = require('stripe')('your_secret_key');
const express = require('express');
const app = express();

app.use(express.json());

app.post('/create-payment-intent', async (req, res) => {
    const { cart } = req.body;

    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: totalAmount,
        currency: 'usd',
    });

    res.send({
        clientSecret: paymentIntent.client_secret,
    });
});

module.exports = app;





const stripe = require('stripe')('your_secret_key');
const express = require('express');
const app = express();

// 中间件，用于解析 JSON 请求体
app.use(express.json());

// 创建支付意图的路由
app.post('/create-payment-intent', async (req, res) => {
    const { cart } = req.body;

    // 计算总金额（以美分为单位）
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);

    try {
        // 创建 Stripe 支付意图
        const paymentIntent = await stripe.paymentIntents.create({
            amount: totalAmount,
            currency: 'usd',
        });

        // 返回客户端的支付意图 client_secret
        res.send({
            clientSecret: paymentIntent.client_secret,
        });
    } catch (error) {
        // 处理错误
        res.status(500).send({ error: error.message });
    }
});

// 监听 Cloud Run 提供的端口，或在本地使用 8080 端口
const port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// 导出 Express 应用，供 Cloud Run 使用
module.exports = app;