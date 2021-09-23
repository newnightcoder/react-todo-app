import format from "date-fns/format";
import "moment/locale/fr";
import React, { useEffect, useState } from "react";
import { DateTime, Time, Today } from "./styles";

const DateAndTime = () => {
  const [clock, setClock] = useState(new Date().toJSON());

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, []);

  const updateTime = () => {
    setClock(new Date().toJSON());
  };

  // const year = new Date().getFullYear();
  // const month = new Date().getMonth();
  // const day = new Date().getDate();
  let today;

  return (
    <DateTime>
      <Today>
        {format(new Date(Date.now()), "EEEE, MMM do")} -
        <Time> {format(Date.now(), "HH:m")}</Time>
      </Today>
    </DateTime>
  );
};

export default DateAndTime;
