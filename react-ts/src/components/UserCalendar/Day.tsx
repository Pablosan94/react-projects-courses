import { isSameDay } from "date-fns";
import { v4 as uuidv4 } from "uuid";
import classes from "./Day.module.css";

const Day: React.FC<{
  date: Date;
  imgs?: string[];
  disabled?: boolean;
  showDate?: boolean;
}> = (props) => {
  let images: JSX.Element = <></>;

  if (props.imgs && props.imgs.length > 1) {
    images = (
      <>
        {props.imgs?.map((img) => (
          <img
            src={img}
            alt=""
            className={classes["half-img"]}
            key={uuidv4()}
          />
        ))}
      </>
    );
  } else if (props.imgs && props.imgs.length === 1) {
    images = <img src={props.imgs[0]} alt="" className={classes["full-img"]} />;
  }

  const checkToday = () => {
    const today = new Date();

    return isSameDay(props.date, today);
  };

  return (
    <div className={classes.wrapper}>
      {props.showDate && (
        <>
          <div className={classes["day-name"]} data-id="day-name">
            {props.date.toLocaleString("default", { weekday: "short" })}
          </div>
          <span className={checkToday() ? classes.today : ""} data-id="day-format">
            {props.date.toLocaleString("default", {
              day: "2-digit",
              month: "2-digit",
            })}
          </span>
        </>
      )}
      <div className={classes.container}>{images}</div>
    </div>
  );
};

export default Day;
