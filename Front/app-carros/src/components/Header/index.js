import './styles.css';
import Logo from '../../assets/car-logo.svg';
import Login from '../../assets/login-btn.svg';

function Header() {
    return (
        <div class="header">
            <header>
                <div className='nav'>
                    <div class="logo-area">
                        <img src={Logo} alt='logo' />
                    </div>
                    <div class="menu-nav">
                        <nav>
                            <ul>
                                <li>
                                    Comprar carro
                                </li>
                                <li>
                                    Vender carro
                                </li>
                                <li>
                                    App Luan
                                </li>
                                <li>
                                    Sobre
                                </li>
                            </ul>
                            <div className='profile-area'>
                                <img src={Login} alt='login' />
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        </div>


    )
}
export default Header;