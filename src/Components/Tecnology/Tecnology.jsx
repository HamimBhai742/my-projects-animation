import React from "react";

const Tecnology = () => {
  return (
    <div className="mt-16 ">
      <h2 className="text-4xl font-extrabold bg-fuchsia-500 text-center py-3">
        Technology Used
      </h2>
      <div className="mt-10 mx-8">
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
  );
};

export default Tecnology;
