// NAMA = FARREL MUHAMMAD ALGHANI
// KELAS =INFORMATIKA 9
// NIM = 10122476
const weatherAPI = 'https://api.weatherapi.com/v1/current.json?key=1bac1330ade4406bac8161851230102&dt=2023-03-11&aqi=no';
const keyword = document.querySelector(".keyword");
const btnSearch = document.querySelector(".btn-search");
const container = document.getElementById('container')
document.body.style.backgroundColor = "#CAEFFF";

btnSearch.onclick = () => {
    fetch(`${weatherAPI}&q=${keyword.value}`, {
        headers: {
            'Access-Control-Allow-Origin' : *,
        }
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        let element = ''

        element = showElement(data)

        container.innerHTML = element;

        if(data){
            let condition = data.current.condition.text;

            if(condition.toLowerCase().includes('rain') && condition.toLowerCase().includes('thunder')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/rain_thunder_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/rain_thunder_right.png");
                document.body.style.backgroundColor = "#C4C8C9"; 
            }else if(condition.toLowerCase().includes('rain')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/rain_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/rain_right.png");
                document.body.style.backgroundColor = "#C4C8C9";
            } else if(condition.toLowerCase().includes('snow')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/snow_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/snow_right.png");
                document.getElementById("Mountains").setAttribute("src", "./Assets/image/snow_mountains.png"); 
                document.body.style.backgroundColor = "#D8E9F0";
            } else if(condition.toLowerCase().includes('sunny') || condition.toLowerCase().includes('clear')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/sunny_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/sunny_right.png");
                document.body.style.backgroundColor = "#CAEFFF";
            } else if(condition.toLowerCase().includes('mist')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/mist_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/mist_right.png");
                document.getElementById("Mountains").setAttribute("src", "./Assets/image/mist_mountains.png"); 
                document.body.style.backgroundColor = "#DBF1FB";
            } else if(condition.toLowerCase().includes('cloud')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/cloudy_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/cloudy_right.png");
                document.body.style.backgroundColor = "#CFDDE3";
            } else if (condition.toLowerCase().includes('thunder')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/thunder_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/thunder_right.png");
                document.body.style.backgroundColor = "#C4C8C9";
            } 
             else if (condition.toLowerCase().includes('overcast')){
                document.getElementById("leftImg").setAttribute("src", "./Assets/image/overcast_left.png"); 
                document.getElementById("rightImg").setAttribute("src", "./Assets/image/overcast_right.png");
                document.body.style.backgroundColor = "#C4C8C9";
            } 
        }
       // const current = data.current;
       // const location = data.location;
    });
}

function showElement(data)
{
    return `<p>${data.current.last_updated}</p>
    <img src="https:${data.current.condition.icon}" alt="">
    <h1>${data.current.temp_c}°C</h1>
    <p>${data.current.condition.text}</p>
    <p>${data.location.name}, ${data.location.region}, ${data.location.country}</p>`
}
