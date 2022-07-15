const express = require('express');
const bodyParse = require('body-parser')

const userRoute = require('./routes/userRoutes');

const app = express();
const port = 3000;

app.use(bodyParse.urlencoded({ extended: false }))


userRoute(app)

app.get('/', (req, res) => res.send('hello'));

app.listen(port, () => {console.log('Api rodando na porta 3000');});