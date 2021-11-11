import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses({ items }) {
  return (
    <div className="expenses">
      {items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          date={expense.date}
          price={expense.amount}
        />
      ))}
    </div>
  );
}

export default Expenses;
