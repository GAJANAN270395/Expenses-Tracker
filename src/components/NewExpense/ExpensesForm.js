import React, { useState } from 'react';
import './NewExpenses.css';

export default function ExpensesForm(props) {
  const [expense, setExpense] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');

  const expenseChangeHandler = (event) => {
    setExpense(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setDate(event.target.value);
  };
  const categoryChangeHandler = (event) => {
    setCategory(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setAmount(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
      expense: expense,
      date: new Date(date),
      category: category,
      amount: +amount,
    };

    props.onSaveExpense(expenseData);
    setExpense('');
    setDate('');
    setCategory('');
    setAmount('');
  };

  return (
    <form className="form_container" onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            id="input_date"
            value={date}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Expense</label>
          <input
            type="text"
            id="input_title"
            value={expense}
            onChange={expenseChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Category</label>
          <input
            type="text"
            id="input_category"
            value={category}
            onChange={categoryChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            step="0.01"
            id="input_amount"
            value={amount}
            onChange={amountChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
}
