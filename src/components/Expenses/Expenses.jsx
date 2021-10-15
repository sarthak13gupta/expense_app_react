import "./Expenses.css"
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
const Expenses = (props) => {
    return (
        <div>
            {/* <ExpensesFilter/> */}
            <Card className="expenses">
            {
                <ExpenseItem           
                date =  {props.date}
                title = {props.title}
                amount = {props.amount}              
                />
            }
        </Card>
        </div>
        
    )
}
export default Expenses