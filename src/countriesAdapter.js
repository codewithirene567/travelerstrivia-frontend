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

}

document.addEventListener('DOMContentLoaded', function() {
    fetchCountries()
  })