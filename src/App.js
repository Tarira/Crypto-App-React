import {Route, Routes, Link} from 'react-router-dom'
import './Crypto.css';
import Cryptolist from './Cryptolist.js';
import MainPage from './MainPage.js';
import AboutUs from './AboutUs.js';
import Contact from './Contact.js';
import Logo from './Logo.js';
import Navigation from './Navigation.js';
import CryptoNews from './CryptoNews.js';


function App() {
  return (
    <>
    <div className="main-container">
          <Logo/>
          
          <Navigation/>
      
          </div>

      <div className="wrapper">
      <Routes> 
        
        <Route path='/' element = {<MainPage/>} />
        <Route path='/mainpage' element = {<MainPage/>} />
        <Route path='/cryptonews' element = {<CryptoNews/>} />
        <Route path='/aboutus' element = {<AboutUs/>} />
        <Route path='/contact' element = {<Contact/>} />
      </Routes>
      </div>
    </>
  );
}

export default App;
