
// import TimelineCard from "./TimelineCard";

// const ListItem = ({ cardData }) => {
//   const align = parseInt(cardData?.id) % 2 === 0 ? 'start' : 'end';
  
//   return (
//     <li className="relative">
//       {/* Timeline connector */}
//       <div className="timeline-middle">
//         <div className="p-3 bg-gradient-to-r from-blue-primary to-blue-500 rounded-full shadow-lg shadow-indigo-200 border-4 border-base-100 z-10">
//           <img 
//             src="https://www.svgrepo.com/show/197996/internet.svg" 
//             alt="timeline icon" 
//             className="w-6 h-6 filter invert"
//           />
//         </div>
//       </div>
      
//       <div className={`timeline-${align} mb-16 md:px-8 transition-all duration-300 hover:scale-105`}>
//         <time className="font-mono text-xl font-bold text-transparent bg-clip-text bg-red-400 mb-2 block">
//           {cardData?.year}
//         </time>
//         <TimelineCard cardData={cardData} />
//       </div>
      
//       <hr className="bg-gradient-to-r from-blue-primary to-green-primary h-1 rounded-full" />
//     </li>
//   );
// };

// export default ListItem;


import TimelineCard from "./TimelineCard";

const ListItem = ({ cardData, handleOpenDrawer }) => {
  const align = parseInt(cardData?.id) % 2 === 0 ? 'start' : 'end';

//   console.log('from listItem: ', handleOpenDrawer);
  
  return (
    <li className="relative">
      {/* Timeline connector */}
      <div className="timeline-middle">
        <div className="p-3 bg-gradient-to-r from-blue-primary to-blue-500 rounded-full shadow-lg shadow-indigo-200 border-4 border-base-100 z-10">
          <img 
            src="https://www.svgrepo.com/show/197996/internet.svg" 
            alt="timeline icon" 
            className="w-6 h-6 filter invert"
          />
        </div>
      </div>
      
      <div className={`timeline-${align} mb-16 md:px-8 transition-all duration-300 hover:scale-105`}>
        <time className="font-mono text-xl font-bold text-transparent bg-clip-text bg-red-400 mb-2 block">
          {cardData?.year}
        </time>
        <TimelineCard cardData={cardData} handleOpenDrawer={handleOpenDrawer} />
      </div>
      
      <hr className="bg-gradient-to-r from-blue-primary to-green-primary h-1 rounded-full" />
    </li>
  );
};

export default ListItem;