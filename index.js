const specialForm = document.getElementById('high-score-form-container')
const specialButton = document.getElementById('high-score-button')
const highscoreAdapter = new HighscoresAdapter()

document.getElementById('submit').addEventListener('click', function(event){
       event.preventDefault()
       const name = document.getElementById('question-form').querySelector('input').value
       const strArr = document.getElementById('display-score').innerText.split(' ')
       const score = parseInt(strArr[strArr.length - 1], 10)
       const country_id = document.getElementById('country-id')
       highscoreAdapter.fetchHighscores(name, score, country_id)
    })
 //   newHighscoreButton.addEventListener('click', this.whenTheyClickAHighscoreButton)
 //}

document.addEventListener('DOMContentLoaded', ()=> {
    //alert("hi")
    
    () => specialForm.classList.toggle('d-none')
    document.getElementById('high-score-button').setAttribute('hidden', true)
    
})

function endGame() {
    //the game ends here
    () => specialButton.classList.toggle('d-none')
}


const countryAdapter = new CountriesAdapter()
document.addEventListener('DOMContentLoaded', function() {
    countryAdapter.fetchCountries()
  })
   


specialButton.addEventListener( 'click', ()=>{
    specialForm.classList.toggle('d-none')

})



