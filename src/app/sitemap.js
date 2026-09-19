export const dynamic = "force-static";

export default function sitemap() {
  const baseUrl = "https://www.blackryce.io";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/terms-condition`,
      lastModified: new Date(),
    },
  ];
}