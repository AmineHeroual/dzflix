import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { UserAuth } from '../context/AuthContext';

const Navbar = () => {
    const { user, logOut } = UserAuth();
    const navigate = useNavigate();
    const logoutHandler = async () => {
        try {
            await logOut();
            navigate('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="flex items-center justify-between p-4 z-[100] w-full absolute">
            <Link to="/">
                <h1 className="text-4xl font-bold cursor-pointer">
                    <span className="text-green-600 hover:text-white">DZ</span>
                    <span className="text-red-600 hover:text-red-700">
                        FLIX
                    </span>
                </h1>
            </Link>
            {user?.email ? (
                <div>
                    <Link to="account">
                        <button className="text-white bg-transparent px-6 py-2 mr-2 rounded  hover:bg-white hover:text-red-600">
                            Account
                        </button>
                    </Link>

                    <button
                        onClick={logoutHandler}
                        className="bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-white hover:text-red-600"
                    >
                        Logout
                    </button>
                </div>
            ) : (
                <div>
                    <Link to="login">
                        <button className=" text-white bg-transparent px-6 py-2 mr-2 rounded  hover:bg-white hover:text-red-600">
                            Sign In
                        </button>
                    </Link>
                    <Link to="signup">
                        <button className="bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-white hover:text-red-600">
                            Sign Up
                        </button>
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Navbar;
