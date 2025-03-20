const svg2ico = require('svg2ico');
const fs = require('fs');
const path = require('path');

async function generateFavicon() {
  try {
    const svgPath = path.join(__dirname, '../public/r2code-icon.svg');
    const icoPath = path.join(__dirname, '../public/favicon.ico');
    
    // Read SVG file
    const svgBuffer = fs.readFileSync(svgPath);
    
    // Convert SVG to ICO with multiple sizes
    const icoBuffer = await svg2ico(svgBuffer, { sizes: [16, 32, 48] });
    
    // Write ICO file
    fs.writeFileSync(icoPath, icoBuffer);
    
    console.log('Favicon successfully generated at', icoPath);
  } catch (error) {
    console.error('Error generating favicon:', error);
  }
}

generateFavicon(); 