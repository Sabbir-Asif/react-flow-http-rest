import { useEffect, useState } from "react";
import ListItem from "./ListItem";

const TimelineMain = ({ handleOpenDrawer }) => {
    const [timelineData, setTimelineData] = useState([]);
    // console.log('from timeline main: ', handleOpenDrawer);
    
    useEffect(() => {
        fetch('/data/timelineData.json')
            .then(res => res.json())
            .then(data => setTimelineData(data))
            .catch(err => {
                console.log('error fetching timeline data');
            });
    }, []);
    
    return (
        <div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical max-w-3xl ml-10">
                {
                    timelineData?.map(data => (
                        <ListItem 
                            key={data?.id} 
                            cardData={data} 
                            handleOpenDrawer={handleOpenDrawer}
                        />
                    ))
                }
            </ul>
        </div>
    );
};

export default TimelineMain;