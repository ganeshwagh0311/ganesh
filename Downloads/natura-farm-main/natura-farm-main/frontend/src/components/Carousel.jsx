import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  };

  return (
    <div className="w-screen h-screen overflow-hidden">
      <Slider {...settings}>
        {/* Slide 1 */}
        <div className="relative">
          <img
            src="https://static.toiimg.com/thumb/msid-99955117,width-1280,resizemode-4/99955117.jpg"
            alt="Slide 1"
            className="w-full h-screen object-cover opacity-70"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center">
            <h1 className="text-2xl sm:text-4xl font-extrabold tracking-wider" style={{ fontFamily: "Dancing Script, cursive" }}>
              Natural Goodness
            </h1>
            <p className="text-lg sm:text-2xl tracking-widest font-bold" style={{ fontFamily: "Roboto, sans-serif" }}>
              Experience the best quality
            </p>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative flex items-center justify-center">
          <img src="/assets/gheejar.jpg" alt="Slide 2" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 flex flex-col items-center sm:items-start justify-center text-white bg-black bg-opacity-50 text-center sm:text-left px-4 sm:px-20">
            <h1 className="text-3xl sm:text-7xl font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>
              Premium Choice
            </h1>
            <p className="text-lg sm:text-2xl tracking-widest" style={{ fontFamily: "Roboto, sans-serif" }}>
              Best Quality Ghee
            </p>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img src="/assets/cow3.webp" alt="Slide 3" className="w-full h-screen object-cover opacity-70" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center">
            <h1 className="text-3xl sm:text-6xl font-bold mb-4 sm:mb-20" style={{ fontFamily: "Dancing Script, cursive" }}>
              Organic and Pure
            </h1>
            <p className="text-lg sm:text-2xl tracking-wider" style={{ fontFamily: "Roboto, sans-serif" }}>
              The essence of purity
            </p>
          </div>
        </div>

        {/* Slide 4 */}
        <div className="relative">
          <img
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202405/benefits-of-having-ghee-012018702-16x9_0.jpg?VersionId=iDNgmQa4zKAoqKqe7f8JemY9J9ZJ.AnL"
            alt="Slide 4"
            className="w-full h-screen object-cover"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black bg-opacity-50 text-center">
            <h1 className="text-3xl sm:text-7xl font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>
              Health Benefits
            </h1>
            <p className="text-lg sm:text-2xl tracking-widest" style={{ fontFamily: "Roboto, sans-serif" }}>
              Boost your wellbeing
            </p>
          </div>
        </div>

        {/* Slide 5 */}
        <div className="relative">
          <img src="/assets/a2-milk.jpg" alt="Slide 5" className="w-full h-screen object-cover" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-black bg-black bg-opacity-50 text-center">
            <h1 className="text-3xl sm:text-7xl font-bold" style={{ fontFamily: "Dancing Script, cursive" }}>
              A2 Milk
            </h1>
            <p className="text-lg sm:text-2xl" style={{ fontFamily: "Roboto, sans-serif" }}>
              Pure and Nutritious
            </p>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
