import ExpensesForm from './ExpensesForm';
import React from 'react';

export default function NewExpenses(props) {
  const onSaveExpenseData = (expense) => {
    const enteredExpenseData = {
      ...expense,
      id: Math.random().toString(),
    };

    props.onAddExpense(enteredExpenseData);
  };
  return (
    <div className="new-expense">
      <ExpensesForm onSaveExpense={onSaveExpenseData} />
    </div>
  );
}
