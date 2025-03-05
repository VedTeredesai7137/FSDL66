import React from 'react';

function Filter({ setFilter }) {
  return (
    <div>
      <label>Filter Tasks:</label>
      <input type="text" onChange={(e) => setFilter(e.target.value)} />
    </div>
  );
}

export default Filter;
