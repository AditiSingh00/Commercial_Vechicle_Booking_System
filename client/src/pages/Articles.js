import React from 'react'
import { Button } from 'flowbite-react';

const Articles = () => {
  return (
        <div className="container my-20 mx-auto md:px-6">
        <section className="mb-32 text-center lg:text-left">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Articles
          </h2>
    
          <div className="grid gap-x-6 lg:grid-cols-3 lg:gap-x-12">
            <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
              <div className="relative  overflow-hidden bg-cover bg-no-repeat">
                <img src="https://images.unsplash.com/photo-1531482615713-2afd69097998?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                className="w-full rounded-t-lg" alt="Project 1" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Newsroom</h5>
                <p className="mb-6">
                See announcements about our latest releases, initiatives, and partnerships.
                </p>
                <a href="https://www.google.com" >
                 <Button >
                   Learn more</Button>
                </a>
              </div>
            </div>
            <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img src="https://images.unsplash.com/photo-1526253038957-bce54e05968e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                className="w-full rounded-t-lg" alt="Project 1" />
                <a href="#!">
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">About us</h5>
                <p className="mb-6">
                Find out how we started, what drives us, and how we’re reimagining how the world moves.
                </p>
                <a href="https://www.google.com" >
                 <Button >
                   Learn more</Button>
                </a>
              </div>
            </div>
            <div className="mb-6 block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 lg:mb-0" data-te-ripple-init data-te-ripple-color="light">
              <div className="relative overflow-hidden bg-cover bg-no-repeat">
                <img src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" 
                className="w-full rounded-t-lg" alt="Project 1" />
                <a href="https://www.google.com" >
                  <div
                    className="absolute top-0 right-0 bottom-0 left-0 h-full w-full bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100 bg-[hsla(0,0%,98.4%,0.2)]"></div>
                </a>
              </div>
              <div className="p-6">
                <h5 className="mb-4 text-lg font-bold">Global citizenship</h5>
                <p className="mb-6">
                Read about our commitment to making a positive impact in the cities we serve.
                </p>
                <a href="https://www.google.com" >
                 <Button >
                   Learn more</Button>
                </a>
              </div>
            </div>   
          </div>
        </section>
      </div>
  )
}

export default Articles