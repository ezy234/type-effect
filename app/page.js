import "animate.css";

export default function Home() {
  return (
    <div className=" flex justify-center items-center h-screen text-center overflow-hidden">
      <div className="bg-div"></div>
      <div className="glass w-[50vw] h-[40vh] animate__animated animate__lightSpeedInRight">
        <h1 className="animate__animated animate__tada animate_delay-2s text-[5rem] font-[800] text-orange-900">
          Animate<span className=" text-black">.</span>css
        </h1>
        <p className="animate__animated animate__zoomInDown animate_delay-4s text-[1.2rem] font-[500] mt-[0.5rem]">
          A cross-browser library for CSS animation
        </p>
        <p className="animate__animated animate__zoomInDown animate_delay-5s text-[1rem] font-[300] mt-[0.5rem]">
          Animate without Javascript
        </p>
      </div>
    </div>
  );
}
