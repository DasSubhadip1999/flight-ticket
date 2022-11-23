import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";

function BackButton({ url }) {
  return (
    <Link to={url} className="flex items-center border-2 rounded-md w-20 ml-5">
      <FaArrowCircleLeft className="mx-2" />
      Back
    </Link>
  );
}

export default BackButton;
