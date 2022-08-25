let user = {
    name: "Никита",
    age: 17
  };
  
  user.sayHi = function() {
    alert(`Привет, я ${this.name}`);
  };
  
  user.sayHi(); // Привет!