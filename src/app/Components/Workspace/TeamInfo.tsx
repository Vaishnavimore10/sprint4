import React from 'react';
import CompanyInfo from './CompanyInfo';
import UserInfo from './UserInfo';

const TeamInfo = () => {
  return (
    <div className="bg-[#F6F9FD] grid gap-4 text-white p-4 h-full rounded-3xl">
        <UserInfo/>

        <div className="grid row-span-1 gap-4">
            <CompanyInfo/>
        </div>
    </div>
  );
};

export default TeamInfo;