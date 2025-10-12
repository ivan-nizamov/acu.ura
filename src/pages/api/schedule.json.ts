export const prerender = false;

export async function GET() {
  try {
    const upstream = await fetch('https://script.google.com/macros/s/AKfycbznyNFX0j0t23zZWU217vnAZBDaM0qTsXRSmztuH8BnN9C3-P7I3qfOEGoFXx20w14l8g/exec');
    if (!upstream.ok) throw new Error(`HTTP ${upstream.status}`);
    
    const data = await upstream.json();
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Cache-Control': 'public, max-age=0, must-revalidate',
      'CDN-Cache-Control': 's-maxage=3600, stale-while-revalidate=604800',
      'Netlify-CDN-Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=604800, durable'
    });

    return new Response(JSON.stringify(data), { status: 200, headers });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Failed to fetch schedule' }), { 
      status: 502 
    });
  }
}