// import React, { useState } from 'react';

// const SecurityStatus = () => {
//   // State to determine if it's secure or not
//   const [isSecure, setIsSecure] = useState(true);

//   // Image URLs for secure and not secure status
//   const secureImageUrl = 'secure.jpeg'; // Replace with your secure image URL
//   const notSecureImageUrl = 'disconnect.png'; // Replace with your not secure image URL

//   return (
//     <div className="flex flex-col items-center p-4 bg-gray-800 rounded">
//       {/* Conditional rendering based on the isSecure state */}
//       <img
//         src={isSecure ? secureImageUrl : notSecureImageUrl}
//         alt={isSecure ? 'Secure' : 'Not Secure'}
//         className="w-12 h-12 mb-2"
//       />
//       <span className="text-white text-sm">
//         {isSecure ? 'Secure' : 'Not Secure'}
//       </span>
//     </div>
//   );
// };

// export default SecurityStatus;
