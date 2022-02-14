import React from "react";

function About() {
  return (
    <div className="py-20 pt-20">
      <div className="mx-auto max-w-md overflow-hidden rounded-xl  shadow-md md:max-w-2xl">
        <div className="gap-10 md:flex">
          <div className="px-4 pt-2 text-left">
            <div className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
              <h2 className="">About Me</h2>
            </div>
            <div className="text-left text-xs">
              <div>
                <p className="text-left text-sm text-slate-200">
                  Hello! My name is Wai Phyo Oo and I enjoy creating things that
                  live on the internet. My interestd in web development start
                  back in 2018.
                </p>
                <br />
                <p className="text-left text-sm text-slate-200">
                  My curiosity & enthusiasm always lead me towards interesting &
                  exciting opportunities. Energy is infectious & I always try to
                  provide my best to my peers.You can find me closer to the
                  nature when I am not at my desk. Please feel free to reach out
                  to me. Maybe we could grab coffee & briefly chat.
                </p>
              </div>
              <ul className="grid-gap-20 cursor:pointer mt-5 grid grid-cols-2 text-left leading-6 text-slate-400  hover:cursor-pointer hover:text-emerald-400">
                <li className="before:content-['▹']"> JavaScript</li>
                <li className="before:content-['▹']"> Node.js</li>
                <li className="before:content-['▹']"> React.js</li>
                <li className="before:content-['▹']"> Next.js</li>
                <li className="before:content-['▹']"> Java</li>
                <li className="before:content-['▹']"> Python</li>
              </ul>
            </div>
          </div>

          <div className="relative w-full">
            <div className="md:shrink-0">
              <img
                className=" h-full w-full object-none md:h-full md:w-full"
                src="https://media-exp1.licdn.com/dms/image/C4D03AQFj1JDT47mGFg/profile-displayphoto-shrink_200_200/0/1639015509479?e=1649289600&v=beta&t=omlMjYzXNxEosCBy_XnE6oeNY8OwZaVJqwbpkGGrgvY"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
