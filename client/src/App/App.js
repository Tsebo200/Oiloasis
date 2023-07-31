// import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import '../App/App.css';
import Dashboard from '../Pages/Dashboard';
import Products from '../Pages/Products';
import Admin from '../Pages/Admin';
import Checkout from '../Pages/Checkout';


function App() {
  return (

    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/allproducts" element={<Products/>}/>
        <Route path='/checkout' element={<Checkout/>}/>
        <Route path='/admin' element={<Admin/>}/>
      </Routes>
    </div>
  );
}

export default App;
