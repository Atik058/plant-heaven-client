import React from 'react';
import { useLoaderData } from 'react-router';

const Home = () => {
    const plants = useLoaderData()
    console.log(plants)
    return (
        <div>
            Home
        </div>
    );
};

export default Home;