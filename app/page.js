import React from 'react';
import { FaBell, FaExclamationTriangle, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Dashboard = () => {
  return (
    <div className="flex h-screen bg-gray-900 text-white">
      {/* Left Navbar with Icons */}
      <div className="w-16 bg-black-900 p-4 flex flex-col items-center">
        {/* Icon buttons */}
        <div className="mb-8">
          <FaBell size={24} className="mb-8 hover:text-green-400 cursor-pointer" />
          <FaExclamationTriangle size={24} className="mb-8 hover:text-green-400 cursor-pointer" />
          <FaCog size={24} className="hover:text-green-400 cursor-pointer" />
        </div>
        <div className="mt-auto">
          <FaSignOutAlt size={24} className="hover:text-red-400 cursor-pointer" />
        </div>
      </div>

      {/* Sidebar */}
      <div className="w-1/4 bg-gray-800 p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="bg-green-600 p-2 rounded-full">
              <span className="text-lg font-semibold">Secure</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 bg-gray-700 rounded"
          />
        </div>
        <div>
          {/* Example App Section */}
          {['Microsoft Edge', 'Portmaster Core Service', 'Operating System', 'System DNS Client', 'Firefox'].map((app, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-gray-700 rounded mb-2">
              <span>{app}</span>
              <span className="text-sm"></span>
              
                <progress className="progress progress-success w-56" value="10" max="100"></progress>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">SPN</h2>
            <span className="text-green-400">You're protected</span>
          </div>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
              {/* Icon 1 */}
            </div>
            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center cursor-pointer">
              {/* Icon 2 */}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="h-40 bg-gray-700 rounded mb-4">
          {/* Add chart or graph here */}
        </div>

        {/* Connections Information */}
        <div className="grid grid-cols-2 gap-4">
          {[
            { country: 'Canada', ip: '78.138.17.182', connections: 2, hops: 2 },
            { country: 'USA', ip: '5.34.178.198', connections: 45, hops: 2 },
            { country: 'France', ip: '141.95.158.73', connections: 6, hops: 2 },
            { country: 'Germany', ip: '138.201.140.70', connections: 184, hops: 2 },
          ].map((data, index) => (
            <div key={index} className="bg-gray-700 p-4 rounded">
              <div className="text-sm">{data.country}</div>
              <div className="text-lg font-semibold">{data.ip}</div>
              <div className="text-sm">
                {data.connections} Connections, HOPS: {data.hops}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
