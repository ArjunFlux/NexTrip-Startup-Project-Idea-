import React from "react";
// Importing the icons
import { SiParamountplus } from "react-icons/si";
import { Link } from "react-router-dom";
function NavBar() {
  return (
    <div className="h-[10vh]  text-black px-50 pt-7">
      <div className="flex justify-between items-center">
        <Link to={'/'}>
          <div className="flex items-center gap-3">
            <SiParamountplus size={30} />
            <p className="text-2xl font-extrabold">NexTrip</p>
          </div>
        </Link>
        <div className="flex justify-center items-center gap-10 ml-20">
          <Link to={`/about`}><p>About Us</p></Link>
          <p>Book Travel</p>
          <p>My Grad Fund</p>
          <p>Rewards</p>
          <p>Contact Us</p>
          {/* <button className='border px-5'>Book Now</button> this button will come when the user has looged in */}
        </div>
        <div className="flex gap-5">
          <Link to={`/signup`}>
            <button className="border px-5 py-2 border-gray-300 rounded-2xl bg-black text-white cursor-pointer">
              Sign Up
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
