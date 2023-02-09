import React from 'react';
import Card from '../UI/Card';
import './Expense.css';
import ExpenseList from './ExpenseList';

const Expense = (props) => {
  return (
    <Card className=" expense">
      <ExpenseList expenses={props.expense} />
    </Card>
  );
};

export default Expense;
