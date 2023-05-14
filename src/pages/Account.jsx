import React from 'react';
import SavedShows from '../components/SavedShows';
import { Link } from 'react-router-dom';

const Account = () => {
    return (
        <div className="flex flex-col justify-center">
            <div className="w-full text-white">
                <img
                    src="https://assets.nflxext.com/ffe/siteui/vlv3/70805ddd-f38c-4e25-94cd-b5015e444ee0/cc4190a6-58ee-451b-a31d-df4da555877f/DZ-en-20230508-popsignuptwoweeks-perspective_alpha_website_large.jpg"
                    alt="/"
                    className=" absolute w-full h-[400px] object-cover"
                />
                <div className="bg-black/60 fixed top-0 left-0 w-full h-[550px] "></div>
                <div className="absolute top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">My Shows</h1>
                    <Link to="/">
                        <button className="px-6 mt-4 py-3 rounded bg-white text-xl text-bold text-black hover:bg-red-600 hover:text-white ">
                            Back home
                        </button>
                    </Link>
                    <div className="pt-24">
                        <SavedShows />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Account;
