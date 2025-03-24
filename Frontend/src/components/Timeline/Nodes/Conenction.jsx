import React from 'react';
import { Handle, Position } from '@xyflow/react';

const Connection = ({ data }) => {
    return (
        <div className='relative min-w-36'>
            <div className="p-2 border-gray-300 rounded-md shadow-md cursor-pointer">
                <Handle type="target" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
                <div className="font-semibold text-md font-merienda text-gray-800">{data.label}</div>
                <Handle type="source" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
            </div>
        </div>
    );
};

export default Connection;