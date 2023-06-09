import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';
const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const { user, logIn } = UserAuth();
    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();
        setError('');

        try {
            await logIn(email, password);
            navigate('/');
        } catch (error) {
            setError(error.message);
        }
    };
    return (
        <div className="w-full h-screen">
            <img
                src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/cc4190a6-58ee-451b-a31d-df4da555877f/DZ-en-20230508-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                alt="/"
                className="hidden sm:block absolute w-full h-full object-cover"
            />
            <div className="bg-black/60 fixed top-0 left-0 w-full h-screen"></div>
            <div className="fixed w-full px-4 py-24 z-50">
                <div className="max-w-[450px] h-[660px] mx-auto bg-black/75 text-white">
                    <div className="max-w-[320px] mx-auto py-16">
                        <h1 className="text-3xl font-bold">Sign In</h1>
                        {error ? (
                            <p className="p-3 bg-red-400">{error}</p>
                        ) : null}
                        <form
                            className="w-full flex flex-col py-4"
                            onSubmit={submitHandler}
                        >
                            <input
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                autoComplete="email"
                                className="p-3 my-2 bg-gray-700 rounded"
                            />
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder="Password"
                                autoComplete="current-password"
                                className="p-3 my-2 bg-gray-700 rounded"
                            />
                            <button className="bg-red-600 py-3 my-6 rounded font-bold">
                                Sign In
                            </button>
                            <div className="flex justify-between items-center text-sm text-gray-600">
                                <p>
                                    <input type="checkbox" className="mr-2" />
                                    Remember me
                                </p>
                                <p>Need Help?</p>
                            </div>
                            <p className="py-8">
                                <span className="text-gray-600">
                                    New to DZflix!
                                </span>{' '}
                                <Link to="/signup">Sign Up</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;
