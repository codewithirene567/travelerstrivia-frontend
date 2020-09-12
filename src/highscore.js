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
        
        highscore.textContent += `Your score: ${this.score} -`
        highscore.textContent += ` Name: ${this.name} `
   
        
        if (this.country_id === 1){
           highscore.textContent += "- Country: China"
        }else if (this.country_id === 2){
           highscore.textContent += "- Country: India"
        }
        highscore.setAttribute('data-id', this.country_id)

        newHighscoreArea.appendChild(highscore) 

     }
    
     
      
}
