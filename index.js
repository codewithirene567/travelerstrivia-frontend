const specialForm = document.getElementById('high-score-form-container')
const specialButton = document.getElementById('high-score-button')
const highscoreAdapter = new HighscoresAdapter()

document.getElementById('submit').addEventListener('click', function(event){
    
       event.preventDefault()
       whenTheyClickAHighscoreButton()
       
       const name = document.getElementById('question-form').querySelector('input').value
       document.getElementById('question-form').querySelector('input').value = ""
       const strArr = document.getElementById('display-score').innerText.split(' ')
       const score = parseInt(strArr[strArr.length - 1], 10)
       const country_id = document.getElementById('country-id').dataset.id
      
       highscoreAdapter.fetchHighscores(name, score, country_id)
    })

document.addEventListener('DOMContentLoaded', ()=> {
    
    () => specialForm.classList.toggle('d-none')

    document.getElementById('high-score-button').setAttribute('hidden', true)
    //this area adds the start over button event listener when the dom content loads
    let newStartOverButton = document.getElementById('newStartOverButton')
    newStartOverButton.addEventListener('click', backtoStart)
})

function whenTheyClickAHighscoreButton() {

    let questionsAnswers = document.querySelector('main')
    console.log(questionsAnswers)
    //questionsAnswers.setAttribute("hidden", true)
    questionsAnswers.innerHTML="" //clears everything

    let highscoreForm = document.getElementById('high-score-form-container')
    highscoreForm.setAttribute("hidden", true)

// the start over button existed from the beginning but now we have removed the hidden attribute
    let startOverButton = document.getElementById('back-to-start')
    startOverButton.removeAttribute('hidden')
 }

 function backtoStart (e) {
    if (e.target.textContent === "Start over"){

    let stuff = document.getElementById('stuff')
     stuff.hidden = false

     let scoreBoard = document.getElementById('all-high-scores')
     scoreBoard.hidden = true
     let startOverButton = document.getElementById('back-to-start')
     startOverButton.hidden =true

    }
 }

function endGame() {
    () => specialButton.classList.toggle('d-none')
}

const countryAdapter = new CountriesAdapter() //new countriesadapter is used to talk to the api, call it on the instance
//fetchCountries is a function inside of a class
document.addEventListener('DOMContentLoaded', function() {
    countryAdapter.fetchCountries()
  })

specialButton.addEventListener( 'click', ()=>{
    specialForm.classList.toggle('d-none')

})

//--------------------------sort logic
// document.getElementById('sort-button').addEventListener('click', function(event){
//     let highscoresCopy = [...Highscore.arrayOfHighscores]
    
//     highscoresCopy.sort(function(a, b){
//         let x = a.name.toLowerCase();
//         let y = b.name.toLowerCase();
//         if (x < y) {return 1;}
//         if (x > y) {return -1;}

//         return 0; //#sort the high scores
//     })
// //# highscoresCopy.sort((a,b) => (a.name.toUpperCase() < b.name.toUpperCase()) ? 1 : -1)

//     appendSortScores() //#call the appendSortScores function
    
//     function appendSortScores(){
      
//         const sortedHighscoresarea = document.getElementById('sorted-high-scores') //#this already exists in the html
       
//         highscoresCopy.forEach( highscore => { //#for each high score in the high score copy array execute the following function
//             const sortedHighscore = document.createElement('li') //# create a variable called sortedHighscore which is an li element
//             sortedHighscore.textContent += `Your score: ${highscore.score} -`
//             //#and add text content of Your score is ${highscore.score}
//                 //#sortedhighscore.textContent += `Your score: ${score} -`
//              //#and add text content of  Name: ${highscore.name}
//             sortedHighscore.textContent += ` Name: ${highscore.name} `
//             //#if the country_id for the high score is 1 then add dash China to the end otherwise add dash India
//             if (highscore.country_id === 1){
//                 sortedHighscore.textContent += "- Country: China"
//             } else if (highscore.country_id === 2){
//                 sortedHighscore.textContent += "- Country: India"
//             }

//             sortedHighscore.setAttribute('data-id', highscore.country_id)
//             //#also set a data id attribute to each of the highscores in the html by calling the id the country id that it belongs to
    
//             sortedHighscoresarea.appendChild(sortedHighscore) 
//             //#add the scores to the area in the HTML
//             const allHighscores = document.getElementById('all-high-scores') //#get the all-high-scores element by its id which was the old high score list and hide that
//             allHighscores.setAttribute("hidden", true)
//         }) 
//     }
// })
//--------------------sort logic
