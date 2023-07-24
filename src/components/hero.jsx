import rubiksImage from "../assets/rubiks.svg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" flex  flex-col-reverse md:flex-row md: items-center py-16 overflow-hidden ">
      {/* Left Side */}
      <div className="w-full flex flex-col justify-center px-4 md:w-1/2">
        <h1 className="text-4xl md:text-6xl  font-sans font-bold text-black">
          Conquer the World of Trivia: Rise as a Titan!
        </h1>
        <div className="flex flex-col items-start mt-8">
          <div>
            <Link to="/topics">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-4">
                Topics
              </button>
            </Link>
            <Link to="/letsplay">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Take Quiz
              </button>
            </Link>
          </div>
          <div className="pt-2">
            <Link to="/create">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
                Create Your Own Quiz
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="w-1/2 px-4">
        <img
          src={rubiksImage}
          alt="Rubik's Cube"
          className="w-50 h-50 rounded"
        />
      </div>
    </section>
  );
};
export default Hero;
