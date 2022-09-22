import React from 'react'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Navbar from './components/Navbar/Navbar';

function App() {
  return (
    <div id="1" className="App">
        <Navbar />
        <ItemListContainer greeting={'Productos en nuestra tienda Online.'}/>
        {/* <img src='/images/cart.svg'/> */}
     </div>
  );
}

export default App;
