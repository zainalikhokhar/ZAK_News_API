var news_api_url = 'https://newsapi.org/v2/top-headlines?country=gb&apiKey=47398c8b38aa484abab64eed5d060a30';


let news_api_response = fetch(news_api_url);
news_api_response.then((news_api_response) =>{
    console.log(news_api_response.json())
})





// async function myFunction() {
//     const weather_api_response = await fetch(weather_api_url);
//     // const city = person_api_response.city_name;
//     // const weather_api_promise = await fetch(weather_api_url + city);
//     console.log(weather_api_response.json().location)
// }




$(document).ready(()=>{
    
    // const weather_api_response = fetch(weather_api_url);
    // weather_api_response.then( (weather_api_response) => {
    //     let weather_ovj = weather_api_response.json();
    //     console.log(weather_ovj.location)
    //     // $("#locationName").text(weather_api_response.json().location)
    // })
    // myFunction()

    function uploadWeather(weather_api_url){
        const weatherInfo = fetch(weather_api_url)
            .then((response) => response.json())
            .then((obj) => {
                $("#locationName").text(`Weather in ${obj.location.name}, ${obj.location.country}`)
                $("#temperature").text(`${obj.current.temp_c}°C`)
                $("#weatherImg").attr("src",obj.current.condition.icon)
                $("#weatherDisplay").text(`${obj.current.condition.text}`)
                $("#humidity").text(`Humidity: ${obj.current.humidity}%`)
                $("#windSpeed").text(`Wind Speed: ${obj.current.wind_kph} km/h`)

            })
            .catch(()=> {$("#temperature").text(`Please enter a valid location`)
                        $("#locationName").text(``)
                        
                        $("#weatherImg").attr("src",'')
                        $("#weatherDisplay").text('')
                        $("#humidity").text(``)
                        $("#windSpeed").text(``)
            });
    }

    $("#submitButton").click( () =>{
        let location = $(locNameEntry).val()
        var weather_api_url = `http://api.weatherapi.com/v1/current.json?key=2cca4b8a3ae7435e944153027221007&q=${location}&aqi=yes`;
        uploadWeather(weather_api_url)
        

    })

})

