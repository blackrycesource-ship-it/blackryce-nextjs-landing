export const dynamic = "force-static";

export default function robots() {
  const baseUrl = "https://www.blackryce.io";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}