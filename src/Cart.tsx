
import React from 'react';
import useStore from './store';  
import './App.css';  

const Cart: React.FC = () => {
  const cart = useStore((state) => state.cart); 
  const getTotal = useStore((state) => state.getTotal);  

  return (
    <div className="cart-page">
      <h1>Your Cart</h1>
      
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
  
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <div>
                <h3>{item.name}</h3>
                <p className='pp'>Price: ${item.price}</p>
                <p className='pp'>Quantity: {item.quantity}</p>
              </div>
            </div>
          ))}
          
      
          <div className="cart-summary">
            <h3>Total: ${getTotal()}</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
