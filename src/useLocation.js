import { useEffect, useState } from "react";

const useLocation = () => {
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
  return [lat, errorMessage];
};

export default useLocation;
