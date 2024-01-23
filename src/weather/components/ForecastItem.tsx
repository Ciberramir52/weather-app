interface dayForecast {
    day: any
    timezone: number
}

export function ForecastItem( { day, timezone }:dayForecast ) {
    const date = new Date(day.dt*1000+(timezone*1000)+18240*1000);
    const dateStrings = date.toString().split(" ");    

    return ( 
        <div className="forecast-item">
            <div className="forecast-day">
                <span>{ dateStrings[0] }, { dateStrings[1] } { dateStrings[2] }</span>
            </div>
            <div className="forecast-temp">
                <span>

                    <img width={ '40px' } src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`} alt="" />
                    { ( day.main.temp - 273.15 ).toFixed(2) } / { ( day.main.feels_like - 273.15 ).toFixed(2) } °C
                </span>
            </div>
            <div className="forecast-info">
                <span>{ day.weather[0].description }</span>
            </div>
        </div>
     );
}