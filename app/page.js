import "animate.css";

export default function Home() {
  return (
    <div className=" flex overflow-hidden justify-center mt-[10rem]">
      <div className="bg-div"></div>
      <div className="animate__animated animate__lightSpeedInRight  glass text-center w-[50vw] h-[40vh]">
        <h1 className="animate__animated animate__tada animate_delay-1s text-[5rem] font-[800] text-orange-900">
          Animate<span className=" text-black">.</span>css
        </h1>
        <h1 className="animate__animated animate__zoomInDown animate_delay-3s text-[1.2rem] font-[500] mt-[0.5rem]">
          A cross-browser library for CSS animation
        </h1>
        <h1 className="animate__animated animate__zoomInDown animate_delay-4s text-[1rem] font-[300] mt-[0.5rem]">
          Animate without Javascript
        </h1>
      </div>
    </div>
  );
}
