import { useState } from "react"
import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"

const Expenses = (props) => {

    const [saveYear , setSaveYear] = useState('2020')  

    const saveYearChangeHandler = (year) => {
        console.log(year)
        setSaveYear(year)
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter  defaultYear = {saveYear} onSaveYearChange = {saveYearChangeHandler}/>

                {props.items.map((expense) => (
                    <ExpenseItem           
                    date =  {expense.date}
                    title = {expense.title}
                    amount = {expense.amount}              
                />
                ))}
        </Card>
        </div>
        
    )
}
export default Expenses