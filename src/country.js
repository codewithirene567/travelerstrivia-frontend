class Country{
    static allArray =[]
    constructor(name, id) {
        this.name = name;
        this.id = id;
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