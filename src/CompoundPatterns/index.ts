import { CountingDuckFactory } from './CountingDuckFactory'
import { Flock } from './Flock'
import { QuackCounter } from './QuackCounter'

const duckFactory = new CountingDuckFactory()

const redheadDuck = duckFactory.createRedheadDuck()
const duckCall = duckFactory.createDuckCall()
const rubberDuck = duckFactory.createRubberDuck()
const gooseDuck = duckFactory.createGooseDuck()

const ducksFlock = new Flock()
ducksFlock.addQuacker(redheadDuck)
ducksFlock.addQuacker(duckCall)
ducksFlock.addQuacker(rubberDuck)
ducksFlock.addQuacker(gooseDuck)

const mallardDuckOne = duckFactory.createMallardDuck()
const mallardDuckTwo = duckFactory.createMallardDuck()
const mallardDuckThree = duckFactory.createMallardDuck()
const mallardDuckFour = duckFactory.createMallardDuck()

const mallardsFlock = new Flock()
mallardsFlock.addQuacker(mallardDuckOne)
mallardsFlock.addQuacker(mallardDuckTwo)
mallardsFlock.addQuacker(mallardDuckThree)
mallardsFlock.addQuacker(mallardDuckFour)

ducksFlock.addQuacker(mallardsFlock)

ducksFlock.quack()
mallardsFlock.quack()

console.log(`Ducks quacked ${QuackCounter.quacks} times`)
