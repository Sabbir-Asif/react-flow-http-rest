
export const initialNodes = [
  {
    id: '1',
    type: 'yearNode',
    position: { x: 370, y: 70 },
    data: { 
      label: '1990',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  
];

export const initialEdges = [
  {
    id: 'e1-1.1',
    source: '1',
    sourceHandle: 'left',
    target: '1.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e1-1.2',
    source: '1',
    sourceHandle: 'left',
    target: '1.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e1-1.3',
    source: '1',
    sourceHandle: 'left',
    target: '1.3',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e1-2',
    source: '1',
    sourceHandle: 'right',
    target: '2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e2-2.1',
    source: '2',
    sourceHandle: 'right',
    target: '2.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2-2.2',
    source: '2',
    sourceHandle: 'right',
    target: '2.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2-2.3',
    source: '2',
    sourceHandle: 'right',
    target: '2.3',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2-2.4',
    source: '2',
    sourceHandle: 'right',
    target: '2.4',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
];