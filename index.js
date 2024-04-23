const express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/login', (req, res) => {
    res.send("Hello wanda")
})

app.put('/login', (req, res) => {
    res.send("Hello Put")
})


app.patch('/user', (req, res) => {
    res.send("Hello patch")
})

app.delete('/user', (req, res) => {
    res.send("Hello delete")
})


app.listen(port, () => {
    console.log('listening on port', port);
});