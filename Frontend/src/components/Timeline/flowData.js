
export const initialNodes = [
  {
    id: '0',
    type: 'pointNode',
    position: { x: 497, y: 100 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '0.1',
    type: 'customNode',
    position: { x: 459, y: 192 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1',
    type: 'yearNode',
    position: { x: 436, y: 272 },
    data: { 
      label: '1990',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.1',
    type: 'http',
    position: { x: 603, y: 383 },
    data: { 
      label: 'HTTP',
      version: '0.9',
      year: '1995', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.1.1',
    type: 'connection',
    position: { x: 843, y: 287 },
    data: { 
      label: 'Non Persistent',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.1.2',
    type: 'method',
    position: { x: 921, y: 394 },
    data: { 
      label: 'GET Method Introduced',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1^1.1',
    type: 'pointNode',
    position: { x: 493, y: 399 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.2',
    type: 'eventNode',
    position: { x: 360, y: 407 },
    data: { 
      label: 'Netscape Introduced Cookies',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.2.1',
    type: 'cookies',
    position: { x: 77, y: 404 },
    data: { 
      label: 'Netscape Introduced Cookies',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1^1.2',
    type: 'pointNode',
    position: { x: 491, y: 453 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2',
    type: 'yearNode',
    position: { x: 436, y: 526 },
    data: { 
      label: '1995',
      year: '1995', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.1',
    type: 'eventNode',
    position: { x: 318, y: 600 },
    data: { 
      label: 'Same Origin Policy',
      year: '1995', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.2',
    type: 'http',
    position: { x: 628, y: 649 },
    data: { 
      label: 'HTTP',
      version: '1.0',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.2.1',
    type: 'connection',
    position: { x: 794, y: 526 },
    data: { 
      label: 'Non Persistent',
      additional: '(keep-alive optional)',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.2.2',
    type: 'method',
    position: { x: 923, y: 614 },
    data: { 
      additional: 'GET,POST,PUT,DELETE,HEAD,OPTIONS,TRACE',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.2.3',
    type: 'header',
    position: { x: 892, y: 715 },
    data: { 
      additional: 'Content-Type, Content-Length, Date',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.2.4',
    type: 'statusCode',
    position: { x: 824, y: 814 },
    data: { 
      label: '1xx-5xx introduced',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.2.5',
    type: 'caching',
    position: { x: 597, y: 764 },
    data: { 
      label: 'Pragma, Expires',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3',
    type: 'yearNode',
    position: { x: 436, y: 1126 },
    data: { 
      label: '2000',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  
];

export const initialEdges = [
  {
    id: 'e0-0.1',
    source: '0',
    sourceHandle: 'bottom',
    target: '0.1',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e1-2',
    source: '1',
    sourceHandle: 'bottom',
    target: '2',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e1.1-1.1.1',
    source: '1.1',
    sourceHandle: 'right',
    target: '1.1.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e1.1-1.1.2',
    source: '1.1',
    sourceHandle: 'right',
    target: '1.1.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e1^1.1-1.1',
    source: '1^1.1',
    sourceHandle: 'right',
    target: '1.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e1.2-1.2.1',
    source: '1.2',
    sourceHandle: 'left',
    target: '1.2.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e1^1.2-1.2',
    source: '1^1.2',
    sourceHandle: 'left',
    target: '1.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e2-3',
    source: '2',
    sourceHandle: 'bottom',
    target: '3',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
];