const PlantDetails = ({ plant }) => {
  const {
    plantName,
    photoURL,
    category,
    description,
    userEmail,
    userName,
    careLevel,
    weteringFreq,
    lastWateredDate,
    nextWateredDate,
    healthStatus,
  } = plant;

  return (
    <div className="max-w-5xl mx-auto my-10 px-4">
      <div className="card lg:card-side bg-base-100 shadow-xl">
        <figure className="lg:w-1/2">
          <img
            src={photoURL}
            alt={plantName}
            className="w-full h-full object-cover"
          />
        </figure>

        <div className="card-body lg:w-1/2">
          <div className="flex justify-between items-start">
            <h2 className="card-title text-4xl">{plantName}</h2>

            <div className="badge badge-success badge-lg">
              {healthStatus}% Healthy
            </div>
          </div>

          <div className="flex gap-2 flex-wrap">
            <div className="badge badge-primary">
              {category}
            </div>

            <div className="badge badge-secondary">
              {careLevel}
            </div>
          </div>

          <p className="mt-4 text-base-content/80">
            {description}
          </p>

          <div className="divider"></div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-semibold">Owner</h3>
              <p>{userName}</p>
              <p className="text-sm text-gray-500">
                {userEmail}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Watering Frequency
              </h3>
              <p>
                Every {weteringFreq} day
                {weteringFreq > 1 ? "s" : ""}
              </p>
            </div>

            <div>
              <h3 className="font-semibold">
                Last Watered
              </h3>
              <p>{lastWateredDate}</p>
            </div>

            <div>
              <h3 className="font-semibold">
                Next Watering
              </h3>
              <p>{nextWateredDate}</p>
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-semibold mb-2">
              Plant Health
            </h3>

            <progress
              className="progress progress-success w-full"
              value={healthStatus}
              max="100"
            ></progress>

            <p className="text-right mt-1">
              {healthStatus}%
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlantDetails;