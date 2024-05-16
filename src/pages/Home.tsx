import { Link } from "react-router-dom";
import bannerImg from "../assets/image/quizBanner.svg";
import Styles from "../styles/Home.module.css"

const Home = () => {
  return (
    <div className="flex items-center justify-between text-center lg:text-left flex-col lg:flex-row mt-10">
      <div>
        <h1 className="text-2xl lg:text-5xl poppins-semibold">
          Discover, Learn, and Win
        </h1>
        <p className="text-md poppins-light mt-2 max-w-[70ch]">
          Discover NHQuiz for a fun and educational experience! Test your
          knowledge with diverse quizzes, compete with friends globally, climb
          the leaderboards, and win exciting rewards. Start your NHQuiz
          adventure today!
        </p>
        <div className="my-6">
          <Link
            className=" bg-[#446AA9] px-4 py-3 text-lg poppins-regular text-white rounded-md"
            to="/login"
          >
            Get Started
          </Link>
        </div>
      </div>
      <div className=" shrink-0 mt-5 lg:mt-0">
        <img
          className={`w-[320px] lg:w-[420px] ${Styles.bouncingImage}`}
          src={bannerImg}
          alt="Quiz Banner"
        />
      </div>
    </div>
  );
};

export default Home;
