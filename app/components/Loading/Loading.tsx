import React from "react";
import { Circles } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <Circles height="50" width="50" color="#6176FE" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />;
    </div>
  );
};

export default Loading;
