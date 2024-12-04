import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useUser } from '../context/UserContext';

const ProtectedRoute = ({ children }) => {
    const { user } = useUser();
    const router = useRouter();

    useEffect(() => {
        if (!user || !user.is_subscribed) {
            router.push('/subscribe');
        }
    }, [user, router]);

    if (!user || !user.is_subscribed) {
        return <div>Loading...</div>;
    }

    return children;
};

export default ProtectedRoute;
