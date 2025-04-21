import { Link, useNavigate, useParams } from "react-router-dom";
import image from "../assets/Images/shwarma.jpg";
import YouMayLike from "./YouMayLike.jsx";
import { Select } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
const UpdateFoods = () => {
  const { id } = useParams();
  const [food,setfood]=useState(null);
  const navigate = useNavigate();
  const handleUpdate = (e)=>{
    e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get("name");
        const location = formData.get("location");
        const image = formData.get("image");
        const expire = formData.get("expire");
        const notes = formData.get("notes");
        const quantity = formData.get("quantity");
        const status = formData.get("status");
        const data = { name, location, image, expire, notes, status, quantity };
        console.log("the updated data",data);
        fetch(`https://hunger-hero-server.vercel.app/foods/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
          credentials:'include'
        })
          .then((res) => res.json())
          .then((result) => {
            Swal.fire({
              title: "Food Updated Successfull!",
              icon: "success",
              draggable: true,
            });
            setTimeout(() => {
              navigate("/");
            }, 2000);
          });
  }

  useEffect(()=>{
    fetch(`https://hunger-hero-server.vercel.app/foods?id=${id}`)
    .then(res=>res.json())
    .then(data=>{
      setfood(data[0]);
    })},[id]);
  

  
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

            <img src={food?.image} alt="" className="p-6 h-96 md:h-[552px] md:p-0 " />
          </div>
        <div className="md:divide-x  lg:order-1">
        <form onSubmit={handleUpdate}
            noValidate=""
            className="flex flex-col py-6 space-y-6 md:py-0 md:px-6"
          >
            <label className="block">
              <span className="mb-1">Food Name</span>
              <input
                type="text"
                placeholder="Mexican Burger"
                defaultValue={food?.name} 
                name="name"
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Food Image</span>
              <input
                type="text"
                placeholder="Food Image URL"
                name="image"
                defaultValue={food?.image} 
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Pickup Location</span>
              <textarea
                rows="3"
                name="location"
                className="block w-full rounded-md border border-white p-4"
                defaultValue={food?.location} 
              ></textarea>
            </label>
            <label className="block">
              <span className="mb-1">Expire Date/Time</span>
              <input
                type="text"
                name="expire"
                placeholder="Today 12:00am"
                defaultValue={food?.expire} 
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <label className="block">
              <span className="mb-1">Additional Notes</span>
              <textarea
                rows="3"
                name="notes"
                defaultValue={food?.notes} 
                className="block w-full rounded-md border border-white p-4"
              ></textarea>
            </label>
            <label className="block">
              <span className="mb-1">Quantity</span>
              <input
                type="text"
                placeholder="20"
                name="quantity"
                defaultValue={food?.quantity}
                className="block w-full rounded-md shadow-sm border border-white p-4"
              />
            </label>
            <Select name="status" className="block w-1/2 lg:w-full appearance-none focus:outline-none rounded-md border border-white p-4 text-white" >
                
                <option value="" disabled hidden>Status</option>
                <option value="Available" className="bg-transparent text-black">Available</option>
                <option value="Requested" className="bg-transparent text-black">Requested</option>
                <option value="Out of Stock" className="bg-transparent text-black">Out of Stock</option>

              </Select>
   
             
        
            <button
              type="submit"
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
