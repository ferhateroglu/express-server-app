const { response } = require('express');
const express = require('express');
const app = express();//Expresi kullanmak için gereken başlangıç fonksiyonu

//string türünde bir PATH alır.
//PATH domainden sonraki kısımdır ör: ferhateroglu.com/blog 
app.get('/',(request, response) => {
    response.send('<h1>Hello world</h1>');
});

//dinlenecek port ve callback
app.listen(3000, () => {console.log('3000 portunda server ayakta')});