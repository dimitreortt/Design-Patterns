import { Observer } from "./Observer";
import { WeatherDataNotification } from "./WeatherDataNotification";
import { WeatherDisplay } from "./WeatherDisplay";

export class ForecastDisplay implements Observer, WeatherDisplay {
    constructor() { }
    
    update(currentState: WeatherDataNotification): void {
        this.display(currentState)
    }

    display(data: WeatherDataNotification): any {
        console.log(`Forecast: ${data.temperature}°C, ${data.humidity}% humidity, ${data.pressure}`)
    }
}
