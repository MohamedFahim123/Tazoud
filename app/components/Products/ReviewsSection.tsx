"use client";

import Image from "next/image";
import { FaHeart, FaReply, FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "Deniella Rhodes",
    avatar: "/images/profile.png",
    rating: 5,
    comment: "Really liked it! What a beautiful light it comes from! The radius of bright.",
    likes: 80,
  },
  {
    id: 2,
    name: "Deniella Rhodes",
    avatar: "/images/profile.png",
    rating: 5,
    comment: "Really liked it! What a beautiful light it comes from! The radius of bright.",
    likes: 80,
  },
];

const ReviewsSection = () => {
  return (
    <div className="w-full mx-auto p-6 space-y-6">
      {reviews.map((review) => (
        <div key={review.id} className="flex flex-col md:flex-row space-x-4 border-b border-gray pb-4">
          <Image
            src={review.avatar}
            alt={review.name}
            width={100}
            height={100}
            className="w-12 h-12 rounded-full"
            priority
            placeholder="blur"
            blurDataURL="/images/profile.png"
          />
          <div>
            <h3 className="font-semibold">{review.name}</h3>
            <div className="flex text-yellow-500">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar className="mr-1 text-yellow" key={i} />
              ))}
            </div>
            <p className="text-black/60">{review.comment}</p>
            <div className="flex space-x-2 mt-2">
              <button className="flex items-center space-x-1 text-green/85 bg-emerald-100  px-3 py-1 rounded-md">
                <FaHeart fontSize={16} /> <span>{review.likes}</span>
              </button>
              <button className="flex items-center space-x-1 text-red-500 bg-red-100  px-3 py-1 rounded-md">
                <FaReply fontSize={16} /> <span>Reply</span>
              </button>
            </div>
          </div>
        </div>
      ))}

      <div className="w-full bg-gray p-4 rounded-md">
        <h3 className="font-semibold mb-2">Add Your Review</h3>
        <form action="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your name here" className="border border-gray focus:outline-none p-2 rounded-md w-full" />
            <input type="email" placeholder="Your email address here" className="border border-gray focus:outline-none p-2 rounded-md w-full" />
          </div>
          <textarea placeholder="Write your text" className="border border-gray resize-none focus:outline-none p-2 rounded-md w-full mt-4" rows={5} />

          <button type="button" className="mt-4 py-2 px-8 bg-primary text-white hover:bg-primary/80 rounded-md">
            Submit Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ReviewsSection;
