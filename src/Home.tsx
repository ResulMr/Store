
import React from 'react';
import { Link } from 'react-router-dom';  
import useStore from './store';  
import './App.css';  

const items = [
  { id: 1, name: 'Item 1', price: 20, description: 'Description for item 1' },
  { id: 2, name: 'Item 2', price: 40, description: 'Description for item 2' },
  { id: 3, name: 'Item 3', price: 60, description: 'Description for item 3' },
];

const Home: React.FC = () => {
  const addToCart = useStore((state) => state.addToCart);  
  const getTotal = useStore((state) => state.getTotal);  

  const handleAddToCart = (item: { id: number; name: string; price: number; description: string }) => {
    addToCart(item);  
  };

  return (
    <div className="home-page">
      <h1>Available Items</h1>
      <div className="item-container">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>Price: ${item.price}</p>
            <button onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

   
      <div className="total-price">
        <h3>Total: ${getTotal()}</h3>
      </div>


      <Link to="/cart">
        <button className="go-to-cart-button">Go to Cart</button>
      </Link>
    </div>
  );
};

export default Home;
