import { useState, useEffect } from "react";
import User from "./User";
import classes from "./UserCalendar.module.css";
import { v4 as uuidv4 } from "uuid";

const UserCalendar: React.FC = () => {
  const [users, setUsers] = useState<string[]>([]);

  useEffect(() => {
    setUsers(["user1", "user2", "user3"]);
  }, []);

  return (
    <div className={classes.wrapper}>
      <div className={classes.users} data-id="users">
        {users.map(() => (
          <User key={uuidv4()} />
        ))}
      </div>
    </div>
  );
};

export default UserCalendar;
