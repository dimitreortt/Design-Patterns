import { Amplifier } from './Amplifier'
import { DVD } from './DVD'
import { HomeTheaterFacade } from './HomeTheaterFacade'
import { PopcornPopper } from './PopcornPopper'
import { Projector } from './Projector'
import { Screen } from './Screen'
import { TheaterLights } from './TheaterLights'

const homeTheater = new HomeTheaterFacade(
    new Amplifier(),
    new TheaterLights(),
    new PopcornPopper(),
    new Projector(),
    new DVD(),
    new Screen()
)

homeTheater.watchMovie('The Legend of Bagger Vance')
homeTheater.endMovie()