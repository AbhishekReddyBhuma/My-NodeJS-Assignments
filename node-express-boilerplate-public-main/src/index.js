const express = require('express');
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())

// GET request for home page
app.get('/', (req, res) => {
    res.send('Hello world!');
});

// POST request for addition
app.post('/add', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.json({
            status: 'error',
            message: 'Invalid data types'
        });
    } else if(num1 > 1e6 || num2 > 1e6 || num1 + num2 > 1e6) {
        res.json({
            status: 'error',
            message: 'Overflow'
        });
    } else if(num1 < -1e6 || num2 < -1e6 || num1 + num2 < -1e6) {
        res.json({
            status: 'error',
            message: 'Underflow'
        });
    } else {
        res.json({
            status: 'success',
            message: 'the sum of given two numbers',
            sum: num1 + num2
        });
    }
});

app.post('/sub', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.json({
            status: 'error',
            message: 'Invalid data types'
        });
    } else if(num1 > 1e6 || num2 > 1e6 || num1 - num2 > 1e6) {
        res.json({
            status: 'error',
            message: 'Overflow'
        });
    } else if(num1 < -1e6 || num2 < -1e6 || num1 - num2 < -1e6) {
        res.json({
            status: 'error',
            message: 'Underflow'
        });
    } else {
        res.json({
            status: 'success',
            message: 'the difference of given two numbers',
            Difference: num1 - num2
        });
    }
});

app.post('/multiply', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.json({
            status: 'error',
            message: 'Invalid data types'
        });
    } else if(num1 > 1e6 || num2 > 1e6 || num1 * num2 > 1e6) {
        res.json({
            status: 'error',
            message: 'Overflow'
        });
    } else if(num1 < -1e6 || num2 < -1e6 || num1 * num2 < -1e6) {
        res.json({
            status: 'error',
            message: 'Underflow'
        });
    } else {
        res.json({
            status: 'success',
            message: 'The product of given numbers',
            Product: num1 * num2
        });
    }
});

app.post('/divide', (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        res.json({
            status: 'error',
            message: 'Invalid data types'
        });
    } else if(num2 === 0){
        res.json({
            status: 'error',
            message: 'Cannot divide by zero'
        });    
    } else if(num1 > 1e6 || num2 > 1e6 || num1 / num2 > 1e6) {
        res.json({
            status: 'error',
            message: 'Overflow'
        });
    } else if(num1 < -1e6 || num2 < -1e6 || num1 / num2 < -1e6) {
        res.json({
            status: 'error',
            message: 'Underflow'
        });
    }else {
        res.json({
            status: 'success',
            message: 'The division of given numbers',
            Division: num1 / num2
        });
    }
});

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;
