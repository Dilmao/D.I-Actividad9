import React, { useContext, useState } from 'react';
import ContextoTienda from '../AppContext';
import Cart from '../Cart/Cart';
import classes from './MainHeader.module.css';

function MainHeader() {
  const headerContext = useContext(ContextoTienda);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const numCartItems = headerContext.cartItem.length;

  function openCartModalHandler() {
    setModalIsOpen(true);
  }

  function closeCartModalHandler() {
    setModalIsOpen(false);
  }

  const infoHeader = {
    onCloseCart: closeCartModalHandler,
    items: headerContext
  }

  return (
    <>
      <header className={classes.header}>
        <h1>StateEvents Shop</h1>
        <button onClick={openCartModalHandler}>Cart ({numCartItems})</button>
      </header>
      {modalIsOpen &&
      <ContextoTienda.Provider value={infoHeader}>
        <Cart/>
      </ContextoTienda.Provider>
      }
    </>
  );
}

export default MainHeader;
