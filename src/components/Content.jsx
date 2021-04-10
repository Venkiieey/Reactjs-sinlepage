import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Route, Link } from "react-router-dom";



function ContentBody()
{

return(
<div>
    <div className="container">
    <div className="row">
       <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="sport_product">
            <img src="./images/ETIQUETTE.jpg" alt="img"/>
            <h3 className="head_h3"> 2010 - 2020</h3>
             <h4 className="head_h4">Our journey explained</h4>
          </div>
       </div>
       <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
          <div className="sport_product">
           <img src="./images/shoe.jpg" alt="img"/ >
            <h3 className="head_h3"> We're open!</h3>
             <h4 className="head_h4"> Shopping by appointment</h4>
          </div>
       </div>
       <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12 ">
          <div className="sport_product">
          <img src="./images/ETIQUETTE.jpg" alt="img"/>
             <h3 className="head_h3">How it's made</h3>
             <h4 className="head_h4">Sneaker made like shoes</h4>
          </div>
       </div>

</div>

    </div>
    <div className="container">
    <div className="row">
       <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12">
          <div className="sport_banner">
            <img src="./images/store-2.jpg" alt="img"/>
            <h3 className="head_h3"> ETQ Laundry Store</h3>
             <h4 className="head_h4">Let us clean your shoes</h4>
          </div>
       </div>
       <div className="col-xl-6 col-lg-6 col-md-8 col-sm-12 ">
          <div className="sport_banner">
           <img src="./images/store-2.jpg" alt="img"/ >
            <h3 className="head_h3"> Amsterdam Flagship Store</h3>
             <h4 className="head_h4"> Find us at Singel 465</h4>
          </div>
       </div>

</div>
    </div>


</div>
);


}


export default ContentBody;

