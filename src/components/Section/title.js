import React from "react";

export default function Title({ title, titleDes, className }) {
  return (
    <>
      <div className={`text-center mb-16 ${className}`}>
        <h1 className={`text-3xl font-bold uppercase `}>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-500 to-purple-600">
            {title || "Title"}
          </span>
        </h1>
      </div>
    </>
  );
}
