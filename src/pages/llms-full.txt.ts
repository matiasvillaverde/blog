import type { APIRoute } from "astro";
import { getCollection } from "astro:content";
import { getPath } from "@/utils/getPath";
import getSortedPosts from "@/utils/getSortedPosts";
import { SITE } from "@/config";

export const GET: APIRoute = async () => {
  const posts = await getCollection("blog");
  const sortedPosts = getSortedPosts(posts);

  const sections = sortedPosts.map(({ data, id, filePath, body }) => {
    const path = getPath(id, filePath);
    return [
      `# ${data.title}`,
      "",
      `- URL: ${SITE.website}${path.slice(1)}`,
      `- Published: ${data.pubDatetime.toISOString().slice(0, 10)}`,
      `- Tags: ${data.tags.join(", ")}`,
      "",
      body,
    ].join("\n");
  });

  const output = [
    `# ${SITE.title} — Full Content`,
    "",
    `> ${SITE.desc}`,
    "",
    ...sections,
  ].join("\n---\n\n");

  return new Response(output, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
