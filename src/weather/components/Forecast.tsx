import { Weather } from "../../helpers";
import { ForecastItem } from "./";

const saveActualForecast = ( list: any[] ) => {
    const positions = [ 7, 15, 23, 31, 39 ]
    let actualForecast = [];
    for ( let i = 0; i < 5; i ++) {
        actualForecast.push( list[ positions[i] ] )
    }

    return actualForecast;
}

export function Forecast( { weather }:Weather ) {
    const weatherForecast = weather.list;
    const actualList = saveActualForecast( weatherForecast );   
    
    return ( 
        <div id="forecast">
            <h2>5-day forecast</h2>
            <div id="forecast-container">
                {
                    actualList.map( day => <ForecastItem timezone={ weather.city.timezone } day={ day } key={ day.dt } />)
                }
            </div>
        </div>
     );
}