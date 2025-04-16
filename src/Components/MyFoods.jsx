import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/Images/shwarma.jpg'
import { Link, useNavigate } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';
import Swal from 'sweetalert2'
import { AuthContext } from '../Providers/AuthProviders';
const MyFoods = () => {
  const [foods,setFoods]=useState([]);
  const { Quser } = useContext(AuthContext);
  const username = Quser.displayName;
  const navigate = useNavigate();
  console.log("Usernmae",username);
  const [loading,setLoading]=useState(true);
  const handleDelete = (id)=>{
    
      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then((result) => {
        fetch(`http://localhost:5000/foods/${id}`,
          { method: "DELETE",
           headers: {
             "Content-Type": "application/json",
           },
          }
           
         )
         .then(res=>res.json())
         .then(data=>{
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          });

          setTimeout(() => {
            navigate("/");
          }, 2000);
        }
      });
              
    })
  }
      useEffect(()=>{
        setTimeout(() => {
          fetch(`http://localhost:5000/foods?name=${username}`)
          .then(response => response.json())
          .then(json => {setFoods(json);
            setLoading(false)
          })
        }, 2000);
        
      },[])
  return (
    <div>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-800">
	<div className="container p-4 mx-auto space-y-16 sm:p-10">
		<div className="space-y-4">
			<h3 className="text-2xl font-bold leading-none sm:text-5xl">Here's your Foods</h3>
			<p className="max-w-2xl text-gray-800">Don't waste your foods.Give it to us, we will distribute or needed person will take it.</p>
		</div>
		<div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
    {
       loading?(
        Array(4).fill(0).map((item,idx)=><SkeletonCard key={idx}></SkeletonCard>)
       ):(
        foods.map((item,index)=>{
          return(
      <div className="flex space-x-6" item={item}>
              <img alt="" className="w-full object-cover h-56 mb-4 bg-center rounded-sm " src={item.image} />
              <div className="flex flex-col">
                <h4 className="text-xl font-semibold">{item.name}</h4>
                <p className="text-sm ">{item.status}</p>
                <div className="flex flex-col lg:flex-row mt-2 space-x-2 space-y-2">
                <p className="btn bg-red-600 text-white"  onClick={()=>handleDelete(item._id)}>Delete</p>
                <Link to={`/update/${item._id}`} className="btn bg-orange-600 text-white">Update</Link>
                </div>
              </div>
            </div>
          )
      
        })
       )
      }
			
			
		</div>
	</div>
</section>
    </div>
  )
}

export default MyFoods
