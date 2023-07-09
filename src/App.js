import NewExpense from "./comp/NewExpense/NewExpense";
import Expenses from "./comp/Expenses/Expenses";
import { useState } from "react";
import './comp/UI/asset/collapseButton.css';
const dummyExpense = [
];
function App() {

  const [expense, addNewExpense] = useState(dummyExpense);
  const addExpenseHandler = (ExpenseData) => {
    addNewExpense((prevExpense) => {
      return [...prevExpense, ExpenseData];
    })
  }
  const [isOpen, changeEdit] = useState(false);

  const addExpenseButtonHandler = () => {
    changeEdit(true);
  }

  const addCancelHandler = () => {
    changeEdit(false);
  }

  return (
    <div className="mainContent">
      <div className="buttonContent">
        {isOpen && <NewExpense onAddNewExpense={addExpenseHandler} onCancelHandler={addCancelHandler} />}
        {!isOpen && <button className='newCollapse' onClick={addExpenseButtonHandler}>Add New Expense</button>}
      </div>
      <Expenses expenseDetails={expense} />
    </div>
  );
}

export default App;
