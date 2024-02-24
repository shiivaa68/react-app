import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import AddUser from "./components/Users/AddUser";
import { useState } from "react";
import UserList from "./components/Users/UserList";

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
  const [userListData, setUserListData] = useState([]);

  const addExpenseHandler = (expense) => {
    setExpenses((preExpenses) => {
      return [expense, ...preExpenses];
    });
    console.log("app.js");
    console.log(expense);
  };

  const addUserhandler = (uName, Uage) => {
    setUserListData((prevUserList) => {
      return [
        ...prevUserList,
        {
          name: uName,
          age: Uage,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
      <div>
        <AddUser onAddUser={addUserhandler} />
        <UserList users={userListData} />
      </div>
    </div>
  );
};

export default App;
