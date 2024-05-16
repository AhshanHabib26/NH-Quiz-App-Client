import { Link } from "react-router-dom";
import logoImg from "../../../assets/image/qa.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between mt-3">
      <Link to="/">
        <div className="flex items-center">
          <img className="w-[35px]" src={logoImg} alt="Website Logo" />
          <h1 className="text-2xl poppins-semibold ml-1">
            NH<span className="text-[#446AA9]">Quiz</span>
          </h1>
        </div>
      </Link>
      <div className=" bg-[#446AA9] px-4 py-2 text-xl poppins-light text-white rounded-md">
        <Link to="/login">Login</Link>
      </div>
    </div>
  );
};

export default Navbar;
