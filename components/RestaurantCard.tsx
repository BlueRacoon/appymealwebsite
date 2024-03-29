import Image from "next/image";
import React, { useEffect, useState } from "react";
import { GoPlus } from "react-icons/go";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/router";

const RestaurantCard = ({ restaurant, updateTime }: any) => {
  const [currentlyOpen, setCurrentlyOpen] = useState(false);
  const currentTime = useSelector((state: any) => state.shopper.currentTime);
  const militaryTime = useSelector((state: any) => state.shopper.militaryTime);
  const router = useRouter();

  useEffect(() => {
    updateTime();
    //can't add to depen array - infinite loop
  }, []);

  useEffect(() => {
    if (
      typeof restaurant.hours === "undefined" ||
      restaurant?.menuStatus === false
    ) {
      setCurrentlyOpen(false);
    } else if (
      parseFloat(militaryTime) >
        parseFloat(restaurant?.hours?.substring(0, 4)) &&
      parseFloat(militaryTime) <
        parseFloat(restaurant?.hours?.substring(5, 9)) &&
      restaurant.isOpen === true &&
      (parseFloat(militaryTime) >
        parseFloat(restaurant?.menuHours?.substring(0, 4)) ||
        restaurant?.menuHours === "All Day") &&
      (parseFloat(militaryTime) <
        parseFloat(restaurant?.menuHours?.substring(5, 9)) ||
        restaurant?.menuHours === "All Day")
    ) {
      setCurrentlyOpen(true);
    } else {
      setCurrentlyOpen(false);
    }
  }, [
    restaurant.hours,
    militaryTime,
    restaurant.isOpen,
    restaurant.menuStatus,
    restaurant,
  ]);

  return (
    <div
      key={restaurant.name}
      className="border-[1px] min-w-[335px] max-w-[335px] min-h-[390px] max-h-[390px] border-gray-200 mb-2 group shadow-md rounded-xl cursor-pointer"
      onClick={() => {
        router.push(`restaurants/${restaurant.name}`);
      }}
    >
      <div className="w-full h-64 overflow-hidden rounded-xl">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 rounded-xl"
          width={200}
          height={300}
          src={restaurant.photo}
          alt="itemImage"
        />
      </div>
      {/* Description */}
      <div className="px-2 py-0 flex flex-col justify-between">
        <div className="flex justify-between pt-3 pb-2">
          <div className="max-w-[235px]">
            <p className="text-lg font-semibold text-ellipsis">
              {restaurant.name}
            </p>
            <p className="pt-0 mt-0 text-ellipsis">{restaurant.address}</p>
            <p className="pt-0 mt-0">
              {restaurant.city}, {restaurant.state}
            </p>
          </div>
          <Link
            href={{
              pathname: `restaurants/${restaurant.name}`,
            }}
            as={`restaurants/${restaurant.name}`}
          >
            <button
              onClick={
                () => null
                //go to individual restaurant page
              }
              className="  w-20 h-9 bg-text bg-white text-dark rounded-full flex gap-1 items-center justify-center hover:bg-lightdark duration-300 shadow-md"
            >
              <span>
                <GoPlus />
              </span>
              Menu
            </button>
          </Link>
        </div>
      </div>
      <div className=" w-full flex flex-row gap-2 justify-between px-2">
        <div className="flex flex-row gap-2">
          <div className="flex bg-primary w-16 h-auto justify-center items-center rounded-xl">
            <p className="text-white">Pickup</p>
          </div>

          {restaurant.enableDelivery && (
            <div className="flex bg-primary w-20 h-auto justify-center items-center rounded-xl">
              <p className="text-white">Delivery</p>
            </div>
          )}
        </div>
        {currentlyOpen && (
          <div className="flex bg-primary w-16 h-auto justify-center items-center rounded-xl">
            <p className="text-white">OPEN</p>
          </div>
        )}
        {!currentlyOpen && (
          <div className="flex bg-white w-20 h-auto justify-center items-center rounded-xl">
            <p className="text-dark">CLOSED</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default RestaurantCard;
