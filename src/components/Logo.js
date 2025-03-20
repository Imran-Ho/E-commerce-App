import React from "react";

const Logo = ({ h, w }) => {
  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 370 155"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g fill="#292929">
        {/* <!-- Shopping Cart --> */}
        <path
          d="M10 40h10l10 40h80l10-25H35"
          stroke="#292929"
          stroke-width="5"
          fill="none"
        />
        <circle cx="40" cy="90" r="5" fill="#292929" />
        <circle cx="90" cy="90" r="5" fill="#292929" />

        {/* <!-- Credit Card --> */}
        <rect x="220" y="20" width="120" height="80" rx="5" fill="#292929" />
        <rect x="230" y="40" width="60" height="10" fill="#ffffff" />
        <rect x="230" y="60" width="30" height="10" fill="#ffffff" />

        {/* <!-- Delivery Package --> */}
        <rect x="130" y="50" width="50" height="50" fill="#292929" />
        <line
          x1="130"
          y1="50"
          x2="155"
          y2="30"
          stroke="#292929"
          stroke-width="3"
        />
        <line
          x1="155"
          y1="30"
          x2="180"
          y2="50"
          stroke="#292929"
          stroke-width="3"
        />
        <line
          x1="155"
          y1="30"
          x2="155"
          y2="80"
          stroke="#292929"
          stroke-width="3"
        />
      </g>
    </svg>
  );
};

export default Logo;
