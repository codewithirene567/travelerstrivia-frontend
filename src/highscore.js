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

      

      whenTheyClickAHighscoreButton = (e) => {
         if (e.target.textContent == "submit"){
            let questionsAnswers = document.querySelector('main')
            questionsAnswers.setAttribute("hidden", true)

            this.addHighscoretoDOM()

            const backToStartButton = document.createElement('button')
            backToStartButton.textContent = "Start over"
            const areaForStartButton = document.getElementById('back-to-start')
            areaForStartButton.appendChild(backToStartButton)
            backToStartButton.addEventListener('click', this.backtoStart)
         }
      }

      backtoStart = (e) => {
         if (e.target.textContent == "Start over"){
         //show everything that was there in the beginning
         let stuff = document.querySelector('#stuff')
          stuff.setAttribute("hidden", false)
         }
      }


     addHighscoretoDOM(){
        
        const highscore = document.createElement('li')
        const newHighscoreArea = document.getElementById('all-high-scores')
        highscore.textContent == this.score
        highscore.textContent == this.name
        newHighscoreArea.appendChild(highscore)
        
     }
   //     )}
}
     
   //   highscoreButton.addEventListener('click', function(){
   //       highscoreAdapter.fetchHighscores()
   //   })

      
      
   //      const highscoreAdapter = new HighscoresAdapter()
       
   //     highscoreAdapter.fetchHighscores()
   //     console.log(fetchHighscores())
   // }

        
// }

        

