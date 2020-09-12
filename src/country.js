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
       
        let stuff = document.querySelector('#stuff')
        stuff.setAttribute("hidden", true)
        //the questions are fetched here based on the country id that is passed in
        questionAdapter.fetchQuestions(this.id)
        console.log(questionAdapter) 
        const countryId = document.getElementById('country-id')
        countryId.setAttribute('data-id', this.id)
         numberOfQuestionsAnswered = 0
         score = 0
     }

}
 