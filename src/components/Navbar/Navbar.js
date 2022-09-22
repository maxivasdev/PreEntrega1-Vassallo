import './Navbar.css'
import CartWidget from '../CartWidget/CartWidget'
import Avatar from '../Avatar/Avatar'

const Navbar = () => {
    return (
        <nav style={{ backgroundColor: 'rgb(71, 179, 170)' }}>
            <div>
                <h1>Supermercado MANLUPI</h1>
                <CartWidget /><br></br>
            </div>
            <div>
                <button>Almacén</button>
                <button>Electrodomésticos</button>
                <button>Hogar</button>
                <button>Tecnología</button>
                <button>Jardinería</button>
            </div><br></br>
            <div>
                <Avatar /><br></br>
            </div>
        </nav>
    )
}

export default Navbar

/* display: 'flex', justifyContent: 'space-around' */