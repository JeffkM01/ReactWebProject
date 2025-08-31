import {Outlet} from "react-router-dom";
import { UseAllStates } from "./Checkstate";

const Layout = () => {
    const {loggedIn, logOut} = UseAllStates();

    return (
        
        
        <div class="container-fluid">
    
        <div id="logocontainer" class="row">
            <div class="col-sm-12">  
                <img id = "logo" src="/Project1/img/logo1.jpg" alt="Ed's Auto Shop logo" width="58px" height="58px"/>
            </div>
        </div>    

        <div class="row">

                <nav id="navFullW">
                    <div class="col-sm-2">
                        <a href="/" target="_blank" rel="noopener noreferrer" class="hove">Home</a>
                    </div>
                    
                    {!loggedIn && (
                    <>
                    <div class="col-sm-2">
                    <a href="/Registration" target="_blank" rel="noopener noreferrer" class="hove">Registration</a>
                    </div> 
                    <div class="col-sm-2">
                    <a href="/Login" target="_blank" rel="noopener noreferrer" class="hove">Login</a>
                    {/*<Link to="/Login">Login</Link>*/}
                    </div>
                    </>)}


                    {loggedIn && (
                    <>
                    <div class="col-sm-2">
                    <a href="/Account" target="_blank" rel="noopener noreferrer" class="hove">Account</a>
                    </div>
                    
                    <div class="col-sm-2">
                        {/*<button class="hove" onClick={logOut} style={{ background: "none", border: "none", padding: 0 }}>Logout</button>*/}
                        <button onClick={logOut}>Logout</button>
                    </div>
                    </>)}

                     <div class="col-sm-2">
                    <a href="/Gallery" target="_blank" rel="noopener noreferrer" class="hove">Gallery</a>
                    </div>

                  
                    {/*<div class="col-sm-2">
                    <a href="/Logout" target="_blank" rel="noopener noreferrer" class="hove">Logout</a>
                    </div>*/}
                </nav>
            
        </div>
    
            <Outlet/>
            
        </div>

        
    );
};

export default Layout;