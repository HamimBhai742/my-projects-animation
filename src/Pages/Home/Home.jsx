import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";
import Tecnology from "../../Components/Tecnology/Tecnology";
const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mt-16">
        <h1 className="text-4xl font-extrabold  mb-4 text-center bg-teal-500 py-3">
          Some Animate Charcter
        </h1>
        <div className="mt-6">
          <Slider />
        </div>
      </div>
      {/* Technology Used Section */}
      <Tecnology />
    </div>
  );
};

export default Home;
