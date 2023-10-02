import React from "react";

import { Link } from "react-router-dom";

export function Menu() {
    return (
        <nav aria-label="Main Navigation">
            <ul>
                <li>
                    <Link to="/" aria-label="Homepage">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/about" aria-label="About Us">
                        About
                    </Link>
                </li>
                <li>
                    <Link to="/login" aria-label="Login">
                        Login
                    </Link>
                </li>
            </ul>
        </nav>
    );
}

export default Menu;
