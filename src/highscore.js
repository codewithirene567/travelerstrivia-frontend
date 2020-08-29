//recording high score - POST request
const newHighscoreButton = document.getElementById('submit')
class Highscore{
    static arrayOfHighscores =[]
    constructor(name, score, country_id) {
        this.name = name;
        this.score = score;
        this.country_id = country_id;
         Highscore.arrayOfHighscores.push(this)
      }

     addHighscoretoDOM(){
        
        const highscore = document.createElement('li')
        const newHighscoreArea = document.getElementById('all-high-scores')
        highscore.textContent += `Your score: ${this.score}`
        highscore.textContent += ` Name: ${this.name} `
        const br = document.createElement("BR")
        //highscore.textContent += this.country_id 
        highscore.setAttribute('data-id', this.country_id)
        //thisId.setAttribute("hidden", true)
        //find the country object, display country.name
        newHighscoreArea.appendChild(highscore)
        //this.whenTheyClickAHighscoreButton()
        
     }
   

        
   }
