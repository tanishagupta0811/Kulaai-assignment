import React from "react";
import "./Navbar.scss"

const Navbar = ()=>{
    return(
        <div className="nav">
                <div className="navbar-background">
                <div className="navbar-right">
              <img
            src="https://global-uploads.webflow.com/62efc7cb58ad153bfb146988/62efcbe40b52a66c04de66ce_Frame%2011.png"
            loading="lazy"
            width="36"
            alt="Kula logo"
             />
             <p>Product</p>
             <p>Story</p>
             <p>Resources</p>

             </div>
             <div className="navbar-left">
                <button  className="button">Book a demo</button>
             </div>
                </div>
            
        </div>
    );
};

export default Navbar;