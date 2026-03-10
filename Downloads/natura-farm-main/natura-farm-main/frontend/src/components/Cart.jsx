import { Link } from 'react-router-dom';
import cartimg from '../../public/assets/empty-cart.png';

const Cart = () => {
  return (
    <div className="flex items-center justify-center w-full relative top-20 pb-20 px-4">
      <div className="border shadow-lg w-full sm:w-fit flex flex-col items-center justify-center gap-3 py-10 sm:py-14 mt-10 sm:mt-16">
        <img src={cartimg} alt="Empty Cart" className="w-2/3 sm:w-1/3" />
        <h2 className="text-base sm:text-lg font-bold">Your Cart is Empty</h2>
        <p className="text-sm text-center px-2 sm:px-0">Add some items to your cart to get started</p>
        <Link
          to="/products"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded text-sm sm:text-base"
        >
          Browse Products
        </Link>
      </div>
    </div>
  );
};

export default Cart;
