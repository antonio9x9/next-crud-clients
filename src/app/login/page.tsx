'use client'

import { useRouter } from 'next/navigation'
import React from 'react';
import './login.css';

const LoginPage = () => {
    const router = useRouter();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        // alert('Login');

        router.push('/home');
    };

    return (
        <div className="container">
            <form className="form" onSubmit={handleSubmit}>
                <h1 className="title">Login</h1>
                <input type="email" placeholder="Email" className="input" />
                <input type="password" placeholder="Password" className="input" />
                <button type="submit" className="button">
                    Sign In
                </button>
                <div className="footer">
                    Don't have an account?{' '}
                    <a href="/register" className="link">
                        Register
                    </a>
                </div>
            </form>
        </div>
    );
};

export default LoginPage;