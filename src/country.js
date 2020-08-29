class Country{
    static allArray =[]
    constructor(name, id) {
        this.name = name;
        this.id = id;
         Country.allArray.push(this)
      }

     addCountrytoDOM(){
        const button = document.createElement('button')
        button.textContent = this.name
        let stuff = document.querySelector('#stuff')
        let br = document.createElement("BR")
        let newbr = document.createElement("BR")
        stuff.appendChild(button)
        stuff.appendChild(br)
        stuff.appendChild(newbr)
        
        button.addEventListener('click', this.whenTheyClickACountry)
     }

     whenTheyClickACountry = (e) => {
        const questionAdapter = new QuestionsAdapter()
        //document.addEventListener('click', function() {
            let stuff = document.querySelector('#stuff')
          stuff.setAttribute("hidden", true)
         // let hideTheHighScoreStuff = document.querySelector('#high-score-button')
    //hideTheHighScoreStuff.setAttribute("hidden", false)
          questionAdapter.fetchQuestions(this.id)
          const countryId = document.getElementById('country-id')
          countryId.setAttribute('data-id', this.id)
          // represents country Id: countryId.dataset.id
          //appendThis(e.target.id.questions())
          
        //ask about this part
        
        
        }

        questions() {
            return Question.all.filter((question) => question.country_id == this.id)
        }
}


   
  