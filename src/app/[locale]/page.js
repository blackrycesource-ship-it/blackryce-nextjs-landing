"use client";

import {useTranslations} from "next-intl";

export default function HomePage() {
  const t = useTranslations();

  return (
    <main>
      <h1>{t("hero.title")}</h1>
      <p>{t("nav.about")}</p>
      <p>{t("nav.services")}</p>
      <p>{t("nav.technology")}</p>
    </main>
  );
}