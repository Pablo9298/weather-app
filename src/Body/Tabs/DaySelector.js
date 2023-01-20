import { useState, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import HourSelector from "./HourSelector";
import moment from "moment";

function DaySelector({
  data,
  getCurrentData,
}) {
  const [selectedDay, setSelectedDay] = useState(0);
  const [days, setDays] = useState([]);
  const [hours, setHours] = useState([]);


  // useEffect eto react hook kotorij pomogaet rabotatj s dannqmi komponenta
  // on zapuskaetsja srazy posle togo kak komponent zakon4it otrisovku/render.
  // tak zhe useEffect prinimaet massiv s zavisimostimi kotorie mogut kontrolirovatj zapusk useEffect.
  // Esli odin iz zavisimosti pomenjajet zna4enie to useEffect zapuskaetsja.
  // useEffect ne zapuskaet novuju otrisovku.No garantiruet 4to esli vnutri nego menjajut sostojanie
  // to otrisovka proizoidet tolko 1 raz.
  // Esli datj pustoi spisok zavisimoistei [], to useEffect sraboatetolko odin raz posle pervoi otrisovki 
  // komponenta i bolwe nikogda.

  useEffect(() => {
    const firstDay = moment.unix(data?.list[0].dt).format("DD");
    setSelectedDay(firstDay);

    const hours = [];
    const days = [];

    getCurrentData((item, day, hour) => {
      if (!days.includes(day)) {
        days.push(day);
      }
      if (!hours.includes(hour) && day === firstDay) {
        hours.push({ hour, item: { ...item, coord: data.city.coord } });
      }
    });
    setDays(days);
    setHours(hours);
  }, [data, setSelectedDay, getCurrentData]);

  const handleOnChangeDays = (event) => {
    setSelectedDay(event.currentTarget.value);
    const hours = [];

    getCurrentData((item, day, hour) => {
      if (!hours.includes(hour) && day === event.currentTarget.value) {
        hours.push({ hour, item: { ...item, coord: data.city.coord } });
      }
    });
    setHours(hours);
  };

  return (
    <>
      <ButtonGroup className="w-100 mb-3">
        {days.map((day, idx) => (
          <ToggleButton
            key={idx}
            id={`day-${idx}`}
            type="radio"
            variant="outline-primary"
            name="day"
            value={day}
            checked={day === selectedDay}
            onChange={handleOnChangeDays}
          >
            {day}
          </ToggleButton>
        ))}
      </ButtonGroup>
      <HourSelector
        hours={hours}
        selectedDay={selectedDay}
      />
    </>
  );
}

export default DaySelector;