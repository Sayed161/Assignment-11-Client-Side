import React, { useEffect, useState } from 'react'
import LikeCard from './LikeCard';
import { Link, useLocation } from "react-router-dom";
const YouMayLike = () => {
      const [foods,setFoods]=useState([]);
      const sorteData= foods.sort((a,b)=>b.id-a.id).slice(0,4);
      useEffect(()=>{
        fetch('http://localhost:5000/foods')
          .then(response => response.json())
          .then(json => {setFoods(json); })
      },[])
  return (
    <div>
        <div className='volkhov-regular relative backdrop-blur-lg bg-white/60'>
      <h2 className="text-5xl font-bold text-center py-10">You May Also Like</h2>
     
    <div className='hero px-10'>
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
    {
        sorteData.map(card=><LikeCard card={card}></LikeCard>)
    }
    </div>
    </div>
    <div className='flex justify-end pr-14 py-10'>

<Link to='/availble-foods' className="btn bg-orange-600 text-white border-none">Show More</Link>
</div>

    </div>
    </div>
  )
}

export default YouMayLike
