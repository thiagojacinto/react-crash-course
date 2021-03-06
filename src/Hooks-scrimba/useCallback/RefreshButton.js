import React from 'react';

export default React.memo(({ cb }) => {
  
  console.log("rendered");  // Verifying
  
  return (
    <button 
      className = "button-refresh-colors"
      onClick = {cb}
    >
      Refresh Colors 
    </button>
  );
  
});