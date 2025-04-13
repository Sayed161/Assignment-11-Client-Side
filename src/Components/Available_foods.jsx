import React, { useEffect, useState } from 'react'
import AvailableFoodsCards from './AvailableFoodsCards'
import SkeletonCard from './SkeletonCard';

const Available_foods = () => {
   const [foods,setFoods]=useState([]);
   const [loading,setLoading]=useState(true);

    useEffect(()=>{
      setTimeout(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/')
        .then(response => response.json())
        .then(json => {setFoods(json);
          setLoading(false);
        })
      }, 2000);
     
    },[])
  return (
    <div className='volkhov-regular '>
      <h2 className="text-5xl font-bold text-center my-10">Available Foods</h2>
      <div className='flex justify-center lg:justify-end pr-0 lg:pr-34 py-3 lg:py-10'>

      <button className="btn bg-orange-600 text-white">Sorted By</button>
      </div>

    <div className='hero '>
<div className='grid grid-cols-1 lg:grid-cols-3 gap-10'>

  
      {
       loading?(
        Array(6).fill(0).map((item,idx)=><SkeletonCard key={idx}></SkeletonCard>)
       ):(
        foods.map((card,index)=>
          
      
          <AvailableFoodsCards card={card}></AvailableFoodsCards>

        )
       )
      }

</div>
    </div>
    </div>
  )
}

export default Available_foods
