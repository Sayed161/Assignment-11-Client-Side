import React, { useEffect, useState } from 'react'
import FeaturesCard from './FeaturesCard';
import { Link } from 'react-router-dom';
import SkeletonCard from './SkeletonCard';

const Feature = () => {
  const [foods,setFoods]=useState([]);
  const sorteData= foods.sort((a,b)=>b.id-a.id).slice(0,6);
  const [loading,setLoading]=useState(true);
  useEffect(()=>{
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos/')
      .then(response => response.json())
      .then(json => {setFoods(json);
        setLoading(false)
      })
    }, 2000);
    
  },[])
  return (
    <div className='volkhov-regular '>
      <h2 className="text-5xl font-bold text-center my-10">Features</h2>

    <div className='hero my-20'>

    <div className='grid grid-cols-1 lg:grid-cols-3 gap-20'>
      {
        loading?(
          Array(6).fill(0).map((item,idx)=><SkeletonCard key={idx}></SkeletonCard>)
         ):(
          sorteData.map((item,index)=>{
            return(
        <FeaturesCard item={item} key={index}></FeaturesCard>
            )
        
          })
         )
      }
      </div>
      </div>
    <div className='flex items-center justify-around'>
    <Link to='/availble-foods' className="btn bg-orange-600 w-52 text-white py-8">Show More</Link>
    </div>
    </div>
  )
}

export default Feature
