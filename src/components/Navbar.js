import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link } from "react-router-dom";


function Navbar(){

    return(
       <div className="section">
           
         <div className="header">
            <div className="container">
               <div className="row">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-sm-3 col logo_section">
                     <div className="full">
                        <div className="center-desk">
                           <div className="logo">E T G.</div>
                           
                        </div>
                     </div>
                     <nav className="main-menu">
                              <ul className="menu-area-main">
                                 <li> <a href="">Men</a> </li>
                                 <li> <a href="">Women</a> </li>
                                
                              </ul>
                           </nav>
                  </div>
                  <div className="col-xl-9 col-lg-9 col-md-9 col-sm-9">
                     <div className="menu-area">
                        <div className="limit-box">
                           <nav className="main-menu">
                              <ul className="menu-area-main">
                              <li><a href="">Shop Care</a></li>
                                 <li><a href="">Help</a></li>
                                 <li><a href="">Myaccount</a></li>
                                 <li className="last"><a href=""><img src="./images/shopeimage.png"/></a></li>
                              </ul>
                           </nav>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
     
</div>
     
     
   

);


}








export default Navbar;