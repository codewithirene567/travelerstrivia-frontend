class Country{
    constructor(name) {
        this.name = name;
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