import React from "react";
import Layout from "../components/Layout";
import Cards from "./Cards";
import Articles from "./Articles";
import Testimonials from "./Testimonials";
import Newsletter from './Newsletter'
import Accordions from './Accordions'

const HomePage = () => {
    return (
        <Layout>
             <section className="bg-center bg-no-repeat bg-[url('https://www.dispatchtrack.com/hubfs/white%20glove%20delivery%20(1).webp')] h-[750px] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          Not just another trucking company
          </h1>
          <p className="mb-8 text-lg font-extrabold text-white lg:text-xl sm:px-16 lg:px-48">
            <h2>We provide the best vehicle options, with premium customer services at a competitive price.</h2>
            </p>
            <p className="mb-6 text-lg text-white lg:text-xl sm:px-16 lg:px-48">
          <h6>
            Become a driver and start earning.
          </h6>
          </p>
          <div className="flex flex-col space-y-6 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-6">
            <a
              href="/register"
              className=" max-w-xs   inline-flex justify-center items-center py-4 px-4 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Drive with Us
              <svg
                aria-hidden="true"
                className="ml-2 -mr-1 w-4 h-4"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.google.com"
              className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>
      <Cards/>
      <Newsletter/>
      <Articles/>
      <Testimonials/>
      <Accordions/>
        </Layout>
        );
    };
    
    export default HomePage;