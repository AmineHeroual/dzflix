import React, { useEffect, useState } from 'react';
import requests from '../Api';
import axios from 'axios';
import swal from '@sweetalert/with-react';
const Main = () => {
    const [movies, setMovies] = useState([]);

    const movie = movies[Math.floor(Math.random() * movies.length)];

    useEffect(() => {
        axios.get(requests.requestPopular).then((res) => {
            setMovies(res.data.results);
        });
    }, []);

    // console.log(movie);

    const truncateString = (str, num) => {
        if (str?.length > num) {
            return str.slice(0, num) + '...';
        } else {
            return str;
        }
    };

    const messageSorry = () => {
        // alert("The Player It does't work now try later...");
        swal({
            icon: 'info',
            button: false,
            text: "The Player It does't work now try later...",
        });
    };
    return (
        <div className="w-full h-[500px] text-white">
            <div className="w-full h-full">
                <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
                <img
                    src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
                    alt={movie?.title}
                    className="w-full h-full object-cover"
                />
                <div className="absolute w-full top-[20%] p-4 md:p-8">
                    <h1 className="text-3xl md:text-5xl font-bold">
                        {movie?.title}
                    </h1>
                    <div className="flex my-4">
                        <button
                            onClick={messageSorry}
                            className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:text-white hover:bg-red-600 hover:border-none"
                        >
                            Play
                        </button>
                        <button className="border text-white border-gray-300 py-2 px-5 ml-4 hover:text-black hover:bg-white hover:border-none">
                            Watch Later
                        </button>
                    </div>
                    <p className="text-gray-400 text-sm">
                        Released: {movie?.release_date}
                    </p>
                    <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
                        {truncateString(movie?.overview, 160)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
