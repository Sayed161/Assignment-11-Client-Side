import React from "react";
import image from "../assets/Images/shwarma.jpg";
import YouMayLike from "../Components/YouMayLike";
import { Link } from "react-router-dom";
const Details = () => {
  return (
    <>
      <section className="text-gray-800 bg-[rgba(149,129,43,0.1)] bg-center">
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-20 text-black">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl  lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl">
              Food Name
            </h1>
            <label className="block my-3 text-xl">
              <span className="mb-1 font-bold">Pickup Location : </span>
              <span>Mirpur 10,Dhaka</span>
            </label>
            <label className="btn my-3 text-lg btn-neutral">
              <span className="mb-1 font-bold">Expire Date/Time : </span>
              <span>Today 12:00pm</span>
            </label>
            <label className="block my-3 text-xl">
              <span className="mb-1 font-bold">Addition Notes: </span>
              <span>Mirpur 10,Dhaka</span>
            </label>
            <div className="flex items-start justify-start my-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src={image}
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-3 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-600">
                    Leroy Jenkins
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <Link
                to="/update"
                rel="noopener noreferrer"
                href="#"
                className="btn px-12 text-lg py-4 bg-orange-600 text-white"
              >
                Update
              </Link>
              <a
                rel="noopener noreferrer"
                href="#"
                className="btn px-12 text-lg py-4 bg-red-600 text-white"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className="relative bg-[url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <YouMayLike />
      </section>
    </>
  );
};

export default Details;
