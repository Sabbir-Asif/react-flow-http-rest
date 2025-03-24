import React from 'react';
import { Handle, Position } from '@xyflow/react';

const EventNode = ({ data }) => {
    return (
        // <div className='relative  flex items-center justify-center'>
        <div>
            {/* Main node */}
            <div className="w-24 h-24 shadow-md rounded-full bg-gradient-to-b from-gray-300 to-gray-100 flex flex-col items-center justify-center p-4 cursor-pointer border border-gray-400 relative">
                <Handle type="target" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
                
                {/* Content */}
                <div className="font-semibold text-md text-gray-800 text-center">{data.label}</div>
                {data.year && (
                    <div className="font-mono text-sm text-gray-600 mt-1">{data.year}</div>
                )}
                
                <Handle type="source" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
            </div>
        </div>
    );
};

export default EventNode;