import React, { useState, useEffect } from 'react';

const ToggleMessage = () => {
  const [showMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(!showMessage);
  };

  useEffect(() => {
    console.log('Message is', showMessage ? 'visible' : 'hidden');
  });

  return (
    <div>
      <button onClick={toggleMessage}>Toggle Message</button>
      {showMessage && <p>Hello, this is a secret message!</p>}
    </div>
  );
};

export default ToggleMessag