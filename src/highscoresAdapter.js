//fetch request to get high scores
class HighscoresAdapter{
    constructor(){
        this.baseUrl = "http://127.0.0.1:3000/highscores"
    }

    fetchHighscores(name, score, country_id){
        fetch(this.baseUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                name: name,
                score: score,
                country_id: country_id
            })
        })   
        .then(resp => resp.json())
        .then(json => renderHighScores(json))
      }
}

function renderHighScores(highscores){
   
    
    highscores.forEach(highscoresObject => {
        
        let highscore = new Highscore(highscoresObject.name, highscoresObject.score, highscoresObject.country_id)

        highscore.addHighscoretoDOM()
        
        })
}
