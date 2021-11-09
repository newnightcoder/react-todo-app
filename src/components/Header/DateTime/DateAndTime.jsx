import format from "date-fns/format";
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

  return (
    <DateTime>
      <Today>{format(new Date(Date.now()), "EEEE, MMM do")} </Today>-
      <Time> {format(Date.now(), "HH:m")}</Time>
    </DateTime>
  );
};

export default DateAndTime;
