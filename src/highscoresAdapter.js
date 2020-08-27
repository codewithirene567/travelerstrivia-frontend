//fetch request to get high scores
class HighscoresAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/highscores"
    }

    fetchCountries(){
        fetch(this.baseUrl)
        .then(resp => resp.json())
        .then(json => renderHighScores(json))
      }
}

function renderHighScores(highscores){
   
    
    highscores.forEach(highscoresObject => {
        let highscore = new Country(highscoresObject.name, highscoresObject.score, highscoresObject.country_id)
        highscore.addCountrytoDOM()
        
        })
}
