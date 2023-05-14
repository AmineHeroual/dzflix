import React, { useEffect, useState } from 'react';
import requests from '../Api';
import axios from 'axios';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import Movie from './Movie';

const Row = (props) => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(props.fetchURL).then((res) => {
            setMovies(res.data.results);
        });
    }, []);

    // console.log(movies);

    const slideLeftHandler = () => {
        let slider = document.getElementById('slider' + props.rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
    };
    const sliderRightHandler = () => {
        let slider = document.getElementById('slider' + props.rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
    };
    return (
        <div>
            <h2 className="text-white font-bold md:text-xl p-4">
                {props.title}
            </h2>
            <div className="relative flex items-center group">
                <MdChevronLeft
                    onClick={slideLeftHandler}
                    className="bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10  text-black hidden group-hover:block"
                    size={40}
                />
                <div
                    id={'slider' + props.rowId}
                    className="w-full h-full  left-0 overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative"
                >
                    {movies.map((item, id) => (
                        <Movie
                            key={id}
                            id={id}
                            title={item?.title}
                            image={item?.backdrop_path}
                        />
                    ))}
                </div>
                <MdChevronRight
                    onClick={sliderRightHandler}
                    className="bg-white rounded-full right-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10  text-black hidden group-hover:block"
                    size={40}
                />
            </div>
        </div>
    );
};

export default Row;
