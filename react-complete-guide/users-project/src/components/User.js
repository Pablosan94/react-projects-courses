import Card from "./UI/Card";
import classes from './User.module.css';

export default function User(props) {
  return (
    <Card className={classes.user}>
      <div>
        <div>{`${props.name} (age ${props.age})`}</div>
      </div>
    </Card>
  );
}
