import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">

      {/* Header */}
      <Header />

      {/* Main */}
      <Main />

      {/* Cart */}
      <Cart />
      
      {/* Footer */}
      <Footer />

    </div>
  );
}

export default App;
