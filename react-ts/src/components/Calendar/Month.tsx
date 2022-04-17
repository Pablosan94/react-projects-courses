import { isBefore, isSameDay, isSameMonth, isWeekend } from "date-fns";
import { addDays } from "date-fns/esm";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Day from "./Day";
import classes from "./Month.module.css";

const Month: React.FC<{
  month: number;
  year: number;
  currentMonth?: boolean;
}> = (props) => {
  const currentMonth = useState<boolean>(!!props.currentMonth)[0];

  const getDaysInMonth = (month: number, year: number): JSX.Element[] => {
    let days: Date[] = [];

    // This will correct month format for JS Date object (0-indexed).
    month--;

    // Manage first calendar day selection
    let firstDay = new Date(year, month, 1);
    let firstDayOfWeek = firstDay.getDay();

    if (firstDayOfWeek === 6 || firstDayOfWeek === 0) {
      do {
        firstDay.setDate(firstDay.getDate() + 1);
        firstDayOfWeek = firstDay.getDay();
      } while (firstDayOfWeek !== 1);
    } else if (firstDayOfWeek > 1 && firstDayOfWeek <= 5) {
      do {
        firstDay.setDate(firstDay.getDate() - 1);
        firstDayOfWeek = firstDay.getDay();
      } while (firstDayOfWeek !== 1);
    }

    // Manage last calendar day selection
    let lastDay = new Date(year, month + 1, 0);
    let lastDayOfWeek = lastDay.getDay();

    if (lastDayOfWeek === 6 || lastDayOfWeek === 0) {
      do {
        lastDay.setDate(lastDay.getDate() - 1);
        lastDayOfWeek = lastDay.getDay();
      } while (lastDayOfWeek !== 5);
    } else if (lastDayOfWeek >= 1 && lastDayOfWeek < 5) {
      do {
        lastDay.setDate(lastDay.getDate() + 1);
        lastDayOfWeek = lastDay.getDay();
      } while (lastDayOfWeek !== 5);
    }

    let pivot = firstDay;
    while (isBefore(pivot, lastDay) || isSameDay(pivot, lastDay)) {
      if (!isWeekend(pivot)) {
        days.push(pivot);
      }

      pivot = addDays(pivot, 1);
    }

    let jsxBuffer = [];

    for (let i = 0; i < 5; i++) {
      const datesToPush = days.splice(0, 5);

      jsxBuffer.push(
        <div className={classes.row} key={uuidv4()}>
          {datesToPush.map((date) => (
            <Day
              date={date}
              key={uuidv4()}
              disabled={!isSameMonth(new Date(year, month, 1), date)}
            />
          ))}
        </div>
      );
    }

    return jsxBuffer;
  };

  return (
    <div className={`${classes.month} ${currentMonth ? classes.current : ""}`}>
      <div className={classes.header}>
        <span className={classes["month-name"]}>
          {new Date(props.year, props.month - 1, 1).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </span>

        <div className={classes["day-names"]}>
          <span>Mon</span>
          <span>Tue</span>
          <span>Wed</span>
          <span>Thu</span>
          <span>Fri</span>
        </div>
      </div>
      {getDaysInMonth(props.month, props.year)}
    </div>
  );
};

export default Month;
