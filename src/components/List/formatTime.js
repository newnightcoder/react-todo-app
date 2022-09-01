import {
  compareAsc,
  differenceInCalendarDays,
  formatDistanceToNowStrict,
} from "date-fns";
import enLocale from "date-fns/locale/en-GB";

export const formatTime = (selectedYear, selectedMonth, selectedDay) => {
  const comparison = differenceInCalendarDays(
    new Date(selectedYear, selectedMonth - 1, selectedDay),
    new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate()
    )
  );
  switch (comparison) {
    case 0:
      return "today";
    case 1:
      return "tomorrow";
    case 2:
      return "in 2 days";
    default:
      return formatDistanceToNowStrict(
        new Date(selectedYear, selectedMonth - 1, selectedDay),
        {
          addSuffix: true,
          locale: enLocale,
        }
      );
  }
};

export const compareTime = (array) => {
  const sortedArray = array.sort((a, b) => {
    if (
      compareAsc(
        new Date(
          a.selectedDate.split("-")[0],
          a.selectedDate.split("-")[1],
          a.selectedDate.split("-")[2]
        ),
        new Date(
          b.selectedDate.split("-")[0],
          b.selectedDate.split("-")[1],
          b.selectedDate.split("-")[2]
        )
      ) === 1
    )
      return 1;
    if (
      compareAsc(
        new Date(
          a.selectedDate.split("-")[0],
          a.selectedDate.split("-")[1],
          a.selectedDate.split("-")[2]
        ),
        new Date(
          b.selectedDate.split("-")[0],
          b.selectedDate.split("-")[1],
          b.selectedDate.split("-")[2]
        )
      ) === -1
    )
      return -1;
    return 0;
  });
  return sortedArray;
};
