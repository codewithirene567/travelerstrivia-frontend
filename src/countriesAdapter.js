//fetch request to get all countries in the beginning
class CountriesAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/countries"
    }

    fetchCountries(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => renderCountries(json))
      }
}

function renderCountries(countries){
    const placeForQuestions = document.querySelector('main')
    
    countries.forEach(country => {
        // const h3 = document.createElement('h3')
        // h3.innerHTML = country.name
        // placeForQuestions.appendChild(h3)
        const button = document.createElement('button')
        button.innerHTML = country.name
        placeForQuestions.appendChild(button)
})
}

document.addEventListener('DOMContentLoaded', function() {
    countryAdapter.fetchCountries()
  })