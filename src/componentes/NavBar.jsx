import { Link } from 'react-router-dom'
import productos from '../data/productos.json'
import logo from '../assets/logo.png'
import cart from '../assets/cart.png'

import '../styles/navbar.css'

const NavBar = () => {

    const categorias = Array.from(new Set(productos.map(p => p.categoria)))

    const marcas = Array.from(new Set(productos.map(p => p.marca)))

    const generos = Array.from(new Set(productos.map(p => p.genero)))

    return (
        <nav>
            <div className='logo'>
                <Link to="/">
                    <img src={logo} alt="Logo" />
                </Link>
            </div>

            <div className='nav-items'>
                <Link className='nav-link' to="/" style={{fontWeight: "bold"}}>Inicio</Link>
                <div className="nav-link dropdown">
                    <Link to="#" className="dropdown-toggle">Marcas ▾</Link>
                    <div className="dropdown-menu">
                        {marcas.map(m => (
                            <Link key={m} to={`/marca/${m}`} className="dropdown-item">{m}</Link>
                        ))}
                        
                    </div>
                </div>
                <div className="nav-link dropdown">
                    <Link to="#" className="dropdown-toggle">Genero ▾</Link>
                    <div className="dropdown-menu">
                        {generos.map(g => (
                            <Link key={g} to={`/genero/${g}`} className="dropdown-item">{g}</Link>
                        ))}
                    </div>
                </div>
                {categorias.map(cat => (
                    <Link key={cat} to={`/category/${cat}`}>{cat}</Link>
                ))}
            </div>

            <div className='cart-container'>
                <Link to="/cart">
                    <img src={cart} alt="Cart" />
                </Link>
            </div>
        </nav>
    )
}

export default NavBar
