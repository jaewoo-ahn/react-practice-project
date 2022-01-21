import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredUserName, setEnterdUserName] = useState("");
  const [enteredUserAge, setEnterdUserAge] = useState("");
  const [error, setError] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values). ",
      });
      return;
    }
    if (+enteredUserAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0). ",
      });
      return;
    }

    props.onAddUser(enteredUserName, enteredUserAge);
    setEnterdUserName("");
    setEnterdUserAge("");
  };

  const userNameChangeHandler = (e) => {
    setEnterdUserName(e.target.value);
  };

  const userAgeChangeHandler = (e) => {
    setEnterdUserAge(e.target.value);
  };
  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} />}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={enteredUserName}
            onChange={userNameChangeHandler}
          />
          <label htmlFor="age">Age (years)</label>
          <input
            type="number"
            id="age"
            value={enteredUserAge}
            onChange={userAgeChangeHandler}
          />
          <Button type="submit">Add Users</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUsers;
