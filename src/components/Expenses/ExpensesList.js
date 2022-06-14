import React from "react";
import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {

    if(props.items.length ===0){
        return <h2 className="expenses-list__fallback">
            Found no Expenses
        </h2>
    }
  return (
    <>
      <div>
        {/* other way for conditonal statements is : */}
        {/* {filteredExpenses.length === 0 && <p>No expenses Found</p>} */}
        {props.items.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </div>
      <div>
        <ul className="expenses-list"></ul>
      </div>
    </>
  );
};

export default ExpensesList;
