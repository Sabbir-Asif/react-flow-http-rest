import React from 'react';
import { Handle, Position } from '@xyflow/react';

const YearNode = ({ data }) => {
    return (
        <div className=''>
            <div>
                <Handle type="target" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />


                <div className="text-5xl font-nunito font-bold bg-gradient-to-t from-gray-600 to-gray-400 bg-clip-text text-transparent opacity-30">
                    {data.label}
                </div>
                <Handle type="source" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
            </div>
        </div>
    );
};

export default YearNode;


