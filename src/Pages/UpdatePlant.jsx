import React from 'react';
import { useLoaderData } from 'react-router';
import Swal from 'sweetalert2';

const UpdatePlant = () => {
    const plant = useLoaderData();
    console.log(plant)

    const handleUpdatePlant = (e) => {
        e.preventDefault();

        const form = e.target;
        const formData = new FormData(form);
        const updatedPlantData = Object.fromEntries(formData.entries());

        // Send plant data to DB
        fetch(`http://localhost:3000/update/${plant._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedPlantData)
        })
            .then(res => res.json())
            .then(data => {
                // console.log("After Updating:", data)
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Plant Updated!",
                        icon: "success",
                        draggable: true
                    });
                }

            })
    };

    return (
        <div className='mt-8 p-12 rounded-2xl'>
            <div className='text-center'>
                <h1 className='text-4xl font-bold'>Update Plants</h1> <br />
                <p>Update your plants here</p>
            </div>

            <form onSubmit={handleUpdatePlant} className='w-full mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-auto'>
                    {/* 1st col */}
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Plant Name</legend>
                            <input type="text" className="input w-full" name='plantName' defaultValue={plant.plantName} placeholder="Enter Plant Name" />

                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Photo </legend>
                            <input type="text" className="input w-full" name='photoURL' defaultValue={plant.photoURL} placeholder="Enter Photo URL" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Category</legend>
                            <select defaultValue={plant.category} className="select" name="category">
                                <option disabled={true}>Select a category</option>
                                <option>succulent</option>
                                <option>flowering</option>
                                <option>fern</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Description</legend>

                            <textarea className="textarea w-full" placeholder="Enter Description" defaultValue={plant.description} name='description' ></textarea>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Email</legend>
                            <input type="text" className="input w-full" name='userEmail' defaultValue={plant.userEmail} placeholder="Enter User Email" />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">User Name</legend>
                            <input type="text" className="input w-full" name='userName' defaultValue={plant.userName} placeholder="Enter User Name" />
                        </fieldset>

                    </div>

                    {/* 2nd col */}
                    <div>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Care Level</legend>
                            <select defaultValue={plant.careLevel} className="select" name="careLevel">
                                <option disabled={true}>Select Care Level</option>
                                <option>easy</option>
                                <option>moderate</option>
                                <option>difficult</option>
                            </select>
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Watering Frequency <span className='text-accent'>In days</span></legend>
                            <div className="w-full max-w-xs">
                                <input type="range" min={1} max="8" defaultValue={plant.weteringFreq} className="range" step="1" name="weteringFreq" />
                                <div className="flex justify-between px-2.5 mt-2 text-xs">
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>
                                    <span>|</span>

                                </div>
                                <div className="flex justify-between px-2.5 mt-2 text-xs">
                                    <span>1</span>
                                    <span>2</span>
                                    <span>3</span>
                                    <span>4</span>
                                    <span>5</span>
                                    <span>6</span>
                                    <span>7</span>
                                    <span>8</span>

                                </div>
                            </div>

                        </fieldset>


                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Last Watered Date </legend>
                            <input type="date" className="input" name="lastWateredDate" defaultValue={plant.lastWateredDate} />
                        </fieldset>

                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Next Watering Date </legend>
                            <input type="date" className="input" name="nextWateredDate" defaultValue={plant.nextWateredDate} />
                        </fieldset>

                        <fieldset className="fieldset md:col-span-2">
                            <legend className="fieldset-legend">Health Status</legend>
                            <input type="range" min={0} max="100" defaultValue={plant.healthStatus} className="range range-accent" name="healthStatus" />
                        </fieldset>
                        <button className="mt-4 btn btn-block btn-success">Update Plant</button>
                    </div>


                </div>

            </form>

        </div>
    );
};

export default UpdatePlant;