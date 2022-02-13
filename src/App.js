import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState} from 'react';
import Product from './components/Product';
import ProductDetails from './components/ProductDetails';


function App() {

  const[selectedProduct, setSelectedProduct] = useState(null)

  const [product, setProduct] = useState(
    [
      {
        id: 1,
        name: 'Rice',
        description: 'High Quality Bashmoti Chal',
        price: '90 Tk per KG',
        category: 'Grocery',
        button_name: false,
      },
      {
        id: 2,
        name: 'SOAP',
        description: 'Indian Lux Soap',
        price: '50 Tk',
        category: 'Grocery',
        button_name: false,
      },
      {
        id: 3,
        name: 'Samsung S20FE',
        description: 'Official Samsung Phone',
        price: '50,000 Tk',
        category: 'Electronics',
        button_name: false,
      }
    ]
  )

  function setProductDetails(product) {
    setSelectedProduct(product)
  }
  
  const [isLoading, setLoading] = useState(true);

  function fakeRequest() {
    return new Promise(resolve => setTimeout(() => resolve(), 2500));
  }

  useEffect(() => {
    fakeRequest().then(() => {
      const el = document.querySelector(".loader-container");
      if (el) {
        el.remove();
        setLoading(!isLoading);
      }
    });
  }, []);

  if (isLoading) {
    return null;
  }
  return (
    <div className="container">
        <div className="row">
            {
                selectedProduct === null? (<Product product={product} setProductDetails={setProductDetails} />) : (<ProductDetails selectedProduct={selectedProduct} setProductDetails={setProductDetails} />)
            } 
        </div>
    </div>
  );
}

export default App;
