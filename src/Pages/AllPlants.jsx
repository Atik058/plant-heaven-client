import React, { useEffect, useState } from 'react';
import PlantCard from '../Components/PlantCard';
import { Link, useLoaderData } from 'react-router';
import PlantDetails from './PlantDetails';

const AllPlants = () => {
    const [plants, setPlants] = useState([])
    const [sortBy, setSortBy] = useState("all");
    // const plants = useLoaderData()
    useEffect(() => {
        fetch(`https://plant-heaven-server-production.up.railway.app/plants?sortBy=${sortBy}`)
            .then(res => res.json())
            .then(data => setPlants(data));
    }, [sortBy]);


    
    return (
        <div className="mt-8 mx-4">
            <h2 className='text-center text-success text-3xl font-bold mb-8'>All Plants</h2>
            <div>
                <h2>Sort by:</h2>
                <div className="filter">
                    <input
                        className="btn filter-reset"
                        type="radio"
                        name="sort"
                        aria-label="All"
                        checked={sortBy === "all"}
                        onChange={() => setSortBy("all")}
                    />

                    <input
                        className="btn"
                        type="radio"
                        name="sort"
                        aria-label="Health"
                        checked={sortBy === "health"}
                        onChange={() => setSortBy("health")}
                    />

                    <input
                        className="btn"
                        type="radio"
                        name="sort"
                        aria-label="Next Watering"
                        checked={sortBy === "watering"}
                        onChange={() => setSortBy("date")}
                    />
                </div>
            </div>
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
                                        <div className="stat-title">Next Watering on:</div>
                                        <div className="stat-desc text-secondary">{plant.nextWateredDate}</div>
                                    </div>
                                </td>
                                <td>
                                    <Link to={`/plant-details/${plant._id}`}>
                                        <button className="btn btn-ghost btn-s btn-success">View Details</button>
                                    </Link>
                                </td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllPlants;