import { useState } from "react";
import classes from "./AddUser.module.css";
import Button from "./UI/Button";

export default function Form(props) {
  const [userName, setUserName] = useState('');
  const [userAge, setUserAge] = useState('');

  function changeUserNameHandler(event) {
    setUserName(event.target.value);
  }

  function changeUserAgeHandler(event) {
    setUserAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();

    if (!userName || !userAge) return;

    const newUser = {
      name: userName,
      age: userAge
    }

    props.onUserSave(newUser);

    setUserName('');
    setUserAge('');
  }

  return (
    <div className={classes.form}>
      <form onSubmit={addUserHandler}>
        <div className={`${classes["form-control"]} ${!userName && classes.invalid}`}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            value={userName}
            onChange={changeUserNameHandler}
          />
        </div>
        <div className={`${classes["form-control"]} ${!userAge && classes.invalid}`}>
          <label htmlFor="age">Age</label>
          <input
            type="number"
            id="age"
            min="1"
            step="1"
            value={userAge}
            onChange={changeUserAgeHandler}
          />
        </div>
        <Button type="submit" >Add User</Button>
      </form>
    </div>
  );
}
