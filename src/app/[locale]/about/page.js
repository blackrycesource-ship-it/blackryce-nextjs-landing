"use client";
import { useTranslations } from "next-intl";
import CountUp from "@/components/CountUp";
import { Link } from "@/i18n/navigation";

export default function AboutPage() {

    const t = useTranslations("about");

  return (
    <main className="about-page">

      {/* =========================================
          HERO
          ========================================= */}
      <header className="legal-header">
        <Link href="/" className="back-home">
        {t("backHome")}
        </Link>
      </header>
      <section className="about-hero">
        <div className="about-grid-bg"></div>


        <div className="page-width about-hero-inner">
          {/* <a href="/" className="back-home">
            ← Back to Home
          </a> */}

          <p className="eyebrow">{t("hero.eyebrow")}</p>

          <h1>
            {t("hero.title")}
            <span> {t("hero.titleHighlight")}</span>
          </h1>

          <p className="about-hero-text">
            {t("hero.description")}
            </p>

          <div className="about-hero-actions">

            <Link
            href="/#contact"
            className="about-primary-btn"
            >
            {t("hero.startConversation")}
            </Link>

            <Link
            href="/#services"
            className="about-text-link"
            >
            {t("hero.services")}
            </Link>

          </div>

        </div>
      </section>


      {/* =========================================
          WHO WE ARE
          ========================================= */}
      <section className="about-intro">

        <div className="page-width about-intro-grid">

          <div>

            <p className="eyebrow">
            {t("whoWeAre.eyebrow")}
            </p>

           <h2>
            {t("whoWeAre.title")}
            <span> {t("whoWeAre.titleHighlight")}</span>
            </h2>

          </div>


          <div className="about-intro-copy">

            <p>
            {t("whoWeAre.paragraph1")}
            </p>

            <p>
            {t("whoWeAre.paragraph2")}
            </p>

            <p>
            {t("whoWeAre.paragraph3")}
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          COMPANY STATS
          ========================================= */}
      {/* =========================================
    COMPANY STATS
    ========================================= */}
      <section className="about-stats">

        <div className="page-width about-stats-grid">

          <div className="about-stat">

            <CountUp
              end={700}
              duration={2200}
            />

            <span>
            {t("stats.clients")}
            </span>

          </div>


          <div className="about-stat">

            <CountUp
              end={500}
              duration={2600}
            />

            <span>
            {t("stats.projects")}
            </span>

          </div>


          <div className="about-stat">

            <CountUp
              end={25}
              duration={1800}
            />

           <span>
            {t("stats.professionals")}
            </span>
          </div>

        </div>

      </section>


      {/* =========================================
          OUR APPROACH
          ========================================= */}
      <section className="about-belief">

        <div className="page-width">

          <div className="about-section-heading">

            <p className="eyebrow">
            {t("approach.eyebrow")}
            </p>

            <h2>
  {t("approach.title")}
  <span> {t("approach.titleHighlight")}</span>
</h2>

        <p>
  {t("approach.description")}
</p>

          </div>


          <div className="about-values">

            {/* CARD 01 */}
            <article className="about-value-card">

              <span>01</span>

            <h3>
  {t("approach.understand.title")}
</h3>

           <p>
  {t("approach.understand.description")}
</p>

            </article>


            {/* CARD 02 */}
            <article className="about-value-card">

              <span>02</span>

             <h3>
  {t("approach.build.title")}
</h3>

          <p>
  {t("approach.build.description")}
</p>

            </article>


            {/* CARD 03 */}
            <article className="about-value-card">

              <span>03</span>

           <h3>
  {t("approach.improve.title")}
</h3>

          <p>
  {t("approach.improve.description")}
</p>

            </article>


            {/* CARD 04 */}
            <article className="about-value-card">

              <span>04</span>

           <h3>
  {t("approach.scale.title")}
</h3>

         <p>
  {t("approach.scale.description")}
</p>

            </article>

          </div>

        </div>

      </section>


      {/* =========================================
          WHAT WE DO
          ========================================= */}
      <section className="about-capabilities">

        <div className="page-width about-capabilities-grid">

          <div className="about-capabilities-title">

<p className="eyebrow">
  {t("capabilities.eyebrow")}
</p>

   <h2>
  {t("capabilities.title")}
  <span> {t("capabilities.titleHighlight")}</span>
</h2>

          </div>


          <div className="about-capability-list">

            {/* 01 */}
            <div>

              <span>01</span>

              <div>

<h3>
  {t("capabilities.web.title")}
</h3>

<p>
  {t("capabilities.web.description")}
</p>

              </div>

            </div>


            {/* 02 */}
            <div>

              <span>02</span>

              <div>

<h3>
  {t("capabilities.mobile.title")}
</h3>

<p>
  {t("capabilities.mobile.description")}
</p>

              </div>

            </div>


            {/* 03 */}
            <div>

              <span>03</span>

              <div>

  <h3>
  {t("capabilities.marketing.title")}
</h3>

<p>
  {t("capabilities.marketing.description")}
</p>

              </div>

            </div>


            {/* 04 */}
            <div>

              <span>04</span>

              <div>

<h3>
  {t("capabilities.business.title")}
</h3>

<p>
  {t("capabilities.business.description")}
</p>

              </div>

            </div>


            {/* 05 */}
            <div>

              <span>05</span>

              <div>

<h3>
  {t("capabilities.security.title")}
</h3>

<p>
  {t("capabilities.security.description")}
</p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          MISSION
          ========================================= */}
      <section className="about-mission">

        <div className="page-width about-mission-grid">

          <div>

<p className="eyebrow">
  {t("mission.eyebrow")}
</p>

<h2>
  {t("mission.title")}
  <span> {t("mission.titleHighlight")}</span>
</h2>

          </div>


          <div className="about-mission-copy">

 <p>
  {t("mission.paragraph1")}
</p>

<p>
  {t("mission.paragraph2")}
</p>

          </div>

        </div>

      </section>


      {/* =========================================
          VISION
          ========================================= */}
      <section className="about-vision">

        <div className="page-width">

          <div className="about-vision-content">

  <p className="eyebrow">
  {t("vision.eyebrow")}
</p>

<h2>
  {t("vision.title")}
  <span> {t("vision.titleHighlight")}</span>
</h2>

<p>
  {t("vision.description")}
</p>

          </div>

        </div>

      </section>


      {/* =========================================
    CONTACT INFORMATION
    ========================================= */}
      <section className="about-contact">

        <div className="page-width">

          <div className="about-contact-heading">

 <p className="eyebrow">
  {t("contact.eyebrow")}
</p>

<h2>
  {t("contact.title")}
  <span>{t("contact.titleHighlight")}</span>
</h2>

          </div>


          <div className="about-contact-grid">

            {/* ADDRESS */}
            <div className="about-contact-item">

              <span className="about-contact-number">01</span>

              <div>
  <h3>{t("contact.address")}</h3>

<p>{t("contact.addressText")}</p>
              </div>

            </div>


            {/* EMAIL */}
            <div className="about-contact-item">

              <span className="about-contact-number">02</span>

              <div>
  <h3>{t("contact.email")}</h3>

                <a href="mailto:info@blackryce.io">
                  info@blackryce.io
                </a>
              </div>

            </div>


            {/* PHONE */}
            <div className="about-contact-item">

              <span className="about-contact-number">03</span>

              <div>
    <h3>{t("contact.mobile")}</h3>

                <a href="tel:+919365427150">
                  +91 93654 27150
                </a>
              </div>

            </div>


            {/* BUSINESS HOURS */}
            <div className="about-contact-item">

              <span className="about-contact-number">04</span>

              <div>
  <h3>{t("contact.businessHours")}</h3>

<p>
  {t("contact.days")}
  <br />
  {t("contact.hours")}
</p>
              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================================
          CTA
          ========================================= */}
      <section className="about-cta">

        <div className="page-width">

  <p className="eyebrow">
  {t("cta.eyebrow")}
</p>

<h2>
  {t("cta.title")}
  <span> {t("cta.titleHighlight")}</span>
</h2>

<p>
  {t("cta.description")}
</p>

<Link
  href="/#contact"
  className="about-cta-button"
>
  {t("cta.button")}
</Link>

        </div>

      </section>

    </main>
  );
}