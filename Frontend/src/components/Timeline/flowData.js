
export const initialNodes = [
  {
    id: '0',
    type: 'pointNode',
    position: { x: 502, y: 230 },
    data: { 
      label: 'HTTP',
      year: '1990', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
      // breadcrumb: ['1990', 'HTTP/0.9'],
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
      // breadcrumb: ['1990', 'HTTP/0.9'],
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
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/http/http0.9/http0.9.md', 
      breadcrumb: ['1990', 'HTTP/0.9'],
    },
  },
  {
    id: '1.1.1',
    type: 'connection',
    position: { x: 853, y: 287 },
    data: { 
      label: 'Non Persistent',
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/http/http0.9/1.1.1_NonPersistent.md', 
      breadcrumb: ['1990', 'HTTP/0.9', 'Non Persistent'],
    },
  },
  {
    id: '1.1.2',
    type: 'method',
    position: { x: 931, y: 394 },
    data: { 
      drawer: true,
      label: 'Introduce GET Method',
      description: 'This is the first node',
      filePath: '/data/http/http0.9/1.1.2_GET.md', 
      breadcrumb: ['1990', 'HTTP/0.9', 'Introduce GET Method'],
    },
  },
  {
    id: '1^1.1',
    type: 'pointNode',
    position: { x: 503, y: 398 },
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
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/cookies/1.2_intro.md', 
      breadcrumb: ['1990', 'Cookies'],
    },
  },
  {
    id: '1.2.1',
    type: 'cookies',
    position: { x: 77, y: 404 },
    data: { 
      label: 'Session Cookies',
      year: '1990', 
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/cookies/1.2.1_session_cookie.md',
      breadcrumb: ['1990', 'Cookies', 'Session Cookies'],
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
      popUp: true,
      filePath: '/data/CORS/2.1_SameOriginPolicy.md', 
      breadcrumb: ['1995', 'Same Origin Policy'],
    },
  },
  {
    id: '2^2.1',
    type: 'pointNode',
    position: { x: 501, y: 646 },
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
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/http/http1.0/http1.0.md', 
      breadcrumb: ['1995', 'HTTP/1.0'],
    },
  },
  {
    id: '2.2.1',
    type: 'connection',
    position: { x: 794, y: 526 },
    data: { 
      drawer: true,
      label: 'Non Persistent',
      additional: '(keep-alive optional)',
      description: 'This is the first node',
      filePath: 'data/http/http1.0/2.2.1_KeepAlive.md', 
      breadcrumb: ['1995', 'HTTP/1.0', 'Non Persistent Connection'],
    },
  },
  {
    id: '2.2.2',
    type: 'method',
    position: { x: 923, y: 614 },
    data: { 
      drawer: true,
      additional: 'POST, PUT, DELETE, HEAD, OPTIONS, TRACE',
      description: 'This is the first node',
      filePath: 'data/http/http1.0/2.2.2_Methods.md', 
      breadcrumb: ['1995', 'HTTP/1.0', 'Methods']
    },
  },
  {
    id: '2.2.3',
    type: 'header',
    position: { x: 892, y: 715 },
    data: { 
      drawer: true,
      additional: 'Content-Type, Content-Length, Date',
      description: 'This is the first node',
      filePath: 'data/http/http1.0/2.2.3_Content-Type.md', 
      breadcrumb: ['1995', 'HTTP/1.0', 'Content-Type, Content-Length, Date'],
    },
  },
  {
    id: '2.2.4',
    type: 'statusCode',
    position: { x: 824, y: 814 },
    data: { 
      drawer: true,
      label: '1xx-5xx introduced',
      description: 'This is the first node',
      filePath: 'data/http/http1.0/2.2.4_Status.md', 
      breadcrumb: ['1995', 'HTTP/1.0', 'Status Codes'],
    },
  },
  {
    id: '2.2.5',
    type: 'caching',
    position: { x: 597, y: 764 },
    data: { 
      label: 'Pragma, Expires',
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/caching/2.2.5_pragma.md',
      breadcrumb: ['1995', 'HTTP/1.0', 'Pragma, Expires'],
    },
  },
  {
    id: '2^2.2',
    type: 'pointNode',
    position: { x: 503, y: 663 },
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
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/http/http1.1/http1.1.md', 
      breadcrumb: ['1995', 'HTTP/1.1']
    },
  },
  {
    id: '2.3.1',
    type: 'connection',
    position: { x: 134, y: 753 },
    data: { 
      drawer: true,
      label: 'Persistent',
      additional: '(by default)',
      description: 'This is the first node',
      filePath: 'data/http/http1.1/2.3.1_Persistent.md', 
      breadcrumb: ['1995', 'HTTP/1.1', 'Persistent']
    },
  },
  {
    id: '2.3.2',
    type: 'header',
    position: { x: 2, y: 857 },
    data: { 
      drawer: true,
      additional: 'Connection, Cache-Control, Expires, Host, Encodings',
      description: 'This is the first node',
      filePath: 'data/http/http1.1/2.3.2_Header.md', 
      breadcrumb: ['1995', 'HTTP/1.1', 'Header']
    },
  },
  {
    id: '2.3.3',
    type: 'statusCode',
    position: { x: 14, y: 954 },
    data: { 
      drawer: true,
      additional: '100, 206, 301, 307, 409, 410, 413, 503, 504',
      description: 'This is the first node',
      filePath: 'data/http/http1.1/2.3.3_StatusCode.md', 
      breadcrumb: ['1995', 'HTTP/1.1', 'StatusCode']
    },
  },
  {
    id: '2.3.4',
    type: 'caching',
    position: { x: 45, y: 1055 },
    data: { 
      additional: 'Cache-Control, Directives, ETag, Last-Modified, Vary',
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/caching/2.2.3_Cache_Control.md', 
      breadcrumb: ['1995', 'HTTP/1.1', 'Cache-Control, Directives, ETag, Last-Modified, Vary']
    },
  },
  {
    id: '2.3.5',
    type: 'cookies',
    position: { x: 260, y: 1053 },
    data: { 
      additional: 'Cookie, Set-Cookie',
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/2.3.5_set_cookie.md',
      breadcrumb: ['1995', 'HTTP/1.1', 'Cookie, Set-Cookie']
    },
  },
  {
    id: '2^2.3',
    type: 'pointNode',
    position: { x: 501, y: 952 },
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
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/rest/3.1_Introduction_To_Rest.md',
      breadcrumb: ['2000', 'REST']
    },
  },
  {
    id: '3^3.1',
    type: 'pointNode',
    position: { x: 501, y: 1227 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
    },
  },

  {
    id: '3.1.1',
    type: 'rest',
    position: { x: 700, y: 1110 },
    data: { 
      label: 'REST Constrains',
      year: '2000', 
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/rest/3.1.1_REST_Constraints.md',
      breadcrumb: ['2000', 'REST', 'REST Constrains']  
    },
  },
  {
    id: '3.1.2',
    type: 'rest',
    position: { x: 800, y: 1200 },
    data: { 
      label: 'Resourse Naming',
      year: '2000', 
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/rest/3.1.2_Resource_Naming.md',
      breadcrumb: ['2000', 'REST', 'Resourse Naming']
    },
  },
  {
    id: '3.1.3',
    type: 'rest',
    position: { x: 680, y: 1295 },
    data: { 
      label: 'Methods, Status Codes',
      year: '2000', 
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/rest/3.1.3_Methods_And_Status_Codes.md', 
      breadcrumb: ['2000', 'REST', 'Methods, Status Codes']
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
      popUp: true,
      filePath: '/data/cookies/3.2_secure_persistent.md', 
      breadcrumb: ['2000', 'Secure & Persistent Cookies']
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
      drawer: true,
      filePath: '/data/cookies/3.2.1_persistent_cookies.md', 
      breadcrumb: ['2000', 'Secure & Persistent Cookies', 'Persistent Cookies']
    },
  },
  {
    id: '3.2.2',
    type: 'cookies',
    position: { x: 20, y: 1380 },
    data: { 
      label: 'httpOnly',
      year: '2000', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/3.2.2_httpOnly.md',
      breadcrumb: ['2000', 'Secure & Persistent Cookies', 'httpOnly']
    },
  },
  {
    id: '3.2.3',
    type: 'cookies',
    position: { x: 100, y: 1525 },
    data: { 
      label: 'Secure Flag',
      year: '2000', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/3.2.3_secure_flag.md', 
      breadcrumb: ['2000', 'Secure & Persistent Cookies', 'Secure Flag']
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
      label: 'Introduce JSONP',
      year: '2005', 
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/CORS/4.1_IntroduceJSONP.md', 
      breadcrumb: ['2005', 'JSONP'],
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
      label: 'Introduce RMM',
      year: '2005', 
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/rest/4.2_RMM.md', 
      breadcrumb: ['2005', 'RMM'],
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
      label: 'Introduce CORS',
      year: '2005', 
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/CORS/4.3_IntroduceCORS.md', 
      breadcrumb: ['2005', 'CORS'],
    },
  },
  {
    id: '4^4.3',
    type: 'pointNode',
    position: { x: 501, y: 1851 },
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
      drawer: true,
      filePath: '/data/CORS/4.3.2_Access_Control_Allow_Origin.md', 
      breadcrumb: ['2005', 'CORS','Access-Control-Allow-Origin'],
    },
  },
  {
    id: '4.3.2',
    type: 'cors',
    position: { x: 50, y: 1890 },
    data: { 
      label: 'Preflight Request',
      year: '2005', 
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/CORS/4.3.1_Preflight_Request.md', 
      breadcrumb: ['2005', 'CORS','Preflight Request'],
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
  {
    id: '5^5.1',
    type: 'pointNode',
    position: { x: 501, y: 2126 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '5.1',
    type: 'eventNode',
    position: { x: 631, y: 2080 },
    data: { 
      label: 'Introduce PATCH Method ',
      year: '2010', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/5.1_patch_introduced.md', 
      breadcrumb: ['2010', 'Introduce PATCH Method']
    },
  },
  {
    id: '5^5.2',
    type: 'pointNode',
    position: { x: 501, y: 2245 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '5.2',
    type: 'eventNode',
    position: { x: 300, y: 2200 },
    data: { 
      label: 'Client Side Storage',
      year: '2010', 
      description: 'This is the first node',
      popUp: true,
      filePath: '/data/cookies/5.2_modern_storage.md',
      breadcrumb: ['2010', 'Client Side Storage']
    },
  },
  {
    id: '5.2.1',
    type: 'cookies',
    position: { x: 70, y: 2110 },
    data: { 
      label: 'Local Storage',
      year: '2010', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/5.2.1_local.md',
      breadcrumb: ['2010', 'Client Side Storage', 'Local Storage']
    },
  },
  {
    id: '5.2.2',
    type: 'cookies',
    position: { x: 5, y: 2200 },
    data: { 
      label: 'Session Storage',
      year: '2010', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/5.2.2_session.md',
      breadcrumb: ['2010', 'Client Side Storage', 'Session Storage']
    },
  },
  {
    id: '5.2.3',
    type: 'cookies',
    position: { x: 60, y: 2295 },
    data: { 
      label: 'IndexedDB',
      year: '2010', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/5.2.3_indexedDB.md',
      breadcrumb: ['2010', 'Client Side Storage', 'IndexedDB']
    },
  },
  {
    id: '6',
    type: 'yearNode',
    position: { x: 446, y: 2400 },
    data: { 
      label: '2015',
      year: '2015', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '6^6.1',
    type: 'pointNode',
    position: { x: 501, y: 2545 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '6.1',
    type: 'http',
    position: { x: 285, y: 2530 },
    data: { 
      label: 'HTTP',
      version: '2.0',
      popUp: true,
      year: '2015', 
      description: 'This is the first node',
      filePath: '/data/HTTP_2/6.1.md', 
      breadcrumb: ['2015', 'HTTP 2.0']
    },
  },
  {
    id: '6.1.1',
    type: 'connection',
    position: { x: 15, y: 2450 },
    data: { 
      label: 'Multiplexing, Binary Framing',
      version: '2.0',
      drawer: true,
      year: '2015', 
      description: 'This is the first node',
      filePath: '/data/HTTP_2/6.1.1.md', 
      breadcrumb: ['2015', 'HTTP 2.0', 'Binary Framing, Multiplexing']
    },
  },
  {
    id: '6.1.2',
    type: 'header',
    position: { x: 20, y: 2570 },
    data: { 
      label: 'Header Compression, Server Push',
      version: '2.0',
      drawer: true,
      year: '2015', 
      description: 'This is the first node',
      filePath: '/data/HTTP_2/6.1.2.md', 
      breadcrumb: ['2015', 'HTTP 2.0', 'Header Compression, Server Push']
    },
  },
  {
    id: '6^6.2',
    type: 'pointNode',
    position: { x: 501, y: 2596 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '6.2',
    type: 'eventNode',
    position: { x: 631, y: 2550 },
    data: { 
      label: 'Introduce Samesite Cookie',
      version: '2.0',
      year: '2015', 
      description: 'This is the first node',
      popUp: true,
      filePath: '/data/cookies/6.2_samesite.md',
      breadcrumb: ['2015', 'Introduce Samesite Cookie']
    },
  },
  {
    id: '6.2.1',
    type: 'cookies',
    position: { x: 780, y: 2470 },
    data: { 
      label: 'Strict',
      version: '2.0',
      year: '2015', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/6.2.1_strict.md',
      breadcrumb: ['2015', 'Introduce Samesite Cookie', 'Strict']
    },
  },
  {
    id: '6.2.2',
    type: 'cookies',
    position: { x: 850, y: 2550 },
    data: { 
      label: 'Lax',
      version: '2.0',
      year: '2015', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/6.2.2_lax.md',
      breadcrumb: ['2015', 'Introduce Samesite Cookie', 'Lax']
    },
  },
  {
    id: '6.2.3',
    type: 'cookies',
    position: { x: 820, y: 2640 },
    data: { 
      label: 'None',
      version: '2.0',
      year: '2015', 
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/cookies/6.2.3_none.md',
      breadcrumb: ['2015', 'Introduce Samesite Cookie', 'None']
    },
  },
  {
    id: '7',
    type: 'yearNode',
    position: { x: 446, y: 2750 },
    data: { 
      label: '2020',
      year: '2020', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '7^7.1',
    type: 'pointNode',
    position: { x: 501, y: 2895 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '7.1',
    type: 'eventNode',
    position: { x: 300, y: 2850 },
    data: { 
      label: 'Introduce Edge Caching',
      year: '2020', 
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/EdgeCaching/7.1.md', 
    },
  },
  {
    id: '7.1.1',
    type: 'caching',
    position: { x: 30, y: 2800 },
    data: { 
      label: 'Why Edge Caching?',
      year: '2020', 
      drawer: true,
      description: 'This is the first node',
      filePath: '/data/EdgeCaching/7.1.1.md', 
    },
  },
  {
    id: '7.1.2',
    type: 'cookies',
    position: { x: 30, y: 2920 },
    data: { 
      label: '3rd Party Cookies Blocked',
      year: '2020', 
      drawer: true,
      description: 'This is the first node',
      drawer: true,
      filePath: '/data/EdgeCaching/7.1.2.md',
    },
  },
  {
    id: '7^7.2',
    type: 'pointNode',
    position: { x: 502, y: 3015 },
    data: { 
      label: '',
      year: '2000', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  {
    id: '7.2',
    type: 'http',
    position: { x: 631, y: 3000 },
    data: { 
      label: 'HTTP',
      version: '3.0',
      year: '2020', 
      popUp: true,
      description: 'This is the first node',
      filePath: '/data/HTTP_3/7.2_markdown.md', 
    },
  },
  {
    id: '7.2.1',
    type: 'connection',
    position: { x: 800, y: 2900 },
    data: { 
      label: 'QUIC',
      version: '3.0',
      drawer: true,
      year: '2020', 
      description: 'This is the first node',
      filePath: '/data/HTTP_3/7.2.1_QUIC.md', 
    },
  },
  {
    id: '7.2.1.2',
    type: 'connection',
    position: { x: 950, y: 3000 },
    data: { 
      label: ' 0-RTT',
      version: '3.0',
      drawer: true,
      year: '2020', 
      description: 'This is the first node',
      filePath: '/data/HTTP_3/7.2.1.2_zeroRTT.md', 
    },
  },

  {
    id: '7.2.1.1',
    type: 'connection',
    position: { x: 950, y: 2800 },
    data: { 
      label: 'Multiplexing',
      additional: '(Without HOL)',
      version: '3.0',
      drawer: true,
      year: '2020', 
      description: 'This is the first node',
      filePath: '/data/HTTP_3/7.2.1.1_Multiplexing.md', 
    },
  },
  {
    id: '7.2.2',
    type: 'connection',
    position: { x: 820, y: 3100 },
    data: { 
      label: 'Stream Prioritization',
      version: '3.0',
      drawer: true,
      year: '2020', 
      description: 'This is the first node',
      filePath: '/data/HTTP_3/7.2.3_Stream_Prioritization.md', 
    },
  },
  {
    id: '8',
    type: 'pointNode',
    position: { x: 507, y: 3250 },
    data: { 
      label: '2025',
      year: '2025', 
      description: 'This is the first node',
      filePath: '/content/HTTP/0.9.md', 
    },
  },
  
];

export const initialEdges = [
  // {
  //   id: 'e0-0.1',
  //   source: '0',
  //   sourceHandle: 'bottom',
  //   target: '0.1',
  //   targetHandle: 'top',
  //   style: { 
  //     strokeWidth: 2, 
  //     stroke: '#333333' 
  //   },
  //   animated: false,
  // },
  {
    id: 'e0-1',
    source: '0',
    sourceHandle: 'bottom',
    target: '1',
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
  {
    id: '5.2-5.2.1',
    source: '5.2',
    sourceHandle: 'left',
    target: '5.2.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '5.2-5.2.2',
    source: '5.2',
    sourceHandle: 'left',
    target: '5.2.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '5.2-5.2.3',
    source: '5.2',
    sourceHandle: 'left',
    target: '5.2.3',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '5^5.1-5.1',
    source: '5^5.1',
    sourceHandle: 'right',
    target: '5.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '5^5.2-5.2',
    source: '5^5.2',
    sourceHandle: 'left',
    target: '5.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e5-6',
    source: '5',
    sourceHandle: 'bottom',
    target: '6',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '6^6.2-6.2',
    source: '6^6.2',
    sourceHandle: 'right',
    target: '6.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '6^6.1-6.1',
    source: '6^6.1',
    sourceHandle: 'left',
    target: '6.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '6.1-6.1.1',
    source: '6.1',
    sourceHandle: 'left',
    target: '6.1.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '6.1-6.1.2',
    source: '6.1',
    sourceHandle: 'left',
    target: '6.1.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '6.2-6.2.1',
    source: '6.2',
    sourceHandle: 'right',
    target: '6.2.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '6.2-6.2.2',
    source: '6.2',
    sourceHandle: 'right',
    target: '6.2.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '6.2-6.2.3',
    source: '6.2',
    sourceHandle: 'right',
    target: '6.2.3',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: 'e6-7',
    source: '6',
    sourceHandle: 'bottom',
    target: '7',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '7^7.2-7.2',
    source: '7^7.2',
    sourceHandle: 'right',
    target: '7.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '7^7.1-7.1',
    source: '7^7.1',
    sourceHandle: 'left',
    target: '7.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: 'e7-8',
    source: '7',
    sourceHandle: 'bottom',
    target: '8',
    targetHandle: 'top',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: false,
  },
  {
    id: '7.1-7.1.2',
    source: '7.1',
    sourceHandle: 'left',
    target: '7.1.2',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '7.1-7.1.1',
    source: '7.1',
    sourceHandle: 'left',
    target: '7.1.1',
    targetHandle: 'right',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '7.2-7.2.1',
    source: '7.2',
    sourceHandle: 'right',
    target: '7.2.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '7.2.1-7.2.1.1',
    source: '7.2.1',
    sourceHandle: 'top',
    target: '7.2.1.1',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '7.2.1-7.2.1.2',
    source: '7.2.1',
    sourceHandle: 'bottom',
    target: '7.2.1.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },
  {
    id: '7.2-7.2.2',
    source: '7.2',
    sourceHandle: 'right',
    target: '7.2.2',
    targetHandle: 'left',
    style: { 
      strokeWidth: 2, 
      stroke: '#333333' 
    },
    animated: true,
  },

];