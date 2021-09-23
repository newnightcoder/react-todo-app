import React from "react";
export const formatTime = (day) => {
  switch (day) {
    case new Date().getDate():
      return <div>today</div>;
    case new Date().getDate() + 1:
      return <div>tomorrow</div>;
    case new Date().getDate() + 7:
      return <div>next week</div>;

    default:
      break;
  }
};
