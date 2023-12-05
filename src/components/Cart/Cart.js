import ReactDOM from 'react-dom';

import classes from './Cart.module.css';
import { useContext } from 'react';
import ContextoTienda from '../AppContext';

function Cart() {
  const CartContext = useContext(ContextoTienda)
  const total = CartContext.items.reduce((prevVal, item) => prevVal + item.price, 0)

  return ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={CartContext.onCloseCart} />
      <aside className={classes.cart}>
        <h2>Your Cart</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              {item.title} (${item.price})
            </li>
          ))}
        </ul>
        <p className={classes.total}>Total: ${total}</p>
        <div className={classes.actions}>
          <button onClick={CartContext.onCloseCart}>Close</button>
          <button onClick={CartContext.onCloseCart}>Buy</button>
        </div>
      </aside>
    </>,
    document.getElementById('modal')
  );
}

export default Cart;
