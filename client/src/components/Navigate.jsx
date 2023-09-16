import {Link} from "react-router-dom";
const Navigation=()=>{
    return(
        <header>
            <div className="logo">ERC-721</div>
            <nav>
                <ul>
                    <li>
                        <Link className="nav_link" to="/">
                          Home
                        </Link>
                    </li>
                    <li>
                        <Link className="nav_link" to="/safe-mint">
                          SafeMint
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}
export default Navigation;