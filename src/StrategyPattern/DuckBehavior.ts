interface QuackBehavior {
    quack(): void;
}

interface FlyBehavior {
    fly(): void;
}

export class NoFly implements FlyBehavior {
    constructor() {}
    
    fly(): void {
        console.log("I don't fly");
    }
}

export class RubberQuack implements QuackBehavior {
    constructor() {}

    quack(): void {
        console.log("this is the quack of a rubber duck");
    }
}

export class Squeak implements QuackBehavior {
    constructor() {}

    quack(): void {
        console.log("this is a squeak");
    }
}

export class MuteQuack implements QuackBehavior {
    constructor() {}

    quack(): void {
        console.log("<< silence >>");
    }
}

export class Duck {
    constructor(readonly name: string, readonly flyBehavior: FlyBehavior, readonly quackBehavior: QuackBehavior) {}

    swim() {
        console.log(this.name + ' is swimming');
    }

    performFly() {
        this.flyBehavior.fly();
    }

    performQuack() {
        this.quackBehavior.quack();
    }
}

export class RubberDuck extends Duck {
    constructor(readonly name: string) {
        super(name, new NoFly(), new MuteQuack())
    }
}

const duck = new RubberDuck('rubber bob')
duck.swim()
duck.performFly()
duck.performQuack()