import { Observable } from './Observable'

export class WeatherData extends Observable {
    private temperature: number = 0
    private humidity: number = 0
    private pressure: number = 0

    constructor() {
        super()
    }

    setMeasurements(temperature: number, humidity: number, pressure: number) {
        this.temperature = temperature
        this.humidity = humidity
        this.pressure = pressure
        this.notifyObservers({ temperature, humidity, pressure })
    }
}
