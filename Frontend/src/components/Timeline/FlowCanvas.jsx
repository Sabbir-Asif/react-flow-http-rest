import React, { useState } from 'react';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './Nodes/CustomNode';
import { initialNodes, initialEdges } from './flowData';
import Drawer from './Drawer';
import YearNode from './Nodes/YearNode';
import EventNode from './Nodes/EventNode';
import HTTP from './Nodes/HTTP';
import Connection from './Nodes/Conenction';
import Cookies from './Nodes/Cookies';
import Cors from './Nodes/Cors';
import Method from './Nodes/Method';
import Header from '../Home/Header';
import StatusCode from './Nodes/StatusCode';
import Caching from './Nodes/Caching';

const nodeTypes = {
  customNode: CustomNode,
  yearNode: YearNode,
  eventNode: EventNode,
  http: HTTP,
  connection: Connection,
  cookies: Cookies,
  cors: Cors,
  method: Method,
  header: Header,
  statusCode: StatusCode,
  caching: Caching
};

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selectedFilePath, setSelectedFilePath] = useState(null);

  const onNodeClick = (event, node) => {
    if (node.data && node.data.filePath) {
      setSelectedFilePath(node.data.filePath);
      setDrawerOpen(true);
    } else {

      alert(`No content for this node`);
    }
  };
  
  const closeDrawer = () => {
    setDrawerOpen(false);
  };
  
  return (
    <div className="h-screen w-full overflow-y-auto">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        defaultViewport={{ x: 0, y: 0, zoom: 1 }}
        minZoom={1}
        maxZoom={1}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        fitView={false}
        preventScrolling={false}
        disableKeyboardA11y={true}
        autoPanOnNodeDrag={false}
        panOnDrag={false}
        dragOnlyNodes={false}
        proOptions={{ hideAttribution: true }}
      >
        <Background color="#F7F7F7" variant="dots" gap={0} size={0} />
      </ReactFlow>
      
      <Drawer 
        isOpen={drawerOpen} 
        onClose={closeDrawer} 
        filePath={selectedFilePath} 
      />
    </div>
  );
};

export default FlowCanvas;