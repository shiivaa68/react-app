import CardUser from "../UI/CardUser.js";
import classes from "./AddUser.module.css";
import Button from "../UI/Button.js";
import { useState } from "react";
import ErrorModal from "../UI/ErrorModal.js";

const AddUser = (props) => {
  const [enterUsername, setEnterUsername] = useState("");
  const [enterAge, setEnterAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enterUsername.trim().length === 0 || enterAge.trim().length === 0) {
      setError({
        title: "invalid input",
        message: "please enter a valid name and age",
      });
      return;
    }
    if (+enterAge < 1) {
      setError({
        title: "invalid age",
        message: "please enter a valid age (>0)",
      });
      return;
    }
    props.onAddUser(enterUsername, enterAge);
    setEnterUsername("");
    setEnterAge("");
  };
  const usernameHandler = (event) => {
    setEnterUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnterAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null);
  };

  return (
    <>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <CardUser className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">user name</label>
          <input
            id="username"
            type="text"
            value={enterUsername}
            onChange={usernameHandler}
          />
          <label htmlFor="age">age</label>
          <input
            type="number"
            id="age"
            value={enterAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </CardUser>
    </>
  );
};
export default AddUser;
