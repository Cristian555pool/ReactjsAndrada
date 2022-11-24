import '../Navbar';
import CartWidget from '../CartWidget/CartWidget';

const Navbar = () => {
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-around' }}>
            <div>
                <h1 
                style={{ 
                    backgroundColor: 'green',
                    color: 'white'
                }} >Ecommerce de CristianAndrada</h1>
            </div>
            <div>
                <button>Tablets</button>
                </div>
            <div>
                <CartWidget />
                <span className="icons__li p-2 fs-4">
                </span>
            </div>
        </nav>
    )
}
