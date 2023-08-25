import React from 'react';
import mockUser from '@/app/challengepage/userData'; // Import the mock user data

const UserBox = () => {
  return (
    <div className="bg-green-600 text-white p-10 rounded-lg absolute right-2 top-4 text-center">
      <h3 className="text-2xl font-semibold">Hello, {mockUser.name}!</h3>
      <i className="fa fa-star fa-2x star-icon" aria-hidden="true"></i>
      <hr className="my-2" />
      <p className="user-points">{mockUser.points} PTS</p>
      <h1 className="mt-4 text-2xl font-bold">
        SPEND
        <br />
        <span className="block text-4xl">{mockUser.credits} CREDITS</span>
      </h1>
      <p id="links" className="mt-4">
        <a className="text-white no-underline block" href="/">
          TO UNLOCK DONATIONS
        </a>{" "}
        <a className="text-white no-underline block" href="/">
          {mockUser.daysLeft} Days Left
        </a>
      </p>
    </div>
  );
};

export default UserBox;
