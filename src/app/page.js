"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";
import CountUp from "@/components/CountUp";

import {
  industries,
  clientLogos,
} from "@/data/site";


export default function Home() {

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    industry: "",
    message: "",
  });

  const [countryCode, setCountryCode] = useState("+91");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const whatsappNumber = "9365427150";

    const message = `
Hello Black Ryce,

I would like to discuss a project.

Full Name: ${formData.fullName}
Business Email: ${formData.email}
Mobile Number: ${countryCode} ${formData.mobile}
Industry: ${formData.industry}

Message:
${formData.message}
    `;

    const whatsappUrl =
      `https://wa.me/${whatsappNumber}?text=` +
      encodeURIComponent(message);

    window.open(whatsappUrl, "_blank");
  };





  return (

    

    
    <main id="top">
      <Navbar />

     {/* HERO */}
     <ScrollReveal>
<section className="hero">

<div className="hero-stars" aria-hidden="true">
  <span>✦</span>
  <span>✦</span>
  <span>✦</span>
  <span>✦</span>
  <span>✦</span>
  <span>✦</span>
  <span>✦</span>
  <span>✦</span>
</div>

  <div className="page-width hero-grid">

    <div className="hero-copy">
    <p className="eyebrow brand-loader">
  {"BLACKRYCE /DIGITAL ENGINEERING".split("").map((letter, index) => (
    <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
      {letter === " " ? "\u00A0" : letter}
    </span>
  ))}
</p>

      <h1 className="hero-animate hero-delay-2">
        Build with Smart Engineers. Transform Businesses.
        <span> Enable AI-Driven Growth.</span>
      </h1>

      <p className="hero-text hero-animate hero-delay-3">
        We help ambitious businesses turn good ideas into useful digital
        products, modern platforms, and technology that is ready to
        grow.
      </p>

      <div className="hero-actions hero-animate hero-delay-4">
        <a className="button button-dark" href="#contact">
          Start a conversation
        </a>

        <a className="text-link" href="#work">
          See our work <span>↗</span>
        </a>
      </div>
    </div>

    {/* decorative only, hidden on mobile via css */}
    <div className="hero-mark hero-animate hero-delay-3" aria-hidden="true">
      <div className="mark-box">
        <span>BR</span>
      </div>

      <p>
        Technology
        <br />
        with purpose.
      </p>
    </div>

  </div>
</section>
</ScrollReveal>


<ScrollReveal>
<section className="trust-strip">
  <div className="page-width">
    <p className="eyebrow">✦ Trusted Partner</p>

    <h2>
  Startups, SMEs & Enterprises.{" "}
  <span>Worldwide Trust Us.</span>
</h2>

    <p className="section-subtitle">
      Trusted partnerships built on client satisfaction, expertise and results.
    </p>

    <div className="logo-marquee">
  <div className="logo-track">
    {[...clientLogos, ...clientLogos].map((client, index) => (
      <div className="client-logo" key={`${client.name}-${index}`}>
        <img src={client.image} alt={client.name} />
      </div>
    ))}
  </div>
</div>
  </div>
</section>
</ScrollReveal>


<ScrollReveal>
<section className="section transformation-section">
  <div className="page-width">

    <div className="transformation-intro">

      <p className="eyebrow">✦ Transform Business Smarter</p>

      <h2>
        Digital Transformation for{" "}
        <span>Startups, SMBs & Enterprises</span>
      </h2>

      <p className="section-subtitle">
        Choose a Starting point and we can tailor the architecture,
        model and workflow to your goals.
      </p>

    </div>

    <div className="transformation-grid">

      <div className="transformation-card">
        <div className="card-top">
          <h3>Startups & SMBs</h3>
          <div className="card-icon">♢</div>
        </div>

        <p>
          MVP development, websites, mobile apps, SaaS products,
          SEO and growth support without the overhead of a large
          internal team.
        </p>

        <a href="#contact" className="card-button">
          Discuss Solution <span>→</span>
        </a>
      </div>


      <div className="transformation-card">
        <div className="card-top">
          <h3>SaaS & Product Companies</h3>
          <div className="card-icon">⌘</div>
        </div>

        <p>
          Product design, cloud architecture, multi-tenancy, AI
          features, billing and continuous product engineering.
        </p>

        <a href="#contact" className="card-button">
          Discuss Solution <span>→</span>
        </a>
      </div>


      <div className="transformation-card">
        <div className="card-top">
          <h3>Enterprise Transformation</h3>
          <div className="card-icon">↗</div>
        </div>

        <p>
          Modernize legacy workflows, integrate systems, automate
          operations and create data-driven digital experiences.
        </p>

        <a href="#contact" className="card-button">
          Discuss Solution <span>→</span>
        </a>
      </div>

    </div>

  </div>
</section>
</ScrollReveal>

{/* 01 - SERVICES */}
{/* 01 - SERVICES */}
<ScrollReveal>

  <section id="services" className="section services-section">
    <div className="page-width">

      <div className="services-intro">

        <div>
          <p className="eyebrow">01 / WHAT WE DO</p>

          <h2>
            Digital solutions built
            <br />
            around the way you
            <br />
            work.
          </h2>
        </div>

        <p className="services-intro-text">
          From websites and software to digital marketing and business
          solutions, we build practical technology around your goals.
        </p>

      </div>


      <div className="services-grid">

        {/* 01 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>01</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Custom Website Development</h3>
            <p>
              Custom-built websites designed around your brand, business
              goals and customers.
            </p>
          </div>
        </div>


        {/* 02 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>02</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Business &amp; Corporate Websites</h3>
            <p>
              Professional websites that establish your online presence
              and support business growth.
            </p>
          </div>
        </div>


        {/* 03 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>03</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>E-Commerce Development</h3>
            <p>
              Scalable online stores built to deliver smooth shopping
              experiences and support sales.
            </p>
          </div>
        </div>


        {/* 04 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>04</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>UI/UX Design</h3>
            <p>
              Simple and engaging interfaces designed to make digital
              products easy and enjoyable to use.
            </p>
          </div>
        </div>


        {/* 05 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>05</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Mobile &amp; Responsive Websites</h3>
            <p>
              Responsive experiences that work smoothly across mobile,
              tablet and desktop devices.
            </p>
          </div>
        </div>


        {/* 06 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>06</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>CRM &amp; Business Solutions</h3>
            <p>
              Digital solutions that help businesses manage customers,
              workflows and everyday operations.
            </p>
          </div>
        </div>


        {/* 07 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>07</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>SEO &amp; Digital Marketing</h3>
            <p>
              Strategies that improve online visibility, reach the right
              audience and generate meaningful growth.
            </p>
          </div>
        </div>


        {/* 08 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>08</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Performance Marketing</h3>
            <p>
              Data-driven campaigns focused on measurable traffic,
              leads and business results.
            </p>
          </div>
        </div>


        {/* 09 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>09</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Custom Software Development</h3>
            <p>
              Tailored software solutions built around your specific
              business processes and requirements.
            </p>
          </div>
        </div>


        {/* 10 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>10</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Flutter App Development</h3>
            <p>
              Build beautiful, high-performance Android and iOS apps
              with Flutter from a single codebase.
            </p>
          </div>
        </div>


        {/* 11 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>11</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Network Infrastructure Setup</h3>
            <p>
              Build reliable, secure, and scalable network infrastructure
              for your business.
            </p>
          </div>
        </div>


        {/* 12 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>12</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Security Audit &amp; VAPT</h3>
            <p>
              Identify vulnerabilities, strengthen security, and protect
              your systems from cyber threats.
            </p>
          </div>
        </div>


        {/* 13 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>13</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>Influencer Marketing</h3>
            <p>
              Connect with the right influencers to increase brand
              awareness, reach, and engagement.
            </p>
          </div>
        </div>

      </div>

    </div>
  </section>

</ScrollReveal>

{/* 02 - TECHNOLOGY */}
<ScrollReveal>
<section id="technology" className="section tech-section">
  <div className="page-width">

    <p className="eyebrow ">✦ Technology Ecosystem</p>

    <h2 className="tech-heading">
      Build. Transform. Scale.{" "}
      <span>One Stop Technology Partner.</span>
    </h2>

    <p className="section-subtitle">
      200+ technology experts across modern tech stacks.
    </p>

    <div className="tech-grid">

      <div className="tech-card">
        <img src="/tech-logos/full_stack.svg" alt="Full-Stack" />
        <span>Full-Stack</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/frontend.svg" alt="Front-End" />
        <span>Front-End</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/backend.svg" alt="Back-End" />
        <span>Back-End</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/web.svg" alt="Web" />
        <span>Web</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/cloud.svg" alt="Cloud" />
        <span>Cloud</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/mobile.svg" alt="Mobile" />
        <span>Mobile</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/ai_ml.svg" alt="AI/ML" />
        <span>AI/ML</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/data_science.svg" alt="Data Science" />
        <span>Data Science</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/ui_ux.svg" alt="UI/UX" />
        <span>UI/UX</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/sales_force.svg" alt="Salesforce" />
        <span>Sales Force</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/zoho.svg" alt="Zoho" />
        <span>Zoho</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/dot_net.svg" alt=".NET" />
        <span>.net</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/php.svg" alt="PHP" />
        <span>PHP</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/react.svg" alt="React" />
        <span>React</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/angular.svg" alt="Angular" />
        <span>Angular</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/nextj.svg" alt="Next.js" />
        <span>Nextjs</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/react.svg" alt="React Native" />
        <span>React Native</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/kotlin_logo.svg" alt="Kotlin" />
        <span>Kotlin</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/swift_logo.svg" alt="Swift" />
        <span>Swift</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/python.svg" alt="Python" />
        <span>Python</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/aws.svg" alt="AWS" />
        <span>AWS</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/azure.svg" alt="Azure" />
        <span>Azure</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/mern.svg" alt="MERN" />
        <span>MERN</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/laravel.svg" alt="Laravel" />
        <span>Laravel</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/mean.svg" alt="MEAN" />
        <span>MEAN</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/magento.svg" alt="Magento" />
        <span>Magento</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/shopify.svg" alt="Shopify" />
        <span>Shopify</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/wordpress.svg" alt="WordPress" />
        <span>WordPress</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/woocommerce.svg" alt="WooCommerce" />
        <span>Woocommerce</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/pytorch.svg" alt="PyTorch" />
        <span>PyTorch</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/openai.svg" alt="OpenAI" />
        <span>OpenAI</span>
      </div>

      <div className="tech-card">
        <img src="/tech-logos/powerbi.svg" alt="Power BI" />
        <span>PowerBI</span>
      </div>

    </div>

    <a href="#contact" className="tech-button">
      Schedule a Consultation <span>→</span>
    </a>

  </div>
</section>
</ScrollReveal>


{/* 05 - ENGAGEMENT MODELS */}
<ScrollReveal>
<section id="work" className="dark-engagement-section">

  <div className="page-width">

    <div className="dark-engagement-header">

      <p className="dark-eyebrow">
        ✦ Engagement Models
      </p>

      <h2>
        We Offer Flexible Engagement Models to{" "}
        <span>Match Your Goals, Timeline and Budget.</span>
      </h2>

      <p>
        Choose the model that fits your roadmap, budget and delivery speed.
      </p>

    </div>


    <div className="dark-engagement-grid">

      {/* SCALE */}
      <article className="dark-engagement-card">

        <div className="dark-card-top">
          <span className="dark-card-number">01</span>

          <div className="dark-card-icon">↗</div>
        </div>

        <div>
          <h3>Scale</h3>

          <h4>Dedicated Team</h4>

          <p>
            Scale your capabilities with dedicated developers,
            designers, engineers and AI specialists - seamlessly
            integrated with your team.
          </p>
        </div>

        <a href="#contact">
          Build a Team <span>→</span>
        </a>

      </article>


      {/* LAUNCH */}
      <article className="dark-engagement-card">

        <div className="dark-card-top">
          <span className="dark-card-number">02</span>

          <div className="dark-card-icon">↗</div>
        </div>

        <div>
          <h3>Launch</h3>

          <h4>Fixed Cost Model</h4>

          <p>
            From web and mobile to custom software, turn
            defined requirements into scalable solutions with
            clear scope, timelines and costs.
          </p>
        </div>

        <a href="#contact">
          Get a Quote <span>→</span>
        </a>

      </article>


      {/* FLEXIBLE */}
      <article className="dark-engagement-card">

        <div className="dark-card-top">
          <span className="dark-card-number">03</span>

          <div className="dark-card-icon">↗</div>
        </div>

        <div>
          <h3>Flexible</h3>

          <h4>Hourly Basis</h4>

          <p>
            Stay agile with on-demand tech talent for evolving
            requirements, continuous improvements and rapid
            development needs.
          </p>
        </div>

        <a href="#contact">
          Start a Discussion <span>→</span>
        </a>

      </article>

    </div>

  </div>

</section>
</ScrollReveal>


  {/* CONTACT */}
<ScrollReveal>
  <section id="contact" className="contact-section">

    <div className="page-width contact-layout">

      <div className="contact-left">

        <p className="eyebrow">05 / LET&apos;S TALK</p>

        <h2>
          Tell us what <span>you&apos;re building.</span>
        </h2>

        <div className="contact-stats">

          <div className="contact-stat">
            <div className="stat-icon">✦</div>
            <div>
              <h3>
                <CountUp end={3} duration={1800} /> Years of Experience
              </h3>
              <p>Proven technology expertise since 2024.</p>
            </div>
          </div>

          <div className="contact-stat">
            <div className="stat-icon">☺</div>
            <div>
              <h3>
                <CountUp end={100} duration={2200} /> Happy Clients
              </h3>
              <p>From startups to Fortune 500 enterprises.</p>
            </div>
          </div>

          <div className="contact-stat">
            <div className="stat-icon">▣</div>
            <div>
              <h3>
                <CountUp end={500} duration={2600} /> Projects
              </h3>
              <p>Ideas transformed into digital solutions.</p>
            </div>
          </div>

          <div className="contact-stat">
            <div className="stat-icon">♧</div>
            <div>
              <h3>
                <CountUp end={25} duration={1800} /> Tech Professionals
              </h3>
              <p>Experts across modern technologies.</p>
            </div>
          </div>

        </div>

      </div>


    <div className="contact-form-card">

      <h2>
        Discuss Your Software Development, AI & Digital Transformation
        Needs
      </h2>

      <form className="contact-form" onSubmit={handleSubmit}>

  <div className="form-group">
    <label htmlFor="fullName">Full Name *</label>

    <input
      id="fullName"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      required
    />
  </div>


  <div className="form-group">
    <label htmlFor="email">Business Email Address *</label>

    <input
      id="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>


  <div className="form-group">
    <label htmlFor="mobile">Mobile Number *</label>

    <div className="phone-input">

      <select
        value={countryCode}
        onChange={(e) => setCountryCode(e.target.value)}
        className="country-code"
      >
<option value="+91">IN +91</option>
  <option value="+1">US +1</option>
  <option value="+44">UK +44</option>
  <option value="+61">AU +61</option>
  <option value="+971">AE +971</option>
  <option value="+65">SG +65</option>
  <option value="+81">JP +81</option>
  <option value="+49">DE +49</option>
  <option value="+33">FR +33</option>
  <option value="+39">IT +39</option>
  <option value="+34">ES +34</option>
  <option value="+31">NL +31</option>
  <option value="+32">BE +32</option>
  <option value="+41">CH +41</option>
  <option value="+43">AT +43</option>
  <option value="+45">DK +45</option>
  <option value="+46">SE +46</option>
  <option value="+47">NO +47</option>
  <option value="+358">FI +358</option>
  <option value="+48">PL +48</option>
  <option value="+351">PT +351</option>
  <option value="+30">GR +30</option>
  <option value="+7">RU +7</option>
  <option value="+380">UA +380</option>
  <option value="+90">TR +90</option>
  <option value="+972">IL +972</option>
  <option value="+971">AE +971</option>
  <option value="+966">SA +966</option>
  <option value="+974">QA +974</option>
  <option value="+965">KW +965</option>
  <option value="+968">OM +968</option>
  <option value="+973">BH +973</option>
  <option value="+27">ZA +27</option>
  <option value="+20">EG +20</option>
  <option value="+234">NG +234</option>
  <option value="+254">KE +254</option>
  <option value="+55">BR +55</option>
  <option value="+52">MX +52</option>
  <option value="+54">AR +54</option>
  <option value="+56">CL +56</option>
  <option value="+57">CO +57</option>
  <option value="+51">PE +51</option>
  <option value="+64">NZ +64</option>
  <option value="+82">KR +82</option>
  <option value="+86">CN +86</option>
  <option value="+852">HK +852</option>
  <option value="+886">TW +886</option>
  <option value="+60">MY +60</option>
  <option value="+62">ID +62</option>
  <option value="+63">PH +63</option>
  <option value="+66">TH +66</option>
  <option value="+84">VN +84</option>
  <option value="+880">BD +880</option>
  <option value="+92">PK +92</option>
  <option value="+94">LK +94</option>
  <option value="+977">NP +977</option>
      </select>

      <input
        id="mobile"
        type="tel"
        placeholder="Enter mobile number"
        value={formData.mobile}
        onChange={handleChange}
        required
      />

    </div>
  </div>


  <div className="form-group">
    <label htmlFor="industry">Industry *</label>

    <input
      id="industry"
      type="text"
      value={formData.industry}
      onChange={handleChange}
      required
    />
  </div>


  <div className="form-group message-group">
    <label htmlFor="message">Message *</label>

    <textarea
      id="message"
      placeholder="Type your message here"
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>
  </div>


<p className="privacy-note">
  <strong>Note:</strong> I consent that my personal data will be
  processed to respond to this enquiry.
</p>

  <button type="submit" className="form-submit">
    Schedule a Consultation <span>→</span>
  </button>

</form>

    </div>

  </div>

</section>
</ScrollReveal>
<footer className="blackryce-footer">

  <div className="blackryce-footer-content page-width">

    {/* BRAND */}
    <div className="footer-brand">

      <div className="blackryce-logo">
        BLACKRYCE
        <span>TECHNOLOGIES LLP</span>
      </div>

      <p className="blackryce-tagline">
        IT. INNOVATION. DIGITAL.
      </p>

      <p className="blackryce-description">
        A trusted technology partner for startups, SMEs and enterprises,
        delivering scalable digital solutions that support business growth.
      </p>

      <h3>Social Connect</h3>

      <div className="blackryce-social-links">
  <a href="https://www.facebook.com/blackryce" aria-label="Facebook">
    f
  </a>

  <a
    href="https://www.instagram.com/blackryce_technologies"
    aria-label="Instagram"
  >
    <img src="tech-logos/download-white.png" alt="Instagram" />
  </a>

  <a
    href="https://www.linkedin.com/company/blackryce/"
    aria-label="LinkedIn"
  >
    in
  </a>
</div>

    </div>


    {/* QUICK LINKS */}
    <div className="footer-links">

      <h3>QUICK LINKS</h3>

      <div className="footer-link-list">
        <a href="#top">Home</a>
        <a href="#services">Services</a>
        <a href="#technology">Technology</a>
        <a href="#industries">Industries</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
      </div>

    </div>


    {/* SERVICES */}
    <div className="footer-services">

      <h3>SERVICES</h3>

      <div className="footer-service-list">
        <a href="#services">Custom Website Development</a>
        <a href="#services">Business & Corporate Websites</a>
        <a href="#services">E-Commerce Development</a>
        <a href="#services">UI/UX Design</a>
        <a href="#services">Mobile & Responsive Websites</a>
        <a href="#services">CRM & Business Solutions</a>
        <a href="#services">SEO & Digital Marketing</a>
        <a href="#services">Performance Marketing</a>
        <a href="#services">Custom Software Development</a>
      </div>

    </div>


    {/* CONTACT */}
   <div className="footer-contact">

  <h3>CONTACT</h3>

  <h4>India</h4>

  <p>
    J.D. Road, near Bou Bazar,<br />
    Kokrajhar, Assam, India – 783370
  </p>

  <p>
    <a href="mailto:info@blackryce.io">
      info@blackryce.io
    </a>
  </p>

  <p>
    <a href="tel:+919365427150">
      +91 9365427150
    </a>
  </p>

</div>

  </div>


  {/* BOTTOM */}
  <div className="blackryce-copyright page-width">
  <span>
    © 2026 BlackRyce Technologies LLP, India. All Rights Reserved.  <br></br>
  </span>
     
  <div>
    <a href="/privacy-policy"> Privacy Policy</a>
    <a href="/terms-condition">Terms & Conditions</a>
  </div>
</div>

</footer>


    </main>
  );
}