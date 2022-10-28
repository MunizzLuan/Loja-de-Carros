
import './styles.css';

function Login() {

    function handleTask() {
        const input = document.querySelector('#input-task');
        const ul = document.querySelector('ul');

        if (!input.value) {
            return;
        }

        const li = document.createElement('li')
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value = '';
    }

    return (
        <div className='login'>
            <input type="text" placeholder='Insira seu email' id="input-task" />
            <button onClick={() => handleTask()}>
                Login
            </button>
            <ul>

            </ul>
        </div>
    )

}

export default Login;
