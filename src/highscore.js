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
        //const highscoreButton = document.createElement('button')
      
        const newHighscoreButtonArea = document.getElementById('button')
        const newHighscoreButton = document.getElementById('high-score-button')
        newHighscoreButtonArea.appendChild(newHighscoreButton)
       // highscoreButton.addEventListener('click', this.whenTheyClickAHighscoreButton)

        newHighscoreButton.addEventListener('click', () => {
         const highscoreAdapter = new HighscoresAdapter()
         highscoreAdapter.fetchHighscores()
     }
        )}
}
     
   //   highscoreButton.addEventListener('click', function(){
   //       highscoreAdapter.fetchHighscores()
   //   })

   //   whenTheyClickAHighscoreButton = (e) => {
      
   //      const highscoreAdapter = new HighscoresAdapter()
       
   //     highscoreAdapter.fetchHighscores()
   //     console.log(fetchHighscores())
   // }

        
// }

        

