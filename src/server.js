const express = require('express');
const path = require('path');
const hbs = require('hbs');
const request = require('request');

const PUBLIC_PATH_URL = path.join(__dirname,'../public');
const TEMPLATES_URL = path.join(__dirname,'../templates');
const PARTİAL_URL = path.join(__dirname,'../templates/partials');


const app = express();//Expresi kullanmak için gereken başlangıç fonksiyonu
app.set('view engine', 'hbs');//views engine ve views i güncellemek
app.set('views', TEMPLATES_URL);//default olarak hbs views dosyasyı altında arama yapar biz bunun yerine templates klasörü oluşturduk


app.use(express.static(PUBLIC_PATH_URL));//public klasörünü servis etme
hbs.registerPartials(PARTİAL_URL);//partial klasörünü kayıt etme

//app.get() fonksiyonu string türünde bir PATH alır.
//PATH domainden sonraki kısımdır ör: ferhateroglu.com/blog 
app.get('/',(request, response) => {
    response.render('index',{
        title: 'Ana Sayfa'
    });
});
app.get('/about',(request, response) => {
    response.render('about',{
        title: 'Hakkında'
    });
});
app.get('/help',(request, response) => {
    response.render('help',{
        title: 'Yardım'
    });
});

app.get('/forecast',(req,res) => {

    const il = req.query.adress;//forecast?adress=mersin şeklinde yapılan sorguyu alır
    const URL = 'http://api.weatherapi.com/v1/current.json?key=2fab9888c0ee43d3a53190750211012&q='+il+'&aqi=no';


    if(!il){
        res.send({
            error:'adres bilgisini girmediniz'
        });
    }
    else{
        //({url:''},(response,error) =>{}); şeklinde parametre alır.
        request({url: URL,json:true }, (error,response) => {
            if(typeof(response.body.error) !== 'undefined'){
                res.send({
                    error: 'bölge bilgisi bulunamadı'
                });
            }
            else{
                const {temp_c,wind_kph}=response.body.current;
                //res.send(il+' ilinde hava: '+temp_c+' derece \n'+'Rüzgar: '+ wind_kph+'km/s');
                res.send({
                    adres: il,
                    sıcaklık:temp_c.toString(),
                    rüzgar:wind_kph.toString()
                });
            }       
        });
    }

});

// * tüm get isteklerini kapsar öcneki get isteklerine girmediyse buraya girer
app.get('*',(req,res) =>{
    res.render('404',{
        title:'404 İstenen URL Bulunamadı'
    });
});

//dinlenecek port ve callback
app.listen(3000, () => {console.log('3000 portunda server ayakta')});