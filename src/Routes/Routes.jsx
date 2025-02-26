import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Animation2D from "../Pages/Animation2D/Animation2D";
import Animation3D from "../Pages/Animation3D/Animation3D";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Root />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/2D" element={<Animation2D />} />
        <Route path="/3D" element={<Animation3D />} />
      </Route>
    </Routes>
  );
};

export default Router;
