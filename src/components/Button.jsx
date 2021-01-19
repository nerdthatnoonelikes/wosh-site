import useSound from "use-sound";
import wosh from "../speech.mp3";

const Button = ({ text }) => {
  const [play] = useSound(wosh);
  return (
    <button onClick={play} className="btn btn-dark">
      {text}
    </button>
  );
};

export default Button;
