import React from 'react';
import Sidebar from './Sidebar';
import ChallengeBoard from './ChallengeBoard';
import UserBox from './Userbox'; // Assuming you have a UserBox component

const DashboardPage = () => {
  return (
    <div className="flex h-screen relative">
      <Sidebar />

      {/* Display UserBox */}
      <UserBox />

      {/* Display ChallengeBoard with margin top */}
      <div className="flex-1 mt-80">
        <ChallengeBoard />
      </div>
    </div>
  );
};

export default DashboardPage;
