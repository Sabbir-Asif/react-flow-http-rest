import React from 'react';
import { Handle, Position } from '@xyflow/react';

const HTTP = ({ data }) => {
    return (
        <div className=''>
            <div className="">
                <Handle type="target" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
                <div>
                    <span className=''>{data.label}</span>
                </div>
                <Handle type="source" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
            </div>
        </div>
    );
};

export default HTTP;