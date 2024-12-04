/*
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';

const Subscribe = () => {
    const router = useRouter();

    const handleSubscribe = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.post('http://localhost:8000/api/subscribe', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                router.push('/dashboard');
            } catch (error) {
                console.error('Subscription failed', error);
            }
        } else {
            router.push('/login');
        }
    };

    return (
        <div>
            <h1>Subscribe</h1>
            <button onClick={handleSubscribe}>Subscribe Now</button>
        </div>
    );
};

export default Subscribe;
*/

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import styles from '../styles/Subscribe.module.css';

const Subscribe = () => {
    const router = useRouter();

    const handleSubscribe = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                await axios.post('http://localhost:8000/api/subscribe', {}, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                router.push('/dashboard');
            } catch (error) {
                console.error('Subscription failed', error);
            }
        } else {
            router.push('/login');
        }
    };

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Subscribe</h1>
            <button className={styles.subscribeButton} onClick={handleSubscribe}>Subscribe Now</button>
        </div>
    );
};

export default Subscribe;
