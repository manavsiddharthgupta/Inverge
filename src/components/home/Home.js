import Card from "../../ui/Card";
import landingPage from "../images/landingimg.png";

const Home = () => {
  return (
    <Card toscroll="Home">
      <div className=" lg:flex">
        <div className="lg:w-[45%] mb-12 w-full text-center lg:text-left lg:h-fit lg:my-auto pr-4 text-white">
          <h1 className="lg:text-6xl font-semibold text-3xl text-white">
            Digital Agency & Marketing
          </h1>
          <p className="my-4 max-w-[500px] mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
            lobortis mollis metus at maximus. Donec bibendum tristique nibh ut
            porttitor.
          </p>
        </div>
        <div className="lg:w-[55%] w-full h-full">
          <img className="block my-auto" src={landingPage} alt="landingImg" />
        </div>
      </div>
    </Card>
  );
};
export default Home;
