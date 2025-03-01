const VideoBackground = () => (
  <div className="relative h-screen">
    <video autoPlay loop muted className="absolute w-full h-full object-cover">
      <source src="/Peta.mp4" type="video/mp4" />
    </video>
    {/* <div className="absolute inset-0 flex items-center justify-center text-white text-4xl">
      Welcome to the Future 🚀
    </div> */}
  </div>
);

export default VideoBackground;
