import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { auth } from '../firebase/firebaseConfig';

const Profile = () => {
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    if (currentUser) {
      setUserData({
        name: currentUser.displayName || '',
        email: currentUser.email || '',
      });
    }
  }, [currentUser]);

  const handleLogout = async () => {
    try {
      await auth.signOut();
      navigate('/login');
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

  return (
    <div className="w-full flex justify-center items-center px-4 py-16 sm:py-24 relative top-20">
      <div className="w-full sm:w-4/5 md:w-2/3 lg:w-1/2 bg-white border border-gray-200 p-6 sm:p-10 rounded-lg shadow-2xl">
        <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-[#333] tracking-wide">
          Profile
        </h1>

        <div className="mb-6">
          <label className="block font-semibold text-gray-700 text-sm sm:text-base mb-1">Name:</label>
          <p className="text-gray-800 text-sm sm:text-base">{userData.name}</p>
        </div>

        <div className="mb-6">
          <label className="block font-semibold text-gray-700 text-sm sm:text-base mb-1">Email:</label>
          <p className="text-gray-800 text-sm sm:text-base">{userData.email}</p>
        </div>

        <div className="flex flex-col sm:flex-row justify-between gap-4 mt-8">
          <Link
            to="/edit-profile"
            className="w-full sm:w-auto text-center bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md transition-all duration-300"
          >
            Edit Profile
          </Link>
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto text-center bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all duration-300"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
