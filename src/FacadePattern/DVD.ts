import { Movie } from "./Movie";

export class DVD {
    constructor() { }

    on() {
        console.log("DVD is on");
    }

    play(movie: Movie) {
        console.log("DVD is playing " + movie.title);
    }

    stop() {
        console.log("DVD is stopped");
    }

    eject() {
        console.log("DVD is ejetcting");
    }

    off() {
        console.log("DVD is off");
    }
}
