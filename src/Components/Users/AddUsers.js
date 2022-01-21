import React, {useState} from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUsers.module.css";

const AddUsers = (props) => {
  const [enteredUserName, setEnterdUserName] = useState("");
  const [enteredUserAge, setEnterdUserAge] = useState("");
  const addUserHandler = (e) => {
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    e.preventDefault();
    console.log(enteredUserName, enteredUserAge);
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
  );
};

export default AddUsers;
