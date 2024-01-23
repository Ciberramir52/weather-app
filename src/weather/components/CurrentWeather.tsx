import { Weather } from "./WeatherInterface";

export function CurrentWeather( { weather }:Weather ) {
    
    const city = weather.city;
    
    const currentWeather = weather.list[0];
    const actualWeather = currentWeather.weather[0];
    const wind = currentWeather.wind;

    const weatherDT = currentWeather.dt_text as string;

    const today = new Date();
    const todayStrings = today.toString().split(" ");
    const month = todayStrings[1];
    const day = todayStrings[2];
    const time = todayStrings[0];

    console.log(today)
    
    return ( 
        <div id="current">
            <h3 className="today">{ time }, { month } { day }</h3>
            <h2>{ city.name }, { city.country }</h2>
            <div>
                <img src={`https://openweathermap.org/img/wn/${actualWeather.icon}.png`} alt="CurrentWeather" />
                <strong>{ ( currentWeather.main.temp - 273.15 ).toFixed( 2 ) } °C</strong>
                <h3>Feels like { ( currentWeather.main.feels_like - 273.15).toFixed( 2 ) } °C, { actualWeather.description },</h3>
                <p>Wind: { wind.speed } m/s { wind.deg }°    Pressure: { currentWeather.main.pressure } hPa</p>
                <p>Humidity: { currentWeather.main.humidity }   Visibility: { currentWeather.visibility / 1000 } Km</p>
            </div>

        </ div>
     );
}