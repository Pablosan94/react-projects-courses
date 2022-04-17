import { v4 as uuidv4 } from "uuid";
import Day from "./Day";
import classes from "./Week.module.css";

const Week: React.FC<{
  days: Date[];
}> = (props) => {
  return (
    <div className={classes.week} key={uuidv4()} data-id="week">
      <div className={classes.days} data-id="days">
        {props.days.map((day) => (
          <Day date={day} key={uuidv4()} showDate={true} />
        ))}
      </div>
    </div>
  );
};

export default Week;
