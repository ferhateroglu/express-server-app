const searchForm = document.querySelector('#search-form');
const searchInput = document.querySelector('#search-input');
const p1 = document.querySelector('#p1');
const p2 = document.querySelector('#p2');
const p3 = document.querySelector('#p3');

searchForm.addEventListener('submit', (event) => {

    const il = searchInput.value;
    const FETCH_URL = 'http://localhost:3000/forecast?adress='+il;

    event.preventDefault();//default olarak submit butonu sayfayı yeniler bunu kapatmak için bu fonksiyon kullanılır
    
    //get isteği atma
    //.then'den sonrası get requestten gelen cevap
    fetch(FETCH_URL).then((response) => {
        response.json().then((data) => {
            console.log(data);
            if(typeof(data.error) !== 'undefined'){
                alert(data.error);
            }
            else{
                p1.innerText = 'Location: '+ data.location;
                p2.innerText = 'Temperature: '+ data.tempC+'°';
                p3.innerText = 'Wind: '+ data.windKph+' kph';
            }
        });
    });
});



