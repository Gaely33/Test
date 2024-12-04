
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

