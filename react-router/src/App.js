import logo from './logo.svg';
import './App.css';

import { Routes, Route, Link } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import OrderSummary from './components/OrderSummary';
import NoMatch from './components/NoMatch';
import Products from './components/Products';
import NewProducts from './components/NewProducts';
import FeaturedProducts from './components/FeaturedProducts';

function App() {
  
  return (
    <div className="App">

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="order-summary" element={<OrderSummary />} />
        <Route path="products" element={<Products />} >
          <Route path="new" element={ <NewProducts />} /> 
          <Route path="featured" element={ <FeaturedProducts />} /> 
        </Route>
        <Route path="*" element={ <NoMatch />} />
      </Routes>

    </div>
  );
}

export default App;
