import React, { useState, useEffect } from 'react';
import './Nav.css';
import logo from '../Jefflix.png'

function Nav() {
	const [show, setShow] = useState();

	useEffect(() => {
		window.addEventListener('scroll', () => {
			if (window.scrollY > 100) {
				setShow(true);
			} else {
				setShow(false);
			}
			return () => {
				window.removeEventListener('scroll');
			};
		});
	}, []);

	return (
		<div className={`nav ${show && 'nav-black'}`}>
			<img src={logo} alt="Jefflix logo" className="nav-logo" />
			<img
				src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
				alt="Avatar"
				className="nav-avatar"
			/>
		</div>
	);
}

export default Nav;
