const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');

const app = express();

app.use(express.static('public'));
app.use(express.static('img'));
app.use(morgan('tiny'));
//app.use(express.static(path.join(__dirname, '/public/')));

app.get('/',(req,res)=> {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/Instructions',(req,res)=> {
    res.sendFile(path.join(__dirname, '/public/Instructions.html'));
});

app.get('/studyagreement',(req,res)=> {
    res.sendFile(path.join(__dirname, '/public/StudyAgreement.html'));
});

app.listen(3000, ()=> {
    debug(`'listening on port ${chalk.green('3000')}`);
});