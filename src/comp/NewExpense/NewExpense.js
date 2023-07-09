
import './NewExpense.css';
import ExpenseForm from './comp/ExpensesForm/ExpenseFrom';

const NewExpense = (props) => {

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const ExpenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddNewExpense(ExpenseData);
    }
    const cancelAddExpenseHandler = () => {
        props.onCancelHandler();
    }
    return (<div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
        <button onClick={cancelAddExpenseHandler} className='cancelButton'>Cancel</button>

    </div>)
}
export default NewExpense;