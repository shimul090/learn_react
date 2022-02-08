import logo from './logo.svg';
import './App.css';
import Reach, { useEffect, useState} from 'react';
import Product from './components/Product';


function App() {
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
    <div className="App">
      <header className="App-header">
      <Product />
      </header>
    </div>
  );
}

export default App;
