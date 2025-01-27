import { GumballMachine } from "./GumballMachine";
import { State } from "./State";

export class SoldOutState implements State {
    constructor(private gumballMachine: GumballMachine) {}

    insertQuarter(): void {
        console.log('Can\'t insert quarter, we have no gumballs left')
    }

    ejectQuarter(): void {
        console.log('No quarter to be ejected')
    }

    turnCrank(): void {
        console.log('No quarter injected')
    }

    dispense(): void {
        console.log('We have no gumballs left')
    }
}
