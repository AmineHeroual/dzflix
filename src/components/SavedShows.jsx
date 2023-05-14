import React, { useState, useEffect } from 'react';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import { AiOutlineClose } from 'react-icons/ai';
import { UserAuth } from '../context/AuthContext';
import { db } from '../FireBase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';

const SavedShows = (props) => {
    const [movies, setMovies] = useState([]);
    const { user } = UserAuth();

    // console.log(movies.length);
    // const arrows = 'hidden';
    // if (movies.length > 5) {
    //     arrows = 'block';
    // }

    useEffect(() => {
        onSnapshot(doc(db, 'users', `${user?.email}`), (doc) => {
            setMovies(doc.data()?.savedShows);
        });
    }, [user?.email]);

   

    const movieRef = doc(db, 'users', `${user?.email}`);
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID);
            await updateDoc(movieRef, {
                savedShows: result,
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="">
            <h2 className="text-white font-bold md:text-xl p-4">
                My Prefered Movies
            </h2>
            <div className="relative flex items-center group">
                {/* <MdChevronLeft
                    onClick={slideLeftHandler}
                    className={`bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  text-black hidden group-hover:block `}
                    size={40}
                /> */}
                <div
                    id={'slider' + props.rowId}
                    className="w-full h-full mx-auto  left-0  relative flex flex-wrap items-center justify-center"
                >
                    {movies.map((item, id) => (
                        <div
                            key={item.id}
                            className="w-[420px] sm:w-[200px] md:w-[240px] lg-[280px] inline-block cursor-pointer relative p-2 hover:scale-110 transition-all duration-300"
                        >
                            <img
                                src={`https://image.tmdb.org/t/p/w500/${item.image}`}
                                alt={item.title}
                                className="w-full h-auto block"
                            />
                            <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
                                <p className="withe-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
                                    {item.title}
                                </p>
                                <p>
                                    <AiOutlineClose
                                        onClick={() => deleteShow(item.id)}
                                        size={25}
                                        className="absolute text-gray-300 top-4 right-4 rounded-full bg-red-600 p-1"
                                    />
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* <MdChevronRight
                    onClick={sliderRightHandler}
                    className={` bg-white  rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10  text-black hidden group-hover:block `}
                    size={40}
                /> */}
            </div>
        </div>
    );
};

export default SavedShows;
