import { useState } from 'react';
import './Expenses.css';
import Card from '../UI/CardWrapper/Card';
import ExpensesFilter from "./ExpenseFilter/ExpenseFilter";
import ExpenseList from "./ExpenseItem/ExpenseList";



const Expenses = (props) => {

    const [selectedYear, slectYear] = useState('2020');
    const filterYearHandler = (filterYear) => {
        slectYear(filterYear);
    }

    const filteredYearExpenses = props.expenseDetails.filter((item) => {
        if (selectedYear === 'ALL') return true;
        return item.ExpenseDate.getFullYear().toString() === selectedYear;
    });



    return (<div>
        <Card>

            <ExpensesFilter onFilterYearHandler={filterYearHandler} selected={selectedYear} />
            <ExpenseList list={filteredYearExpenses} />
        </Card>
    </div>)
}

export default Expenses;