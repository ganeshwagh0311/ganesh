function Contact() {
  return (
    <div className="flex flex-col relative mt-20 gap-4 justify-center items-center px-4">
      <div className="flex flex-col justify-center items-center border px-4 md:px-20 py-10 md:py-20 shadow-2xl w-full max-w-3xl rounded-lg">
        <h1 className="text-lg md:text-xl tracking-wider font-semibold text-center">Get in Touch</h1>
        <p className="text-2xl md:text-3xl tracking-wider font-bold text-center">
          Have a question, <br />or want a product recommendation?
        </p>

        <form className="flex flex-col mt-12 w-full gap-6">
          <input 
            type="text" 
            placeholder="Name" 
            className="outline-none py-2 border-b border-black rounded-md w-full px-4"
          />
          
          <div className="w-full flex flex-col md:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="py-2 outline-none border-b border-black rounded-md w-full px-4"
            />
            <input 
              type="text" 
              placeholder="Phone" 
              className="py-2 outline-none border-b border-black rounded-md w-full px-4"
            />
          </div>

          <input 
            type="text" 
            placeholder="Order" 
            className="py-2 outline-none border-b border-black rounded-md w-full px-4"
          />
          <textarea 
            name="message" 
            placeholder="Message" 
            className="border-b px-4 py-4 border-black rounded-md outline-none w-full"
          />

          <button className="relative px-6 py-3 md:w-1/3 w-full mx-auto border-none rounded-md font-bold tracking-widest uppercase cursor-pointer text-[#70bdca] transition-all duration-500 text-sm outline outline-2 outline-[#70bdca] hover:text-white hover:scale-110 hover:outline-[#70bdca] hover:shadow-[4px_5px_17px_-4px_#268391] hover:bg-[#70bdca]">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
