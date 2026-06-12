import React from 'react';
import PlantCard from '../Components/PlantCard';
import { useLoaderData } from 'react-router';

const AllPlants = () => {
    const plants = useLoaderData()
    console.log(plants)
    return (
        <div className="mt-8 mx-4">
            <h2 className='text-center text-success text-3xl font-bold mb-8'>All Plants</h2>

            <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                {
                    plants.map(plant => <PlantCard key={plant._id} plant={plant}></PlantCard>)
                }

            </div>
        </div>
    );
};

export default AllPlants;