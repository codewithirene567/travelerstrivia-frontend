//document.addEventListener('DOMContentLoaded', ()=> alert("hi"))


const countryAdapter = new CountriesAdapter()
document.addEventListener('DOMContentLoaded', function() {
    countryAdapter.fetchCountries()
  })

