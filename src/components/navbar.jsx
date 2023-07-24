import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo on the left */}
        <Link to="/">
          <div className="text-white font-bold text-xl">Trivia Titan</div>
        </Link>

        {/* Links on the right */}
        <div className="flex space-x-4">
          <Link to="/aboutus" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link to="/letsplay" className="text-white hover:text-gray-300">
            Play
          </Link>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
