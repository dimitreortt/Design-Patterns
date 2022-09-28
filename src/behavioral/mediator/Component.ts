import { Mediator } from "./Mediator";

export class Component {
    // dialog?: Mediator
    
    constructor(public dialog: Mediator){    }

    click(){
        this.dialog.notify(this, 'click')
    }

    keypress(){
        this.dialog.notify(this, 'keypress')
    }
}