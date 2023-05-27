import "./App.css";
import Weather from "./Weather";
import { InfinitySpin } from "react-loader-spinner";

function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>

      <Weather />
      <InfinitySpin
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="three-dots-loading"
        wrapperStyle
        wrapperClass
      />
    </div>
  );
}

export default App;
