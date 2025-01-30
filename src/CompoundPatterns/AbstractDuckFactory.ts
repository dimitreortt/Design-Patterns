import { Quackable } from './Quackable'

export interface AbstractDuckFactory {
    createMallardDuck(): Quackable
    createRedheadDuck(): Quackable
    createRubberDuck(): Quackable
    createDuckCall(): Quackable
    createGooseDuck(): Quackable
}
