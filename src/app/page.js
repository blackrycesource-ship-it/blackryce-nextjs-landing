"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const detectLanguage = async () => {
      try {
        // 1. Check browser language first
        const browserLanguage =
          navigator.language?.toLowerCase() || "en";

        if (browserLanguage.startsWith("ar")) {
          window.location.replace("/ar/");
          return;
        }

        // 2. If browser language is not Arabic,
        // check the user's approximate country from IP
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const arabCountries = [
          "SA", // Saudi Arabia
          "AE", // United Arab Emirates
          "QA", // Qatar
          "KW", // Kuwait
          "BH", // Bahrain
          "OM", // Oman
          "JO", // Jordan
          "LB", // Lebanon
          "EG", // Egypt
          "IQ", // Iraq
          "YE", // Yemen
          "SY", // Syria
          "PS", // Palestine
          "MA", // Morocco
          "DZ", // Algeria
          "TN", // Tunisia
          "LY", // Libya
          "SD", // Sudan
          "SO", // Somalia
          "DJ", // Djibouti
          "MR", // Mauritania
          "KM", // Comoros
        ];

        if (arabCountries.includes(data.country_code)) {
          window.location.replace("/ar/");
        } else {
          window.location.replace("/en/");
        }
      } catch (error) {
        // If IP detection fails, use English
        window.location.replace("/en/");
      }
    };

    detectLanguage();
  }, []);

  return null;
}