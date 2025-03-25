
export const initialNodes = [
  {
    id: '0',
    type: 'pointNode',
    position: { x: 507, y: 100 },
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
    position: { x: 469, y: 192 },
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
    position: { x: 446, y: 272 },
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
    position: { x: 613, y: 383 },
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
    position: { x: 853, y: 287 },
    data: { 
      label: 'Non Persistent',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1.1.2',
    type: 'method',
    position: { x: 931, y: 394 },
    data: { 
      label: 'GET Method Introduced',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '1^1.1',
    type: 'pointNode',
    position: { x: 503, y: 399 },
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
    position: { x: 501, y: 453 },
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
    position: { x: 446, y: 526 },
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
    id: '2^2.1',
    type: 'pointNode',
    position: { x: 501, y: 645 },
    data: { 
      label: 'HTTP',
      year: '1990', 
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
    id: '2^2.2',
    type: 'pointNode',
    position: { x: 503, y: 666 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3',
    type: 'http',
    position: { x: 310, y: 938 },
    data: { 
      label: 'HTTP',
      version: '1.1',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3.1',
    type: 'connection',
    position: { x: 134, y: 753 },
    data: { 
      label: 'Persistent',
      additional: '(by default)',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3.2',
    type: 'header',
    position: { x: 2, y: 857 },
    data: { 
      additional: 'Connection,Cache-Control,Expires,Host,Encodings',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3.3',
    type: 'statusCode',
    position: { x: 14, y: 954 },
    data: { 
      additional: 'Connection,Cache-Control,Expires,Host,Encodings',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3.4',
    type: 'caching',
    position: { x: 45, y: 1055 },
    data: { 
      additional: 'Cache-Control,Directives,ETag,Last-Modified,Vary',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2.3.5',
    type: 'cookies',
    position: { x: 260, y: 1053 },
    data: { 
      additional: 'Cookie, Set-Cookie',
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '2^2.3',
    type: 'pointNode',
    position: { x: 501, y: 954 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3',
    type: 'yearNode',
    position: { x: 446, y: 1136 },
    data: { 
      label: '2000',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.1',
    type: 'http',
    position: { x: 605, y: 1213 },
    data: { 
      label: 'REST',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3^3.1',
    type: 'pointNode',
    position: { x: 501, y: 1230 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },

  {
    id: '3.1.1',
    type: 'rest',
    position: { x: 700, y: 1110 },
    data: { 
      label: 'REST Constrains',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.1.2',
    type: 'rest',
    position: { x: 800, y: 1200 },
    data: { 
      label: 'Resourse Naming',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.1.3',
    type: 'rest',
    position: { x: 680, y: 1295 },
    data: { 
      label: 'Methods, Status Codes',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.2',
    type: 'eventNode',
    position: { x: 310, y: 1345 },
    data: { 
      label: 'Secure & Persistent Cookies',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3^3.2',
    type: 'pointNode',
    position: { x: 501, y: 1390 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.2.1',
    type: 'cookies',
    position: { x: 100, y: 1249 },
    data: { 
      label: 'Persistent Cookies',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.2.2',
    type: 'cookies',
    position: { x: 5, y: 1343 },
    data: { 
      label: 'User Preferences',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.2.3',
    type: 'cookies',
    position: { x: 20, y: 1445 },
    data: { 
      label: 'httpOnly',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '3.2.4',
    type: 'cookies',
    position: { x: 160, y: 1525 },
    data: { 
      label: 'Secure Flag',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4',
    type: 'yearNode',
    position: { x: 446, y: 1600 },
    data: { 
      label: '2005',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4.1',
    type: 'eventNode',
    position: { x: 631, y: 1630 },
    data: { 
      label: 'JSONP Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4^4.1',
    type: 'pointNode',
    position: { x: 501, y: 1675 },
    data: { 
      label: 'JSONP Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4.2',
    type: 'eventNode',
    position: { x: 640, y: 1765 },
    data: { 
      label: 'RMM Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4^4.2',
    type: 'pointNode',
    position: { x: 501, y: 1810 },
    data: { 
      label: 'JSONP Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4.3',
    type: 'eventNode',
    position: { x: 290, y: 1805 },
    data: { 
      label: 'CORS Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4^4.3',
    type: 'pointNode',
    position: { x: 501, y: 1850 },
    data: { 
      label: 'JSONP Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4.3.1',
    type: 'header',
    position: { x: 50, y: 1740 },
    data: { 
      label: 'Access-Control-Allow-Origin',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '4.3.2',
    type: 'cors',
    position: { x: 50, y: 1890 },
    data: { 
      label: 'CORS Introduced',
      year: '2005', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '5',
    type: 'yearNode',
    position: { x: 446, y: 2000 },
    data: { 
      label: '2010',
      year: '2010', 
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
  {
    id: 'e2.2-2.2.1',
    source: '2.2',
    sourceHandle: 'top',
    target: '2.2.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2.2-2.2.2',
    source: '2.2',
    sourceHandle: 'right',
    target: '2.2.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2.2-2.2.3',
    source: '2.2',
    sourceHandle: 'right',
    target: '2.2.3',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2.2-2.2.3',
    source: '2.2',
    sourceHandle: 'right',
    target: '2.2.3',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2.2-2.2.4',
    source: '2.2',
    sourceHandle: 'right',
    target: '2.2.4',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2.2-2.2.5',
    source: '2.2',
    sourceHandle: 'bottom',
    target: '2.2.5',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e2^2.1-2.1',
    source: '2^2.1',
    sourceHandle: 'left',
    target: '2.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e2^2.2-2.2',
    source: '2^2.2',
    sourceHandle: 'right',
    target: '2.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e2^2.3-2.3',
    source: '2^2.3',
    sourceHandle: 'left',
    target: '2.3',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '2.3-2.3.1',
    source: '2.3',
    sourceHandle: 'top',
    target: '2.3.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '2.3-2.3.2',
    source: '2.3',
    sourceHandle: 'left',
    target: '2.3.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '2.3-2.3.3',
    source: '2.3',
    sourceHandle: 'left',
    target: '2.3.3',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '2.3-2.3.4',
    source: '2.3',
    sourceHandle: 'left',
    target: '2.3.4',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '2.3-2.3.5',
    source: '2.3',
    sourceHandle: 'bottom',
    target: '2.3.5',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3^3.1-3.1',
    source: '3^3.1',
    sourceHandle: 'right',
    target: '3.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '3.1-3.1.1',
    source: '3.1',
    sourceHandle: 'top',
    target: '3.1.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3.1-3.1.2',
    source: '3.1',
    sourceHandle: 'right',
    target: '3.1.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3.1-3.1.3',
    source: '3.1',
    sourceHandle: 'bottom',
    target: '3.1.3',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3^3.2-3.2',
    source: '3^3.2',
    sourceHandle: 'left',
    target: '3.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '3.2-3.2.1',
    source: '3.2',
    sourceHandle: 'left',
    target: '3.2.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3.2-3.2.2',
    source: '3.2',
    sourceHandle: 'left',
    target: '3.2.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3.2-3.2.3',
    source: '3.2',
    sourceHandle: 'left',
    target: '3.2.3',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '3.2-3.2.4',
    source: '3.2',
    sourceHandle: 'left',
    target: '3.2.4',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '4^4.1-4.1',
    source: '4^4.1',
    sourceHandle: 'right',
    target: '4.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '4^4.2-4.2',
    source: '4^4.2',
    sourceHandle: 'right',
    target: '4.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '4^4.3-4.3',
    source: '4^4.3',
    sourceHandle: 'left',
    target: '4.3',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '4.3-4.3.1',
    source: '4.3',
    sourceHandle: 'left',
    target: '4.3.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '4.3-4.3.2',
    source: '4.3',
    sourceHandle: 'left',
    target: '4.3.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e3-4',
    source: '3',
    sourceHandle: 'bottom',
    target: '4',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e4-5',
    source: '4',
    sourceHandle: 'bottom',
    target: '5',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
];