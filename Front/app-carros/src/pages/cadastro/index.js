import './styles.css';
import Header from '../../components/Header';


function Cadastro() {
    return (
        <div className='header' >
            <Header />
            <form>
                <h2>Cadastre seu produto</h2>
                <div className='container-inputs'>
                    <label htmlFor='nome'>Nome do seu carro</label>
                    <input type="text" name='nome' placeholder='Ex:SW4 Diamond ' />
                </div>
                <div className='container-inputs'>
                    <label htmlFor='marca'>Marca do carro</label>
                    <input type="text" name='marca' placeholder='Ex:Toyota' />
                </div>
                <div className='container-inputs'>
                    <label htmlFor='modelo'>Modelo do carro</label>
                    <input type="text" name='modelo' placeholder='Ex: SRX' />
                </div>
                <div className='container-inputs'>
                    <label htmlFor='foto'>Foto do carro</label>
                    <input type="file" name='foto' placeholder='Digite sua senha' />
                </div>

                <button
                    type='submit'
                    className='btn-white btn-login'
                >
                    Cadastrar
                </button>
            </form>
        </div>


    )

}

export default Cadastro;
