const express = require('express');
const app = express();//Expresi kullanmak için gereken başlangıç fonksiyonu
const path = require('path');
const PUBLIC_PATH_URL = path.join(__dirname,'../public');//index.html in konumu

app.use(express.static(PUBLIC_PATH_URL));

//app.get() fonksiyonu string türünde bir PATH alır.
//PATH domainden sonraki kısımdır ör: ferhateroglu.com/blog 
app.get('/',(request, response) => {
    response.send('<h1>Helloo  world</h1>');
});

app.get('/about',(request,response) => {
    response.send('<h1>About</h1>');
});

app.get('/help',(request,response) => {
    response.send('help');
});

app.get('/weather',(request,response) => {
    response.send({name:'weather'});
});

//dinlenecek port ve callback
app.listen(3000, () => {console.log('3000 portunda server ayakta')});