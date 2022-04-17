import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: firstName,
    valid: firstNameIsValid,
    hasError: firstNameHasError,
    valueChangeHandler: firstNameChange,
    inputBlurHandler: firstNameBlur,
    reset: firstNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    valid: lastNameIsValid,
    hasError: lastNameHasError,
    valueChangeHandler: lastNameChange,
    inputBlurHandler: lastNameBlur,
    reset: lastNameReset,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valid: emailIsValid,
    hasError: emailHasError,
    valueChangeHandler: emailChange,
    inputBlurHandler: emailBlur,
    reset: emailReset,
  } = useInput((value) => /[a-zA-Z0-9]+@[a-zA-Z]+.com$/.test(value.trim()));

  let formIsValid = false;

  if (firstNameIsValid && lastNameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = (event) => {
    event.preventDefault();

    if (!formIsValid) return;

    firstNameReset();
    lastNameReset();
    emailReset();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="control-group">
        <div
          className={
            firstNameHasError ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={firstName}
            onChange={firstNameChange}
            onBlur={firstNameBlur}
          />
        </div>
        <div
          className={lastNameHasError ? "form-control invalid" : "form-control"}
        >
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={lastName}
            onChange={lastNameChange}
            onBlur={lastNameBlur}
          />
        </div>
      </div>
      <div className={emailHasError ? "form-control invalid" : "form-control"}>
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onChange={emailChange}
          onBlur={emailBlur}
        />
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
