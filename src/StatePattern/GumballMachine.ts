import { HasQuarterState } from "./HasQuarterState";
import { NoQuarterState } from "./NoQuarterState";
import { SoldOutState } from "./SoldOutState";
import { SoldState } from "./SoldState";
import { State, DispensingState } from "./State";
import { WinnerState } from "./WinnerState";

export class GumballMachine {
    hasQuarterState: State;
    noQuarterState: State;
    soldState: State;
    soldOutState: State;
    winnerState: State;
    state: State;
    
    constructor(public count: number) {
        this.hasQuarterState = new HasQuarterState(this);
        this.noQuarterState = new NoQuarterState(this);
        this.soldState = new SoldState(this);
        this.soldOutState = new SoldOutState(this);
        this.winnerState = new WinnerState(this);
        this.state = this.soldOutState;
        this.initializeState()
    }

    refill(count: number) {
        this.count += count;
        this.initializeState()
    }

    initializeState() {
        if (this.count > 0) {
            this.state = this.noQuarterState;
        }
    }
    
    insertQuarter() {
        this.state.insertQuarter()
    }

    ejectQuarter() {
        this.state.ejectQuarter()
    }

    turnCrank() {
        this.state.turnCrank()
        if (this.state.type === 'DispensingState') {
            this.state.dispense()
        }
    }

    releaseBall() {
        console.log("A gumball comes rolling out the slot...");
        if (this.count != 0) {
            this.count--;
        }
    }

    setState(state: State) {
        this.state = state;
    }

    isWinner() {
        return Math.floor(Math.random() * 10) === 0
        // return true
    }
}
