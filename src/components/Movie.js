import React, { useState } from 'react';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { UserAuth } from '../context/AuthContext';
import { db } from '../FireBase';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';

import swal from '@sweetalert/with-react';

const Movie = (props) => {
    const [like, setLike] = useState(false);
    const [saved, setSaved] = useState(false);
    const { user } = UserAuth();

    const movieID = doc(db, 'users', `${user?.email}`);

    const saveShow = async () => {
        if (user?.email) {
            setLike(!like);
            setSaved(true);
            await updateDoc(movieID, {
                savedShows: arrayUnion({
                    id: props.id,
                    title: props.title,
                    image: props.image,
                }),
            });
        } else {
            // alert('Please log in to save a movie');
            swal({
                icon: 'info',
                text: 'Please log in to save a movie',
            });
        }
    };

    return (
        <div className="w-[160px] sm:w-[200px] md:w-[240px] lg-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all duration-300">
            <img
                src={`https://image.tmdb.org/t/p/w500/${props.image}`}
                alt={props.title}
                className="w-full h-auto block"
            />
            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                <p className="withe-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                    {props.title}
                </p>
                <p onClick={saveShow}>
                    {like ? (
                        <FaHeart className="absolute top-4 left-4 " />
                    ) : (
                        <FaRegHeart className="  absolute top-4 left-4" />
                    )}
                </p>
            </div>
        </div>
    );
};

export default Movie;
