import React from "react";
import SuccessPage from "../components/SuccessPage";

const checkoutsuccess = () => {
  return (
    <div className="w-full flex-1 flex items-center justify-center py-20">
      <SuccessPage /> {/* Pass the order object to SuccessPage */}
    </div>
  );
};

export default checkoutsuccess;
