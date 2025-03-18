
const TimelineCard = ({ cardData, handleOpenDrawer }) => {
    const handleExplore = () => {
        if (cardData?.filePath) {
            handleOpenDrawer(cardData.filePath);
        }
    };
    
    return (
      <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-black">
        <div className="h-1 bg-gradient-to-r from-blue-primary to-green-primary"></div>
        <div className="card-body p-6">
          <h2 className="card-title text-sm font-bold text-neutral-800 mb-3">
            {cardData?.event}
          </h2>
          <div className="card-actions justify-end mt-2">
            <button 
              className="btn border-1 border-yellow-500 hover:text-white text-yellow-600 hover:bg-yellow-500 hover:opacity-90 px-4 rounded-full"
              onClick={handleExplore}
              disabled={!cardData?.filePath}
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default TimelineCard;