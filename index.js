




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
            .then((response) => {
                
                return response.json()
            })
            .then((obj) => {
                
                $("#locationName").text(`Weather in ${obj.location.name}, ${obj.location.country}`)
                $("#temperature").text(`${obj.current.temp_c}°C`)
                $("#weatherImg").attr("src",obj.current.condition.icon)
                $("#weatherDisplay").text(`${obj.current.condition.text}`)
                $("#humidity").text(`Humidity: ${obj.current.humidity}%`)
                $("#windSpeed").text(`Wind Speed: ${obj.current.wind_kph} km/h`)
                document.getElementById("locNameEntry").value = '';

            })
            .catch(()=> {$("#temperature").text(`Please enter a valid location`)
                        $("#locationName").text(``)
                        
                        $("#weatherImg").attr("src",'')
                        $("#weatherDisplay").text('')
                        $("#humidity").text(``)
                        $("#windSpeed").text(``)
                        document.getElementById("locNameEntry").value = '';
            });
    }

    $("#submitButton").click( () =>{
        let location = $("#locNameEntry").val()
        
        var weather_api_url = `http://api.weatherapi.com/v1/current.json?key=2cca4b8a3ae7435e944153027221007&q=${location}&aqi=yes`;
        
        uploadWeather(weather_api_url)
        

    })





    function fillCarousel(fetchedArticles){
        console.log(fetchedArticles)
        const carouselBoxes = document.getElementById("carouselBoxes")
        
        fetchedArticles.forEach(element => {
            if (element.image != null){
                console.log(element)
                let newBox = document.createElement("div")
                newBox.classList.add("carousel-item")

                const att = document.createAttribute("data-bs-interval")
                att.value = 3000
                newBox.setAttributeNode(att)

                newBox.innerHTML = `<a href="${element.url}" target="_blank"><img src="${element.image}" class="d-block" alt="...">
                <div class="carousel-caption d-md-block">
                
                <p>${element.title}</p>
                </div></a>`
                
                carouselBoxes.appendChild(newBox)
            }

           
        });
        
        let firstBox = document.getElementsByClassName("carousel-item")
        firstBox[0].classList.add("active")
        
    }
    

    function fillAccordion(fetchedArticles){
        const accordionBoxes = document.getElementById("accordionPanelsStayOpenExample")

        fetchedArticles.forEach( (element,index) =>{
            let newAccordion = document.createElement("div")
            newAccordion.classList.add("accordion-item")
        if(element.source.name == null){
            newAccordion.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
                ${element.title}
              </button>
            </h2>
            <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
              <div class="accordion-body">
                ${element.content.substr(0,200)} <br>
              </div>
              <a href="${element.url}"  target="_blacnk"><button id="article_button">View Full Article</button></a>
            </div>
          </div>`
        }
        else{
            newAccordion.innerHTML = `<div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-heading${index}">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapse${index}" aria-expanded="false" aria-controls="panelsStayOpen-collapse${index}">
                ${element.title}
              </button>
            </h2>
            <div id="panelsStayOpen-collapse${index}" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-heading${index}">
              <div class="accordion-body">
                ${element.content.substr(0,200)}... <br> - <strong>${element.source.name}</strong> 
              </div>
              <a href="${element.url}"  target="_blacnk"><button id="article_button">View Full Article</button></a>
            </div>
          </div>`
        }
          
          accordionBoxes.appendChild(newAccordion)
        })
    }

    function fillRight(fetchedArticles){
        const articleBoxes = document.getElementById("rightNews")
        // fetchedArticles.forEach( element => {
        //     let newArticleBox = document.createElement("div")
        //     newArticleBox.classList.add("articleBox")
                
        //     if (element.urlToImage != null){
        //         let newArticleBox = document.createElement("div")
        //         newArticleBox.classList.add("articleBox")

        //         newArticleBox.innerHTML = `<img src="${element.urlToImage}" alt="">
        //         <a href="${element.url}" target="_blank"><p id="articleTitle">${element.title}</p></a>
        //         <p id="articleDescription">${element.description}</p>
        //         `
                    
        //         articleBoxes.appendChild(newArticleBox)
                
        //     }
        // })

        let counter =0;
        for (let index = 2; index < fetchedArticles.length; index++) {

            if(counter==3){
                break;
            }
            const element = fetchedArticles[index];

            let newArticleBox = document.createElement("div")
            newArticleBox.classList.add("articleBox")
                
            
            if (element.image != null){
                let newArticleBox = document.createElement("div")
                newArticleBox.classList.add("articleBox")

                newArticleBox.innerHTML = `<img src="${element.image}" alt="">
                <a href="${element.url}" target="_blank"><p id="articleTitle">${element.title}</p></a>
                <p id="articleDescription">${element.description}</p>
                `
                    
                articleBoxes.appendChild(newArticleBox)
                counter = counter+1;
            }

            
        }
        // fetchedArticles.forEach( element => {
        //     let newArticleBox = document.createElement("div")
        //     newArticleBox.classList.add("articleBox")
            
        //     if (element.urlToImage != null){
        //         newArticleBox.innerHTML = `<img src="${element.urlToImage}" alt="">
        //         <p id="articleTitle">${element.title}</p>
        //         <p id="articleDescription">${element.desctiption}</p>
        //         `

        //     }

        //     articleBoxes.appendChild(newArticleBox)
        // })
    }


    var news_api_url = 'https://gnews.io/api/v4/search?q=example&country=pk&token=6a78b63efbf72bb6944e6a878cd6d729';

    

    let news_api_response = fetch(news_api_url)
        .then( (news_api_response) => news_api_response.json() )
        .then( (fetchedArticles) => {
            
            fillCarousel(fetchedArticles.articles)
            fillAccordion(fetchedArticles.articles)
            fillRight(fetchedArticles.articles)
        })




})

