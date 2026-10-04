"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function TermsAndConditions() {

    const t = useTranslations("terms");

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

          {/* 01 */}
            <h2>
            <span className="section-number">01</span>
            {t("sections.01.title")}
            </h2>

            <p>{t("sections.01.description")}</p>

            <ul>
            {t.raw("sections.01.services").map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>

            <p>{t("sections.01.closing")}</p>


         {/* 02 */}
            <h2>
            <span className="section-number">02</span>
            {t("sections.02.title")}
            </h2>

            <p>{t("sections.02.description")}</p>

            <p>{t("sections.02.pricesIntro")}</p>

            <ul>
            {t.raw("sections.02.priceFactors").map((item, index) => (
                <li key={index}>{item}</li>
            ))}
            </ul>

            <p>{t("sections.02.closing")}</p>


         {/* 03 */}
<h2>
  <span className="section-number">03</span>
  {t("sections.03.title")}
</h2>

<p>{t("sections.03.intro")}</p>

<ul>
  {t.raw("sections.03.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<p>{t("sections.03.closing")}</p>


{/* 04 */}
<h2>
  <span className="section-number">04</span>
  {t("sections.04.title")}
</h2>

<p>{t("sections.04.description")}</p>

<p>{t("sections.04.paymentsIntro")}</p>

<ul>
  {t.raw("sections.04.paymentItems").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<p>{t("sections.04.closing")}</p>


        {/* 05 */}
<h2>
  <span className="section-number">05</span>
  {t("sections.05.title")}
</h2>

{t.raw("sections.05.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


        {/* 06 */}
<h2>
  <span className="section-number">06</span>
  {t("sections.06.title")}
</h2>

<p>{t("sections.06.description")}</p>

<p>{t("sections.06.however")}</p>

<ul>
  {t.raw("sections.06.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<p>{t("sections.06.closing")}</p>

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

<p>{t("sections.08.intro")}</p>

<ul>
  {t.raw("sections.08.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


      {/* 09 */}
<h2>
  <span className="section-number">09</span>
  {t("sections.09.title")}
</h2>

<p>{t("sections.09.intro")}</p>

<ul>
  {t.raw("sections.09.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


       {/* 10 */}
<h2>
  <span className="section-number">10</span>
  {t("sections.10.title")}
</h2>

<p>{t("sections.10.description")}</p>

<p>{t("sections.10.factorsIntro")}</p>

<ul>
  {t.raw("sections.10.factors").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<p>{t("sections.10.closing")}</p>


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

<p>{t("sections.16.intro")}</p>

<ul>
  {t.raw("sections.16.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


       {/* 17 */}
<h2>
  <span className="section-number">17</span>
  {t("sections.17.title")}
</h2>

<p>{t("sections.17.intro")}</p>

<p>{t("sections.17.nonRefundableIntro")}</p>

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

<p>{t("sections.18.description")}</p>

<p>{t("sections.18.exclusionsIntro")}</p>

<ul>
  {t.raw("sections.18.exclusions").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

       {/* 19 */}
<h2>
  <span className="section-number">19</span>
  {t("sections.19.title")}
</h2>

<p>{t("sections.19.intro")}</p>

<ul>
  {t.raw("sections.19.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

        {/* 20 */}
<h2>
  <span className="section-number">20</span>
  {t("sections.20.title")}
</h2>

<p>{t("sections.20.intro")}</p>

<ul>
  {t.raw("sections.20.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>

<p>{t("sections.20.closing")}</p>


        {/* 21 */}
<h2>
  <span className="section-number">21</span>
  {t("sections.21.title")}
</h2>

<p>{t("sections.21.paragraph")}</p>
       
        {/* 22 */}
<h2>
  <span className="section-number">22</span>
  {t("sections.22.title")}
</h2>

<p>{t("sections.22.intro")}</p>

<ul>
  {t.raw("sections.22.items").map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>


       {/* 23 */}
<h2>
  <span className="section-number">23</span>
  {t("sections.23.title")}
</h2>

{t.raw("sections.23.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


        {/* 24 */}
<h2>
  <span className="section-number">24</span>
  {t("sections.24.title")}
</h2>

{t.raw("sections.24.paragraphs").map((paragraph, index) => (
  <p key={index}>{paragraph}</p>
))}


         {/* 25 */}
<h2>
  <span className="section-number">25</span>
  {t("sections.25.title")}
</h2>

<p>{t("sections.25.intro")}</p>

<div className="legal-contact">
  <p><strong>{t("sections.25.company")}</strong></p>
  <p>{t("sections.25.address")}</p>
  <p>{t("sections.25.phone")}</p>
  <p>{t("sections.25.email")}</p>
  <p>{t("sections.25.website")}</p>
  <p>{t("sections.25.hours")}</p>
</div>

        {/* ACCEPTANCE */}
<div className="legal-acceptance">
  <h2>{t("acceptance.title")}</h2>
  <p>{t("acceptance.description")}</p>
</div>

<p className="legal-copyright">
  {t("copyright")}
</p>

        </div>
      </section>

    </main>
  );
}