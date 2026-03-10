import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../index.css'
import Carousel from "../components/Carousel";
import cowimg1 from '../../public/assets/22586739_6667121.jpg'
import cowimg2 from '../../public/assets/37456935_8531321.jpg'
import gheejar from '../../public/assets/gheejar.jpg'
import a2milk from '../../public/assets/a2-milk.jpg'
import {ProductsData , feedbackData} from "../Data.js";
import Button from '../components/Button.jsx'
import video from '../../public/assets/174105-850740019_medium.mp4'
import ownerimg from '../../public/assets/owner1.jpg'
import blog from '../../public/assets/blog1.avif'
import blog2 from '../../public/assets/blog2.jpeg'
import blog3 from '../../public/assets/blog3.jpg'
import blog4 from '../../public/assets/blog4.jpeg'
import blog5 from '../../public/assets/blog5.jpg'
import farmer from '../../public/assets/farmers.jpg'
// import {motion  , AnimatePresence } from 'framer-motion'


const Home = () => {

  const selectedProducts = ProductsData.filter(product => product.selection);

  return (
    <div className="w-full h-auto ">


      <section className="w-full">
        <Carousel />
      </section>



     <section className="w-full h-full flex flex-col-reverse lg:flex-row justify-center items-center pt-10 px-6 sm:px-10 py-20 gap-12">
  <div className="w-full lg:w-2/5 flex justify-center">
    <img src={cowimg2} alt="" className="w-4/5 sm:w-3/5 lg:w-4/5 lg:ml-24" />
  </div>

  <div className="w-full lg:w-3/5 flex flex-col items-center justify-center h-full">
    <div className="w-full flex flex-col items-center justify-center gap-6 sm:gap-10 pt-4 sm:pt-10">
      <div className="mt-10 lg:mt-0 w-full flex justify-center lg:justify-end lg:pr-16">
      <img src={cowimg1} alt="" className="w-3/5 sm:w-2/5 lg:w-4/5" />
    </div>
      <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">Trust the process, cultivate health</h1>
      <p className="w-full sm:w-4/5 lg:w-3/4 leading-6 sm:leading-7 tracking-wide text-center text-sm sm:text-base px-2 sm:px-0 z-10">
        At Natura, we believe that true health is cultivated through patience, care, and a deep respect for nature&apos;s processes. Our commitment to organic farming ensures that every product we offer is grown sustainably and without harmful chemicals. By trusting in these natural methods, we cultivate not only the land but also the health of our community. At Natura Organic Farm, we invite you to join us on this journey, trusting that the dedication we put into our farming will nurture your well-being and the environment.
      </p>
    </div>
    {/* <div className="mt-10 lg:mt-0 w-full flex justify-center lg:justify-end lg:pr-16">
      <img src={cowimg1} alt="" className="w-3/5 sm:w-2/5 lg:w-4/5" />
    </div> */}
  </div>
</section>





      <section className="w-full h-full flex flex-col items-center justify-center py-20 border gap-12 px-4 sm:px-8">
  <h1 className="tracking-wider text-2xl sm:text-4xl font-semibold text-center">Shop by Category</h1>

  <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full sm:w-3/5">
    <div className="w-full sm:w-2/6 flex flex-col gap-6 p-8 sm:p-16 rounded-lg shadow-2xl hover:scale-105 duration-700 transition-all items-center">
      <img
        src={gheejar}
        alt="A2 Desi Gir cow Ghee"
        className="rounded-full shadow-2xl hover:scale-105 duration-700 transition-all w-40 h-40 sm:w-auto sm:h-auto object-cover"
      />
      <h1 className="tracking-wide font-semibold text-center text-sm sm:text-base">A2 Desi Gir cow Ghee</h1>
    </div>
    <div className="w-full sm:w-2/6 flex flex-col gap-6 p-8 sm:p-16 rounded-lg shadow-2xl hover:scale-105 duration-700 transition-all items-center">
      <img
        src={a2milk}
        alt="A2 Desi Gir cow Milk"
        className="rounded-full shadow-2xl hover:scale-105 duration-700 transition-all w-40 h-40 sm:w-auto sm:h-auto object-cover"
      />
      <h1 className="tracking-wide font-semibold text-center text-sm sm:text-base">A2 Desi Gir cow Milk</h1>
    </div>
  </div>

  <button className="relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#2c9caf] transition-all duration-500 text-sm sm:text-[15px] outline outline-2 outline-[#2c9caf] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] shadow-xl mt-4">
    Shop Now
  </button>
</section>




    <section className="w-full h-full flex flex-col items-center justify-center py-20 border gap-12 sm:gap-20">
  <h1 className="tracking-wider text-2xl sm:text-4xl font-semibold text-center px-4">Most Loved Selection</h1>

  <div className="flex flex-col sm:flex-row flex-wrap justify-center px-4 sm:px-20 gap-8 w-full">
    {selectedProducts.map((product) => (
      <div
        key={product.id}
        className="p-4 border rounded-lg shadow-lg hover:scale-105 transition-all duration-700 flex flex-col justify-center items-center overflow-hidden w-full sm:w-[calc(33.333%-1rem)]"
      >
        <img
          src={product.image}
          alt={product.name}
          className="object-cover rounded-md h-40 sm:h-auto relative bottom-8 sm:bottom-16"
        />
        <h2 className="text-lg sm:text-xl font-bold tracking-wider relative bottom-10 sm:bottom-20 text-center">
          {product.name}
        </h2>
        <p className="text-gray-700 text-center opacity-80 tracking-wide relative bottom-6 sm:bottom-16 px-2">
          {product.description}
        </p>
        <div className="flex items-center relative bottom-4 sm:bottom-12">
          <span className="text-yellow-500">{product.ratings}★</span>
          <span className="text-gray-600 ml-2 cursor-pointer">
            ({product.reviews} reviews)
          </span>
        </div>
        <p className="text-base sm:text-lg font-semibold relative bottom-2 sm:bottom-8">
          Rs. {product.price.toFixed(2)}
        </p>
        <Button />
      </div>
    ))}
  </div>

  <div className="mt-8">
    <button className="relative overflow-hidden px-6 sm:px-8 py-3 sm:py-4 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm sm:text-[15px] outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] shadow-xl">
      Shop all
    </button>
  </div>
</section>



     <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
  <video
    src={video}
    autoPlay
    muted
    loop
    className="w-full h-full object-cover absolute z-0"
  />
  <div className="w-full h-full relative text-center flex flex-col justify-center items-center z-10 bg-white/30 p-4 sm:p-8 rounded-md">
    <h1 className="font-bold text-xl sm:text-3xl tracking-wide font-sans leading-relaxed sm:leading-loose drop-shadow-2xl text-white">
      The Ancient Farming Practices Thriving in Our Village
    </h1>
    <p className="font-semibold tracking-wider text-sm sm:text-md text-white mt-4">
      An ancient system of farming that still thrives in our village
    </p>
    <button className="relative px-6 sm:px-8 py-3 sm:py-4 mt-8 sm:mt-12 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] bg-white transition-all duration-500 hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] text-xs sm:text-sm">
      Learn more
    </button>
  </div>
</section>



     <section className="w-full flex flex-col md:flex-row items-center justify-center px-4 sm:px-10 md:px-16 py-10 md:py-24 gap-10 border">
  <div className="w-full md:w-1/2">
    <img
      src={ownerimg}
      alt=""
      className="rounded-full drop-shadow-2xl shadow-2xl hover:opacity-90 hover:scale-105 transition-all duration-1000 w-full h-auto max-h-[400px] object-cover"
    />
  </div>

  <div className="w-full md:w-1/2 flex flex-col gap-4 px-2 sm:px-6">
    <p className="tracking-wider text-sm sm:text-base text-center md:text-left">Our way of life</p>
    <h1 className="tracking-wider text-2xl sm:text-3xl font-bold text-center md:text-left">
      Farmers the heart of the land
    </h1>
    <p className="tracking-wider text-sm sm:text-base text-center md:text-left">
      A farmer’s toolkit is not just filled with seeds and tools, but with wisdom and resilience, solving problems
      before dawn and well after dusk
    </p>
    <div className="flex justify-center md:justify-start">
      <button className="relative px-6 sm:px-8 py-3 sm:py-4 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-xs sm:text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] shadow-2xl mt-6 sm:mt-10 w-2/3 sm:w-1/2 md:w-1/3">
        Know More
      </button>
    </div>
  </div>
</section>






<section className="w-full flex flex-col px-6 md:px-20 py-10 md:py-20 gap-8">
  <div className="flex flex-col w-full items-center justify-center text-center">
    <p className="tracking-wider font-semibold text-lg md:text-xl">Food & Health</p>
    <h1 className="tracking-widest font-bold text-3xl md:text-5xl">Blogs</h1>
  </div>

  <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-auto shadow-2xl gap-4 p-4 md:p-8">
    <div className="md:row-start-1 md:row-span-4 flex flex-col gap-6 shadow-xl px-4 md:px-8 py-6 md:py-8 hover:scale-105 transition-all duration-1000 hover:overflow-hidden">
      <div className="overflow-hidden shadow-lg drop-shadow-2xl">
        <img src={blog} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-4 flex flex-col gap-6">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wider">Fresh and Fit</h1>
        <p className="tracking-wider text-base md:text-xl">
          Stay fit and healthy with fresh, vibrant recipes and fitness tips designed to fuel your active lifestyle.
        </p>
        <button className="relative px-6 py-3 md:px-8 md:py-4 w-1/2 md:w-1/3 ml-2 md:ml-4 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-xs md:text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca]">
          Read More
        </button>
      </div>
    </div>

    {[blog2, blog3, blog4, blog5].map((img, index) => (
      <div key={index} className="gap-4 flex flex-col md:flex-row w-full px-2 md:px-4 py-4 shadow-xl overflow-hidden h-auto md:h-60 hover:scale-105 transition-all duration-1000">
        <div className="w-full md:w-1/2 overflow-hidden shadow-lg drop-shadow-2xl">
          <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col gap-2 p-4">
          <h1 className="text-base md:text-lg font-bold">
            {[
              "Energize Your Plate",
              "Farm to Fork Wellness",
              "The Nutritious Table",
              "Nature’s Nutrition"
            ][index]}
          </h1>
          <p className="tracking-wide text-sm md:text-base">
            {[
              "Fuel your body with energizing recipes and nutrition tips that will keep you feeling vibrant and healthy.",
              "Connect with your food from farm to fork, focusing on locally sourced ingredients and sustainable eating habits.",
              "Set a nutritious table with recipes and advice for creating balanced, healthful meals every day.",
              "Dive into the world of natural nutrition with insights on organic foods, clean eating, and holistic health practices."
            ][index]}
          </p>
          <button className="relative px-6 py-2 md:px-8 md:py-2 w-2/3 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-xs md:text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] mt-2 md:mt-4">
            Read More
          </button>
        </div>
      </div>
    ))}
  </div>
</section>






<section className="relative w-full h-screen overflow-hidden flex flex-col mt-20 pb-10 mb-20">
  <div className="relative w-full h-full">
    <img
      src={farmer}
      alt=""
      className="absolute inset-0 object-cover w-full h-full"
    />
    <div className="absolute bottom-0 w-full">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#ffffff"
          fillOpacity="1"
          d="M0,160L26.7,165.3C53.3,171,107,181,160,165.3C213.3,149,267,107,320,122.7C373.3,139,427,213,480,213.3C533.3,213,587,139,640,144C693.3,149,747,235,800,229.3C853.3,224,907,128,960,101.3C1013.3,75,1067,117,1120,133.3C1173.3,149,1227,139,1280,117.3C1333.3,96,1387,64,1413,48L1440,32L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
        ></path>
      </svg>
    </div>
  </div>

  <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
    <div className="z-10">
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-xl">
        Home is where nature thrives.
      </h1>
      <button className="px-6 md:px-8 py-2 w-full sm:w-2/3 border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-xs sm:text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca] mt-4">
        Read More
      </button>
    </div>
  </div>
</section>




    <section className="w-full h-full px-4 sm:px-10 md:px-20 py-10 sm:py-16 md:py-20 flex flex-col justify-center items-center overflow-hidden">
  <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center">Customer&apos;s Love</h1>

  <div className="flex items-center justify-center w-full sm:w-5/6 mt-10 sm:mt-16 md:mt-20 shadow-2xl rounded-md px-4 sm:px-10 md:p-20 overflow-hidden relative">
    <div className="flex animate-move-horizontal space-x-4 transition-all gap-4 sm:gap-8 md:gap-10">
      {feedbackData.map((feedback) => (
        <div
          key={feedback.name}
          className="flex flex-col gap-2 shadow-xl h-auto min-h-[12rem] px-6 py-6 sm:px-8 sm:py-8 md:px-10 md:py-10 w-72 sm:w-80 md:w-96 bg-slate-100 flex-shrink-0"
        >
          <div className="text-base sm:text-lg font-bold tracking-wider">{feedback.name}</div>
          <div className="text-sm sm:text-base tracking-wide">{feedback.message}</div>
          <div className="text-sm">{feedback.rating}</div>
        </div>
      ))}
    </div>
  </div>
</section>




    </div>
  )
}

export default Home
