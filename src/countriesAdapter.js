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
   
    
    countries.forEach(countryObject => {
        let country = new Country(countryObject.name, countryObject.id)
        country.addCountrytoDOM()
        
        })
}



  

  