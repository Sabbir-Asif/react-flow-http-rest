export const initialNodes = [
  {
    id: '1',
    type: 'customNode',
    position: { x: 370, y: 70 },
    data: { 
      label: 'HTTP/0.9',
      year: '1991', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.1',
    type: 'customNode',
    position: { x: 126, y: 20 },
    data: { 
      label: 'Methods', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.2',
    type: 'customNode',
    position: { x: 126, y: 85 },
    data: { 
      label: 'Stateless',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2',
    type: 'customNode',
    position: { x: 656, y: 150 },
    data: { 
      label: 'HTTP/1.0',
      year: '1996',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.1',
    type: 'customNode',
    position: { x: 900, y: 50 },
    data: { 
      label: 'Methods', 
      description: 'This is the first node',
      filePath: '/data/markdown.md', 
    },
  },
  {
    id: '2.2',
    type: 'customNode',
    position: { x: 900, y: 115 },
    data: { 
      label: 'Headers', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3',
    type: 'customNode',
    position: { x: 900, y: 180 },
    data: { 
      label: 'Stateless', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.4',
    type: 'customNode',
    position: { x: 900, y: 245 },
    data: { 
      label: 'Mime Type', 
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