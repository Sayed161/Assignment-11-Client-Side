import React, { useContext, useEffect, useState } from 'react'
import image from '../assets/Images/shwarma.jpg'
import { Link } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';
import { AuthContext } from '../Providers/AuthProviders';

const Requested_foods = () => {
  const [foods,setFoods]=useState([]);
  const { Quser } = useContext(AuthContext);
    const username = Quser.displayName;
  const [loading,setLoading]=useState(true);
        useEffect(()=>{
          setTimeout(() => {
            fetch(`http://localhost:5000/food/requested?name=${username}`)
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
        <h3 className="text-2xl font-bold leading-none sm:text-5xl">Here's your Requested Foods</h3>
        <p className="max-w-2xl text-gray-800">Don't waste your foods.Give it to us, we will distribute or needed person will take it.</p>
      </div>
      <div className="grid w-full gap-6 grid-cols-1">
  {
    loading?(
      Array(4).fill(0).map((item,idx)=><SkeletonCard key={idx}></SkeletonCard>)
     ):(
      foods.map((item,index)=>{
        return(
    <div className="flex space-x-6 border border-gray-50" item={item}>
            <img alt="" className="w-full lg:w-6/12 object-cover h-76 mb-4 bg-center rounded-sm " src={item?.food?.image} />
            <div className="flex flex-col">
              <h4 className="text-xl font-semibold">{item?.food?.User?.displayName}</h4>
              <p className="text-sm ">{item?.food?.location}</p>
              <div className="flex flex-col lg:flex-row mt-2 space-x-2 space-y-2">
              <p className="btn bg-blue-600 text-white">Expire : {item?.food?.expire}</p>
              <p className="btn bg-red-600 text-white"> Requested : {item?.custom}</p>
    
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

export default Requested_foods
