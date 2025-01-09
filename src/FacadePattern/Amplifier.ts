import { DVD } from "./DVD";

export class Amplifier {
    private volume: number = 0

    constructor() { }

    on() {
        console.log("Amplifier is on");
    }

    off() {
        console.log("Amplifier is off");
    }

    setDvd(dvd: DVD) {
        console.log('Setting DVD')
    }

    setSurroundSound() {
        console.log('Setting Surround Sound')
    }

    setVolume(volume: number) {
        this.volume = volume;
    }
}
