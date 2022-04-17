import { addMonths, isSameMonth } from "date-fns";
import classes from "./Calendar.module.css";
import { v4 as uuidv4 } from "uuid";

import Month from "./Month";

const Calendar: React.FC = () => {
  const today = new Date();

  const months = [
    addMonths(today, -1).getMonth() + 1,
    today.getMonth() + 1,
    addMonths(today, 1).getMonth() + 1,
    addMonths(today, 2).getMonth() + 1,
    addMonths(today, 3).getMonth() + 1,
    addMonths(today, 4).getMonth() + 1,
  ];

  return (
    <div className={classes.calendar}>
      {months.map(month => <Month month={month} year={today.getFullYear()} key={uuidv4()} currentMonth={isSameMonth(new Date(today.getFullYear(), month - 1, 1), today)} />)}
    </div>
  );
};

export default Calendar;
