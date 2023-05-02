import React, { useState } from "react";
import { Route } from "react-router-dom";
import { data } from "./data";

// Contexts
import ProductContext from "./contexts/ProductContext";
import CartContext from "./contexts/CartContext";

// Bileşenler
import Navigation from "./components/Navigation";
import Products from "./components/Products";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    // verilen itemi sepete ekleyin
    setCart([...cart, item]);
  };

  const removeItem = (id) => {
    // verilen id'ye sahip olan itemi sepetten çıkarın
    console.log(id, 'id');
    const updatedCart = cart.filter((book) => book.id !== id);
    setCart(updatedCart);
  };

  return (
    <div className="App">
      <ProductContext.Provider value={{products, addItem}}>
        <CartContext.Provider value= {{cart, removeItem}}>
      <Navigation />

      {/* Routelar */}
      <main className="content">
        <Route exact path="/">
          <Products/>
        </Route>

        <Route path="/cart">
          <ShoppingCart />
        </Route>
      </main>
      </CartContext.Provider>
      </ProductContext.Provider>
    </div>
  );
}

export default App;
