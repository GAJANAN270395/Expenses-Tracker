import React, { useState } from 'react';
import './style.css';
import NewExpenses from './components/NewExpense/NewExpenses';
import Expense from './components/Expense/Expense';
const intialvalue = localStorage.getItem('Data');
export default function App() {
  const [expenseData, setExpenseData] = useState([intialvalue]);

  const addExpenseHandler = (expense) => {
    setExpenseData((prevData) => {
      return [...prevData, expense];
    });
  };

  localStorage.setItem('Data', expenseData);

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expense expense={expenseData} />
    </div>
  );
}
