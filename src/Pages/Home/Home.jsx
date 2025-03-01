import Banner from "../../Components/Banner/Banner";
import Slider from "../../Components/Slider/Slider";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div>
      <Banner />
      <div>
        <h1 className="text-4xl font-extrabold mt-10 mb-4 text-center bg-teal-500 py-3">
          Some Animate Charcter
        </h1>
        <Slider />
      </div>
      {/* Technology Used Section */}
      <div className="mt-10 ">
        <h2 className="text-4xl font-extrabold bg-fuchsia-500 text-center py-3">
          Technology Used
        </h2>
        <div className="mt-6 mx-8">
          <div className="grid md:grid-cols-4 grid-cols-2 gap-8 items-center">
            <figure>
              <img
                className="w-full h-56 animate-spin animate-infinite animate-duration-2000 animate-delay-2000
"
                src="/Rreact.webp"
                alt=""
              />
            </figure>
            <figure>
              <img
                className="w-full h-56 animate-jump-in animate-infinite animate-duration-1000 animate-delay-1000"
                src="/tailwind.webp"
                alt=""
              />
            </figure>
            <figure>
              <img
                className="w-full h-56 rounded-lg animate-wiggle animate-infinite animate-duration-1000 animate-delay-1000
"
                src="/motion.webp"
                alt=""
              />
            </figure>
            <figure>
              <img
                className="w-full h-56 rounded-lg animate-shake animate-infinite animate-duration-1000 animate-delay-1000
"
                src="/large.webp"
                alt=""
              />
            </figure>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
