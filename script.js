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
  
  class Rabbit extends Animal {
    hide() {
      alert(`${this.name} прячется!`);
    }
  
    stop() {
      super.stop(); // вызываем родительский метод stop
      this.hide(); // и затем hide
    }
  }
  
  let rabbit = new Rabbit("Белый кролик");
  
  rabbit.run(5); // Белый кролик бежит со скоростью 5.
  rabbit.stop(); // Белый кролик стоит. Белый кролик прячется!