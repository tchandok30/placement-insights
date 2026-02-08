import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { AiOutlineEyeInvisible, AiOutlineClose } from 'react-icons/ai';

const Profile = () => {
  return (
    <>
    
    <div className=" relative min-h-screen w-screen flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center p-4">
      <div className="bg-white rounded-2xl w-[50%] h-[50%] ">
        
        <div className="text-center bg-white rounded-2xl w-[50%] h-[50%]">
          
          <h2 className="text-2xl text-center font-bold text-gray-800">Log in</h2>
          <p className="text-sm text-gray-500 mt-1">
            Don't have an account? <a href="#" className="underline font-semibold text-gray-700 hover:text-black">Sign up</a>
          </p>
        </div>

        {/* Social Buttons */}
        <div className="space-y-3 mb-6">
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all font-semibold text-gray-700">
            <FaFacebook className="text-[#1877F2]" size={20} />
            Log in with Facebook
          </button>
          <button className="w-full flex items-center justify-center gap-3 py-3 border border-gray-300 rounded-full hover:bg-gray-50 transition-all font-semibold text-gray-700">
            <FcGoogle size={20} />
            Log in with Google
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 mb-6">
          <div className="h-[1px] bg-gray-200 flex-1"></div>
          <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">OR</span>
          <div className="h-[1px] bg-gray-200 flex-1"></div>
        </div>

        {/* Form */}
        <form className="space-y-4">
          <div className="flex flex-col">
            <label className="text-[11px] font-bold text-gray-400 uppercase ml-1 mb-1">Your email</label>
            <input 
              type="email" 
              placeholder="email@example.com"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-sm"
            />
          </div>

          <div className="flex flex-col relative">
            <label className="text-[11px] font-bold text-gray-400 uppercase ml-1 mb-1">Your password</label>
            <div className="absolute right-4 top-[38px] flex items-center gap-1 cursor-pointer text-gray-400 hover:text-gray-600 transition-colors">
               <AiOutlineEyeInvisible size={18} />
               <span className="text-[10px] font-bold uppercase">Hide</span>
            </div>
            <input 
              type="password" 
              placeholder="••••••••"
              className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-200 focus:bg-white transition-all text-sm"
            />
          </div>

          <div className="text-right">
            <a href="#" className="text-xs font-bold text-gray-800 underline hover:no-underline transition-all">
              Forget your password
            </a>
          </div>

          <button className="w-full py-4 bg-[#cccccc] hover:bg-gray-400 text-white rounded-full font-bold mt-4 transition-all shadow-lg active:scale-[0.98]">
            Log In
          </button>
        </form>
      </div>
    </div></>
  );
};

export default Profile;