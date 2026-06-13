import React from 'react';
import { useLoaderData } from 'react-router';
import Slider from '../Components/Slider';
import NewPlants from '../Components/NewPlants';

const Home = () => {
    const plants = useLoaderData()
   
    return (
        <div className='mx-3'>
            <div className=' grid grid-cols-2 items-center justify-items-center justify-between gap-4'>
                <div>
                    <h2 className='text-2xl text-base-800 font-bold text-center my-20'>Join our community of passionate plant lovers! Whether you are looking for tips to revive a wilting leaf or inspiration for your next indoor plant baby, we have the tools, guides, and green-thumb secrets you need.</h2>
                </div>
                <Slider></Slider>
            </div>
            <NewPlants plants={plants}></NewPlants>
        </div>
    );
};

export default Home;