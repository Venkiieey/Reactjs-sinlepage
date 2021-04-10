import React from 'react';
import './Navbar.css';
import 'bootstrap/dist/css/bootstrap.css';


function Footer()
{

return(
 <div className="site-footer">

    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-md-4">
          <h6>About</h6>
          <p className="text-justify">Founded in 2010 in Amsterdam, ETQ derived under the mindset of eliminating over-accessorized branding and focusing primarily on letting the quality of the product speak for itself. <a href="">Read More</a></p>
        </div>

        <div className="col-xs-6 col-md-2">
          <h6>Address</h6>
          <p> Singel 465<br />
           1012 WP Amsterdam<br />
           The Netherlands</p>
        
        </div>

        <div className="col-xs-6 col-md-2">
          <h6>Contact</h6>
          <p> <a href="">Email us</a><br />
          +31 (0) 202 615 614
          </p>
        </div>
        <div className="col-xs-6 col-md-2">
          <h6>Info</h6>
          <ul className="footer-links">
            <li><a href="">Shipping info</a></li>
            <li><a href="">Careers</a></li>
            <li><a href="">Wholesale</a></li>
          </ul>
        </div>
        <div className="col-xs-6 col-md-2">
          <h6>Follow us</h6>
          <ul className="footer-links">
            <li><a href="">Instagram</a></li>
            <li><a href="">Facebook</a></li>
           
          </ul>
        </div>
      </div>
      <hr />
    </div>
    <div className="container">
      <div className="row">
        <div className="col-xs-6 col-md-5">
            <div className="newsletter-form">
        <form data-action="subscribe">
          <div className="row">
            <label>Newsletter</label>
               <input type="email" value="" />
                </div>
                 <button type="submit" className="button button--inline button--statuses">
                  <span className="button__current ui-current">Submit</span>
             <span className="button__extra ui-status" data-success="You’re subscribed" data-error="Error, try again"></span>
             </button>
        </form>
        </div>
        </div>

        <div className="col-xs-6 col-md-4">
          <ul className="social-icons social-images">
            <li><a  href="#"><img src="./images/ideal.png" /></a></li>
            <li><a  href="#"><img src="./images/mastercard.png" /></a></li>
            <li><a  href="#"><img src="./images/paypal.png" /></a></li>
            <li><a  href="#"><img src="./images/visa.png" /></a></li>   
            <li><a  href="#"><img src="./images/amex.png" /></a></li>  
          </ul>
        </div>
        <div className="col-xs-6 col-md-3">
          <ul className="social-icons conditions">
            <li><a href="#">Terms & Conditions</a></li>
            <li><a  href="#">Privacy Statement</a></li>
          
          </ul>
        </div>
      </div>
    </div>
  </div>



);


}

export default Footer;