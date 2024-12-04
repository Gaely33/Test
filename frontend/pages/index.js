/**import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Bienvenue sur notre application</h1>
            <p className={styles.description}>
                Cette application vous permet de vous inscrire, de vous connecter et de gérer vos abonnements.
            </p>
            <div className={styles.grid}>
                <Link href="/login">
                    <a className={styles.card}>
                        <h2>Connexion &rarr;</h2>
                        <p>Connectez-vous à votre compte existant.</p>
                    </a>
                </Link>
                <Link href="/register">
                    <a className={styles.card}>
                        <h2>Inscription &rarr;</h2>
                        <p>Créez un nouveau compte.</p>
                    </a>
                </Link>
                <Link href="/subscribe">
                    <a className={styles.card}>
                        <h2>Abonnement &rarr;</h2>
                        <p>Gérez votre abonnement.</p>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Home; 
**/


import { useEffect, useState } from 'react';
import api from '../lib/axios';
import { useRouter } from 'next/router';

const Home = () => {
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await api.get('/user');
                setUser(response.data);
            } catch (err) {
                setError('Failed to fetch user data');
                console.error('Error fetching user data', err);
                router.push('/login');
            }
        };

        fetchUser();
    }, [router]);

    if (error) {
        return <div>{error}</div>;
    }

    if (!user) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Welcome, {user.name}</h1>
            <p>Email: {user.email}</p>
            <p>Subscription Status: {user.is_subscribed ? 'Subscribed' : 'Not Subscribed'}</p>
        </div>
    );
};

export default Home;

