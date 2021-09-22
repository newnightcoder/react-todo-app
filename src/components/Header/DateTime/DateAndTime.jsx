import moment from "moment";
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

  const today = moment().locale("en").format("dddd, MMMM Do");

  return (
    <DateTime>
      <Today>
        {today} -<Time> {moment(clock).locale("fr").format("LT")}</Time>
      </Today>
    </DateTime>
  );
};

export default DateAndTime;
