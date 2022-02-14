<nav
        className="fixed z-10 w-full"
        style={{
          background: `rgba(9, 16, 16, ${backgroundTransparacy})`,
          padding: `${padding}px 0px`,
          boxShadow: `rgb(75, 85, 99 / ${boxShadow}) 0px 0px 20px 6px`,
        }}
      >
        <div className="w-full">
          <div className="flex h-20 items-center">
            <div className="items mx-20 flex w-full items-center justify-between">
              <div className="flex flex-shrink-0 items-center justify-center">
                <h1 className="cursor-pointer text-4xl font-bold text-white">
                  W<span className="text-blue-500">P</span>
                </h1>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 ">
                  <Link
                    href="/"
                    activeClass="Home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="text-md hover:front-black cursor-pointer rounded-md bg-blue-600 px-3 py-2 font-sans font-semibold text-white"
                  >
                    Home
                  </Link>
                  <Link
                    href="/About"
                    activeClass="/about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer rounded-md px-3 py-2 font-sans text-sm font-medium text-white hover:bg-blue-600 hover:text-white"
                  >
                    About
                  </Link>
                  <Link
                    href="/Skills"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer rounded-md px-3 py-2 font-sans text-sm font-medium text-white hover:bg-blue-600 hover:text-white"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/Resume"
                    activeClass="/Resume"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer rounded-md px-3 py-2 font-sans text-sm font-medium text-white hover:bg-blue-600 hover:text-white"
                  >
                    Resume
                  </Link>
                  <Link
                    href="/Journey"
                    activeClass="/journey"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer rounded-md px-3 py-2 font-sans text-sm font-medium text-white hover:bg-blue-600 hover:text-white"
                  >
                    Journey
                  </Link>
                  <Link
                    href="/Contact"
                    activeClass="/contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer rounded-md px-3 py-2 font-sans text-sm font-medium text-white hover:bg-blue-600 hover:text-white"
                  >
                    <a>Contact</a>
                  </Link>
                </div>
              </div>
              {/* for darkmode toggle button */}
              {/* <div className="bg-white border border-slate-100 dark:bg-slate-800 dark:border-slate-500 border-b rounded-full p-2  ">
                {colorTheme === "light" ? (
                  <svg
                    onClick={() => setTheme("light")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ) : (
                  <svg
                    onClick={() => setTheme("dark")}
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                  </svg>
                )}
              </div> */}
            </div>
            <div className="mr-10 flex md:hidden">
              {/* It has some property like when we click what will happen on mobile */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="focus: inline-flex items-center justify-center rounded-md bg-blue-600 p-2 text-white outline-none hover:bg-blue-600 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-800"
                aria-controls="moblie-menu"
                aria-expanded="false"
              >
                <span className="sr-only"> Open main menu </span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16" //for menu shape
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http:www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12" //d is the shape code for cross shape
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opactiy-0 scale-95"
          enterTo="opactiy-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opactiy-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            //handle the mobile menu tabs
            <div className="id=mobile-menu md:hidden">
              <div
                ref={ref}
                className="space-y-1 bg-white px-2 pt-2 pb-3 sm:px-3"
              >
                <Link
                  href="/Home"
                  activeClass="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  activeClass="about"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  About
                </Link>
                <Link
                  href="/Skills"
                  activeClass="skill"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Skills
                </Link>
                <Link
                  href="/Resume"
                  activeClass="Resume"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  Resume
                </Link>
                <Link
                  href="/Journey"
                  activeClass="Journey"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  <a>Journey</a>
                </Link>
                <Link
                  href="/Contact"
                  activeClass="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="block cursor-pointer rounded-md px-3 py-2 text-base font-medium text-black hover:bg-blue-600 hover:text-white"
                >
                  <a>Contact</a>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>