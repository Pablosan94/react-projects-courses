import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

export default function NewExpense(props) {
  const [openExpense, setOpenExpense] = useState(false);

  function saveExpenseDataHandler(enteredExpenseData) {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    toggleOpenExpense();
  }

  function toggleOpenExpense() {
    setOpenExpense((prevOpenExpense) => {
      return !prevOpenExpense;
    });
  }

  let content = (
    <div>
      <button onClick={toggleOpenExpense}>Add New Expense</button>
    </div>
  );

  if (openExpense) {
    content = (
      <ExpenseForm
        onCancel={toggleOpenExpense}
        onSaveExpenseData={saveExpenseDataHandler}
      />
    );
  }

  return <div className="new-expense">{content}</div>;
}
