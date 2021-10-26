import { useState } from "react"
import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from "../UI/Card"
import ExpensesList from "./ExpensesList"
import ExpensesChart from "./ExpensesChart"
const Expenses = (props) => {

    const [saveYear , setSaveYear] = useState('2020')  

    const saveYearChangeHandler = (year) => {
        console.log(year)
        setSaveYear(year)
    }
    const filteredYear = saveYear
    
    const filteredExpenses = props.items.filter((data) => data.date.getFullYear().toString() === filteredYear)

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter  defaultYear = {saveYear} onSaveYearChange = {saveYearChangeHandler}/>
                <ExpensesChart expenses = {filteredExpenses}/>
                <ExpensesList items = {filteredExpenses}/>              
        </Card>
        </div>
        
    )
}
export default Expenses