import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useDispatch } from "react-redux";
import { setForecastSelectedData } from "../../services/stateService";

// V kazhdij komponent mozhno peredatj properties sledujushim obrazom:
// <Komponent props1="1" props2={const} />
// Prinimaem v komponente properties kak my prinimaet argumenti v ljuboi funkcii. toesj v skobkah declariruem 
// peremennuju function Komponent(props).
// vse peredannie properties v komponent sobirajutsja v object v dannom komponente peredaetsja {hour}
// Vnutri komponenta properties nevozmozhno izmenitj. 

// V kazhdom komponente estj vsoe sostojanie
// Sostojanie eto vnutrinnie dannie komponenta.
// Dlja raboti s sostojaniem mi ispolzuem react hook useState.
// V useState mi peredaem izna4alnoe zna4enie sostojanija (null)
// useState hook vozvrawaet massiv iz dvuh svoistv.
// 1 peremennaja kotoraja soderzhit v sebe zna4enije peredannoe v useState
// 2 Funkcija kotoraja menjajet pervoe znachenie ili sostojanie.
// Pri zapuske izmenenija sostojanija komponent pererisovivaetsja i novoe znachenie v sostojanie peredaetsja.


// vse react hooki nachinajutsja so slova 'use'.
// vse izmenjajushie sostojanija funkcii nachinajutsja s slova 'set'.

function HourSelector({ hours }) {
  const [selectedHour, setSelectedHour] = useState(0);

  const dispatch = useDispatch();
  useEffect(() => {
    if (hours.length) {
      dispatch(setForecastSelectedData(hours[0].item));
      setSelectedHour(hours[0].hour);
    }
  }, [hours, dispatch, setSelectedHour]);

  const handleOnChangeHours = (hour, item) => {
    setSelectedHour(hour);
    dispatch(setForecastSelectedData(item));
  };

  return (
    <ButtonGroup className="w-100 mb-4">
      {hours.map(({ hour, item }, idx) => (
        <ToggleButton
          key={idx}
          id={`hour-${idx}`}
          type="radio"
          variant="outline-primary"
          name="hour"
          value={hour}
          checked={hour === selectedHour}
          onChange={() => handleOnChangeHours(hour, item)}
        >
          {hour}
        </ToggleButton>
      ))}
    </ButtonGroup>
  );
}

export default HourSelector;