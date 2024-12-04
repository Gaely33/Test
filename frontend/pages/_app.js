import { UserProvider } from '../context/UserContext';
import '../styles/Home.module.css'
import '../styles/Login.module.css';
import '../styles/Register.module.css';
import '../styles/Dashboard.module.css';
import '../styles/Subscribe.module.css';

function MyApp({ Component, pageProps }) {
    return (
        <UserProvider>
            <Component {...pageProps} />
        </UserProvider>
    );
}

export default MyApp;
