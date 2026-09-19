import "./globals.css";
import "./privacy-policy/privacy-policy.css";
import "./terms-condition/terms-condition.css";
import "./about/about.css";

import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "BLACKRYCE | Digital Transformation & Technology",
  description:
    "BLACKRYCE helps businesses build, transform and scale with modern technology through web development, software development and digital solutions.",

  openGraph: {
    title: "BLACKRYCE | Digital Transformation & Technology",
    description:
      "BLACKRYCE helps businesses build, transform and scale with modern technology through web development, software development and digital solutions.",
    type: "website",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "BLACKRYCE",
            url: "https://www.blackryce.io",
            logo: "https://www.blackryce.io/logo.jpeg",
          }),
        }}
      />
             
       {children}

        <FloatingButtons />
      </body>
    </html>
  );
}