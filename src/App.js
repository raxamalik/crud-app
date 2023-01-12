import './App.css';
import Product from './components/product';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Profile from './components/profile';
// import Home from './components/home';
import HomePage from './page';
import CartDetail from './components/cartdetail';
import AboutUs from './components/aboutus';
import NewArrival from './components/newarrival';
import PurchaseHistory from './components/purchasehistory';
function App() {
  return (

    <BrowserRouter>
      <Routes >
        <Route path="/profile" element={<Profile />} />
        <Route path="/product" element={<Product />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/cartdetail/:id" element={<CartDetail />} />
        <Route path="/newarrival" element={<NewArrival />} />
        <Route path="/purchasehistory" element={<PurchaseHistory />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
