import React from 'react';

function Filter({ filter, setFilter }) {
  return (
    <div>
      <input
        type="text"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        placeholder="Search tasks"
      />
    </div>
  );
}

export default Filter;
