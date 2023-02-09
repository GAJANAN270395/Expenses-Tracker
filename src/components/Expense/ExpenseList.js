import React from 'react';
import ExpensesItem from './ExpensesItem';

const ExpenseList = (props) => {
  return (
    <ul className="expense_list">
      {props.expenses.map((item) => (
        <ExpensesItem
          key={item.id}
          expense={item.expense}
          category={item.category}
          amount={item.amount}
        />
      ))}
    </ul>
  );
};
export default ExpenseList;
