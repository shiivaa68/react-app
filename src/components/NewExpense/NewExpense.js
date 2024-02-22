import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDateHandler = (enteresExpenseDate) => {
    const expenseData = {
      ...enteresExpenseDate,
      id: Math.random().toString(),
    };
    console.log(expenseData, "new expense");
    props.onAddExpense(expenseData)
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
