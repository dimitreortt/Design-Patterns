import { GumballMachine } from "./GumballMachine";
import { DispensingState } from "./State";

export class WinnerState implements DispensingState {
    type = 'DispensingState'

    constructor(private gumballMachine: GumballMachine) {}

    insertQuarter(): void {
        console.log('Wait, we\'re already giving you 2 gumballs')
    }

    ejectQuarter(): void {
        console.log('No quarter to be ejected')
    }

    turnCrank(): void {
        console.log('Wait, we\'re already giving you 2 gumballs')
    }

    dispense(): void {
        console.log('You\'re a winner! You get two gumballs for your quarter')
        this.gumballMachine.releaseBall()
        this.gumballMachine.releaseBall()

        if (this.gumballMachine.count > 0) {
            this.gumballMachine.setState(this.gumballMachine.noQuarterState)
        } else {
            this.gumballMachine.setState(this.gumballMachine.soldOutState)
        }
    }
}
