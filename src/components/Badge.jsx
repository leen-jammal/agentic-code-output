import React from 'react';

function Badge({ count }) {
  return (
    <div className="badge">
      <span>{count}</span>
    </div>
  );
}

export default Badge;