import {useState} from 'react'



function LikeButton() {
  const [isliked, setisliked] = useState(false);
  const like = {
    backgroundColor: "white",
    color: "red",
    borderRadius: "4px",
    borderColor: "red",
    outline: "none"
  };

  return (
    <div>
      <button
        style={isliked ? like : null}
        onClick={() => setisliked(!isliked)}
      >
        ❤
      </button>
    </div>
  );
}
export default LikeButton;