// import React from 'react';

// const Loading: React.FC = () => {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
//     </div>
//   );
// };

// export default Loading;

import React from 'react';

const Loading = ({ spin, section }: { spin: string, section: string }) => {
  return (
    <div className={`${section}`}>
      <div className={`${spin}`}></div>
    </div>
  );
};

export default Loading;

