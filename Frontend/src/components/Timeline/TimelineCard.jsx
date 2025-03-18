const TimelineCard = ({ cardData, handleOpenDrawer }) => {
  const handleExplore = () => {
    if (cardData?.filePath) {
      handleOpenDrawer(cardData.filePath);
    }
  };
  
  return (
    <div className="relative w-64">
      <div className="absolute -top-1 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-t-xl"></div>
      
      <div className="card bg-white shadow-lg hover:shadow-xl transition-all duration-300 rounded-xl overflow-hidden pt-1 mt-0">
        <div className="card-body p-2">
          <h2 className="text-sm font-bold text-gray-800 line-clamp-2 mb-2">
            {cardData?.event}
          </h2>
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-semibold text-blue-500">
              {cardData?.year}
            </span>
            <button 
              className="btn btn-sm bg-amber-500 hover:bg-amber-600 text-white border-none rounded-full px-3 py-1 text-xs"
              onClick={handleExplore}
              disabled={!cardData?.filePath}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCard;