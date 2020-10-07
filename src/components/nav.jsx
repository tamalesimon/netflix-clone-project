import React, { useState, useEffect } from 'react';

import '../styles/nav.css';

function Nav() {
    const [show, handleShow] = useState()
    useEffect (() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        };
    }, [])
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img 
            className="nav_logo"
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
            alt="Netflix Logo" /> 

            <img
            className="nav_avatar"         
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/e70b1333850498.56ba69ac32ae3.png"
            alt="Netflix Avatar"/>

        </div>
    )
}

export default Nav
