import React from 'react';

const WatchContent = ({ id }) => {
  return (
    <iframe
      src={`https://www.youtube.com/embed/${id}?autoplay=1`}
      allow="autoplay"
      className="watch__left-content"></iframe>
  );
};
export default WatchContent;
