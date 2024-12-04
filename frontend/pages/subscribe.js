
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import { lemonSqueezySetup, createCheckout } from '@lemonsqueezy/lemonsqueezy.js';
import styles from '../styles/Subscribe.module.css';

const Subscribe = () => {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [variantId, setVariantId] = useState('');
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const apiKey = process.env.NEXT_PUBLIC_LEMON_SQUEEZY_API_KEY;
        lemonSqueezySetup({
            apiKey,
            onError: (error) => console.error("Error!", error),
        });

        
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://localhost:8000/api/products');
                setProducts(response.data);
            } catch (error) {
                console.error('Failed to fetch products', error);
            }
        };

        fetchProducts();
    }, []);

    const handleSubscribe = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await createCheckout({
                    email,
                    variantId,
                    success_url: `${window.location.origin}/subscribe/success`,
                    cancel_url: `${window.location.origin}/subscribe/cancel`,
                });

                window.location.href = response.url;
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
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className={styles.input}
            />
            <select
                value={variantId}
                onChange={(e) => setVariantId(e.target.value)}
                className={styles.input}
            >
                <option value="" disabled>Select a product</option>
                {products.map((product) =>
                    product.variants.map((variant) => (
                        <option key={variant.id} value={variant.id}>
                            {product.name} - {variant.name}
                        </option>
                    ))
                )}
            </select>
            <button className={styles.subscribeButton} onClick={handleSubscribe}>Subscribe Now</button>
        </div>
    );
};

export default Subscribe;
