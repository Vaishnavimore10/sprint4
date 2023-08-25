import React from 'react';

import { fakeMasterboard, fakeTasks, fakeEvents, fakeCompleted } from '@/app/challengepage/challangeData'; // Adjust the import path as needed

interface SectionProps {
  title: string;
  data: { name: string; mentor: string; date: string }[];
}

const Section: React.FC<SectionProps> = ({ title, data }) => (
  <div className="col-span-1 bg-gray-100 p-6 rounded-lg h-full">
    <h2 className="text-lg font-semibold mb-2">{title}</h2>
    {data.map((item, index) => (
      <div
      className="bg-blue-500 bg-opacity-17 p-2 rounded-lg text-white mb-2" /* Add bg-opacity class */
      key={index}
    >
        <p>{item.name}</p>
        <p>{item.mentor}</p>
        <p>{item.date}</p>
      </div>
    ))}
  </div>
);

const ChallengeBoard: React.FC = () => {
    const fakeMasterboard = [
        { name: '200 tasks', mentor: '', date: '' },
        { name: '300 events', mentor: '', date: '' },
        { name: '20 mentors', mentor: '', date: '' },
      ];
  const fakeTasks = [
    { name: 'Task 1', mentor: 'Mentor 1', date: '2 December 2023' },
    { name: 'Task 2', mentor: 'Mentor 2', date: '5 December 2023' },
    { name: 'Task 3', mentor: 'Mentor 3', date: '8 December 2023' },
  ];
  const fakeEvents = [
    { name: 'Event 1', mentor: 'Mentor 1', date: '2 December 2023' },
    { name: 'Event 2', mentor: 'Mentor 2', date: '5 December 2023' },
    { name: 'Event 3', mentor: 'Mentor 3', date: '8 December 2023' },
  ];

  const fakeCompleted = [
    { name: 'Completed 1', mentor: 'Mentor 1', date: '2 December 2023' },
    { name: 'Completed 2', mentor: 'Mentor 2', date: '5 December 2023' },
    { name: 'Completed 3', mentor: 'Mentor 3', date: '8 December 2023' },
  ];

  // ... Similarly define fakeEvents and fakeCompleted

  return (
    <div className="flex-1 flex justify-start items-start p-4 bg-white h-full ">
      <div className="w-full max-w-5xl h-full">
        <h2 className="text-xl font-semibold mb-4">
          Challenge Board <i className="fas fa-caret-down ml-2 text-gray-600"></i>
        </h2>
        <div className="grid grid-cols-4 gap-4 border border-gray-300 p-4 rounded-lg h-full opacity-">
          {/* ... Master Board section ... */}
          <Section title="MasterBoard" data={fakeMasterboard} />
          <Section title="Tasks" data={fakeTasks} />
          <Section title="Events" data={fakeEvents} />
          <Section title="Completed" data={fakeCompleted} />
        </div>
      </div>
    </div>
  );
};

export default ChallengeBoard;
