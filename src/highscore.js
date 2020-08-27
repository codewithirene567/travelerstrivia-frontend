//recording high score - POST request
class Highscore{
    static arrayOfHighscores =[]
    constructor(name, score, country_id) {
        this.name = name;
        this.score = score;
        this.country_id = country_id;
         Highscore.arrayOfHighscores.push(this)
      }

     addHighscoretoDOM(){
        const highscoreForm = document.createElement('h1')
        highscoreForm.textContent = formForFilling
        const placeForHighscores = document.querySelector('main')
        placeForHighscores.appendChild(button)
        h1.addEventListener('click', this.whenTheyClickACountry)
     }

     whenTheyClickAHighscore = (e) => {
        const newForm = document.getElementById('new-form-container')
        newForm.hidden = false
        
        }

        
}
