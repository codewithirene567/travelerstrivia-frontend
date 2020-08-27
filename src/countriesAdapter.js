//fetch request to get all countries in the beginning
class CountriesAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000"
    }

    fetchCountries(){
        fetch(this.baseUrl)
        .then(function(response){
            response.json()
        })
        .then(function(json){
            renderCountries(json)
        });
      }
}

function renderCountries(countries){
const placeForQuestions = document.querySelector('h2')
countries.forEach(country => {
    const h3 = document.createElement('h3')
    h3.innerHTML = country.name
    placeForQuestions.appendChild('h3')
})
}

document.addEventListener('DOMContentLoaded', function() {
    fetchCountries()
  })