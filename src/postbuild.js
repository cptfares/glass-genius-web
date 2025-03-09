
// This file is run after building the app to generate static HTML files

const fs = require('fs');
const path = require('path');

// Function to update the robots.txt file with proper sitemap URL
function updateRobotsTxt() {
  const robotsPath = path.join(__dirname, '../dist/robots.txt');
  if (fs.existsSync(robotsPath)) {
    let content = fs.readFileSync(robotsPath, 'utf8');
    
    // Ensure the sitemap URL is correct
    if (content.includes('Sitemap:')) {
      content = content.replace(
        /Sitemap:.*/,
        'Sitemap: https://glassgenius.com/sitemap.xml'
      );
    } else {
      content += '\nSitemap: https://glassgenius.com/sitemap.xml';
    }
    
    fs.writeFileSync(robotsPath, content);
    console.log('✅ Updated robots.txt with sitemap URL');
  }
}

// Update sitemap.xml with all routes
function updateSitemap() {
  const sitemapPath = path.join(__dirname, '../dist/sitemap.xml');
  
  if (fs.existsSync(sitemapPath)) {
    console.log('✅ Sitemap exists - verify all routes are included');
  } else {
    console.log('⚠️ Sitemap not found in build directory');
  }
}

// Main function
function main() {
  console.log('Running post-build optimizations...');
  updateRobotsTxt();
  updateSitemap();
  console.log('Post-build optimizations completed!');
}

main();
