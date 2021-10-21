import { useState } from "react"
import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
const Expenses = (props) => {

    const [saveYear , setSaveYear] = useState('2020')  

    const saveYearChangeHandler = (year) => {
        console.log(year)
        setSaveYear(year)
    }
    const filteredYear = saveYear
    
    const filteredExpenses = props.items.filter((data) => data.date.getFullYear() == filteredYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter  defaultYear = {saveYear} onSaveYearChange = {saveYearChangeHandler}/>
                <ExpensesList items = {filteredExpenses}/>              
        </Card>
        </div>
        
    )
}
export default Expenses