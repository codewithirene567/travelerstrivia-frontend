//fetch request to get high scores
class HighscoresAdapter{
    constructor(){
        this.baseUrl = "https://floating-citadel-25347.herokuapp.com/highscores"
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
        .then(json => renderHighScores(json.highscore))
      }
}

function renderHighScores(highscores){
    let highscoreList = document.getElementById('all-high-scores')
    highscoreList.removeAttribute('hidden')
    highscores.forEach(highscoresObject => {
        
        let highscore = new Highscore(highscoresObject.name, highscoresObject.score, highscoresObject.country_id)

        highscore.addHighscoretoDOM()
        
    })
}
