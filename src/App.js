import { useEffect, useState } from "react";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

const App = () => {
  const [lat, setLat] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    console.log("useEffect");
    window.navigator.geolocation.getCurrentPosition(
      (pos) => {
        console.log("success Async");
        setLat(pos.coords.latitude);
      },
      (err) => {
        setErrorMessage(err.message);
      }
    );
  }, []);

  const renderContent = () =>
    (errorMessage && <div>Error: {errorMessage}</div>) ||
    (lat && <SeasonDisplay lat={lat} />) || (
      <Spinner message="Please accept location request" />
    );
    
  return (
    <div>
      {console.log("render")}
      {renderContent()}
    </div>
  );
};

export default App;
