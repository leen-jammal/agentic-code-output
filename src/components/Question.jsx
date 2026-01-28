import React from 'react';

function Question({ question }) {
  return (
    <div>
      <h2>{question.text}</h2>
      {/* Options will go here */}
    </div>
  );
}

export default Question;