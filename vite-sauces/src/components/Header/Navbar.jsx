import './Header.css'
import img from './lossaucessinfondo.png'
import CartWidget from './CartWidget'

    const Header = () => {
    return (
        <div className="Header">
            <img className='logomenu' src={img} alt='logo-ls' />
        
        <nav className="menu">
        
            <ul className="menu-items">

                <li><a href="#">Productos</a></li>
                <li><a href="#">Nosotros</a></li>
                <li><a href="#">Contacto</a></li>
                <li className='CartWidget'><a href='#'><CartWidget /> </a></li>
            </ul>
            
        </nav>
        </div>
    )
    }

export default Header


