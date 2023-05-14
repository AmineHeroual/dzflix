import React from 'react';
import Main from '../components/Main';
import Row from '../components/Row';
import requests from '../Api';
const Home = () => {
    return (
        <div>
            <Main />
            {/* <Row rowId="4" title="Horror" fetchURL={requests.requestHorror} /> */}
            <Row title="Up Coming" fetchURL={requests.requestUpcoming} />
            <Row rowId="1" title="Popular" fetchURL={requests.requestPopular} />
            <Row
                rowId="2"
                title="Trending"
                fetchURL={requests.requestTrending}
            />
            <Row
                rowId="3"
                title="Top Rated"
                fetchURL={requests.requestTopRated}
            />
        </div>
    );
};

export default Home;
