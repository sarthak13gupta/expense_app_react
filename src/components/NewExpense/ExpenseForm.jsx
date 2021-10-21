import { useState } from "react"

import "./ExpenseForm.css"
const ExpenseForm = (props) => {

    


    const [EnteredTitle , setEnteredTitle] = useState()
    const [EnteredAmount , setEnteredAmount] = useState()
    const [EnteredDate , setEnteredDate] = useState()


    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    }

    const dateChangeHAndler = (event) => {
        setEnteredDate(event.target.value)
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: EnteredTitle ,
            amount: EnteredAmount ,
            date: new Date(EnteredDate)
        }
        props.onSaveExpenseData(expenseData)

        setEnteredAmount('')
        setEnteredDate('')
        setEnteredTitle('')

        console.log(expenseData)

        // formHandler()


    }
    // const [flag , setFlag] = useState(0)

    // const formHandler = () => {
    //      if (flag === 0){
    //          setFlag(1)
    //      }
    //      else{
    //          setFlag(0)
    //      }
    // }
    

    // if (flag ===0) {
    //     return (
    //         <div className = "new-expense__actions_center">
    //             <button onClick = {formHandler} >New Expense Handler</button>
    //         </div>
    //     )
    // }


    return (
       <form onSubmit={submitHandler}>
           <div className = "new-expense__controls">
               <div className="new-expense__control">
                   <label htmlFor="">Title</label>
                   <input type="text"
                   value = {EnteredTitle}
                   onChange = {titleChangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label htmlFor="">Amount</label>
                   <input type="number" min="0.01" step="0.01" 
                   value = {EnteredAmount} 
                   onChange = {amountChangeHandler}/>
               </div>
               <div className="new-expense__control">
                   <label htmlFor="">Date</label>
                   <input type="Date" min="2019-01-01" max="2022-12-31" 
                   value = {EnteredDate}
                   onChange = {dateChangeHAndler} />
               </div>
           </div>
           <div className="new-expense__actions">
               <button type = "button" onClick={props.onCancel}>Cancel</button>
               <button type = "submit">Add Expense</button>
           </div>
       </form>
    )
}

export default ExpenseForm