import React from 'react';
import { Handle, Position } from '@xyflow/react';

const Header = ({ data }) => {
    return (
        <div className='w-44'>
            <div className="p-4 border-black border-2 bg-[#B7E7E5] rounded-lg shadow-md cursor-pointer">
                <Handle type="target" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
                {
                    data.label && <div className="font-semibold text-center text-black font-nunito break-before-all">{data.label}</div>
                }
                {
                    data.additional && <div className="font-semibold text-xs text-center text-black font-nunito break-all">{data.additional}</div>
                }
                <Handle type="source" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="source" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
            </div>
        </div>
    );
};

export default Header;