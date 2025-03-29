import React from "react";
import { CgSpinner } from "react-icons/cg";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <CgSpinner className="animate-spin text-primary " size={50} />
    </div>
  );
};

export default Loading;
