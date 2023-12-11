const express = require('express');
const TelegramBot = require('node-telegram-bot-api');
const telegramToken = '6458057970:AAG6CLZyaZCEJtxZXAyWQzgS49bn5IyPufs';
const bot = new TelegramBot(telegramToken, { polling: true });

const app = express();

app.get('/send-message', (req, res) => {
    const message = req.query.message;
    const isDone = req.query.isDone === 'true'; 

    if (!message) {
        return res.status(200).json({ error: 'Missing message parameter' });
    }

    let userId = isDone ? -4047749205 : 6307305119;

    bot.sendMessage(userId, message)
        .then(() => {
            res.json({ success: true, message: 'Message sent successfully' });
        })
        .catch((error) => {
            console.error(error);
            res.status(200).json({ error: 'Failed to send message' });
        });
});


app.listen(3001, () => {
    console.log('Server is up on 3001')
})