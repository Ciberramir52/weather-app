import ReactDOM from 'react-dom/client'
import './index.css'
import { Maps } from './googlemaps/Map'
import WeatherApp from './WeatherApp'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
    <WeatherApp />
  // </React.StrictMode>,
)
