class Animal {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      alert(`${this.name} бежит со скоростью ${this.speed}.`);
    }
    stop() {
      this.speed = 0;
      alert(`${this.name} стоит.`);
    }
  }
  
  // Наследуем от Animal указывая "extends Animal"
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} прячется!`);
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); 