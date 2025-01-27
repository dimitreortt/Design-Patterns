import { GumballMachine } from "./GumballMachine";
import { DispensingState } from "./State";

export class SoldState implements DispensingState {
    type = 'DispensingState'

    constructor(private gumballMachine: GumballMachine) {}

    insertQuarter(): void {
        console.log('Wait, we\'re already giving you a gumball');
    }

    ejectQuarter(): void {
        console.log('no quarter inserted');
    }

    turnCrank(): void {
        console.log('Wait, we\'re already giving you a gumball');
    }

    dispense(): void {
        if (this.gumballMachine.count <= 0) {
            throw new Error('You shouldn\'t have sold a gumball if no gumball left')
        }
        this.gumballMachine.releaseBall()
        if (this.gumballMachine.count > 0) {
            this.gumballMachine.setState(this.gumballMachine.noQuarterState)
        } else {
            this.gumballMachine.setState(this.gumballMachine.soldOutState)
        }
    }
}
