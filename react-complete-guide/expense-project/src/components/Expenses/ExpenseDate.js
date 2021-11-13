import "./ExpenseDate.css";

export default function ExpenseDate({ date }) {
  const day = date.toLocaleString("es-ES", { day: "2-digit" });
  const month = date.toLocaleString("es-ES", { month: "long" });
  const year = date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
}