
import React from 'react';
import { Link } from 'react-router-dom';  
import useStore from './store';  
import './App.css';  

const items = [
  { id: 1, name: 'Item 1', price: 20, description: 'Description for item 1' },
  { id: 2, name: 'Item 2', price: 40, description: 'Description for item 2' },
  { id: 3, name: 'Item 3', price: 60, description: 'Description for item 3' },
  { id: 4, name: 'Item 4', price: 80, description: 'Description for item 4' },
  { id: 5, name: 'Item 5', price: 120, description: 'Description for item 5' },
  { id: 6, name: 'Item 6', price: 180, description: 'Description for item 6' },
  { id: 7, name: 'Item 7', price: 200, description: 'Description for item 7' },
  { id: 8, name: 'Item 8', price: 100, description: 'Description for item 8' },
  { id: 9, name: 'Item 9', price: 700, description: 'Description for item 9' },
  { id: 10, name: 'Item 10', price: 1000, description: 'Description for item 10' },
  { id: 11, name: 'Item 11', price: 300, description: 'Description for item 11' },
  { id: 12, name: 'Item 12', price: 555, description: 'Description for item 12' }
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
