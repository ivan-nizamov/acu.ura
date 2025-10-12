import type { Config } from '@netlify/functions';

export const config: Config = {
  schedule: '0 * * * *'  // Run at minute 0 of every hour
};

export default async () => {
  try {
    await fetch(`${process.env.URL}/api/schedule.json`, {
      headers: { 'Cache-Control': 'no-cache' }
    });
    return new Response('Cache warmed successfully');
  } catch (error) {
    return new Response('Failed to warm cache', { status: 500 });
  }
}