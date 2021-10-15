import { useState } from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
function App() {
    const expenses = [
        {
          id: 'e1',
          title: 'Toilet Paper',
          amount: 94.12,
          date: new Date(2020, 7, 14),
        //  date: (2020,7,14)
        },
        { id: 'e2',
          title: 'New TV', 
          amount: 799.49, 
          date: new Date(2021, 2, 12) 
        //  date: (2021 , 2, 12)
        },
        {
          id: 'e3',
          title: 'Car Insurance',
          amount: 294.67,
          date: new Date(2021, 2, 28),
        //  date: (2021 , 2 , 28)
        },
        {
          id: 'e4',
          title: 'New Desk (Wooden)',
          amount: 450,
          date: new Date(2021, 5, 12),
        //   date: (2021 , 5 , 12)
        },
      ]; 

    const addExpenseHandler = (expense) => {
        console.log(expense)
    }

    const [saveYear , setSaveYear] = useState('2020')  

    const saveYearChangeHandler = (year) => {
        console.log(year)
        setSaveYear(year)
    }

    return(
        <div>
            <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <div>
                <ExpensesFilter  defaultYear = {saveYear} onSaveYearChange = {saveYearChangeHandler}/>
            </div>
            </div> 
            <div>
            {expenses.map(expense =>(
                <Expenses
                title = {expense.title}
                amount = {expense.amount}
                date = {expense.date}
                />
            ))}
            </div>    
        </div>   
    )
}
export default App;