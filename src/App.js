import { useState } from 'react';

import Events from './components/Events/Events';
import MainHeader from './components/MainHeader/MainHeader';
import ContextoTienda from './components/AppContext';

function App() {
  const [cartItems, setCartItems] = useState([]);

  function addItemHandler(item) {
    setCartItems((prevItems) => [...prevItems, item]);
  }

  function removeItemHandler(itemId) {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  }

  const info = {
    cartItem: cartItems,
    addItem: addItemHandler,
    removeItem: removeItemHandler
  }

  return (
    <ContextoTienda.Provider value={info}>
      <MainHeader/>
      <main>
        <Events/>
      </main>
    </ContextoTienda.Provider>
  );
}

export default App;
