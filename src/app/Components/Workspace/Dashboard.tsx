import React from 'react';
import TeamInfo from './TeamInfo';
import Sidebar from './Sidebar';
import Main from './Main';

const Dashboard = () => {
  return (
    // <div className="grid w-screen h-screen grid-cols-7 gap-4 p-8">
    <div className="grid w-screen h-screen grid-cols-10 gap-4 p-8">
      <div className="col-span-2">
        <Sidebar />
      </div>
      <div className="col-span-5">
        <Main />
      </div>
      <div className="col-span-3">
        <TeamInfo />
      </div>
    </div>
  );
};

export default Dashboard;