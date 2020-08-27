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
        const placeForQuestions = document.querySelector('main')
        placeForQuestions.appendChild(button)
        button.addEventListener('click', this.whenTheyClickACountry)
     }

     whenTheyClickACountry = (e) => {
        const newForm = document.getElementById('new-form-container')
        newForm.hidden = false
        const newFormBtn = document.getElementById('button')
        newFormBtn.hidden = true
        }

        whenTheyClickAnAnswer= (e) =>{
         
          const answer1 = document.getElementById('answer 1')
          //have it selected
          const answer2 = document.getElementById('answer 2')
          const answer3 = document.getElementById('answer 3')
        }
}


   
  