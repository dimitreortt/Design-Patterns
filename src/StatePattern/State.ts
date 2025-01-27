export interface State {
    type?: string
    insertQuarter(): void
    ejectQuarter(): void
    turnCrank(): void
    dispense(): void
}

export interface DispensingState extends State {
    type: string;
}

