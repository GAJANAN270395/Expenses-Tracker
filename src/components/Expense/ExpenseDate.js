import React from 'react';
import './ExpenseDate.css';
const ExpenseDate = (props) => {
  // const month = props.date.toLocaleString('en-US', { month: 'long' });
  // const day = props.date.toLocaleString('en-US', { day: '2-digit' });
  // const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">Jun</div>
      <div className="expense-date__year">2015</div>
      <div className="expense-date__day">15</div>
    </div>
  );
};

export default ExpenseDate;
