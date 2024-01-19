import { BrowserRouter } from 'react-router-dom'
import { AppRouter } from "./router";
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

function WeatherApp() {
  return (
    <Provider store={ store }>
      <PersistGate loading={null} persistor={ persistor }>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default WeatherApp;
