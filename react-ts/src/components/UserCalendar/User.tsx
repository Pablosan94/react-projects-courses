import {
  addDays,
  addWeeks, endOfWeek,
  isBefore,
  isSameDay, startOfWeek
} from "date-fns";
import { useContext } from "react";
import { v4 as uuidv4 } from "uuid";
import { TeamCalendarContext } from "../../store/team-calendar-context";
import classes from "./User.module.css";
import Week from "./Week";

const User: React.FC<{}> = (props) => {
  const { weeksToShow } = useContext(TeamCalendarContext);

  const getDaysForWeeks = (): Date[] => {
    const today = new Date();

    let weekStart = startOfWeek(today, { weekStartsOn: 1 });
    let weekEnd = endOfWeek(today, { weekStartsOn: 6 });
  
    const days = [];
    let weekCount = weeksToShow;
  
    while (weekCount) {
      while (isBefore(weekStart, weekEnd) || isSameDay(weekStart, weekEnd)) {
        days.push(weekStart);
        weekStart = addDays(weekStart, 1);
      }
  
      weekStart = startOfWeek(addWeeks(weekStart, 1), { weekStartsOn: 1 });
      weekEnd = endOfWeek(weekStart, { weekStartsOn: 6 });
      weekCount--;
    }

    return days;
  }

  let weeksJSX: JSX.Element[] = [];
  for (let i = 0; i < weeksToShow; i++) {
    let days = getDaysForWeeks().splice(0, 5);

    weeksJSX.push(<Week days={days} key={uuidv4()} />);
  }

  return (
    <div className={classes.user} data-id="user">
      <div className={classes.avatar}></div>
      <div className={classes.weeks} data-id="weeks">
        {weeksJSX.map((week) => week)}
      </div>
    </div>
  );
};

export default User;
