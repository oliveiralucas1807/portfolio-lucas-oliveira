import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const production = import.meta.env.PUBLIC_SITE_STAGE === 'production';
  const body = production
    ? 'User-agent: *\nAllow: /\n'
    : 'User-agent: *\nDisallow: /\n';
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
