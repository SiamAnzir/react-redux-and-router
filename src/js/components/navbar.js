import React from "react";
import {Link} from "react-router-dom";

const Navbar = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/allArticles">All Articles</Link>
                    </li>
                    <li>
                        <Link to="/premiumArticles"> Premium Articles </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;