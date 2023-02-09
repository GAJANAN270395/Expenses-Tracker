import React from 'react';
import Card from '../UI/Card';
import './ExpensesItem.css';
import ExpenseDate from './ExpenseDate';
const ExpensesItems = (props) => {
  return (
    <Card className=" expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.expense}</h2>
        <h2>{props.category}</h2>
        <div className="expense-item__price">Rs.{props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpensesItems;
