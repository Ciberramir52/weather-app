import { Weather } from "../../helpers/";

export function CurrentWeather( { weather }:Weather ) {
    
    const city = weather.name;

    const country = weather.sys.country;
    
    const actualWeather = weather.weather[0];
    const wind = weather.wind;

    const today = new Date(weather.dt*1000+(weather.timezone*1000)+18000*1000);
    const todayStrings = today.toString().split(" ");
    const month = todayStrings[1];
    const day = todayStrings[2];
    const time = todayStrings[4];
    
    return ( 
        <div id="current">
            <h3 className="today">{ month } { day },  { time }</h3>
            <h2>{ city }, { country }</h2>
            <div>
                <img src={`https://openweathermap.org/img/wn/${actualWeather.icon}.png`} alt="CurrentWeather" />
                <strong>{ ( weather.main.temp - 273.15 ).toFixed( 2 ) } °C</strong>
                <h3>Feels like { ( weather.main.feels_like - 273.15).toFixed( 2 ) } °C, { actualWeather.description },</h3>
                <p>Wind: { wind.speed } m/s { wind.deg }°    Pressure: { weather.main.pressure } hPa</p>
                <p>Humidity: { weather.main.humidity }   Visibility: { weather.visibility / 1000 } Km</p>
            </div>

        </ div>
     );
}