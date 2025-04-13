import React from "react";
import image from "../assets/Images/shwarma.jpg";
import YouMayLike from "./YouMayLike.jsx";
import { Select } from "@chakra-ui/react";
const UpdateFoods = () => {
  return (
    <>
      <section className="py-6 relative text-gray-900 bg-[url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative grid max-w-7xl grid-cols-1 px-6 mx-auto lg:px-12 md:grid-cols-2  py-20 bg-black/40 backdrop-blur-lg rounded-lg text-white">
          <div className="py-6 md:py-0 md:px-6 lg:order-2">
            <h1 className="text-4xl font-bold">Update Your Food</h1>
            <p className="pt-2 pb-4">
              Don't Waste your food give us through this website
            </p>

            <img src={image} alt="" className="p-6 h-96 md:h-[552px] md:p-0 " />
          </div>
        <div className="md:divide-x  lg:order-1">
        <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Food Name</span>
              <input
                type="text"
                placeholder="Mexican Burger"
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Food Image</span>
              <input
                type="text"
                placeholder="Food Image URL"
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Pickup Location</span>
              <textarea
                rows="3"
                className="block w-full rounded-md border border-white p-4"
              ></textarea>
            </label>
            <label className="block">
              <span className="mb-1">Expire Date/Time</span>
              <input
                type="text"
                placeholder="Today 12:00am"
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Additional Notes</span>
              <textarea
                rows="3"
                className="block w-full rounded-md border border-white p-4"
              ></textarea>
            </label>
   
            <Select className="block w-1/2 lg:w-full appearance-none focus:outline-none rounded-md border border-white p-4 text-white" defaultValue=''>
                
                <option value="" disabled hidden>Status</option>
                <option value="Available" className="bg-transparent text-black">Available</option>
                <option value="Requested" className="bg-transparent text-black">Requested</option>
                <option value="Out of Stock" className="bg-transparent text-black">Out of Stock</option>

              </Select>
   
             
        
            <button
              type="button"
              className="self-center px-8 py-3 text-lg rounded bg-orange-400"
            >
              Submit
            </button>
          </form>
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

export default UpdateFoods;
