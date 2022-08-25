function User(name, age){
    this.name = name;
    this.age = age;
}

let User1 = new User("Nikita", 15);
let User2 = new User("Ivan", 28);

alert(User1.name + " " + User1.age);
alert(User2.name + " " + User2.age);
