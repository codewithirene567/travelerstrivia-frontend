//fetch request to get all countries in the beginning
class CountriesAdapter{
    constructor(){
        this.baseUrl = "https://floating-citadel-25347.herokuapp.com/countries"
    }

    fetchCountries(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => renderCountries(json))
        console.log("this message would print out before the fetch request")
      }
}


function renderCountries(countries){
   

    countries.forEach(countryObject => {
        let country = new Country(countryObject.name, countryObject.id)
        country.addCountrytoDOM()
        
    })
}

//fetch returns a promise, which is before the first .then
//promises are asynchonyus, inside of this fetch request, console log hello
//you can use debuggers or console logs to track where it is going
//there is a vs extention that will add console logs automatically as the code runs
//use sort during a review, review the syntax
//also filter for the high scores
//finish china quiz then only show scores for china

  

  