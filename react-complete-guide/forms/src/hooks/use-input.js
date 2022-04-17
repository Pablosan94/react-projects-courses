import { useState } from "react";

const useInput = (validationFn) => {
  const [value, setValue] = useState("");
  const [touched, setTouched] = useState(false);

  const valid = validationFn(value);
  const hasError = !valid && touched;

  const valueChangeHandler = (event) => {
    setValue(event.target.value);
  };

  const inputBlurHandler = (event) => {
    setTouched(true);
  };

  const reset = () => {
    setValue("");
    setTouched(false);
  };

  return {
    hasError,
    value,
    valid,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  };
};

export default useInput;
