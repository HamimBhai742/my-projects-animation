import Lottie from "react-lottie";
import animationData from "../../lottioData/loading.json";

export default function Loading() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    text: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div>
      <Lottie options={defaultOptions} height={500} width={700} />
    </div>
  );
}
