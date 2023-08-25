import React from 'react';
import Image from 'next/image';
// Mocked data for progress items
const cityEvents = [
  { id: 1, name: 'John', imageUrl: "https://img.freepik.com/premium-photo/hand-holding-small-tree-planting-concept-green-world_34152-1480.jpg" },
  { id: 2, name: 'Alice', imageUrl: "https://img.freepik.com/free-photo/group-happy-diverse-volunteers_53876-13553.jpg"},
  { id: 3, name: 'Bob', imageUrl: "https://img.freepik.com/free-photo/group-happy-african-volunteers-planting-tree-park-africa-volunteering-charity-people-ecology-concept_627829-320.jpg"},
  { id: 4, name: 'Scarlet', imageUrl: "https://img.freepik.com/free-photo/adventure-travel-tourism-hike-people-concept-three-girls-forest_1157-43258.jpg?w=2000"},

];

const Event = () => {
  return (
    <div className="bg-[#F6F9FD] text-black p-4 rounded-3xl row-span-2">
      <h1 className="m-2 mt-2 -mt-8 text-3xl">City Events</h1>
      {/* <h1 className="m-5 text-3xl">City Events</h1> */}

      <div className="bg-[#F6F9FD]  grid gap-4 py-4 h-100 text-white rounded-3xl">
        <div className="flex space-x-4">
          {cityEvents.slice(0, 4).map(event => (
            <div
              key={event.id}
              className="w-1/4 h-48 bg-[#FFFFFF] text-black flex justify-center rounded-3xl">
                <center><img
                src={event.imageUrl}
                alt={`City Event - ${event.name}`}
                className="flex justify-center object-scale-down max-w-full max-h-full mx-2 my-4"
                // className="max-w-full max-h-full mx-1 my-2 flex justify-center objectCover=contain"
              /></center>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Event;