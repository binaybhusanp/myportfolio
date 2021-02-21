import dp from "../img/linkedindp.png";
import ReactTypingEffect from "react-typing-effect";
import Social from "../common/Social";
const Home = () => {
  return (
    <div className="contents home">
      <img src={dp} alt="Binay Pradhan" className="display-picture" />
      <ReactTypingEffect
        className="typing-effect"
        text={"I am Binay Pradhan.I am a React Developer."}
      />
      <Social/>
    </div>
  );
};

export default Home;
