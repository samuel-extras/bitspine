import { useState } from 'react';

const Hero = () => {
  const [state, setState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: 'Markets', path: 'javascript:void(0)' },
    { title: 'Guides', path: 'javascript:void(0)' },
    { title: 'Partners', path: 'javascript:void(0)' },
  ];

  return (
    <>
      <header className="bg-[#011936]">
        <nav className="items-center pt-5 px-4 mx-auto max-w-screen-xl sm:px-8 md:flex md:space-x-6">
          <div className="flex justify-between">
            <div className="text-white hover:text-[#BD1E51] font-extrabold text-4xl">
              bitSpine
            </div>
            <button
              className="text-white outline-none md:hidden"
              onClick={() => setState(!state)}
            >
              {state ? (
                <svg
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
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
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <ul
            className={`flex-1 justify-between mt-12 md:flex md:mt-0 ${
              state ? '' : 'hidden'
            }`}
          >
            <li className="order-2 pb-5 md:pb-0">
              <a
                href="javascript:void(0)"
                className="py-3 px-6 rounded-md shadow-md text-white text-center bg-gray-700 focus:shadow-none block md:inline"
              >
                Connect Wallet
              </a>
            </li>
            <div className="order-1 flex-1 justify-center items-center space-y-5 md:flex md:space-x-6 md:space-y-0">
              {navigation.map((item, idx) => (
                <li className="text-white hover:text-gray-500" key={idx}>
                  <a href={item.path}>{item.title}</a>
                </li>
              ))}
            </div>
          </ul>
        </nav>
      </header>
      <section className="mt-24 mx-auto max-w-screen-xl pb-4 px-4 sm:px-8">
        <div className="text-center space-y-4">
          <h1 className="text-gray-400 font-bold text-4xl md:text-5xl">
            Optimize your website for
            <span className="text-white"> Search engine</span>
          </h1>
          <p className="text-gray-200 max-w-xl mx-auto leading-relaxed">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum
          </p>
        </div>
        <div className="mt-12 justify-center items-center space-y-3 sm:space-x-6 sm:space-y-0 sm:flex">
          <a
            href="javascript:void(0)"
            className="px-10 py-3.5 w-full bg-slate-700 text-white text-center rounded-md shadow-md block sm:w-auto"
          >
            Get started
          </a>
          <a
            href="javascript:void(0)"
            className="px-10 py-3.5 w-full text-white text-center border rounded-md duration-300 hover:text-gray-500 hover:shadow block sm:w-auto"
          >
            Try it out
          </a>
        </div>
      </section>
    </>
  );
};
export default Hero;
