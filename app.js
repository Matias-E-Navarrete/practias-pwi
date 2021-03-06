const express = require('express');
const app = express();

const port = 3000;

app.use(express.static('public'));


app.listen(process.env.PORT || port, ()=>{
    console.log('Servidor corriendo en el puerto : ',port);
});

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/index.html');
});

app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
});