import Image from "next/image";
import React from "react";
import { home_bg } from "../public/assets/images/index";
import {orderOnlinePic} from "../public/assets/images/index";
import {downloadIos} from "../public/assets/images/index"
import {downloadAndroid} from "../public/assets/images/index"
import { Spacer } from "./Spacer";
import Link from "next/link";
//  done -Make the landing page similar to walmart.com with cards for Order Online, download IOS etc.
// done- Make a sticky header so when someone scrolls down it stays in place at the bottom of the page after some scrolling
//- a scroll bar with horizantal headers
//- a search bar filter that filters what is displayed as the user types
//- map over user data and display it to the page
export const orderOnlyText = "Order Online";

const LandingPage = () => {
  return (

<div className = " w-full grid lg:grid-cols-2 h-full bg-[#F1EDEE] font-titleFont flex-1 flex-wrap flex border-b-[1px] ">

    <div className="   bg-[#F1EDEE] font-titleFont border-b-[1px] mr-52 ">
        <div className=" bg-[#F1EDEE] flex flex-wrap justify-center">
             <p className="font-semibold text-3xl md:text-5xl mt-5 mb-5 ">Order Online Now</p>
                  <div className = " bg-gray-100 w-96 h-72 rounded-md  border-0 border-dark text-dark text-3xl hover:bg-dark hover:text-white duration-300 shadow-md m-4 hover:scale-110 mb-20 ">
                      <Link href="/restaurants">
                          <button className="  w-96 h-72 rounded-md  border-0 border-dark text-dark text-xl flex items-center hover:bg-dark hover:text-white duration-300 shadow-md ">
                            <Image
                              className="w-full h-full object-cover rounded-md"
                              src={orderOnlinePic}
                              alt="LandingPageImg"
                            />
                            {orderOnlyText}
                          </button>
                     </Link>
                  </div>

              <Spacer size="small" />
              <p className="font-semibold text-2xl md:text-3xl text-center">Discounts and rewards on the app</p>
              <div className= "flex gap-10 mt-5 justify-start">
        
                  <div className = " bg-gray-100 w-72 h-72 rounded-md  border-0 border-dark text-dark text-3xl flex items-center justify-center gap-1 hover:bg-dark hover:text-white duration-300 shadow-md m-4 hover:scale-110 ">
                      <Link href="https://apps.apple.com/us/app/appymeal/id6443683011">
                          <button className=" w-72 h-72 rounded-md bg-gray-100 border-[0px] border-dark text-dark text-xl flex items-center gap-1 hover:bg-dark hover:text-white duration-300 shadow-md m-4 pr-1">
                              <Image
                                className="w-full h-full object-cover rounded-md "
                                src={downloadIos}
                                alt="LandingPageImg"
                              />
                               Download iOS App
                          </button>
                      </Link>
                 </div>

                 <div className = " bg-gray-100 w-72 h-72 rounded-md  border-0 border-dark text-dark text-3xl flex items-center justify-center gap-1 hover:bg-dark hover:text-white duration-300 shadow-md m-4 hover:scale-110">
                      <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                          <button className="w-72 h-72 rounded-md bg-gray-100 border-[0px] border-dark text-dark  text-xl  flex items-center gap-1 hover:bg-dark hover:text-white duration-300 shadow-md m-4 pr-1">
                            <Image
                            className="w-full h-full object-cover rounded-md  "
                            src={downloadAndroid}
                            alt="LandingPageImg"
                            />
                            Download Android App
                          </button>
                      </Link>
                </div>
            </div>
        </div>
    </div>

                <div className="flex relative hidden md:block">
                    <Image
                      className=" w-screen h-full object-cover bg-[#F1EDEE] "
                      src={home_bg}
                      alt="LandingPageImg"
                    />
                </div>
      
  </div>
      
);
};

export default LandingPage;
