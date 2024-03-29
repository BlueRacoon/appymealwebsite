import React, { useState, useEffect } from "react";

interface Restaurant {
  [key: string]: any;
}

interface OpenStatusProps {
  restaurant: Restaurant;
  militaryTime: string;
}

const OpenStatus: React.FC<OpenStatusProps> = ({
  restaurant,
  militaryTime,
}) => {
  const [currentlyOpen, setCurrentlyOpen] = useState(false);

  // console.log("rest", restaurant);
  // console.log("militaryTime", militaryTime);

  useEffect(() => {
    if (
      typeof restaurant.hours === "undefined" ||
      restaurant?.menuStatus === false
    ) {
      setCurrentlyOpen(false);
      // console.log("trigs1");
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
      // console.log("trigs2");
    }
  }, [restaurant, militaryTime]);

  return (
    <p className="text-sm md:text-lg text-dark">
      Status - {currentlyOpen ? "Open" : "Closed"}
    </p>
  );
};

export default OpenStatus;
