import { useEffect, useState } from "react";
import TimeSelector from "./TimeSelector";
import Map from "./Map";
import { getForecast } from "../../services/apiService";
import ErrorModal from "../../ErrorModal";

function Forecast() {

  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    (async function () {
      try {
        const weather = await getForecast();
        const response = await weather.json();

        console.log('response', response);

        if (response.cod !== 200) {
          throw Error(response.message);
        }
      } catch (error) {
        console.log(error);
        setErrorMessage(error.message);
      }
    })()
  }, []);

  return (
    <>
      <TimeSelector id="forcast" />
      <Map />
      <ErrorModal message={errorMessage} handleClose={() => setErrorMessage(null)} />
    </>
  );
}

export default Forecast;