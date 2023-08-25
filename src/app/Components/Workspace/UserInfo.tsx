
"use client";
import React, { useState, useEffect } from 'react';
import {TailSpin} from 'react-loader-spinner';

const UserInfo = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 
  }, []);

  return (
    <div className="bg-[#1B6B36] text-white p-2 text-center rounded-3xl row-span-1">
      <div className="flex justify-center align-items-center">
      {isLoading ? (
        <TailSpin
          color="#00BFFF"
          height={80} 
          width={80}
        />
      ) : (
        <div>
          {/* Content to display when not loading */}
            <h1>Hello, User!</h1>
        </div>
      )}
      </div>
    </div>
  );
};

export default UserInfo;
