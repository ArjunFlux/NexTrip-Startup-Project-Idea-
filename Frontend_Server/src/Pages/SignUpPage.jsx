import React, { useState } from "react";
import NavBar from "../Components/NavBar";
// Importing the icons
import { GiHearts } from "react-icons/gi";
import { SiParamountplus } from "react-icons/si";
import { CiLocationOn } from "react-icons/ci";
import { BsFillEnvelopeOpenHeartFill } from "react-icons/bs";
import { FaGoogle, FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
function SignUpPage() {
  const [CurrentStyle , setCurrentStyle] = useState('signup');
  return (
    <div className="h-screen">
      <NavBar />
      <div>
        <div className="flex justify-between items-center mt-10 mx-50">
          <div className="h-[80vh] w-[50vw]">
            <div className="flex items-center gap-3 ml-[35%] mt-10">
              <SiParamountplus size={40} />
              <p className="text-4xl font-extrabold">NexTrip</p>
            </div>
            <div className="text-center mt-3 text-gray-500">
              <div className="flex items-center justify-center">
                <p>"Crafting memories, one journey at a time"</p>
              </div>
            </div>
            <div className="flex justify-center mt-5 gap-10 ">
              <button className={`border px-20 py-2 ${CurrentStyle == 'signup' ? "bg-black text-white" : "bg-white text-black"} border-gray-400 rounded-2xl cursor-pointer`} onClick={()=>{setCurrentStyle('signup')}}>
                Sign Up
              </button>
              <button className={`border px-20 py-2 ${CurrentStyle == 'signin' ? "bg-black text-white" : "bg-white text-black"} border-gray-400 rounded-2xl cursor-pointer`} onClick={()=>{setCurrentStyle('signin')}}>
                Sign In
              </button>
            </div>
            <div>
              <div className="ml-[18%] mt-5">
                <p className="text-3xl font-semibold">Journey Begins</p>
                <p className="text-gray-400 text-[13px]">
                  Get Started with just 1 click
                </p>
              </div>
              <div className="flex gap-10 ml-[18%] mt-3">
                <FaGoogle
                  className="border py-1 border-blue-300 w-[21%]"
                  size={35}
                />
                <FaFacebookF
                  className="border py-1 border-blue-300 w-[21%]"
                  size={35}
                />
                <FaTwitter
                  className="border py-1 border-blue-300 w-[21%]"
                  size={35}
                />
              </div>
              <div className="flex items-center">
                <hr className="mt-8 w-[27%] ml-[18.5%] border-blue-300" />
                <p className="mt-7 mx-5">or</p>
                <hr className="mt-8 w-[27%] border-blue-300" />
              </div>
            </div>
            {CurrentStyle === 'signup' &&
            <form>
              <div className="ml-[18%] mt-5">
                <input placeholder="Username" type="text" className="border py-2 w-[76%] border-blue-400 px-2"/>
                <br />
                <br />
                <input placeholder="Email Id" type="email" className="border py-2 w-[76%] border-blue-400 px-2"/>
                <br />
                <br />
                <input placeholder="Password" type="password" className="border py-2 w-[76%] border-blue-400 px-2"/>
                <div className="flex justify-between items-center mt-3">
                  <div>
                    <input type="checkbox" className="mr-2 cursor-pointer"/><label>Remember Me</label>
                  </div>
                  <div>
                    <p className="mr-35 font-semibold">Forget Password ?</p>
                  </div>
                </div>
                <div>
                  <button type="submit" className="border w-[75%] py-2 mt-5 bg-black text-white">Sign Up</button>
                </div>
              </div>
            </form>} 
            {CurrentStyle === 'signin' && <form>
              <div className="ml-[18%] mt-5">
                <input placeholder="Email Id" type="email" className="border py-2 w-[76%] border-blue-400 px-2"/>
                <br />
                <br />
                <input placeholder="Password" type="password" className="border py-2 w-[76%] border-blue-400 px-2"/>
                <div>
                  <button type="submit" className="border w-[75%] py-2 mt-5 bg-black text-white">Sign In</button>
                </div>
              </div>
            </form>}
          </div>
          <div className="h-[80vh] w-[40vw]">
            <video
              src="./189692-886572510_medium.mp4"
              loop
              muted
              autoPlay
              className="h-[100%] w-[100vw] object-cover rounded-4xl relative"
            />
            <div className="absolute bottom-30 right-115 text-white py-2 px-5 rounded-tr-4xl backdrop-blur-lg flex">
              <div>
                <p className="text-xl font-semibold font-sans italic">
                  Wander , Explore , <br /> Experiance.
                </p>
                <p className="text-[12px]">
                  Discover new places , embrace adventures
                </p>
              </div>
              <GiHearts className="mt-2" color="red" size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
