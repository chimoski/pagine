import React from "react";

function Fallback({ error }) {
  return (
    <div>
      Oh! Something is wrong with your App
      <p className='text-red-500'>{error.message}</p>
    </div>
  );
}

export default Fallback;
