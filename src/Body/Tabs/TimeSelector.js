import { useCallback } from "react";
import moment from "moment";
import DaySelector from "./DaySelector";

function TimeSelector({ data }) {

  // useCallback eto react hook kotorij pomogaet opimizirovatj rabotu funkcij
  // useCallback mi peredaem funkciju kotoruju mi hotim zapomnitj i zapuskatj tolko pri neobhodimosi
  // Pri zapuske etoi funkcii zapominajetsja tak zhe ee otvet.
  // useCallback prinimajet spisok zavisimostej kak vtoroi argument.
  // Esli eta funkcija pereispolzuetsja gde libo i v zavisimostjah net izmenenij to funkcija zanovo ne obrabativaetsja.
  //useCallback zapominaet vse 4to proizoshlo v nem i peredaet eto tomu kto vizval.
  const getCurrentData = useCallback(
    (cbFn) => {
      data?.list.forEach((item) => {
        const timestamp = item.dt;
        const momentDate = moment.unix(timestamp);

        const day = momentDate.format("DD");
        const hour = momentDate.format("HH:mm");

        cbFn(item, day, hour);
      });
    },
    [data]
  );

  return (
    <>
      <DaySelector
        data={data}
        getCurrentData={getCurrentData}
      />
    </>
  );
}

export default TimeSelector;