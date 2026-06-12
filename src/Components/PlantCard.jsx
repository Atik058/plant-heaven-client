import React from 'react';

const PlantCard = ({ plant }) => {
    const {
        // careLevel,
        category,
        // description,
        healthStatus,
        // lastWateredDate,
        nextWateredDate,
        photoURL,
        plantName,
        // userEmail,
        userName,
        // weteringFreq,
        // _id
    } = plant;
    return (
        <div className="hover-3d">
            {/* content */}
            <div className="w-65 rounded-2xl shadow-xl h-100">
                <img src={photoURL} className='w-full h-68 object-cover' />
                <div className='grid grid-cols-2 gap-2 m-2'>
                    <div>
                        <h2 className='text-xl font-bold'>{plantName}</h2>
                        <p className='text-secondary text-sm'>{category}</p>
                        <p className='text-sm font-semibold' >{userName}</p>
                    </div>
                    <div>
                        <p className='text-sm'>Next Watering Date: <span className='font-semibold'>{nextWateredDate}</span></p>
                    </div>
                    <p>Health Status</p>
                    <progress className={`progress w-30 ${healthStatus < 60 ? 'progress-warning' : 'progress-accent'}`} value={healthStatus} max="100"></progress>
                </div>
            </div>
            {/* 8 empty divs needed for the 3D effect */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default PlantCard;