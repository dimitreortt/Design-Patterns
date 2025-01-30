import { AbstractDuckFactory } from "./AbstractDuckFactory";
import { DuckCall } from "./DuckCall";
import { Goose } from "./Goose";
import { GooseDuckAdapter } from "./GooseDuckAdapter";
import { MallardDuck } from "./MallardDuck";
import { Quackable } from "./Quackable";
import { QuackCounter } from "./QuackCounter";
import { RedHeadDuck } from "./RedHeadDuck";
import { RubberDuck } from "./RubberDuck";

export class CountingDuckFactory implements AbstractDuckFactory {
    constructor() {
    }

    createMallardDuck(): Quackable {
        return new QuackCounter(new MallardDuck())
    }

    createRedheadDuck(): Quackable {
        return new QuackCounter(new RedHeadDuck())
    }

    createRubberDuck(): Quackable {
        return new QuackCounter(new RubberDuck())
    }

    createDuckCall(): Quackable {
        return new QuackCounter(new DuckCall())
    }

    createGooseDuck(): Quackable {
        return new QuackCounter(new GooseDuckAdapter(new Goose()))
    }
}
