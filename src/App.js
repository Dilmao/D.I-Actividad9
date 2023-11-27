import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import contextoTienda from './components/Context';

function App() {
  const [cartItems, setCartItems] = useState([]);
  const info = {cartItems: cartItems, onAddItem: addItemHandler, onRemoveItem: removeItemHandler}

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  return (
    <>
      <contextoTienda.Provider value={info}>
        <MainHeader/>
        <main>
          <Events/>
        </main>
      </contextoTienda.Provider>
    </>
  );
}

export default App;
