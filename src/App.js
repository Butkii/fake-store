import { useState, useEffect } from 'react';
import Store from './components/Store';
import axios from 'axios';

function App() {
  const [storeItem, setStoreItem] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products").then(({data}) => {
     setStoreItem(data);
    })
  }, []);

  const [categories, setCategories] = useState(
    ['All']
  );

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products/categories").then(({data}) => {
      setCategories([...categories, ...data]);
    })
  }, []);

  return (
    <div>
      <Store items={storeItem} categories={categories}/>
    </div>
  );
}

export default App;
