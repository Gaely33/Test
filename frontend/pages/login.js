
import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Login.module.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8000/api/login', { email, password });
            localStorage.setItem('token', response.data.token);
            router.push('/dashboard');
        } catch (error) {
            console.error('Login failed', error);
        }
    };

    const handleRegister = () => {
        router.push('/register');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Connectez-Vous</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    className={styles.input}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    className={styles.input}
                />
                <button type="submit" className={styles.button}>Login</button>
            </form>
            <button className={styles.registerButton} onClick={handleRegister}>Register</button>
        </div>
    );
};

export default Login;

