import { Handle, Position } from '@xyflow/react';

const Rest = ({ data }) => {
    return (
        <div className='w-44'>
            <div className="p-4 border-black border-2 bg-[#dfb2b2] rounded-lg shadow-md cursor-pointer">
                <Handle type="target" id="right" position={Position.Right} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="left" position={Position.Left} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="top" position={Position.Top} style={{ visibility: 'hidden' }} />
                <Handle type="target" id="bottom" position={Position.Bottom} style={{ visibility: 'hidden' }} />
                {
                    data.label && <div className="font-semibold text-center text-sm text-black font-nunito break-before-all">{data.label}</div>
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

export default Rest;