"use client";
import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div className="container">
      <TypeAnimation
        sequence={[
          "I'm a Software Engineer",
          500,
          "I'm a Youtuber",
          600,
          "I'm a Embedded Systems Engineer ",
          700,
        ]}
        repeat={0}
      />
    </div>
  );
}
