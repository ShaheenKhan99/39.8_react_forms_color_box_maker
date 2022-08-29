import React, { useState } from "react";
import {v4 as uuid } from "uuid";

const NewBoxForm = ({ createBox }) => {
  const INITIAL_STATE = {
    backgroundColor: '',
    width: '',
    height: ''
  }

  const  [formData, setFormData] = useState(INITIAL_STATE);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value
    }));
  }

  const gatherInput = (e) => {
    e.preventDefault();
    createBox({ ...formData, id: uuid() });
    setFormData(INITIAL_STATE);
  }

  return (
    <div>
      <form onSubmit={gatherInput}>
        <div>
          <label htmlFor="backgroundColor">Background Color</label>
          <input onChange={handleChange}
            type="text"
            name="backgroundColor"
            value={formData.backgroundColor}
            id="backgroundColor"
          />
        </div>
        <div>
          <label htmlFor="width">Width</label>
          <input onChange={handleChange}
            type="text"
            name="width"
            value={formData.width}
            id="width"
          />
        </div>
        <div>
          <label htmlFor="height">Height</label>
          <input onChange={handleChange}
            type="text"
            name="height"
            value={formData.height}
            id="height"
          />
        </div>
      
        <button>Create a new box!</button>
      
      </form>
    </div>
  );
}

export default NewBoxForm;