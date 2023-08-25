
import React from 'react';

const CompanyInfo = () => {

  // Mocked data for CompanyInfo
  const MemberDetails = [
    { id: 1, name: 'Riya' },
    { id: 2, name: 'Marry' },
    { id: 3, name: 'Scarlet' },
    { id: 4, name: 'John' },
    { id: 5, name: 'Nariya' },
  ];

  const CompanyName = [
    { id: 1, name: 'Aurora Group' },
  ]

  return (
    <div className="row-span-1 p-4 text-white bg-green-200 rounded-3xl">
      <h2 className="mb-4 text-lg font-semibold">Members</h2>
      <div className="flex justify-center p-4 space-x-4 bg-white rounded-3xl">

        {MemberDetails.slice(0, 5).map(item => (
          <div
          key = {item.id}
          className="w-full h-16 mx-auto mt-2 bg-gray-300 rounded-full">
          <div className="text-center text-black mt-14">
          {item.name}
          </div>
          </div>
        ))}
</div>

      <div className="flex justify-center p-4 mt-4 space-x-4 bg-white rounded-3xl">
        {CompanyName.map(item => (
          <div
          key = {item.id}
          className="text-center text-black">
            {item.name}
            </div>
        ))}
      </div>

    </div>
  );
};

export default CompanyInfo;