import { Amplifier } from './Amplifier'
import { DVD } from './DVD'
import { Movie } from './Movie'
import { PopcornPopper } from './PopcornPopper'
import { Projector } from './Projector'
import { Screen } from './Screen'
import { TheaterLights } from './TheaterLights'

export class HomeTheaterFacade {
    constructor(
        readonly amp: Amplifier,
        readonly lights: TheaterLights,
        readonly popper: PopcornPopper,
        readonly projector: Projector,
        readonly dvd: DVD,
        readonly screen: Screen,
    ) { }

    watchMovie(movie: string) {
        console.log('Get ready to watch a movie!')
        this.popper.on()
        this.popper.pop()
        this.lights.dim(10)
        this.screen.down()
        this.projector.on()
        this.amp.on()
        this.amp.setDvd(this.dvd)
        this.amp.setSurroundSound()
        this.amp.setVolume(5)
        this.dvd.on()
        this.dvd.play(new Movie(movie))
    }

    endMovie() {
        console.log('Shutting theater movie down...')
        this.popper.off()
        this.lights.on()
        this.screen.up()
        this.projector.off()
        this.amp.off()
        this.dvd.stop()
        this.dvd.eject()
        this.dvd.off()
    }
}
