import React from "react";

const StarRating = ({ rating }) => {
  // Convert the rating to a number with 1 decimal place
  const roundedRating = Math.round(rating * 2) / 2;

  // Create an array of 5 elements for the stars
  const stars = Array.from({ length: 5 }, (_, index) => {
    const starIndex = index + 1;
    if (roundedRating >= starIndex) return "full";
    if (roundedRating >= starIndex - 0.5) return "half";
    return "empty";
  });

  return (
    <div className="flex items-center">
      {stars.map((star, index) => (
        <svg
          key={index}
          className={`w-6 h-6 ${
            star === "full"
              ? "text-yellow-500"
              : star === "half"
              ? "text-yellow-300"
              : "text-gray-400"
          }`}
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12 2l2.39 4.85 5.36.77-3.88 3.77.92 5.36-4.49-2.36-4.49 2.36.92-5.36-3.88-3.77 5.36-.77z"
            clipRule="evenodd"
            fillRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
};

export default StarRating;
