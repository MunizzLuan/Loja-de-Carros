import './styles.css';
import Header from '../../components/Header';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    return (
        <div className='header'>
            <Header />

            <div className='main'>
                <section className='left'>
                </section>
                <section className='right'>
                    <form>
                        <h2>Inicie a sessão com seu e-mail</h2>
                        <div className='container-inputs'>
                            <label htmlFor='email'>Email</label>
                            <input type="text" name='email' placeholder='Digite seu email' data-invalid-email="insira um email valido" />
                        </div>
                        <div className='container-inputs'>
                            <label htmlFor='senha'>Senha</label>
                            <input type="password" name='senha' placeholder='Digite sua senha' />
                            <label>
                                <button className='btn-senha'>Esqueceu sua senha?</button>
                            </label>
                        </div>

                        <button
                            className='btn-white btn-login'
                            onClick={() => navigate('/cadastro')}
                        >
                            Iniciar sessão
                        </button>
                    </form>
                </section>

            </div>
        </div>



    )

}

export default Login;
