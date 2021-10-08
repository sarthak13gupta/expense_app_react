import "./Expenses.css"
import Card from "../UI/Card"
import ExpenseItem from "./ExpenseItem"
const Expenses = (props) => {
    return (
        <Card className="expenses">
            {
                <ExpenseItem           
                date =  {props.date}
                title = {props.title}
                amount = {props.amount}              
                />
            }
        </Card>
    )
}
export default Expenses