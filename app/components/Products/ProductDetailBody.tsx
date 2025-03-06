"use client";

import { useState } from "react";
import ReviewsSection from "./ReviewsSection";
import FeaturesSection from "./FeaturesSection";
import SpecificationSection from "./SpecificationSection";

const ProductDetailBody = () => {
  const tabs = ["specification", "features", "reviews"];
  const [activeTab, setActiveTab] = useState<string>("specification");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div>
      <div className="flex items-center justify-start gap-1 text-xl flex-wrap font-semibold bg-gray  ">
        {tabs.map((tab) => (
          <span
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`hover:text-white hover:bg-primary px-8 py-3 rounded-md  cursor-pointer transition duration-300 ${activeTab === tab && "bg-primary text-white"}`}
          >
            {tab}
          </span>
        ))}
      </div>

      <div className="mt-4">{activeTab === "specification" && <SpecificationSection />}</div>
      <div className="mt-4">{activeTab === "features" && <FeaturesSection />}</div>
      <div className="mt-4">{activeTab === "reviews" && <ReviewsSection />}</div>
    </div>
  );
};

export default ProductDetailBody;
