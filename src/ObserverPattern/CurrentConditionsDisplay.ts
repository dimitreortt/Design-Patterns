import { Observer } from "./Observer";
import { WeatherDataNotification } from "./WeatherDataNotification";
import { WeatherDisplay } from "./WeatherDisplay";

export class CurrentConditionsDisplay implements Observer, WeatherDisplay {
    constructor() { }
    
    update(currentState: WeatherDataNotification): void {
        this.display(currentState)
    }
    
    display(params: WeatherDataNotification) {
        console.log(`Current conditions: ${params.temperature}°C, ${params.humidity}%`)
    }
}
