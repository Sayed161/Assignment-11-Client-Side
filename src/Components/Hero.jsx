import React from 'react'
import image from '../assets/Images/main.png'
const Hero = () => {
  return (
    <>
    <style>
        {
            `
              @keyframes slow-spin {
  0% { transform:rotate(0deg); }

  100% {transform:rotate(360deg); }
  
}
            .animate-slow-spin{
            animation:slow-spin 10s linear infinite;
            }
            `
        }
    </style>
        <div>
      <section className="bg-orange-400 text-white volkhov-bold-italic">
	<div className="container flex flex-col-reverse mx-auto lg:flex-row">
		<div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 text-center items-center justify-center">
        <h1 className="text-5xl font-bold leading-none sm:text-6xl">Share meals, <br /> 
				<span className="">spread love</span>
			</h1>
			<p className="mt-6 mb-8 text-lg sm:mb-12">Connect with your neighbors, reduce food waste, and enjoy delicious homemade meals together.
				<br  className="hidden md:inline lg:hidden" />Join the food-sharing revolution today!
			</p>
			<div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold rounded bg-red-600 ">Get Started</a>
				<a rel="noopener noreferrer" href="#" className="px-8 py-3 text-lg font-semibold border rounded ">Learn More</a>
			</div>
		</div>
		<div className="lg:w-1/2 xl:w-3/5">
			<div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
				<img src={image} alt="" className="h-full animate-slow-spin" />
			</div>
		</div>
	</div>
</section>
    </div>
    </>

  )
}

export default Hero
