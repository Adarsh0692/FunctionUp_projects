// import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Classes from './pages/Program';
import Login from './pages/Login';
import Footer from './pages/Footer';
import Registation from './pages/Registation';
import Training from './pages/Training';
import Pricing from './pages/Pricing';
import ProtectsRoutes from './services/ProtectsRoutes';

function App() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/aboutUs' element={<AboutUs/>} />
      <Route path='/programs' element={<Classes/>} />
      <Route path='/pricing' element={<Pricing/>} />
      <Route path='/login' element={<Login/>} />
      <Route path='/registation' element={<Registation/>} />

       {/* ProtectedRoutes ==>> */}
      <Route path='/training' element={<ProtectsRoutes/>}>
        <Route path='/training' element={<Training/>} />
      </Route>
      
    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
