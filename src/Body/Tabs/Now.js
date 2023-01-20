import { useState, useEffect } from "react";
import Map from "./Map";
import { getWeather } from "../../services/apiService";
import Data from "./Data";
import { useSelector, useDispatch } from "react-redux";
import { setErrorMessage } from '../../services/stateService';

function Now() {
  
    const [weatherData, setWeatherData] = useState(null);

    const searchParams = useSelector((state) => state.searchParams);

    const dispatch = useDispatch();
    
    useEffect(() => {
      (async function () {
        try {
          // Zaprosi na server i pri udachnom rasklade vozvrashajut Response object.
          // etot object hranit v sebe status i mnogoe drugoe.
          // tak zhe hranit dannie v bufere.
          const response = await getWeather(searchParams);

          // json() funkcija beret etot bufer i prevrawaet ego v js object.
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
      </>
    );
  }

export default Now;