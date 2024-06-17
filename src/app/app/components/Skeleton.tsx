import React from 'react';

const Skeleton = ({ className }:{className:any}) => {
  return (
    <div className={`animate-pulse bg-gray-300 ${className}`}></div>
  );
};

export default Skeleton;
