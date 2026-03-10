import blog from '../../public/assets/blog1.avif'
import blog2 from '../../public/assets/blog2.jpeg'
import blog3 from '../../public/assets/blog3.jpg'
import blog4 from '../../public/assets/blog4.jpeg'
import blog5 from '../../public/assets/blog5.jpg'

const Blogs = () => {
  return (
    <section className="relative w-full flex flex-col px-4 md:px-20 py-10 md:py-20 gap-8 mt-10">
  <div className="flex flex-col w-full items-center justify-center text-center px-2">
    <p className="tracking-wider font-semibold text-lg md:text-xl">Food & Health</p>
    <h1 className="tracking-widest font-bold text-3xl md:text-5xl">Blogs</h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-4 shadow-2xl gap-4 p-4 md:p-8">
    <div className="row-span-4 flex flex-col gap-6 shadow-xl px-4 md:px-8 py-6 hover:scale-105 transition-all duration-1000">
      <div className="overflow-hidden shadow-lg drop-shadow-2xl">
        <img src={blog} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-2 md:p-4 flex flex-col gap-4">
        <h1 className="text-2xl md:text-5xl font-bold tracking-wider">Fresh and Fit</h1>
        <p className="tracking-wider text-base md:text-xl">Stay fit and healthy with fresh, vibrant recipes and fitness tips designed to fuel your active lifestyle.</p>
        <button className="relative px-6 py-3 w-1/2 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-xs md:text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:bg-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391]">
          Read More
        </button>
      </div>
    </div>

    {[blog2, blog3, blog4, blog5].map((imgSrc, index) => (
      <div key={index} className="gap-4 flex flex-col sm:flex-row w-full px-4 py-4 shadow-xl overflow-hidden h-auto md:h-60 hover:scale-105 transition-all duration-1000">
        <div className="sm:w-1/2 overflow-hidden shadow-lg drop-shadow-2xl">
          <img src={imgSrc} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
        <div className="sm:w-1/2 flex flex-col gap-2 p-2 md:p-4">
          <h1 className="text-lg font-bold">{[
            "Energize Your Plate",
            "Farm to Fork Wellness",
            "The Nutritious Table",
            "Nature’s Nutrition"
          ][index]}</h1>
          <p className="tracking-wide text-sm md:text-base">
            {[
              "Fuel your body with energizing recipes and nutrition tips that will keep you feeling vibrant and healthy.",
              "Connect with your food from farm to fork, focusing on locally sourced ingredients and sustainable eating habits.",
              "Set a nutritious table with recipes and advice for creating balanced, healthful meals every day.",
              "Dive into the world of natural nutrition with insights on organic foods, clean eating, and holistic health practices."
            ][index]}
          </p>
          <button className="relative px-6 py-2 w-2/3 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-xs md:text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:bg-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] mt-2">
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

    
  )
}

export default Blogs