import Link from "next/link";
import CountUp from "@/components/CountUp";

export default function AboutPage() {
  return (
    <main className="about-page">

      {/* =========================================
          HERO
          ========================================= */}
      <header className="legal-header">
        <a href="/" className="back-home">
          ← Back to Home
        </a>
      </header>
      <section className="about-hero">
        <div className="about-grid-bg"></div>


        <div className="page-width about-hero-inner">
          {/* <a href="/" className="back-home">
            ← Back to Home
          </a> */}

          <p className="eyebrow">✦ ABOUT BLACKRYCE</p>

          <h1>
            Building digital solutions
            <span> for businesses that want to grow.</span>
          </h1>

          <p className="about-hero-text">
            Founded in 2024, BlackRyce helps businesses turn ideas into
            practical digital solutions — from websites and software to
            mobile applications, marketing and technology infrastructure.
          </p>

          <div className="about-hero-actions">

            <Link
              href="/#contact"
              className="about-primary-btn"
            >
              Start a Conversation →
            </Link>

            <Link
              href="/#services"
              className="about-text-link"
            >
              Explore our services
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
              01 / WHO WE ARE
            </p>

            <h2>
              Building technology
              <span> with purpose.</span>
            </h2>

          </div>


          <div className="about-intro-copy">

            <p>
              Founded in 2024, BlackRyce Technologies LLP is a technology
              and digital solutions company focused on helping businesses
              build, improve and scale their digital presence.
            </p>

            <p>
              We bring together software development, design, digital
              marketing, business solutions and modern technology to create
              practical solutions around real business needs.
            </p>

            <p>
              From websites and mobile applications to custom software,
              infrastructure, security and digital marketing, we work
              closely with our clients to turn ideas into reliable digital
              solutions.
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
              Happy Clients
            </span>

          </div>


          <div className="about-stat">

            <CountUp
              end={500}
              duration={2600}
            />

            <span>
              Projects Delivered
            </span>

          </div>


          <div className="about-stat">

            <CountUp
              end={25}
              duration={1800}
            />

            <span>
              Technology Professionals
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
              02 / OUR APPROACH
            </p>

            <h2>
              Good technology should be
              <span> simple, useful and scalable.</span>
            </h2>

            <p>
              We believe technology should solve problems rather than
              create unnecessary complexity.
            </p>

          </div>


          <div className="about-values">

            {/* CARD 01 */}
            <article className="about-value-card">

              <span>01</span>

              <h3>
                Understand
              </h3>

              <p>
                We start by understanding your business, customers,
                requirements and goals before deciding on the technology.
              </p>

            </article>


            {/* CARD 02 */}
            <article className="about-value-card">

              <span>02</span>

              <h3>
                Build
              </h3>

              <p>
                We turn ideas into thoughtful digital products using
                modern development, design and technology practices.
              </p>

            </article>


            {/* CARD 03 */}
            <article className="about-value-card">

              <span>03</span>

              <h3>
                Improve
              </h3>

              <p>
                We continuously refine solutions so they perform better,
                provide better experiences and remain ready to grow.
              </p>

            </article>


            {/* CARD 04 */}
            <article className="about-value-card">

              <span>04</span>

              <h3>
                Scale
              </h3>

              <p>
                We build with the future in mind, helping businesses adapt
                as their users, operations and technology requirements grow.
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
              03 / WHAT WE DO
            </p>

            <h2>
              From idea to
              <span> digital growth.</span>
            </h2>

          </div>


          <div className="about-capability-list">

            {/* 01 */}
            <div>

              <span>01</span>

              <div>

                <h3>
                  Web & Software Development
                </h3>

                <p>
                  Websites, business platforms, custom software and
                  scalable digital products built around your requirements.
                </p>

              </div>

            </div>


            {/* 02 */}
            <div>

              <span>02</span>

              <div>

                <h3>
                  Mobile Applications
                </h3>

                <p>
                  Modern mobile experiences designed for performance,
                  usability and long-term growth.
                </p>

              </div>

            </div>


            {/* 03 */}
            <div>

              <span>03</span>

              <div>

                <h3>
                  Digital Marketing
                </h3>

                <p>
                  SEO, performance marketing and digital strategies
                  designed around measurable business outcomes.
                </p>

              </div>

            </div>


            {/* 04 */}
            <div>

              <span>04</span>

              <div>

                <h3>
                  Business Solutions
                </h3>

                <p>
                  CRM, workflow and technology solutions that help
                  businesses operate more efficiently.
                </p>

              </div>

            </div>


            {/* 05 */}
            <div>

              <span>05</span>

              <div>

                <h3>
                  Infrastructure & Security
                </h3>

                <p>
                  Reliable network infrastructure, security audits and
                  vulnerability assessment solutions.
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
              04 / OUR MISSION
            </p>

            <h2>
              Make technology
              <span> work for people and businesses.</span>
            </h2>

          </div>


          <div className="about-mission-copy">

            <p>
              Our mission is to make modern technology more accessible,
              practical and valuable for businesses of every size.
            </p>

            <p>
              We focus on understanding the problem first, choosing the
              right technology and delivering solutions that create
              meaningful value.
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
              ✦ OUR VISION
            </p>

            <h2>
              A future where
              <span> technology creates opportunity.</span>
            </h2>

            <p>
              We aim to grow as a trusted technology partner for businesses
              looking to innovate, modernize and build for the future.
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
              05 / CONTACT
            </p>

            <h2>
              Let's stay
              <span>connected.</span>
            </h2>

          </div>


          <div className="about-contact-grid">

            {/* ADDRESS */}
            <div className="about-contact-item">

              <span className="about-contact-number">01</span>

              <div>
                <h3>Address</h3>

                <p>
                  J.D Road, Near Bou Bazar,
                  Kokrajhar, Assam 783370, India
                </p>
              </div>

            </div>


            {/* EMAIL */}
            <div className="about-contact-item">

              <span className="about-contact-number">02</span>

              <div>
                <h3>Email</h3>

                <a href="mailto:info@blackryce.io">
                  info@blackryce.io
                </a>
              </div>

            </div>


            {/* PHONE */}
            <div className="about-contact-item">

              <span className="about-contact-number">03</span>

              <div>
                <h3>Mobile</h3>

                <a href="tel:+919365427150">
                  +91 93654 27150
                </a>
              </div>

            </div>


            {/* BUSINESS HOURS */}
            <div className="about-contact-item">

              <span className="about-contact-number">04</span>

              <div>
                <h3>Business Hours</h3>

                <p>
                  Monday – Saturday
                  <br />
                  10:00 AM – 6:00 PM
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
            ✦ LET'S BUILD SOMETHING
          </p>

          <h2>
            Have an idea?
            <span> Let's turn it into reality.</span>
          </h2>

          <p>
            Tell us what you're building and let's explore how technology
            can help your business move forward.
          </p>

          <Link
            href="/#contact"
            className="about-cta-button"
          >
            Talk to BlackRyce →
          </Link>

        </div>

      </section>

    </main>
  );
}