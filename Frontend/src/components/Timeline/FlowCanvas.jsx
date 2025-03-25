import React, { useState } from 'react';
import { ReactFlow, Background, Controls, useNodesState, useEdgesState } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import CustomNode from './Nodes/CustomNode';
import { initialNodes, initialEdges } from './flowData';
import Drawer from './Drawer';
import PopUp from './PopUp';
import YearNode from './Nodes/YearNode';
import EventNode from './Nodes/EventNode';
import HTTP from './Nodes/HTTP';
import Connection from './Nodes/Conenction';
import Cookies from './Nodes/Cookies';
import Cors from './Nodes/Cors';
import Method from './Nodes/Method';
import Header from './Nodes/Header';
import StatusCode from './Nodes/StatusCode';
import Caching from './Nodes/Caching';
import PointNode from './Nodes/PointNode';
import Rest from './Nodes/Rest';

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
  caching: Caching,
  pointNode: PointNode,
  rest: Rest
};

const FlowCanvas = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [selectedFilePath, setSelectedFilePath] = useState(null);

  const onNodeClick = (event, node) => {
    if (node.data && node.data.filePath) {
      setSelectedFilePath(node.data.filePath);
      if (node.data.popUp) {
        setPopUpOpen(true);
        setDrawerOpen(false);
      } else if (node.data.drawer) {
        setDrawerOpen(true);
        setPopUpOpen(false);
      } else {
        alert(`No data available for this node`);
      }
    } else {
      alert(`No data available for this node`);
    }
  };

  const closeDrawer = () => {
    setDrawerOpen(false);
  };

  const closePopUp = () => {
    setPopUpOpen(false);
  };

  return (
    <div className="w-full relative" style={{ minHeight: '3000px' }}>
      <div className="relative w-full h-[3000px]">
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
          style={{ width: '100%', height: '100%' }}
        >
          <Background color="#FFFFFF" variant="dots" gap={0} size={0} />
        </ReactFlow>
      </div>

      <Drawer isOpen={drawerOpen} onClose={closeDrawer} filePath={selectedFilePath} />
      <PopUp isOpen={popUpOpen} onClose={closePopUp} filePath={selectedFilePath} />
    </div>
  );
};

export default FlowCanvas;
