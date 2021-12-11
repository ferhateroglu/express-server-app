const express = require('express');
const app = express();//Expresi kullanmak için gereken başlangıç fonksiyonu
const path = require('path');
const PUBLIC_PATH_URL = path.join(__dirname,'../public');//index.html in konumu
app.set('view engine', 'hbs');
app.use(express.static(PUBLIC_PATH_URL));//statik içerik servis etme

//app.get() fonksiyonu string türünde bir PATH alır.
//PATH domainden sonraki kısımdır ör: ferhateroglu.com/blog 
app.get('/',(request, response) => {
    response.render('index',{
        title: 'Ana Sayfa',
        body: 'ara metin'
    });
});
app.get('/about',(request, response) => {
    response.render('about',{
        title: 'ABOUT'
    });
});
app.get('/help',(request, response) => {
    response.render('help',{
        title: 'Help'
    });
});
//dinlenecek port ve callback
app.listen(3000, () => {console.log('3000 portunda server ayakta')});