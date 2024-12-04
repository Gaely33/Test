import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Dashboard.module.css';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem('token');
            if (token) {
                try {
                    const response = await axios.get('http://localhost:8000/api/user', {
                        headers: {
                            Authorization: `Bearer ${token}`,
                        },
                    });
                    setUser(response.data);
                } catch (error) {
                    console.error('Failed to fetch user', error);
                    router.push('/login');
                }
            } else {
                router.push('/login');
            }
        };

        fetchUser();
    }, [router]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        router.push('/login');
    };

    const handleSubscribe = () => {
        router.push('/subscribe');
    };

    if (!user) {
        return <div className={styles.loading}>Loading...</div>;
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Welcome, {user.name}</h1>
            <p className={styles.info}>Email: {user.email}</p>
            <p className={styles.info}>Subscription Status: {user.is_subscribed ? 'Subscribed' : 'Not Subscribed'}</p>
            <button className={styles.logoutButton} onClick={handleLogout}>Logout</button>
            {!user.is_subscribed && (
                <button className={styles.subscribeButton} onClick={handleSubscribe}>Subscribe</button>
            )}
        </div>
    );
};

export default Dashboard;
