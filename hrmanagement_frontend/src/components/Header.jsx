import { Link } from "react-router-dom"
import './header.css'
function Header() {
    
    return(
        <div className="header">
            <Link href="/">Home</Link>
            <Link href="/about">About us</Link>
            <Link href="/contact">Contact us</Link>
        </div>
    )


}

export default Header