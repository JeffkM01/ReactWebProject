import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './components/Layout'
import Home from './components/Home.js';
import Registration from './components/Registration.js';
import Login from './components/Login.js';
import Account from './components/Account.js';
import Gallery from './components/Gallery.js';
import Logout from './components/Logout.js';
import { UseCheckState } from './components/Checkstate.js';

function App() {
  return (
         <BrowserRouter>
         <UseCheckState>
              <Routes>
                <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>}/>
              </Route>
            
              <Route path="Registration" element={<Registration/>}/>
                <Route path="Login" element={<Login/>}/>
                <Route path="Account" element={<Account/>}/>
                <Route path="Gallery" element={<Gallery/>}/>
                <Route path="Logout" element={<Logout/>}/>
            </Routes>
            </UseCheckState>
         </BrowserRouter>
     );

};

export default App;
