import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL, siteURL: URL) => `
User-agent: *
Allow: /

Sitemap: ${sitemapURL.href}

# AI agent discovery
# See https://llmstxt.org for the llms.txt specification
LLMs-Txt: ${new URL("llms.txt", siteURL).href}
LLMs-Full-Txt: ${new URL("llms-full.txt", siteURL).href}
`;

export const GET: APIRoute = ({ site }) => {
  const sitemapURL = new URL("sitemap-index.xml", site);
  return new Response(getRobotsTxt(sitemapURL, site!));
};
