"use client";
import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  const [color, setColor] = useState("black");
  return (
    <div
      className="container flex"
      style={{ color: `${color}70%`, backgroundColor: `${color}10%` }}
    >
      {" "}
      <div className=" bg-white-300 h-[6rem] w-[5vw] rounded flex items-center justify-center shadow-lg shadow-black mr-[-3rem] z-10"></div>
      <TypeAnimation
        sequence={[
          "I'm a programmer",
          500,
          
          "I'm a Youtuber",
          900,
          
          "I'm a Designer",
          400,
          
          // delay is in milliseconds
        ]}
        repeat={1}
        speed={{
          type: "keyStrokeDelayInMs",
          value: 100, //the higher the value the slower the letters
        }} //This is the speed of typing in milliseconds
        deletionSpeed={50}
        wrapper="span" //its span by default
        // cursor={false}
        // preRenderFirstString={true}
        // omitDeletionAnimation={true}

        //it overrides the initial style in globals.css
        className=" bg-white-300 h-[6rem] w-[50vw] rounded flex items-center justify-center shadow-lg shadow-black" //same here.
      />
      <div className=" bg-white-300 h-[6rem] w-[5vw] rounded flex items-center justify-center shadow-lg shadow-black ml-[-3rem]"></div>
    </div>
  );
}
