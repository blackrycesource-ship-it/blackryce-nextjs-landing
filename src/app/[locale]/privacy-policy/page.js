"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function PrivacyPolicy() {

  const t = useTranslations("privacy");

  return (
    <main className="legal-page">

      {/* HEADER */}
      <header className="legal-header">
         <Link href="/" className="legal-logo">
          {t("header.brand")}
        </Link>

        <Link href="/" className="back-home">
          {t("header.backHome")}
        </Link>
      </header>

      {/* HERO */}
      <section className="legal-hero">
        <p>{t("hero.eyebrow")}</p>

        <h1>{t("hero.title")}</h1>

        <p className="legal-intro">
          {t("hero.description")}
        </p>

        <span>{t("hero.effectiveDate")}</span>
      </section>

      {/* CONTENT */}
    <section className="legal-content">
        <div className="legal-card">

           <h2>
            <span className="section-number">01</span>
            {t("sections.01.title")}
          </h2>

          {t.raw("sections.01.paragraphs").map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}


            <h2>
              <span className="section-number">02</span>
              {t("sections.02.title")}
            </h2>

            {t.raw("sections.02.paragraphs").map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}


   <h2>
    <span className="section-number">03</span>
    {t("sections.03.title")}
  </h2>

  {t.raw("sections.03.paragraphs").map((paragraph, index) => (
    <p key={index}>{paragraph}</p>
  ))}


  {/* 04 */}
  <h2>
    <span className="section-number">04</span>
    {t("sections.04.title")}
  </h2>

  <p>{t("sections.04.intro")}</p>

  <h3>{t("sections.04.providedTitle")}</h3>

  <ul>
    {t.raw("sections.04.provided").map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <h3>{t("sections.04.collectedWhenTitle")}</h3>

  <ul>
    {t.raw("sections.04.collectedWhen").map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <h3>{t("sections.04.automaticTitle")}</h3>

  <ul>
    {t.raw("sections.04.automatic").map((item, index) => (
      <li key={index}>{item}</li>
    ))}
  </ul>

  <p>{t("sections.04.closing")}</p>

 {/* 05 */}
<h2>
  <span className="section-number">05</span>
  {t("sections.05.title")}
</h2>

<p>{t("sections.05.intro")}</p>

<ul>
  {t.raw("sections.05.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

{/* 06 */}
<h2>
  <span className="section-number">06</span>
  {t("sections.06.title")}
</h2>

{t.raw("sections.06.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 07 */}
<h2>
  <span className="section-number">07</span>
  {t("sections.07.title")}
</h2>

{t.raw("sections.07.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 08 */}
<h2>
  <span className="section-number">08</span>
  {t("sections.08.title")}
</h2>

{t.raw("sections.08.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 09 */}
<h2>
  <span className="section-number">09</span>
  {t("sections.09.title")}
</h2>

{t.raw("sections.09.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}

 {/* 10 */}
<h2>
  <span className="section-number">10</span>
  {t("sections.10.title")}
</h2>

{t.raw("sections.10.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 11 */}
<h2>
  <span className="section-number">11</span>
  {t("sections.11.title")}
</h2>

{t.raw("sections.11.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 12 */}
<h2>
  <span className="section-number">12</span>
  {t("sections.12.title")}
</h2>

{t.raw("sections.12.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 13 */}
<h2>
  <span className="section-number">13</span>
  {t("sections.13.title")}
</h2>

{t.raw("sections.13.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 14 */}
<h2>
  <span className="section-number">14</span>
  {t("sections.14.title")}
</h2>

{t.raw("sections.14.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 15 */}
<h2>
  <span className="section-number">15</span>
  {t("sections.15.title")}
</h2>

{t.raw("sections.15.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 16 */}
<h2>
  <span className="section-number">16</span>
  {t("sections.16.title")}
</h2>

{t.raw("sections.16.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 17 */}
<h2>
  <span className="section-number">17</span>
  {t("sections.17.title")}
</h2>

{t.raw("sections.17.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}

<ul>
  {t.raw("sections.17.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


{/* 18 */}
<h2>
  <span className="section-number">18</span>
  {t("sections.18.title")}
</h2>

{t.raw("sections.18.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 19 */}
<h2>
  <span className="section-number">19</span>
  {t("sections.19.title")}
</h2>

{t.raw("sections.19.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 20 */}
<h2>
  <span className="section-number">20</span>
  {t("sections.20.title")}
</h2>

{t.raw("sections.20.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


{/* 21 */}
<h2>
  <span className="section-number">21</span>
  {t("sections.21.title")}
</h2>

{t.raw("sections.21.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}

<div className="legal-contact">
  <p>{t("sections.21.contact.company")}</p>
  <p>{t("sections.21.contact.address")}</p>
  <p>{t("sections.21.contact.phone")}</p>
  <p>{t("sections.21.contact.email")}</p>
  <p>{t("sections.21.contact.website")}</p>
  <p>{t("sections.21.contact.hours")}</p>
</div>


{/* 22 */}
<h2>
  <span className="section-number">22</span>
  {t("sections.22.title")}
</h2>

{t.raw("sections.22.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}

<p className="legal-copyright">
  {t("sections.22.copyright")}
</p>
      </div>
    </section>

    </main>
  );
}