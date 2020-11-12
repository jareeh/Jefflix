import React, { useState, useEffect } from 'react';
import './Nav.css';


function Nav() {

    const [ show, setShow ] = useState();

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                setShow(true)
            } else {
                setShow(false)
            }
            return () => {
                window.removeEventListener('scroll')
            }
        })
    }, [])

    return (
        <div className={`nav ${show && 'nav-black'}`}>
            <img 
                src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png" 
                alt="Netflix logo" 
                className="nav-logo"
            />
            <img 
                src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png" 
                alt="Avatar" 
                className="nav-avatar"
            />
        </div>
    )
}

export default Nav