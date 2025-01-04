import { CurrentConditionsDisplay } from "./CurrentConditionsDisplay";
import { ForecastDisplay } from "./ForecastDisplay";
import { StatisticsDisplay } from "./StatisticsDisplay";
import { WeatherData } from "./WeatherData";

const obj = new WeatherData()
const forecastDisplay = new ForecastDisplay()
const statisticsDisplay = new StatisticsDisplay()
const currentConditionsDisplay = new CurrentConditionsDisplay()

obj.registerObserver(forecastDisplay)
obj.registerObserver(statisticsDisplay)
obj.registerObserver(currentConditionsDisplay)
obj.removeObserver(currentConditionsDisplay)

obj.setMeasurements(1,2,3)
