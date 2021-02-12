import '../styles/login_register.scss';
import {Link} from 'react-router-dom';

const Log_in = () => {
    return ( 
        <div>
            <div className='loginForm'>
                <header>
                    <Link to='/'><h1>Blog</h1></Link>
                    <h3>Log-in</h3>
                </header>
                <form>
                    <label className='email'>
                        <input type='text' placeholder='email'/>
                    </label>
                    <label className='password'>
                        <input type='password' placeholder='password' />
                    </label>
                    <input type='submit' className='submit'/>
                </form>
                <footer>
                    <p>Don't have an account yet? <Link to='/register'>register</Link></p>

                </footer>
            </div>
            
        </div>
     );
}
 
export default Log_in;