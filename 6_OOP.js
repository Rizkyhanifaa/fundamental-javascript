// Super Class
class Animal {
    constructor(name, age, isMammal) {
        this.name = name;
        this.age = age;
        this.isMammal = isMammal;
    }
}

// Child Class
class Rabbit extends Animal{
    constructor(name, age) {
        super(name, age, true);
    }

    eat() {
        return `${this.name} sedang makan!`;

    }
}

// Child Class
class Eagle extends Animal{
    constructor(name, age){
        super(name, age, false);
    }

    fly() {
        return `${this.name} sedang terbang!`;
    }
}

const myRabbit = new Rabbit('Labi', 2);
const myEagle = new Eagle('Elo', 4);


