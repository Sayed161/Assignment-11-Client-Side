import React from 'react'

const HowitWorks = () => {
  return (
    <section className='mx-5 my-10 volkhov-bold'>
    <span className="block mb-2 text-xs font-medium tracking-widest uppercase lg:text-center">How it works</span>
    <h2 className="text-5xl font-bold lg:text-center dark:text-gray-900">A Food Sharing Website</h2>
    <div className="grid gap-6 my-16 lg:grid-cols-3">
        <div className="flex flex-col p-8 space-y-4 rounded-md ">
            <p className="text-xl ">
                <span>Share Your Extra Food .</span>
             
                Have extra homemade meals or surplus from an event? Post it on the platform in just a few clicks. Add details like portion size, pickup time, and location.
            </p>
        </div>
        <div className="flex flex-col p-8 space-y-4 rounded-md ">
           
            <p className="text-xl ">
                <span>Find & Request Meals .</span>Users nearby can browse shared meals based on their location and preferences. Found something you like? Just send a request to claim it.
            </p>
        </div>
        <div className="flex flex-col p-8 space-y-4 rounded-md">
           
            <p className="text-xl ">
                <span className='font-semibold'>Connect & Pick Up .</span>Once the food owner accepts, coordinate the pickup through our secure messaging system. Meet up and enjoy your meal — reducing waste and feeding someone in need
            </p>
        </div>
    </div>
</section>
  )
}

export default HowitWorks
