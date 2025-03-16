// components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/Categories">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
