import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "toilet paper",
    amount: 94.12,
    date: new Date(2024, 7, 7),
  },
  {
    id: "e2",
    title: " car insurance",
    amount: 294.12,
    date: new Date(2024, 7, 7),
  },
  {
    id: "e3",
    title: "new desk wood",
    amount: 450,
    date: new Date(2024, 7, 9),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
    console.log("app.js");
    console.log(expense);
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
};

export default App;
