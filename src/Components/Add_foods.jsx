import React, { useContext } from "react";
import image from "../assets/Images/shwarma.jpg";
import Feature from "../Components/Feature.jsx";
import YouMayLike from "./YouMayLike.jsx";
import Swal from "sweetalert2";
import { useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProviders.jsx";
const Add_foods = () => {
  const { Quser } = useContext(AuthContext);
  const User = {
    UserId: Quser?._id,
    displayName: Quser?.displayName ,Userimage : Quser?.photoURL };
  const now = new Date();
  const custom = now.toLocaleString('en-US',{
    day:'numeric',
    month:"short",
    hour:'numeric',
    minute:'numeric',
    hour12: true
  });
  const navigate = useNavigate();
  const handleFoods = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const name = formData.get("name");
    const location = formData.get("location");
    const image = formData.get("image");
    const expire = formData.get("expire");
    const notes = formData.get("notes");
    const quantity = formData.get("quantity");
    const status = "Available";
    const data = { name, location, image, expire, notes, status, quantity,User,custom };
   
    fetch("https://hunger-hero-server.vercel.app/foods", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      credentials:'include'
    })
      .then((res) => res.json())
      .then((result) => {
        Swal.fire({
          title: "Food Added Successfull!",
          icon: "success",
          draggable: true,
        });
        setTimeout(() => {
          navigate("/");
        }, 2000);
      });
  };
  return (
    <>
      <section className="py-6 relative text-gray-900 bg-[url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <div className="relative grid max-w-7xl grid-cols-1 px-6 mx-auto lg:px-12 md:grid-cols-2 md:divide-x py-20 bg-black/40 backdrop-blur-lg rounded-lg text-white">
          <div className="py-6 md:py-0 md:px-6">
            <h1 className="text-4xl font-bold">Add Your Food</h1>
            <p className="pt-2 pb-4">
              Don't Waste your food give us through this website
            </p>

            <img src={image} alt="" className="p-6 h-96 md:h-[552px] md:p-0 " />
          </div>
          {/* Forms */}
          <form
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
            onSubmit={handleFoods}
          >
            <label className="block">
              <span className="mb-1">Food Name</span>
              <input
                type="text"
                placeholder="Mexican Burger"
                className="block w-full rounded-md shadow-sm border border-white p-4"
                name="name"
              />
            </label>
            <label className="block">
              <span className="mb-1">Food Image</span>
              <input
                type="text"
                placeholder="Food Image URL"
                className="block w-full rounded-md shadow-sm border border-white p-4"
                name="image"
              />
            </label>
            <label className="block">
              <span className="mb-1">Pickup Location</span>
              <textarea
                rows="3"
                className="block w-full rounded-md border border-white p-4"
                name="location"
              ></textarea>
            </label>
            <label className="block">
              <span className="mb-1">Expire Date/Time</span>
              <input
                type="text"
                placeholder="Today 12:00am"
                name="expire"
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Quantity</span>
              <input
                type="text"
                placeholder="20"
                name="quantity"
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Additional Notes</span>
              <textarea
                rows="3"
                className="block w-full rounded-md border border-white p-4"
                name="notes"
              ></textarea>
            </label>
            <button
              type="submit"
              className="self-center px-8 py-3 text-lg rounded bg-orange-400"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <section className="relative bg-[url('https://img.freepik.com/free-photo/top-view-circular-food-frame_23-2148723455.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
        <YouMayLike />
      </section>
    </>
  );
};

export default Add_foods;
