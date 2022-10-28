import './styles.css';
import Logo from '../../assets/car-logo.svg';


function Login() {
    return (
        <div className='container-login'>
            <img src={Logo} alt='logo' className='logo' />

            <div className='nav-bar'>
                <div className='content-login'>
                    <div className='left'>
                    </div>

                    <div className='right'>
                        <form>
                            <h2>Inicie a sessão com seu email</h2>
                            <div>
                                <label htmlFor='email'>Email</label>
                                <input type="text" name='email' placeholder='Digite seu email' />
                            </div>
                            <div>
                                <label htmlFor='senha'>Senha</label>
                                <input type="password" name='senha' placeholder='Digite sua senha' />
                            </div>
                            <buttom>Iniciar sessão</buttom>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Login;
