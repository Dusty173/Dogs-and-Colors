import React from "react";
import { Link } from "react-router-dom";
import "./DogList.css";

function DogList({ dogs }) {
  return (
    <div className="DogList">
      <div className="row mt-4">
        <div className="col">
          <h2 className="text-center">
            Click on a Dog for more info!
          </h2>
        </div>
      </div>
      <div className="row">
        {dogs.map(dog => (
          <div className="col-3 text-center" key={dog.name}>
            <img src={`/${dog.src}.jpg`} alt={dog.name} />
            <h3 className="mt-3">
              <Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link>
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DogList;