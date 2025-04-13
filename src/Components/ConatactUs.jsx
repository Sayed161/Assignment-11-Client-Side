import React from 'react'
import image from "../assets/Images/customer.png"

const ConatactUs = () => {
  return (
<>
    <div className="grid max-w-screen-2xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-orange-200 text-gray-800 ">
		<div className="flex flex-col justify-between volkhov-bold">
		<div className='flex flex-col items-start justify-start'>
				<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Let's Talk!</h2>
				<div className="">If You Have Any Query Please Message Us</div>
              
			  <img src={image} alt="" className='w-80 h-86 scale-x-[-1]'/>
			  </div>
	
       
			
		</div>
		<form noValidate="" className="space-y-6 volkhov-regular">
			<div>
				<label htmlFor="name" className="text-sm">Full name</label>
				<input id="name" type="text" placeholder="Your name" className="w-full p-3 rounded bg-white border border-gray-600" />
			</div>
			<div>
				<label htmlFor="email" className="text-sm">Email</label>
				<input id="email" type="email" placeholder="Your email" className="w-full bg-white p-3 rounded border border-gray-600" />
			</div>
			<div>
				<label htmlFor="message" className="text-sm">Message</label>
				<textarea id="message" rows="3" placeholder="Your message" className="w-full  bg-white p-3 rounded border border-gray-600"></textarea>
			</div>
			<button type="submit" className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-orange-600 text-gray-50">Send Message</button>
		</form>
	</div>
	<section className="dark:bg-gray-100 text-gray-800 volkhov-bold-italic">
	<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
		<h2 className="text-2xl font-semibold sm:text-4xl">Frequently Asked Questions</h2>
		<p className="mt-4 mb-8 text-gray-600">Got questions about how our food sharing community works? We've got you covered. Here are some common answers to help you get started safely and easily</p>
		<div className="space-y-4">
			<details className="w-full border rounded-lg" open="">
				<summary className="px-4 py-6 focus:outline-none ">🥡 Is it safe to accept food from strangers?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Yes! We encourage all users to follow basic safety practices. Each food sharer has a profile, and users can leave reviews. You can also communicate directly to ask about ingredients, preparation time, or storage.</p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none ">📍 How do I know if food is still available?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">Once food is claimed and marked as picked up, it will automatically be removed from the list. If it's still showing, it's up for grabs — but you can always message the owner to confirm. </p>
			</details>
			<details className="w-full border rounded-lg">
				<summary className="px-4 py-6 focus:outline-none ">💬 How do I contact someone who posted food?</summary>
				<p className="px-4 py-6 pt-0 ml-4 -mt-4 text-gray-600">After sending a request to claim the food, a private chat will open if the sharer accepts. You can then coordinate details like pickup time and location.</p>
			</details>
		</div>
	</div>
</section>
    </>
  )
}

export default ConatactUs
