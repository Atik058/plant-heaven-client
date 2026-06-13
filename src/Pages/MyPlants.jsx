import React, { useContext, useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router';
import { AuthContext } from '../Components/Contexts/AuthContext';
import Loading from '../Components/Loading';
import Swal from 'sweetalert2';

const MyPlants = () => {
    const [plants, setPlants] = useState([])
    const { user, loading } = useContext(AuthContext)

    const handleDeletePlant = (id) => {
        
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            

            if (result.isConfirmed) {
                fetch(`https://plant-heaven-server-production.up.railway.app/plant/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        
                        if (data.deletedCount) Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success"
                        });
                    })
            }

        });
    }

    useEffect(() => {
        if (user?.email) {
            fetch(`https://plant-heaven-server-production.up.railway.app/my-plants/${user.email}`)
                .then(res => res.json())
                .then(data => {
                    
                    setPlants(data);
                });
        }
    }, [user]);


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
                                <th>Watering date</th>
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
                                    <span className="badge badge-ghost badge-sm">Last:{plant.lastWateredDate}</span>
                                    <br />
                                    <span className="badge badge-ghost badge-sm">Next:{plant.nextWateredDate}</span>
                                </td>
                                <td>
                                    <div className="">

                                        <div className="text-2xl font-extrabold">{plant.healthStatus}%</div>

                                    </div>
                                </td>
                                <td>
                                    <Link to={`/plant-details/${plant._id}`}>
                                        <button className="btn btn-soft btn-sm px-1 btn-success">Details</button>
                                    </Link>
                                    <Link to={`/plant-update/${plant._id}`}>
                                        <button className="btn btn-soft btn-warning btn-sm px-1">Update</button>
                                    </Link>
                                    <button onClick={() => handleDeletePlant(plant._id)} className="btn btn-soft btn-error btn-sm px-1">Delete</button>
                                </td>
                            </tr>)}

                        </tbody>

                    </table>
                </div>
            </div>

        </div>
    );



};

export default MyPlants;