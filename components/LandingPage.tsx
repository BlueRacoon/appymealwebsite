import Image from "next/image";
import React from "react";
import { home_bg } from "../public/assets/images/index";
import {orderOnlinePic} from "../public/assets/images/index";
import {downloadIos} from "../public/assets/images/index"
import {downloadAndroid} from "../public/assets/images/index"
import {instagram} from "../public/assets/images/index"
import { fb } from "../public/assets/images/index";
import { linkedin } from "../public/assets/images/index";
import {about} from  "../public/assets/images/index";
import {phone2} from  "../public/assets/images/index";
import {partner} from  "../public/assets/images/index";
import {restaurant} from "../public/assets/images/index"

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

<div className = "   z-0 absolute left-0 top-0 bottom-0 right-0 flex flex-row w-screen h-screen bg-[#F1EDEE]   font-titleFont border-b-[1px] ">

    <div className="    bg-[#F1EDEE] font-titleFont border-b-[1px] w-full h-full  ">
              
              <div className = "  border-8 border-purple-500 gap-6 flex flex-row justify-center w-full h-full " >

                  <div className = "flex flex-col m-0 w-1/6 mt-20 m-10  ">

                      <div className = "  z-10 bg-gray-100 w-full h-1/5 rounded-md  border-dark text-dark text-3xl hover:bg-dark hover:text-white duration-300 shadow-md hover:scale-110 mt-4 bg-[url('../public/assets/images/about.jpg')]">
                      <Link href="https://appymeal.net/">
            
          
                          <button className="w-full h-full rounded-md bg-gray-100 border-[0px] border-dark text-white  text-xl   duration-300 shadow-md ">
                            
                            <Image
                            className=" w-full h-full object-cover rounded-md  "
                            src={about}
                            alt="LandingPageImg"
                            />
                            <p className ="text-end mb-20 text-2xl -mt-20 mr-6">About</p>

                            
                            
                          </button>
                      </Link>
                      
                      </div>
                      
                <div className = "  z-10 bg-gray-100 w-full h-1/5 rounded-md  border-0 border-dark text-dark text-3xl hover:bg-dark hover:text-white duration-300 shadow-md hover:scale-110 mt-10">
                      <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                          <button className="w-full h-full rounded-md bg-gray-100 border-[0px] border-dark text-white  text-xl   duration-300 shadow-md ">
                            <Image
                            className="w-full h-full object-cover rounded-md "
                            src={partner}
                            alt="LandingPageImg"
                            />
                            <p className ="text-end mb-20 text-2xl -mt-16 mr-6 ">Partner</p>
                          </button>
                      </Link>
                </div>
                <div className = " z-10 bg-gray-100 w-full h-1/5 rounded-md  border-0 border-dark text-3xl hover:bg-dark hover:text-white duration-300 shadow-md hover:scale-110 mt-10">
                      <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                          <button className="w-full h-full rounded-md bg-gray-100 border-[0px] border-dark text-white  text-xl   k duration-300 shadow-md ">
                            <Image
                            className="w-full h-full object-cover rounded-md "
                            src={restaurant}
                            alt="LandingPageImg"
                            />
                           <p className ="text-end mb-20 text-2xl -mt-20 mr-2 "> Add Restaurant  </p> 
                          </button>
                      </Link>
                </div>
                <div className = "  z-10 bg-gray-100 w-full h-1/5 rounded-md  border-0 border-dark text-dark text-3xl hover:bg-dark hover:text-white duration-300 shadow-md hover:scale-110 mt-10">
                      <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                          <button className="w-full h-full rounded-md bg-gray-100 border-[0px] border-dark text-white  text-xl   duration-300 shadow-md ">
                            <Image
                            className="w-full h-full object-cover rounded-md "
                            src={phone2}
                            alt="LandingPageImg"
                            />
                            <p className =" text-end text-2xl -mt-20 mr-2 mb-20"> Contact </p>
                          </button>
                      </Link>
                </div>


                  </div>

                 
                  <div className= " flex flex-1 flex-col mt-20   ">
                  <div className = "  h-2/3 w-full z-10 bg-gray-100 rounded-md   border-dark text-dark text-3xl hover:bg-dark hover:text-white duration-300 shadow hover:scale-105 mb-1 mt-4  ">
                      <Link href="/restaurants">
                          <button className="   w-full h-full rounded-md  border-0 border-dark text-dark text-xl  duration-300 shadow-md ">
                            <Image
                              className=" object-cover rounded-md w-full h-full "
                              src={home_bg}
                              alt="LandingPageImg"
                            />
                            <p className =" text-start text-5xl -mt-20 ml-20  mb-20"> Order Online </p>
                          </button>
                     </Link>
                  </div>
                  <div className = "flex flex-row mt-20 w-full  ">

                  
            
            <div className = "  z-10 bg-gray-100 w-1/6 h-full rounded-md  border-0 border-dark text-dark text-3xl  hover:bg-dark hover:text-white duration-300 shadow-md hover:scale-110  ml-20 mr-20 -mt-10">
                  <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                      <button className="w-full h-full rounded-md bg-gray-100 border-[0px] border-dark text-dark  text-xl  hover:bg-dark hover:text-white duration-300 shadow-md ">
                        <Image
                        className="w-full h-full object-cover rounded-md  "
                        src={fb}
                        alt="LandingPageImg"
                        />
                        
                      </button>
                  </Link>
            </div>
            <div className = " z-10 bg-gray-100 w-1/6 h-full rounded-md  border-0 border-dark text-dark text-3xl  hover:bg-dark hover:text-white duration-300 shadow-md  hover:scale-110 ml-20 mr-20 -mt-10">
                  <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                      <button className="w-full h-full rounded-md bg-gray-100 border-[0px] border-dark text-dark  text-xl  flex items-center gap-1 hover:bg-dark hover:text-white duration-300 shadow-md ">
                        <Image
                        className="w-full h-full object-cover rounded-md  "
                        src={linkedin}
                        alt="LandingPageImg"
                        />
                        
                      </button>
                  </Link>
            </div>
            <div className = " z-10 bg-gray-100 w-1/6 h-full rounded-md  border-0 border-dark text-dark text-3xl  hover:bg-dark hover:text-white duration-300 shadow-md  hover:scale-110 ml-20 -mt-10  ">
                  <Link href="https://play.google.com/store/apps/details?id=com.zowen1.AppyMeal&hl=en_US&gl=US">
                      <button className="w-full h-full rounded-md rounded bg-gray-100 border-[0px] border-dark text-dark  text-xl  hover:bg-dark hover:text-white duration-300 shadow-md ">
                        <Image
                        className="w-full h-full object-cover rounded-md  "
                        src={instagram}
                        alt="LandingPageImg"
                        />
                        
                      </button>
                  </Link>
                  
            </div>
            


                  </div>

                  </div>
                  

                  
              <div className= " flex flex-col items-center gap-2 w-1/5 mt-20 m-10  ">
              
              <p className="  font-semibold text-2xl md:text-3xl text-center mt-6">Discounts and rewards on the app</p>
                  <div className = " z-10 bg-gray-100 w-full h-72 rounded-md  border-0 border-dark text-dark text-3xl  duration-300 shadow-md  hover:scale-110 mt-20 ">
                      <Link href="https://apps.apple.com/us/app/appymeal/id6443683011">
                          <button className=" w-full h-72 rounded-md bg-gray-100 border-[0px] border-dark text-dark text-xl   duration-300 shadow-md  ">
                              <Image
                                className="w-full h-full object-cover rounded-md "
                                src={downloadIos}
                                alt="LandingPageImg"
                              />
                                <p className =" text-start text-2xl -mt-20 ml-2  mb-16"> Download IOS App </p>
                          </button>
                      </Link>
                 </div>
                 <div className = " z-10 bg-gray-100 w-full h-72 rounded-md  border-0 border-dark text-dark text-3xl  duration-300 shadow-md  hover:scale-110 mt-20 ">
                      <Link href="https://apps.apple.com/us/app/appymeal/id6443683011">
                          <button className=" w-full h-72 rounded-md bg-gray-100 border-[0px] border-dark text-white text-xl  duration-300 shadow-md ">
                            
                              <Image
                                className="w-full h-full object-cover rounded-md "
                                src={downloadAndroid}
                                alt="LandingPageImg"
                              />
                               <p className =" text-start text-2xl -mt-20 ml-2  mb-16"> Download Android App </p>
                          </button>
                      </Link>
                 </div>
                 
          </div>

                  
                 </div>
       
    </div>

                {/*<div className=" z-0 flex relative  hidden md:block">
                    <Image
                      className=" z-0 w-screen h-full object-cover bg-[#F1EDEE] "
                      src={home_bg}
                      alt="LandingPageImg"
                    />
  </div> */}
      
  </div>
      
);
};

export default LandingPage;
