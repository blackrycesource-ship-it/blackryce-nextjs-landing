import "./globals.css";
import "./privacy-policy/privacy-policy.css";
import "./terms-condition/terms-condition.css";
import "./about/about.css";

import FloatingButtons from "@/components/FloatingButtons";

export const metadata = {
  title: "Black Ryce | Digital Transformation & Technology",
  description:
    "Black Ryce helps businesses build, transform and scale with modern technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}

        <FloatingButtons />
      </body>
    </html>
  );
}