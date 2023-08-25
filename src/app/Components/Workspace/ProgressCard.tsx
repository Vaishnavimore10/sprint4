import React from 'react';
import Image from 'next/image';

const Progress = () => {
  // Mocked data for progress items
  const progressItems = [
      { id: 1, text: 'Points donated till date', points: '2000'},
      { id: 2, text: 'Challenges completed', points: '10'},
      { id: 3, text: 'SDGs to work towards', points: '14'},
      { id: 4, text: 'Challenges in Progress', points: '10'},
      { id: 5, text: 'Trees planted', points: '50'},
    ];

  return (
    <div className="bg-[#F6F9FD] text-black p-4 rounded-3xl">
      <Image
      src="/logo.webp"
      alt="Logo"
      width={300}     
      height={100}     
    />

      {/* <div className="bg-[#F6F9FD] grid gap-4 py-4 h-50em text-white rounded-3xl"> */}
      <div className="bg-[#F6F9FD] grid gap-4 py-4 h-100 text-white rounded-3xl justify-center items-center">
      <div className="flex space-x-4">
        {progressItems.slice(0, 5).map(item => (
          <div
            key={item.id}
            className="w-1/5 h-32 bg-[#FFFFFF] text-black flex justify-center rounded-3xl">        
            <div className="text-3xl text-center text-black">
            {item.points}
            </div><br/><br/>
            {item.text}<br/>
          </div>
        ))}
    </div>
      </div>

    </div>
  );
};

export default Progress;