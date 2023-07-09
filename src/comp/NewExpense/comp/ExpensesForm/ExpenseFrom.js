import './ExpenseForm.css'
import { useState } from 'react';
const ExpenseForm = (props) => {

    const [ExpenseTitle, setExpenseTitle] = useState('')
    const titleHandler = (event) => {
        setExpenseTitle(event.target.value);
    }
    const [ExpenseAmount, setExpenseAmount] = useState('')
    const amountHandler = (event) => {
        setExpenseAmount(event.target.value);
    }
    const [ExpenseDate, setExpenseDate] = useState('')
    const dateHandler = (event) => {
        setExpenseDate(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredExpenseData = {
            ExpenseTitle: ExpenseTitle,
            ExpenseAmount: ExpenseAmount,
            ExpenseDate: new Date(ExpenseDate)
        };
        props.onSaveExpenseData(enteredExpenseData);
        setExpenseTitle('');
        setExpenseAmount('');
        setExpenseDate('');
    };
    return (<form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label for='ExpenseTitle'>Title</label>
                <input type='text' id='ExpenseTitle' onChange={titleHandler} value={ExpenseTitle} />
            </div>
            <div className='new-expense__control'>
                <label for='ExpenseAmount'>Amount</label>
                <input type='number' id='ExpenseAmount' min='0.01' step='0.01' onChange={amountHandler} value={ExpenseAmount} />
            </div>
            <div className='new-expense__control'>
                <label for='ExpenseDate'>Date</label>
                <input type='date' id='ExpenseDate' onChange={dateHandler} value={ExpenseDate} />
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add Expense</button>
            </div>
        </div>
    </form>)
}

export default ExpenseForm;