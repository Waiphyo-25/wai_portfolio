import React from "react";

function Skills() {
  return (
    <div className="w-full items-center">
      <div className="items-center">
        <div className="px-4 pt-2 text-center">
          <div className="text-gray-40 mb-10 mt-10 text-2xl font-semibold uppercase tracking-wide">
            Skills
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-1 lg:grid-cols-3 xl:gap-x-8">
          <div className="mb-10 flex flex-col items-center p-4 pr-6">
            <img
              src="https://static.thenounproject.com/png/995861-200.png"
              className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-white"
            />
            <div className="px-4 pt-2 text-center ">
              <p className="text-md mb-4 text-center font-semibold text-white">
                Backend
              </p>
            </div>
            <div className="px-4 pt-2 text-center ">
              <p className="text-md text-center text-gray-400">
                NodeJs,ExpressJs,Java
              </p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center p-4 pr-6">
            <img
              src="https://static.thenounproject.com/png/3905507-200.png"
              className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-white"
              title="Backend"
            />
            <div className="px-4 pt-2 text-center ">
              <p className="text-md mb-4 text-center font-semibold text-white">
                Frontend
              </p>
            </div>
            <div className="px-4 pt-2 text-center ">
              <p className="text-md text-center text-gray-400">
                HTML5, CSS3, SCSS, TailwindCSS, React, <br />
                Redux, JavaScript, Bootstrap, NextJs
              </p>
            </div>
          </div>
          <div className="mb-10 flex flex-col items-center p-4 pr-6">
            <img
              src="https://icons.veryicon.com/png/o/business/little-girl-is-not-talented/equipment-10.png"
              className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-white"
            />
            <div className="px-4 pt-2 text-center ">
              <p className="text-md mb-4 text-center font-semibold text-white">
                Tools
              </p>
            </div>
            <div className="px-4 pt-2 text-center ">
              <p className="text-md text-center text-gray-400">
                Git, Github, NPM, Yarn, <br />
                Docker, Slack, Figma
              </p>
            </div>
          </div>

          <div className="mb-10 flex flex-col items-center p-4 pr-6">
            <img
              src="https://www.pngkit.com/png/detail/231-2316751_database-database-icon-png.png"
              className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-white"
            />
            <div className="px-4 pt-2 text-center ">
              <p className="text-md mb-4 text-center font-semibold text-white">
                DBMS
              </p>
            </div>
            <div className="px-4 pt-2 text-center ">
              <p className="text-md text-center text-gray-400">
                MongoDB, MySQL
              </p>
            </div>
          </div>

          <div className="mb-10 flex flex-col items-center p-4 pr-6">
            <img
              src="https://st.depositphotos.com/1010751/4379/v/600/depositphotos_43790977-stock-illustration-vector-head-gears-abstraction-of.jpg"
              className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-white"
            />
            <div className="px-4 pt-2 text-center ">
              <p className="text-md mb-4 text-center font-semibold text-white">
                Knowledge
              </p>
            </div>
            <div className="px-4 pt-2 text-center ">
              <p className="text-md text-center text-gray-400">
                Object-Oriented Design <br /> Data Structures & Algorithms{" "}
                <br /> System Design
              </p>
            </div>
          </div>

          <div className="mb-10 flex flex-col items-center p-4 pr-6">
            <img
              src="https://png.pngtree.com/png-vector/20190412/ourlarge/pngtree-vector-team-icon-png-image_931080.jpg"
              className="inline-block h-20 w-20 rounded-full bg-white ring-2 ring-white"
            />
            <div className="px-4 pt-2 text-center ">
              <p className="text-md mb-4 text-center font-semibold text-white">
                Team
              </p>
            </div>
            <div className="px-4 pt-2 text-center ">
              <p className="text-md text-center text-gray-400">
                Scrum & Kanban <br /> Jira & Project Management <br /> Trello,
                Slack
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
