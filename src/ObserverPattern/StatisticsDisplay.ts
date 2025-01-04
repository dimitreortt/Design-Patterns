import { Observer } from "./Observer";
import { WeatherDataNotification } from "./WeatherDataNotification";
import { WeatherDisplay } from "./WeatherDisplay";

export class StatisticsDisplay implements Observer, WeatherDisplay {
    constructor() { }

    update(currentState: WeatherDataNotification): void {
        this.display(currentState);
    }

    display(data: WeatherDataNotification) {
        console.log(`StatisticsDisplay: Temperature = ${data.temperature}°C, Humidity = ${data.humidity}`)
    }
}
