$(document).ready(function() {

    var city = document.getElementById("city");
    var temp = document.getElementById("temp");
    var humid = document.getElementById("humidity");
    var pressure = document.getElementById("pressure");
    var high = document.getElementById("high");
    var low = document.getElementById("low");
    var wind = document.getElementById("wind");
    var pic = document.getElementById("everything");
    var desc = document.getElementById("desc");

    $( "#search" ).click(function(a) { 
        a.preventDefault();
        cityT = city.value;

        var url = "http://api.openweathermap.org/data/2.5/weather?q=" +cityT;
        var apiKey = "47db18db2c81bb678c18e418f631b7db"; 

        $.get(url + '&appid=' + apiKey)
        .done(function(response) {

            console.log(response);
            updateUISuccess(response)
            
        })
        .fail(function(error) {
            console.log(error);
                
        });

        //handle XHR success
        function updateUISuccess(response) {

            var condition = response.weather[0].main;
            console.log(condition);
            
            var degC = response.main.temp - 273.15;
            var degF = degC * 1.8 + 32;
            var degFInt = Math.floor(degF);
            temp.textContent = degFInt;

            humid.textContent = response.main.humidity;
            pressure.textContent = response.main.pressure;
            high.textContent = Math.floor((response.main.temp_max - 273.15)* 1.8 + 32);
            low.textContent = Math.floor((response.main.temp_min - 273.15)* 1.8 + 32);
            wind.textContent = response.wind.speed;
            desc.textContent = response.weather[0].description;
            
            if(response.weather[0].id == 802){
                pic.setAttribute("style", "background-image: url('https://www.publicdomainpictures.net/pictures/80000/velka/scattered-clouds-in-the-sky.jpg')")
            }
            else if(response.weather[0].id == 800){
                pic.setAttribute("style", "background-image: url('https://d2v9y0dukr6mq2.cloudfront.net/video/thumbnail/B8FU8DFSipsctoeb/sunset-in-clear-blue-sky-4k-time-lapse-video-sun-shine-and-moving-evening-nature-background-with-copy-space_rrgjtv31ye_thumbnail-full01.png')")
            }
            else if(response.weather[0].id == 801){
                pic.setAttribute("style", "background-image: url('http://transitionsfv.org/wp-content/uploads/sun-clouds-blue-sky-free-stock-photo-public-domain-pictures-bright-images.jpg')")
            }
            else if(response.weather[0].id == 803 || response.weather[0].id == 804){
                pic.setAttribute("style", "background-image: url('http://www.weatherwizkids.com/wp-content/uploads/2015/02/fractus-clouds.jpg')")
            }
            else if(300 <= response.weather[0].id <= 399){
                pic.setAttribute("style", "background-image: url('https://www.publicdomainpictures.net/pictures/80000/velka/scattered-clouds-in-the-sky.jpg')")
            }
            else if(500 <= response.weather[0].id <= 599){
                pic.setAttribute("style", "background-image: url('https://wallpaper.wiki/wp-content/uploads/2017/06/Sky-rain-drops-water-clouds-nature-HD-Wallpaper.jpg')")
            }
            else if(200 <= response.weather[0].id <= 299){
                pic.setAttribute("style", "background-image: url('https://i.ytimg.com/vi/BG0QI4NS-oU/maxresdefault.jpg')")
            }
            else if(600 <= response.weather[0].id <= 699){
                pic.setAttribute("style", "background-image: url('http://synthetick.com/poster-1280x720/snow-window2-1280x720.jpg')")
            }
            if(700 <= response.weather[0].id <= 799){
                pic.setAttribute("style", "background-image: url('http://images.pond5.com/birds-silhouette-sunlight-background-grey-footage-022791066_prevstill.jpeg')")
            }

        }


});
})