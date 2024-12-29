const fs = require('fs');
const path = require('path');
const sitemap = require('sitemap');

const sitemapData = sitemap.createSitemap({
  hostname: 'https://adelsidiahmed.netlify.app',
  cacheTime: 6,  // 600 sec - cache purge period
  urls: [
    { url: '/', changefreq: 'daily', priority: 1.0 },
    { url: '/#quiSuisje', changefreq: 'monthly', priority: 0.7 },
    { url: '/#competences', changefreq: 'monthly', priority: 0.7 },
    { url: '/#Formations', changefreq: 'monthly', priority: 0.7 },
    { url: '/#coordonnees', changefreq: 'monthly', priority: 0.7 },
    { url: '/#Experiences', changefreq: 'monthly', priority: 0.7 },
    { url: '/#projets', changefreq: 'monthly', priority: 0.7 },
    { url: '/#certifications', changefreq: 'monthly', priority: 0.7 },
    // Ajoutez d'autres pages ou ancres si nécessaire

  ]
});

// Spécifiez le chemin où vous voulez stocker le sitemap.xml
const outputPath = path.join(__dirname, 'public', 'sitemap.xml');

// Assurez-vous que le dossier public existe avant d'écrire le fichier
if (!fs.existsSync(path.dirname(outputPath))) {
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
}

fs.writeFileSync(outputPath, sitemapData.toString(), 'utf-8');
console.log('Sitemap généré avec succès à', outputPath);
