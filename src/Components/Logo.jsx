import React from "react";

const Logo = () => {
  return (
    <svg
      viewBox="0 0 240 80"
      width="180"
      height="60"
      style={{ marginRight: "15px" }}
    >
      {/* Modern shape background */}
      <path
        d="M20,10 L220,10 Q230,10 230,20 L230,60 Q230,70 220,70 L20,70 Q10,70 10,60 L10,20 Q10,10 20,10 Z"
        fill="#ffffff"
        opacity="0.9"
      />

      {/* Stylized 'N' */}
      <path
        d="M40,25 L40,55 M40,25 L60,55 M60,25 L60,55"
        stroke="#1a73e8"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Stylized 'B' */}
      <path
        d="M80,25 L80,55 M80,25 H95 Q110,25 110,40 T95,55 H80 M80,40 H95"
        stroke="#1a73e8"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />

      {/* Modern abstract element */}
      <path
        d="M130,25 Q160,25 160,40 T190,55"
        stroke="#34a853"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* Dot accent */}
      <circle cx="210" cy="40" r="8" fill="#ea4335" />
    </svg>
  );
};

export default Logo;
