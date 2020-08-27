class Country{
    static allArray =[]
    constructor(name) {
        this.name = name;
        this.id = id;
        new Country(name);
        console.log(new Country(name))
        this.element = document.createElement('li')
        this.element.id = `item-${this.id}`
        //.allCountries = document.querySelector('main')
        //this.allCountries.appendChild(this.element)
         Country.allArray.push(this)
      }
     
      get name() {
        return this.name;
      }
    
      set name(name) {
        this.name = name;
      }
     
}

class China extends Country {
    constructor(name) {
      super(name);
      this.name = name;
    }
   
  }