
import React from 'react';
import './App.css';
import ProductList from './Components/ProductList';
import ProductRow from './Components/ProductRow';

function App() {
  return (
    <div className="container">
      <header className="header">
        <h1>My Products</h1>
      </header>
    <ProductRow/>
    </div>
  );
}

export default App;