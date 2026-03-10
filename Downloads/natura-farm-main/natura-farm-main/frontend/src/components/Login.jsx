import { useState } from 'react';
import img from '../../public/assets/cowlogin.jpg';
import { Link, useNavigate } from 'react-router-dom';
import { auth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from '../firebase/firebaseConfig.js'; 
import { useAuth } from '../context/AuthContext';
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleChange = (e) => {
    setError(null);
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = formData;

    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log('User logged in:', user);
      login();
      navigate('/profile');
    } catch (error) {
      console.error('Error logging in:', error);
      toast.error("User not logged in");
      setError('Failed to log in. Please check your credentials and try again.');
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('User logged in with Google:', user);
      login();
      navigate('/profile');
    } catch (error) {
      console.error('Error signing in with Google:', error);
      toast.error("Google sign-in failed");
      setError('Failed to sign in with Google. Please try again.');
    }
  };

  return (
    <div className='flex items-center justify-center px-4 pt-28 pb-10'>
      <div className='w-full max-w-md border px-6 py-8 rounded-lg shadow-lg bg-white'>
        <h1 className='font-bold text-2xl text-center'>Login</h1>
        <p className='text-center text-sm mt-1'>Please enter email & password</p>
        <div className='mt-6 space-y-4'>
          <div className='w-full'>
            <img src={img} alt="Cow" className='w-full h-auto rounded-md' />
          </div>
          <form className='flex flex-col gap-3' onSubmit={handleSubmit}>
            <input 
              type="email" 
              placeholder="Email" 
              className='border rounded-sm p-2 text-sm'
              onChange={handleChange}
              name='email'
              value={formData.email}
              required
            />
            <input 
              type="password" 
              placeholder='Password' 
              className='border rounded-sm p-2 text-sm'
              onChange={handleChange}
              name='password'
              value={formData.password}
              required
            />
            <p className='text-xs text-right'>
              <Link to='/forgot-password' className='hover:underline text-blue-500'>
                Forgot Password?
              </Link>
            </p>
            <button className='bg-blue-500 text-white rounded-sm p-2 text-sm hover:bg-blue-600' type="submit">
              Login
            </button>
            {error && <p className='text-red-500 text-xs mt-1'>{error}</p>}
          </form>
          <div className='text-center'>
            <p className='text-xs'>
              New Customer? <Link to='/register' className='text-blue-500 hover:underline'>Create an Account</Link>
            </p>
          </div>
          <div className='text-center text-sm'>or</div>
          <button
            onClick={handleGoogleSignIn}
            className='bg-gray-50 border rounded-sm flex flex-row justify-center items-center gap-3 py-2 text-sm hover:bg-gray-100'
          >
            <FaGoogle />
            Sign in with Google
          </button>
        </div>
      </div>
      <ToastContainer transition={Bounce} position="top-right" theme="light" draggable style={{ top: "70px" }} />
    </div>
  );
};

export default Login;
