import { Observer } from "./Observer";

export class Observable {
    subscribers: Observer[] = [];

    constructor() { }

    registerObserver(ob: Observer): void {
        this.subscribers.push(ob);
    }

    removeObserver(ob: Observer): void {
        const index = this.subscribers.indexOf(ob);
        if (index !== -1) {
            this.subscribers.splice(index, 1);
        }
    }

    notifyObservers(params: any): void {
        for (const observer of this.subscribers) {
            observer.update(params, this);
        }
    }
}
