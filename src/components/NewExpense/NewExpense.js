import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = () => {
  const SaveExpenseDateHandler = (enteresExpenseDate) => {
    const expenseData = {
      ...enteresExpenseDate,
      id: Math.random().toString(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={SaveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
