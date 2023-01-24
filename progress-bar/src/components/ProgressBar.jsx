import React, { useState } from 'react';

const ProgressBar = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    if (e.target.value > 100) {
      e.target.value = 100;
    } else if (e.target.value < 0) {
      e.target.value = 0;
    } else {
      setValue(e.target.value);
    }
  };

  return (
    <div className="progress-bar-container">
      <span>Progress Bar</span>
      <div className="progress-bar-content">
        <div className="progress-bar" max="100" value={value}></div>
        <div className="progress-bar-percentage" style={{ width: `${value}%` }}>
          {value}%
        </div>
      </div>
      <form>
        <label htmlFor="html">Input Percentage:</label>
        <input type="number" onChange={handleChange} />
      </form>
    </div>
  );
};

export default ProgressBar;
