import User from "./User";
import classes from "./UserList.module.css";

export default function UserList(props) {
  return (
    <ul className={classes["user-list"]}>
      {props.users.map((user) => (
        <li>
          <User key={user.id} name={user.name} age={user.age} />
        </li>
      ))}
    </ul>
  );
}
