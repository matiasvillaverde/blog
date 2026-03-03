import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const lines = [
    `# ${SITE.title}`,
    "",
    `> ${SITE.desc}`,
    "",
    `- Author: ${SITE.author}`,
    `- URL: ${SITE.website}`,
    `- RSS: ${SITE.website}rss.xml`,
    "",
    "## Posts",
    "",
    ...sortedPosts.map(({ data, id, filePath }) => {
      const path = getPath(id, filePath);
      return `- [${data.title}](${SITE.website}${path.slice(1)}): ${data.description}`;
    }),
    "",
  ];

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
