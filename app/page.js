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
      <div className="w-1/4 bg-black p-4">
        <div className="flex items-center justify-between mb-4">
          
          <img src="/secure.jpeg" className='w-20 h-20 mb-2 rounded-full flex items-center' ></img>
          <div className="flex items-center">
            <div className="bg-green-600 p-2 rounded-full">
            {/* <div className="p-4">
                {/* Example usage of the SecurityStatus component */
                /* <SecurityStatus />
              </div> */} 
              
              <span className="text-lg">Secure</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <label className="input input-bordered flex items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd" />
            </svg>
          </label> 
        </div>
        <div>
        <div>
          {/* Example App Section */}
          {['Microsoft Edge', 'Portmaster Core Service', 'System DNS Client', 'Firefox'].map((app, index) => (
            <div key={index} className="flex justify-between items-center p-2 bg-gray-900 rounded mb-2">
              <span>{app}</span>
              <span className="text-sm"></span>
              <div
                className="radial-progress bg-primary text-primary-content border-primary border-4"
                style={{ "--value": 50 }}
                role="progressbar">
                50%
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Connections Information */}
      <div className="mt-4 grid grid-cols-1 gap-4">
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

      {/* Main Content Area */}
      <div className="flex-1 p-4">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h2 className="text-lg font-semibold">SPN</h2>
            <span className="text-green-400">You're protected</span>
          </div>
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer">
              {/* Icon 1 */}
            </div>
            <div className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center cursor-pointer">
              {/* Icon 2 */}
            </div>
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="h-40 bg-gray-700 rounded mb-4">
          {/* Add chart or graph here */}
        </div>

        
      </div>
    </div>
  );
};

export default Dashboard;
