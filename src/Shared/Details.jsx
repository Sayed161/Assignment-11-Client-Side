import React, { useContext, useEffect, useState } from "react";
import image from "../assets/Images/shwarma.jpg";
import YouMayLike from "../Components/YouMayLike";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { AuthContext } from "../Providers/AuthProviders";
import Swal from "sweetalert2";

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [food, setfood] = useState(null);
  const { Quser } = useContext(AuthContext);
  const UserInfo = {
    UserId: Quser?.uid,
    displayName: Quser?.displayName,
    Userimage: Quser?.photoURL,
  };
  const now = new Date();
  const custom = now.toLocaleString("en-US", {
    day: "numeric",
    month: "short",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
  const [showModal, setModal] = useState(false);
  const handleModal = () => {
    
    setModal(true);
  };

  const handleForm = (e)=>{
    e.preventDefault();
    let Aditionalnotes = e.target.notes.value;
    handleRequest(Aditionalnotes);
  }
  const handleRequest = (Aditionalnotes)=>{
   
    const UpdateData = {
      status : "Requested",
      notes : Aditionalnotes
    };
    console.log("updated",UpdateData);
    const data = { food, custom, UserInfo };
    if (food?.User?.displayName === UserInfo?.displayName) {
      Swal.fire({
        title: "Oops...You are the Making One!",
        icon: "error",
        draggable: true,
      });
      setTimeout(() => {
        navigate("/");
      }, 2000);
    }
    fetch('http://localhost:5000/food/requested',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
      .then(res=>res.json())
      .then(data=>{
        fetch(`http://localhost:5000/foods/${id}`,{
          method:"PATCH",
          headers:{
            "Content-Type":"application/json",
          },
          body:JSON.stringify(UpdateData)

        }).then(res=>res.json())
        .then(data=>{
          console.log(data);
          Swal.fire({
            title: "Your Requested has been delivered",
            icon: "success",
            draggable: true,
          });
          setTimeout(() => {
            navigate("/requests");
          }, 2000);
        
        })
          

      });
  }

  useEffect(() => {
    fetch(`http://localhost:5000/foods?id=${id}`)
      .then((res) => res.json())
      .then((data) => setfood(data[0]));
  }, [id]);
  return (
    <>
      <section className="text-gray-800 bg-[rgba(149,129,43,0.1)] bg-center">
        <div
          id="popup-modal"
          tabindex="-1"
          class={`${
            showModal ? "flex" : "hidden"
          } fixed top-0 right-0 left-0 z-50 overflow-y-auto overflow-x-hidden  justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full`}
        >
          <div class="relative p-4 w-full max-w-md max-h-full">
            <div class="relative bg-white rounded-lg shadow-sm dark:bg-gray-700">
              <button
                type="button"
                onClick={() => setModal(false)}
                class="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="popup-modal"
              >
                <svg
                  class="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span class="sr-only">Close modal</span>
              </button>
              <div class="pt-4 md:p-5">
                <img src={food?.image} alt="" />
                <h3 class="mb-2 text-2xl font-bold">
                  {food?.name}
                </h3>
                <label className="block text-xl">
              <span className="mb-1 font-bold">Pickup Location : </span>
              <span> {food?.location}</span>
            </label>
            <label className="my-3 text-lg">
              <span className="mb-1 font-bold">Expire Date/Time : </span>
              <span> {food?.expire}</span>
            </label>
            <div className="flex items-start justify-start my-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src={food?.User?.Userimage}
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-3 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-600">
                    {food?.User?.displayName}
                  </span>
                </a>
              </div>
              </div>
                <form class="space-y-4" action="#" onSubmit={handleForm}>
                    <div>
                        <label for="notes" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your notes</label>
                        <input type="notes" name="notes" id="notes" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Notes" defaultValue={food?.notes}/>
                    </div>
                    <div className="text-center mt-4">
                  <button
                    data-modal-hide="popup-modal"
                    type="submit"
                    class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center"
                  >
                    Request 
                  </button>
                  <button
                    data-modal-hide="popup-modal"
                    type="button"
                    class="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                    onClick={() => setModal(false)}
                  >
                    No, cancel
                  </button>
                </div>
                    </form>
               
              </div>
            </div>
          </div>
        </div>
        <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row gap-20 text-black">
          <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
            <img
              src={food?.image}
              alt=""
              className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            />
          </div>
          <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-2xl  lg:text-left">
            <h1 className="text-4xl font-bold leading-none sm:text-6xl">
              {food?.name}
            </h1>
            <label className="block my-3 text-xl">
              <span className="mb-1 font-bold">Pickup Location : </span>
              <span> {food?.location}</span>
            </label>
            <label className="btn my-3 text-lg btn-neutral">
              <span className="mb-1 font-bold">Expire Date/Time : </span>
              <span> {food?.expire}</span>
            </label>
            <label className="block my-3 text-xl">
              <span className="mb-1 font-bold">Addition Notes: </span>
              <span>{food?.notes}</span>
            </label>
            <div className="flex items-start justify-start my-4">
              <div>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex items-center"
                >
                  <img
                    src={food?.User?.Userimage}
                    alt="avatar"
                    className="object-cover w-10 h-10 mr-3 rounded-full dark:bg-gray-500"
                  />
                  <span className="hover:underline dark:text-gray-600">
                    {food?.User?.displayName}
                  </span>
                </a>
              </div>
            </div>
            <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
              <button
                onClick={handleModal}
                className="btn px-12 text-lg py-4 bg-orange-600 text-white"
              >
                Request
              </button>
              <a
                rel="noopener noreferrer"
                href="#"
                className="btn px-12 text-lg py-4 bg-red-600 text-white"
              >
                {food?.status}
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
