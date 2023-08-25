'use client';
import React, { useState } from 'react';

const Sidebar = () => {
  const [workspace1Open, setWorkspace1Open] = useState(false);
  const [workspace2Open, setWorkspace2Open] = useState(false);

  const toggleWorkspace1Dropdown = () => {
    setWorkspace1Open(!workspace1Open);
  };

  const toggleWorkspace2Dropdown = () => {
    setWorkspace2Open(!workspace2Open);
  };

  return (
    <div className="bg-[#9BC371] text-white p-4 h-full rounded-3xl" style={{ gridArea: 'sidebar' }}>
      <ul>
        <li>My Workspaces</li>

        <li onClick={toggleWorkspace1Dropdown} style={{ cursor: 'pointer' }}>
        ▼ Workspace 1 
        </li>
        {workspace1Open && (
          <ul>
            <li>Teams</li>
            <li>Challenge catalog</li>
          </ul>
        )}

        <li onClick={toggleWorkspace2Dropdown} style={{ cursor: 'pointer' }}>
        ▼ Workspace 2 
        </li>
        {workspace2Open && (
          <ul>
            <li>Teams</li>
            <li>Challenge catalog</li>
          </ul>
        )}
      </ul>
    </div>
  );
};

export default Sidebar;
