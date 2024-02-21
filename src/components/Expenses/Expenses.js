import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from "../UI/Card";

const Expenses = () => {
  const expenses = [
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
  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      />

      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      />
    </Card>
  );
};

export default Expenses;
