import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class HasQuarterState implements State {
    constructor(private gumballMachine: GumballMachine) {
    }

    insertQuarter(): void {
        console.log('Already has quarter inserted')
    }

    ejectQuarter(): void {
        console.log('Quarter ejected!')
        this.gumballMachine.setState(this.gumballMachine.noQuarterState)
    }

    turnCrank(): void {
        console.log('Crank turned...')
        this.gumballMachine.setState(this.gumballMachine.soldState)

        const isWinner = this.gumballMachine.isWinner()

        if (this.gumballMachine.count > 1 && isWinner) {
            this.gumballMachine.setState(this.gumballMachine.winnerState)
        } else {
            this.gumballMachine.setState(this.gumballMachine.soldState)
        }
    }

    dispense(): void {
        console.log('Please turn crank before dispensing')
    }
}
