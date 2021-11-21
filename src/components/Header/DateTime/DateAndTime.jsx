import format from "date-fns/format";
import React, { useEffect, useState } from "react";
import { DateTime, Span, Time, Today } from "./styles";

const DateAndTime = () => {
  const [clock, setClock] = useState(new Date().toJSON());

  const updateTime = () => {
    setClock(new Date().toJSON());
  };

  useEffect(() => {
    setInterval(() => updateTime(), 1000);
  }, []);

  return (
    <DateTime>
      <Today>{format(new Date(Date.now()), "EEEE, MMM do")} </Today>
      <Span>-</Span>
      <Time> {format(Date.now(), "HH:mm")}</Time>
    </DateTime>
  );
};

export default DateAndTime;
