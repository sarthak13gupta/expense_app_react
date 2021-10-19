import { useState } from "react";

import ExpenseItem from "./components/Expenses/ExpenseItem";
import Expenses from "./components/Expenses/Expenses"
import NewExpense from "./components/NewExpense/NewExpense";
import ExpensesFilter from "./components/ExpensesFilter/ExpensesFilter";
const DUMMY_EXPENSES = [
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

function App() {

  const [expenses , setExpenses] = useState(DUMMY_EXPENSES) 
  const addExpenseHandler = async (expense) => {
      await setExpenses((prevExpenses) => {
          let newExpenses = [expense].concat(prevExpenses);
          console.log(newExpenses);
          return newExpenses;/*[expense , ...prevExpenses]*/
      });
      console.log('new', expenses);
    }

    return(
        <div>
            <div>
            <NewExpense onAddExpense = {addExpenseHandler}/>
            <Expenses items = {expenses}/>
            </div>   
        </div>   
    )
}
export default App;