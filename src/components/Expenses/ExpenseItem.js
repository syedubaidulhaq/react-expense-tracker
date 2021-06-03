import React, { useState } from "react";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";
import Card from "../UI/Card";
const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickedHandler = () => {
    setTitle("Updated!!!");
    console.log(title);
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2 className="expense-item h2">{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickedHandler}>Change Title</button>
      </div>
    </Card>
  );
};
export default ExpenseItem;
