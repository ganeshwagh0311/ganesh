import footerimg from '../../public/assets/footer.png';
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaTwitter,
  FaWhatsapp,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative pt-20 flex flex-col w-full">
      <img src={footerimg} alt="footer" className="w-full" />

      <div className="flex flex-col md:flex-row flex-wrap md:justify-evenly justify-center gap-10 px-6 md:px-0 py-10 text-center md:text-left">
        {/* Reach Out */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wider">Reach Out</h1>
          <div className="flex flex-col mt-3 gap-2 items-center md:items-start">
            <div className="flex flex-row items-center gap-2">
              <FaMapMarkerAlt />
              <p className="text-sm">A/P - Manchar , Tal - Ambegoan,<br />Dist - Pune , 410 503</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaEnvelope />
              <p className="text-sm">abc@gmail.com</p>
            </div>
            <div className="flex flex-row items-center gap-2">
              <FaPhone />
              <p className="text-sm">+91 1234567890</p>
            </div>
          </div>
        </div>

        {/* Useful Links */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wider">Useful Links</h1>
          <p className="text-sm">Home</p>
          <p className="text-sm">Products</p>
          <p className="text-sm">Blogs</p>
          <p className="text-sm">Support</p>
        </div>

        {/* General */}
        <div className="flex flex-col gap-2 w-full md:w-auto">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wider">General</h1>
          <p className="text-sm">Privacy Policy</p>
          <p className="text-sm">Refund & Cancellation Policy</p>
          <p className="text-sm">Terms & Condition</p>
          <p className="text-sm">Shipping & Delivery Policy</p>
          <p className="text-sm">Return Policy</p>
        </div>

        {/* Social Media */}
        <div className="flex flex-col gap-2 w-full md:w-auto items-center md:items-start">
          <h1 className="text-xl sm:text-2xl font-semibold tracking-wider">Social Media</h1>
          <div className="flex gap-4 justify-center md:justify-start">
            <FaFacebook size={24} />
            <FaInstagram size={24} />
            <FaTwitter size={24} />
            <FaWhatsapp size={24} />
          </div>
        </div>
      </div>

      <div className="text-center bg-[#807849] py-2 text-white tracking-wider text-sm sm:text-base font-semibold">
        @ 2024 | Natura Organics | All Copyrights Reserved
      </div>
    </footer>
  );
};

export default Footer;
