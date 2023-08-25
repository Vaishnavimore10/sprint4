import React from 'react';
import Link from 'next/link'

const Challenge = () => {
  // Mocked data for progress items
  const activeChallenges = [
    { id: 1, name: '4 Weeks Fitness Challenge', points: '0', created_date: '' },
    { id: 2, name: 'DreamWell', points: '200', created_date: 'Nov 04, 2022' },
    { id: 3, name: 'Eating for Climate Anxiety', points: '300', created_date: 'Nov 03, 2022' },
    { id: 4, name: 'Stress Techniques', points: '400', created_date: 'Nov 03, 2022' },
    { id: 5, name: 'Meditation', points: '340', created_date: '' },
  ];
  return (
    <div className="bg-[#F6F9FD] text-black p-4 rounded-3xl">
       <h1 className="m-2 mt-2 -mt-8 text-3xl">Active Challenges</h1>      
       {/* <h1 className="m-5 text-3xl">Active Challenges</h1>  */}

      <div className="bg-[#F6F9FD] grid gap-4 py-4 h-100 text-white rounded-3xl">
      <div className="flex space-x-4">
        {activeChallenges.slice(0, 4).map(challenge => (
          <div
            key={challenge.id}
            className="w-1/4 h-32 bg-[#5694C8] p-4 flex justify-left items-end text-xs font-semibold rounded-3xl">
            <Link href={`/challengelist/${challenge.name}`} as={`/challengelist/${challenge.name}`}>
           
            {challenge.name }<br/><br/>
            {challenge.points } points<br/>
            Created on {challenge.created_date }<br/>

            </Link>
          </div>
        ))}
    </div>
      </div>

    </div>
  );
};

export default Challenge;
