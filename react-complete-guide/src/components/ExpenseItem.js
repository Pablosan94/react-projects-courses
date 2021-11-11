import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem({ date, title, price }) {
  

  return (
    <div className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{price}€</div>
      </div>    
    </div>
  );
}

export default ExpenseItem;
