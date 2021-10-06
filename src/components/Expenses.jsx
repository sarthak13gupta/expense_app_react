import "./Expenses.css"
import Card from "./Card"
import ExpenseItem from "./ExpenseItem"
function Expenses(props){
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