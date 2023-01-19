import { useState, useEffect } from "react";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import ErrorModal from "../../ErrorModal";
import Data from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from '../../services/stateService';

function Now() {
    // const [errorMessage, setErrorMessage] = useState(null);
    const [weatherData, setWeatherData] = useState(null);

    const searchParams = useSelector((state) => state.searchParams);
    const errorMessage = useSelector(state => state.errorMessage);

    const handleClose = () => dispatch(setErrorMessage(false));

    const dispatch = useDispatch();

    useEffect(() => {
      (async function () {
        try {
          const response = await getWeather(searchParams);
          const data = await response.json();

          if (data.cod !== 200) throw Error(data.message);

          setWeatherData(data);
        } catch (error) {
          console.log(error);
          dispatch(setErrorMessage(error.message));
        }
      })();
    }, [searchParams, dispatch]);

    return (
      <>
        <Data data={weatherData} />
        <Map weatherData={weatherData} />
        <ErrorModal
          message={errorMessage}
          handleClose={handleClose}
        />
      </>
    );
  }

export default Now;