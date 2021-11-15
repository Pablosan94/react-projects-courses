import { useState } from "react";
import classes from "./AddUser.module.css";
import Wrapper from "./Helpers/Wrapper";
import Button from "./UI/Button";
import ErrorModal from "./UI/ErrorModal";

export default function Form(props) {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [error, setError] = useState();

  function changeUserNameHandler(event) {
    setUserName(event.target.value);
  }

  function changeUserAgeHandler(event) {
    setUserAge(event.target.value);
  }

  function addUserHandler(event) {
    event.preventDefault();

    if (!userName || !userAge) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+userAge > 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    const newUser = {
      name: userName,
      age: userAge,
    };

    props.onUserSave(newUser);

    setUserName("");
    setUserAge("");
  }

  function errorHandler() {
    setError(null);
  }

  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <div className={classes.form}>
        <form onSubmit={addUserHandler}>
          <div
            className={`${classes["form-control"]} ${
              !userName && classes.invalid
            }`}
          >
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              value={userName}
              onChange={changeUserNameHandler}
            />
          </div>
          <div
            className={`${classes["form-control"]} ${
              !userAge && classes.invalid
            }`}
          >
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
          <Button type="submit">Add User</Button>
        </form>
      </div>
    </Wrapper>
  );
}
