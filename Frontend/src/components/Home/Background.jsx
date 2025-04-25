import React, { useEffect, useState } from "react";


const Background = () => {

  const Parent_topic = [
    { name: "HTTP 0.9", color: "#F7DF1E", symbol: "HTTP 0.9" },
    { name: "HTTP 2.0", color: "#61DAFB", symbol: "HTTP 2.0" },
    { name: "RMM", color: "#339933", symbol: "RMM" },
    { name: "Cache", color: "#3776AB", symbol: "Cache" },
    { name: "Local storage", color: "#007396", symbol: "Local storage" },
    { name: "REST", color: "#00599C", symbol: "REST" },
    { name: "HTTP 1.0", color: "#3178C6", symbol: "HTTP 1.0" },
    { name: "Cookies", color: "#777BB4", symbol: "Cookies" },
  ];
  
  // Framework icons with coding-related symbols
  const child_topic = [
    { name: "IndexedDB", color: "#DD0031", symbol: "IndexedDB" },
    { name: "CORS", color: "#4FC08D", symbol: "CORS" },
    { name: "CSRF", color: "#000000", symbol: "CSRF " },
    // { name: "Svelte", color: "#FF3E00", symbol: "S" },
    // { name: "Django", color: "#092E20", symbol: "DJ" },
    // { name: "Laravel", color: "#FF2D20", symbol: "LV" },
    // { name: "Express", color: "#000000", symbol: "EX" },
    // { name: "Spring", color: "#6DB33F", symbol: "❦" },
  ];
  
  // Tool and library icons with coding-related symbols
  const tools = [
    { name: "Session Storage", color: "#F05032", symbol: "Session Storage" },
    { name: "OSI Layer", color: "#2496ED", symbol: "OSI Layer" },
    { name: "LAX", color: "#326CE5", symbol: "LAX" },
    // ...add more tools...
  ];
  
  // Code symbols with random vibrant colors
  const codeSymbols = [
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.', 
    '.', '.', '.', '.', '.', '.', '.', '.', '.', '.'
  ];
  // Vibrant colors for code symbols
  const symbolColors = [
    "#FF5252",
    "#FF4081",
    "#E040FB",
    "#7C4DFF",
    "#536DFE",
    "#448AFF",
    "#40C4FF",
    "#18FFFF",
    "#64FFDA",
    "#69F0AE",
    "#B2FF59",
    "#EEFF41",
    "#FFFF00",
    "#FFD740",
    "#FFAB40",
    "#FF6E40",
  ];

  // Function to generate fixed positions based on the reference image layout
  const generateFixedPositions = () => {
    // Create predefined positions that match the reference image layout
    const positions = [
      // Top left area
      { top: "18%", left: "5%" },
      { top: "25%", left: "12%" },
      { top: "15%", left: "22%" },
      { top: "30%", left: "28%" },

      // Top right area
      { top: "20%", left: "75%" },
      { top: "15%", left: "85%" },
      { top: "28%", left: "92%" },
      { top: "35%", left: "80%" },

      // Middle left area
      { top: "45%", left: "8%" },
      { top: "55%", left: "15%" },
      { top: "65%", left: "5%" },
      { top: "50%", left: "25%" },

      // Middle right area
      { top: "45%", left: "75%" },
      { top: "55%", left: "88%" },
      { top: "65%", left: "82%" },
      { top: "50%", left: "95%" },

      // Bottom area
      { top: "80%", left: "15%" },
      { top: "85%", left: "30%" },
      { top: "82%", left: "50%" },
      { top: "88%", left: "65%" },
      { top: "85%", left: "80%" },

      // Additional positions throughout the page
      { top: "40%", left: "40%" },
      { top: "60%", left: "60%" },
      { top: "75%", left: "40%" },
      { top: "35%", left: "55%" },
      { top: "70%", left: "25%" },
      { top: "25%", left: "45%" },
      { top: "60%", left: "35%" },
      { top: "40%", left: "70%" },

      // More positions to ensure we have enough
      { top: "75%", left: "75%" },
      { top: "20%", left: "60%" },
      { top: "30%", left: "70%" },
      { top: "50%", left: "50%" },
      { top: "65%", left: "65%" },
      { top: "35%", left: "35%" },
      { top: "90%", left: "40%" },
      { top: "15%", left: "40%" },
      { top: "40%", left: "15%" },
      { top: "60%", left: "80%" },
      { top: "70%", left: "45%" },
    ];

    return positions;
  };

  // Get all fixed positions
  const allPositions = generateFixedPositions();

  // Ensure we have enough positions
  const totalElements =
    Parent_topic.length +
    child_topic.length +
    tools.length +
    codeSymbols.length;
  if (allPositions.length < totalElements) {
    console.warn(
      `Not enough predefined positions (${allPositions.length}) for all elements (${totalElements})`
    );
  }

  // Assign positions to each category in a way that distributes them evenly across the screen
  // This ensures a balanced layout matching the reference image

  // Distribute programming languages in the top-left and middle-right areas
  const programmingPositions = [
    allPositions[0],
    allPositions[1],
    allPositions[2],
    allPositions[3],
    allPositions[12],
    allPositions[13],
    allPositions[14],
    allPositions[15],
  ];

  // Distribute child_topic in the top-right and middle-left areas
  const frameworkPositions = [
    allPositions[4],
    allPositions[5],
    allPositions[6],
    allPositions[7],
    allPositions[8],
    allPositions[9],
    allPositions[10],
    allPositions[11],
  ];

  // Distribute tools in the bottom area
  const toolPositions = [
    allPositions[16],
    allPositions[17],
    allPositions[18],
    allPositions[19],
    allPositions[20],
    allPositions[22],
    allPositions[26],
    allPositions[34],
  ];

  // Distribute code symbols throughout the remaining positions
  const symbolPositions = allPositions.filter(
    (_, index) =>
      ![
        ...programmingPositions,
        ...frameworkPositions,
        ...toolPositions,
      ].includes(allPositions[index])
  );

  // Create distributed elements with fixed positions
  const distributedParent_topic = Parent_topic.map(
    (lang, i) => ({
      ...lang,
      position: programmingPositions[i % programmingPositions.length],
    })
  );

  const distributedchild_topic = child_topic.map((framework, i) => ({
    ...framework,
    position: frameworkPositions[i % frameworkPositions.length],
  }));

  const distributedTools = tools.map((tool, i) => ({
    ...tool,
    position: toolPositions[i % toolPositions.length],
  }));

  const distributedSymbols = codeSymbols.map((symbol, i) => ({
    name: symbol,
    color: symbolColors[i % symbolColors.length],
    position: symbolPositions[i % symbolPositions.length],
  }));

  return (
    <div className="min-h-screen transition-all duration-300 text-white relative overflow-hidden">
      {/* Background with coding icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute inset-0 bg-[#0A0F18] dark:bg-[#0A0F18] light:bg-[#f8fafc]"></div>

        {/* Programming languages */}
        {distributedParent_topic.map((lang, i) => (
          <div
            key={`lang-${i}`}
            style={{
              ...lang.position,
              fontSize: "22px",
              color: lang.color,
              filter: `blur(0.5px) drop-shadow(0 0 5px ${lang.color})`,
              textShadow: `0 0 8px ${lang.color}`,
              opacity: 0.85,
              position: "absolute",
              zIndex: 1,
            }}
            className="font-mono font-bold"
          >
            {lang.symbol || lang.name}
          </div>
        ))}

        {/* child_topic */}
        {distributedchild_topic.map((framework, i) => (
          <div
            key={`framework-${i}`}
            style={{
              ...framework.position,
              fontSize: "20px",
              color: framework.color,
              filter: `blur(0.5px) drop-shadow(0 0 5px ${framework.color})`,
              textShadow: `0 0 8px ${framework.color}`,
              opacity: 0.85,
              position: "absolute",
              zIndex: 1,
            }}
            className="font-mono font-bold"
          >
            {framework.symbol || framework.name}
          </div>
        ))}

        {/* Tools */}
        {distributedTools.map((tool, i) => (
          <div
            key={`tool-${i}`}
            style={{
              ...tool.position,
              fontSize: "20px",
              color: tool.color,
              filter: `blur(0.5px) drop-shadow(0 0 5px ${tool.color})`,
              textShadow: `0 0 8px ${tool.color}`,
              opacity: 0.85,
              position: "absolute",
              zIndex: 1,
            }}
            className="font-mono font-bold"
          >
            {tool.symbol || tool.name}
          </div>
        ))}

        {/* Code symbols */}
        {distributedSymbols.map((symbol, i) => (
          <div
            key={`symbol-${i}`}
            style={{
              ...symbol.position,
              fontSize: "18px",
              color: symbol.color,
              filter: `blur(0.5px) drop-shadow(0 0 5px ${symbol.color})`,
              textShadow: `0 0 8px ${symbol.color}`,
              opacity: 0.85,
              position: "absolute",
              zIndex: 1,
            }}
            className="font-mono font-bold"
          >
            {symbol.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Background;