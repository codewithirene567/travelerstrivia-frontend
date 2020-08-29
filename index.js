const specialForm = document.getElementById('high-score-form-container')
const specialButton = document.getElementById('high-score-button')
const highscoreAdapter = new HighscoresAdapter()

document.getElementById('submit').addEventListener('click', function(event){
       event.preventDefault()
       whenTheyClickAHighscoreButton()
       const name = document.getElementById('question-form').querySelector('input').value
       const strArr = document.getElementById('display-score').innerText.split(' ')
       const score = parseInt(strArr[strArr.length - 1], 10)
       const country_id = document.getElementById('country-id').dataset.id
      
       highscoreAdapter.fetchHighscores(name, score, country_id)
    })
 //   newHighscoreButton.addEventListener('click', this.whenTheyClickAHighscoreButton)
 //}

document.addEventListener('DOMContentLoaded', ()=> {
    //alert("hi")
    
    () => specialForm.classList.toggle('d-none')
    document.getElementById('high-score-button').setAttribute('hidden', true)
})

function whenTheyClickAHighscoreButton() {
    let questionsAnswers = document.querySelector('main')
    console.log(questionsAnswers)
    questionsAnswers.setAttribute("hidden", true)

    let highscoreForm = document.getElementById('high-score-form-container')
    highscoreForm.setAttribute("hidden", true)

    const backToStartButton = document.createElement('button')
    backToStartButton.textContent = "Start over"
    const areaForStartButton = document.getElementById('back-to-start')
    areaForStartButton.appendChild(backToStartButton)
    backToStartButton.addEventListener('click', backtoStart)
 }

 function backtoStart (e) {
    if (e.target.textContent === "Start over"){
       //debugger
    //show everything that was there in the beginning
    let stuff = document.getElementById('stuff')
     //stuff.setAttribute("hidden", false)
     stuff.hidden = false
     //new stuff
     let scoreBoard = document.getElementById('all-high-scores')
     scoreBoard.hidden = true
     let startOverButton = document.getElementById('back-to-start')
     startOverButton.hidden =true
    }
 }

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



