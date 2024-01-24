import "./Map.css";
import { Status, Wrapper } from "@googlemaps/react-wrapper";
import MapComponent from "./MapComponent";

export function Maps() {

  const render = (status: Status) => (<h1>{status}</h1>);

  return (
    <div className="App">
      <Wrapper apiKey={"AIzaSyBPU3ASZTOoGXOGLxYXLvXEIOLS9quWsSY"} render={render}>
        <MapComponent />
      </Wrapper>
    </div>
  );
}