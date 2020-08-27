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
        const placeForCountries = document.querySelector('main')
        placeForCountries.appendChild(button)
        button.addEventListener('click', this.whenTheyClickACountry)
     }

     whenTheyClickACountry = (e) => {
        const newForm = document.getElementById('new-form-container')
        newForm.hidden = false
        //const intro = document.getElementById('intro')
        //intro.hidden = true
       // const newFormBtn = document.getElementById('button')
        //newFormBtn.hidden = true
        }

        
}


   
  