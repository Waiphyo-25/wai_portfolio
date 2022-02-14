import React, { useState } from "react";
import Typewriter from "typewriter-effect";

const HeroSection = () => {
  const [state] = useState({
    title: "WAI",
    titleTwo: "PHYO",
  });

  return (
    <div className="flex flex-col items-center justify-center space-y-2 bg-[url('https://cutewallpaper.org/21/cool-dark-blue-backgrounds/Download-premium-illustration-of-Blue-polygon-on-dark-background-social.jpg')] bg-cover bg-center py-10 pt-80 text-left text-4xl font-bold md:box-content lg:text-6xl">
      <div className="w-full">
        <div className="md:container md:mx-auto">
          <div className="grid content-center items-center justify-center gap-10">
            <div className="items-center text-left">
              <p className="mb-4 text-left font-mono text-xs font-normal">
                Hi! my name is
              </p>
              <h1 className="content-center items-center text-left text-4xl tracking-wide text-white">
                {state.title}
                <span className="text-blue-500"> {state.titleTwo}</span>
              </h1>
            </div>

            <div className="items-center text-center font-serif text-4xl text-white">
              <Typewriter
                options={{
                  autoStart: true,
                  loop: true,
                }}
                onInit={(typewriter) => {
                  typewriter
                    .typeString("I'm Front-end Developer")
                    .pauseFor(4000)
                    .deleteAll()
                    .typeString("I'm React Developer")
                    .deleteAll()
                    .typeString("I'm UI/UX Developer")
                    .start();
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
