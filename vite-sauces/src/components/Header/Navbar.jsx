import './Header.css'
import img from './lossaucessinfondo.png'
import CartWidget from './CartWidget'

    const NavBar = () => {
    return (
        <div className="Header">
            <img className='logomenu' src={img} alt='logo-ls' />
        
        <nav className="menu">
        
            <ul className="menu-items">

                <li><a href="/">Home</a></li>
                <li><a href="/about">About Us</a></li>
                <li><a href="/contact">Contact</a></li>
                <li className='CartWidget'><a href='/cart'><CartWidget /> </a></li>
            </ul>
            
        </nav>
        </div>
    )
    }

export default NavBar


