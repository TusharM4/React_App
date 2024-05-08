import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [floorPlans, setFloorPlans] = useState([]);
  const [floorPlanData, setFloorPlanData] = useState({
    floorName: '',
    interiorSize: '',
    exteriorSize: '',
    exteriorType: '',
    facingDirection: '',
    floorType: '',
    imageFile: null
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFloorPlanData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleFileChange = (event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setFloorPlanData(prevState => ({
        ...prevState,
        imageFile: imageUrl
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFloorPlans([...floorPlans, floorPlanData]);
    setFloorPlanData({
      floorName: '',
      interiorSize: '',
      exteriorSize: '',
      exteriorType: '',
      facingDirection: '',
      floorType: '',
      imageFile: null
    });
  };

  return (
    <div className="app">
      <div className="form-container">
        <form className="floor-plan-form" onSubmit={handleSubmit}>
          <input
            name="floorName"
            value={floorPlanData.floorName}
            onChange={handleInputChange}
            placeholder="Floor Name"
          />
          <input
            name="interiorSize"
            value={floorPlanData.interiorSize}
            onChange={handleInputChange}
            placeholder="Interior Size"
          />
          <input
            name="exteriorSize"
            value={floorPlanData.exteriorSize}
            onChange={handleInputChange}
            placeholder="Exterior Size"
          />
          <select
            name="exteriorType"
            value={floorPlanData.exteriorType}
            onChange={handleInputChange}
          >
            <option value="">Select Exterior Type</option>
            <option value="Brick">Brick</option>
            <option value="Wood">Wood</option>
          </select>
          <select
            name="facingDirection"
            value={floorPlanData.facingDirection}
            onChange={handleInputChange}
          >
            <option value="">Select Facing Direction</option>
            <option value="North">North</option>
            <option value="South">South</option>
            <option value="East">East</option>
            <option value="West">West</option>
          </select>
          <select
            name="floorType"
            value={floorPlanData.floorType}
            onChange={handleInputChange}
          >
            <option value="">Select Floor Type</option>
            <option value="Studio">Studio</option>
            <option value="One Bedroom">One Bedroom</option>
            <option value="Two Bedrooms">Two Bedrooms</option>
          </select>
          <input
            type="file"
            onChange={handleFileChange}
            accept="image/*"
          />
          <button type="submit">Save Floor Plan</button>
        </form>
      </div>
      <div className="floor-plan-list">
        {floorPlans.map((plan, index) => (
          <div key={index} className="floor-plan-card">
            <p>Floor Name: {plan.floorName}</p>
            <p>Interior Size: {plan.interiorSize}</p>
            <p>Exterior Size: {plan.exteriorSize}</p>
            <p>Exterior Type: {plan.exteriorType}</p>
            <p>Facing Direction: {plan.facingDirection}</p>
            <p>Floor Type: {plan.floorType}</p>
            {plan.imageFile && <img src={plan.imageFile} alt="Floor Plan" style={{ width: '100px', height: '100px' }} />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
