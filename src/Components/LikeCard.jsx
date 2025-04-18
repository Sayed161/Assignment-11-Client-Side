import React from 'react'
import { FaFireAlt } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import { Link } from 'react-router-dom';
const LikeCard = ({card}) => {
	const { _id,name, location, image, expire, notes, status, quantity,User,custom }=card;
  return (
	<div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
	  <img
		alt=""
		src={User.Userimage}
		className="object-cover w-12 h-12 rounded-full shadow dark:bg-gray-500"
	  />
	  <div className="flex flex-col space-y-1">
		<a
		  rel="noopener noreferrer"
		  href="#"
		  className="text-sm font-semibold"
		>
		  {User.displayName}
		</a>
		<span className="text-xs dark:text-gray-600">{custom}</span>
	  </div>
	</div>
	<div>
	  <img
		src={image}
		alt=""
		className="object-cover w-full mb-4 h-60 sm:h-96 dark:bg-gray-500"
	  />
	  <h2 className="mb-1 text-xl font-semibold">{name}</h2>
	  <p className="text-sm dark:text-gray-600">
		{notes}
	  </p>
	  <button type="button" className="flex items-center pt-4 space-x-2 text-orange-600">
		  <IoLocationSharp />
			  <p>Location : </p>
			  <span>{location}</span> 
		  </button>
	</div>
	<div className="flex flex-wrap justify-between">
	  <div className="space-x-2 place-items-center flex">
		<button
		  aria-label="Share this post"
		  type="button"
		  className="p-2 text-center text-orange-500"
		>
		  <FaFireAlt className="text-2xl" />
		</button>
		<button
		  aria-label="Bookmark this post"
		  type="button"
		  className="p-2 text-orange-500"
		>
		  <p>Quntity : {quantity}</p>
		  
		</button>
	  </div>
	  <div className="flex space-x-2 text-sm dark:text-gray-600">
	  <button type="button" className="flex items-center p-1 space-x-1.5">
			<Link to={`/details/${_id}`} className="btn btn-neutral">Details</Link>
		  </button>
	  </div>
	</div>
  </div>
  )
}

export default LikeCard
