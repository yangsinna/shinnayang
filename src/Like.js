import { useState } from 'react';

export default function Like({ imgSrc }) {
  const [isLike, setIsLike] = useState(false);

  const handleLike = () => {
    if (isLike) {
      setIsLike(false);
    } else {
      setIsLike(true);
    }
  };

  return (
    <div>
      <button onClick={handleLike}>{isLike ? '💜' : '🤍'}</button>
    </div>
  );
}
