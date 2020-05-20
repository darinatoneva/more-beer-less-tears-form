import React, { useState, useEffect } from "react";
import "../App.scss";
import { Link } from "react-router-dom";

function Nav() {
	return (
		<nav>
			<h3>Logo</h3>
			<ul className="nav-links">
				<Link to="/about">
					<li>About</li>
				</Link>
				<Link to="/shop">
					<li>Shop</li>
				</Link>
				<Link to="/cart">
					<li>Cart</li>
				</Link>
				<Link to="/form">
					<li>Form</li>
				</Link>
			</ul>
		</nav>
	);
}

export default Nav;
