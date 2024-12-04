

import { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Register.module.css';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:8000/api/register', { name, email, password });
            router.push('/login');
        } catch (error) {
            console.error('Registration failed', error);
        }
    };

    const handleLogin = () => {
        router.push('/login');
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Créez un Compte</h1>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                    className={styles.input}
                />
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
                <button type="submit" className={styles.button}>Register</button>
            </form>
            <button className={styles.loginButton} onClick={handleLogin}>Login</button>
        </div>
    );
};

export default Register;

