const specialForm = document.getElementById('high-score-form-container')
const specialButton = document.getElementById('high-score-button')

document.addEventListener('DOMContentLoaded', ()=> {
    //alert("hi")
    () => specialForm.classList.toggle('d-none')
    
})

function endGame() {
    //the game ends here
    () => specialButton.classList.toggle('d-none')
}


const countryAdapter = new CountriesAdapter()
document.addEventListener('DOMContentLoaded', function() {
    countryAdapter.fetchCountries()
    //let hideTheHighScoreStuff = document.querySelector('#high-score-button')
   // hideTheHighScoreStuff.setAttribute("hidden", true)
  })
   


specialButton.addEventListener( 'click', ()=>{
    specialForm.classList.toggle('d-none')

})
