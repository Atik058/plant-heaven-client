import React from 'react';
import PlantCard from '../Components/PlantCard';
import { useLoaderData } from 'react-router';
import PlantDetails from './PlantDetails';

const AllPlants = () => {
    const plants = useLoaderData()
    console.log(plants)
    return (
        <div className="mt-8 mx-4">
            <h2 className='text-center text-success text-3xl font-bold mb-8'>All Plants</h2>

            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>

                                <th>Plant</th>
                                <th>Owner Email</th>
                                <th>Health status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {plants.map(plant => <tr key={plant._id}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={plant.photoURL}
                                                    alt="plant photo" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{plant.plantName}</div>
                                            <div className="text-sm opacity-50">{plant.category}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {plant.userName}
                                    <br />
                                    <span className="badge badge-ghost badge-sm">{plant.userEmail}</span>
                                </td>
                                <td>
                                    <div className="">

                                        <div className="text-2xl font-extrabold">{plant.healthStatus}%</div>
                                        <div className="stat-title">Watered on</div>
                                        <div className="stat-desc text-secondary">{plant.lastWateredDate}</div>
                                    </div>
                                </td>
                                <th>
                                    <button className="btn btn-ghost btn-s btn-success">View Details</button>
                                </th>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>
            <div className='mt-8'><p>Plant details</p>
                <PlantDetails plant={plants[3]} />
            </div>
        </div>
    );
};

export default AllPlants;