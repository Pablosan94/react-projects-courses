import { isAfter, isBefore, isSameDay } from "date-fns";
import { useContext, useEffect, useState } from "react";
import { CalendarContext } from "../../store/calendar-context";
import { v4 as uuidv4 } from "uuid";
import classes from "./Day.module.css";

const Day: React.FC<{
  date: Date;
  imgs?: string[];
  disabled?: boolean;
}> = (props) => {
  const { selectedStartDate, selectedEndDate, selectDate, unselectDate } =
    useContext(CalendarContext);

  const [active, setActive] = useState<boolean>(false);
  const disabled = useState<boolean>(!!props.disabled)[0];

  useEffect(() => {
    if (selectedStartDate && !selectedEndDate) {
      if (isSameDay(props.date, selectedStartDate)) {
        setActive(true);
      } else {
        setActive(false);
      }
    } else if (selectedStartDate && selectedEndDate) {
      if (
        isSameDay(props.date, selectedStartDate) ||
        isSameDay(props.date, selectedEndDate) ||
        (isAfter(props.date, selectedStartDate) &&
          isBefore(props.date, selectedEndDate))
      ) {
        setActive(true);
      }
    } else {
      setActive(false);
    }
  }, [props.date, selectedStartDate, selectedEndDate]);

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
    /*(
      props.date.getDate() === today.getDate() &&
      props.date.getMonth() === today.getMonth() &&
      props.date.getFullYear() === today.getFullYear()
    );*/
  };

  const onClickHandler = () => {
    if (!disabled) {
      selectDate(props.date);

      if (selectedStartDate) {
        if (isSameDay(props.date, selectedStartDate)) {
          unselectDate();
        }
      }
    }
  };

  return (
    <div
      className={`${classes.wrapper} ${disabled ? classes.disabled : ""} ${
        active ? classes.active : ""
      }`}
      onClick={onClickHandler}
    >
      <span className={checkToday() ? classes.today : ""}>
        {props.date.getDate()}
      </span>
      <div className={classes.container}>{images}</div>
    </div>
  );
};

export default Day;
