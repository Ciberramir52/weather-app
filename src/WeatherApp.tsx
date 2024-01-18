import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./router";
import { Provider } from 'react-redux';

function WeatherApp() {
  return (
    // <Provider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    // </Provider>
  )
}

export default WeatherApp;
