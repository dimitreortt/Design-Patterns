export class Duck {
    constructor(readonly name: string) {}

    swim() {
        console.log(this.name + ' is swimming');
    }

    quack() {
        console.log(this.name + ' Quack!')
    }

    fly() {
        console.log(this.name + ' is flying');
    }
}

export class MallardDuck extends Duck {
    constructor(readonly name: string) {
        super(name);
    }

    quack(): void {
        console.log(this.name + ' MallardQuack!');
    }
}

export class RubberDuck extends Duck {
    quack() {
    }
}

const rubberDuck = new RubberDuck('rubberbob')
rubberDuck.fly()

// const mallard = new MallardDuck('Mallard');
// const duck = new Duck('bob');

// duck.fly();
// duck.swim();
// duck.quack();
// mallard.quack();
// mallard.fly();