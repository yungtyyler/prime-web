const DATESTAMP = new Date().toISOString();

export async function GET() {
  const sitemap = `
        <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
            <url>
            <loc>https://primewebsolutions.org/</loc>
            <lastmod>${DATESTAMP}</lastmod>
            <priority>1.0</priority>
            </url>
        </urlset>
        `;
  return new Response(sitemap, {
    headers: {
      'Content-Type': 'text/xml',
    },
  });
}
