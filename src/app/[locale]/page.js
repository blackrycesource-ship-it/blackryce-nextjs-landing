"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Navbar from "@/components/Navbar";
import CountUp from "@/components/CountUp";
import { Link } from "@/i18n/navigation";

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
  const t = useTranslations("hero");
  const ts = useTranslations("services");
  const ttech = useTranslations("technology");
  const teng = useTranslations("engagement");
  const tc = useTranslations("contact");
  const tf = useTranslations("footer");
  const ttrust = useTranslations("trust");
const ttrans = useTranslations("transformation");

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

<section className="hero">

  <div className="page-width hero-grid">

    <div className="hero-copy">
        <p className="eyebrow">
          {t("brand")}
         </p>

        <h1>
        {t("title")}
        <span>{t("titleHighlight")}</span>
        </h1>

        <p className="hero-text">
        {t("description")}
        </p>

        <div className="hero-actions">
        <a className="button button-dark" href="#contact">
            {t("startConversation")}
        </a>

       <a href="#work" className="hero-button secondary">
        {t("seeWork")} <span>→</span>
      </a>
        </div>
    </div>

    {/* decorative only, hidden on mobile via css */}
    <div className="hero-mark" aria-hidden="true">
      <div className="mark-box">
        <span>BR</span>
      </div>

      <p>{t("technologyPurpose")}</p>
    </div>

  </div>
</section>




<section className="trust-strip">
  <div className="page-width">
   <p className="eyebrow">{ttrust("eyebrow")}</p>

    <h2>
      {ttrust("title")}{" "}
      <span>{ttrust("titleHighlight")}</span>
    </h2>

    <p className="section-subtitle">
      {ttrust("description")}
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



<section className="section transformation-section">
  <div className="page-width">

    <div className="transformation-intro">

     <p className="eyebrow">{ttrans("eyebrow")}</p>

    <h2>
      {ttrans("title")}{" "}
      <span>{ttrans("titleHighlight")}</span>
    </h2>

    <p className="section-subtitle">
      {ttrans("description")}
    </p>

    </div>

    <div className="transformation-grid">

      <div className="transformation-card">
        <div className="card-top">
          <h3>{ttrans("startup.title")}</h3>
          <div className="card-icon">♢</div>
        </div>

       <p>{ttrans("startup.description")}</p>

        <a href="#contact" className="card-button">
          {ttrans("startup.button")} <span>→</span>
        </a>
      </div>


      <div className="transformation-card">
        <div className="card-top">
          <h3>{ttrans("saas.title")}</h3>
          <div className="card-icon">⌘</div>
        </div>

        <p>{ttrans("saas.description")}</p>

        <a href="#contact" className="card-button">
          {ttrans("saas.button")} <span>→</span>
        </a>
      </div>


      <div className="transformation-card">
        <div className="card-top">
          <h3>{ttrans("enterprise.title")}</h3>
          <div className="card-icon">↗</div>
        </div>

        <p>{ttrans("enterprise.description")}</p>

        <a href="#contact" className="card-button">
          {ttrans("enterprise.button")} <span>→</span>
        </a>
      </div>

    </div>

  </div>
</section>


{/* 01 - SERVICES */}
{/* 01 - SERVICES */}


  <section id="services" className="section services-section">
    <div className="page-width">

      <div className="services-intro">

      <div>
        <p className="eyebrow">{ts("eyebrow")}</p>

        <h2>{ts("title")}</h2>
      </div>

      <p className="services-intro-text">
        {ts("description")}
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
            <h3>{ts("items.website.title")}</h3>
            <p>{ts("items.website.description")}</p>
          </div>
        </div>


        {/* 02 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>02</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.corporate.title")}</h3>
            <p>{ts("items.corporate.description")}</p>
          </div>
        </div>


        {/* 03 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>03</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.ecommerce.title")}</h3>
            <p>{ts("items.ecommerce.description")}</p>
          </div>
        </div>


        {/* 04 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>04</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.uiux.title")}</h3>
            <p>{ts("items.uiux.description")}</p>
          </div>
        </div>


        {/* 05 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>05</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
           <h3>{ts("items.responsive.title")}</h3>
            <p>{ts("items.responsive.description")}</p>
          </div>
        </div>


        {/* 06 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>06</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
           <h3>{ts("items.crm.title")}</h3>
            <p>{ts("items.crm.description")}</p>
          </div>
        </div>


        {/* 07 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>07</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.seo.title")}</h3>
            <p>{ts("items.seo.description")}</p>
          </div>
        </div>


        {/* 08 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>08</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.performance.title")}</h3>
            <p>{ts("items.performance.description")}</p>
          </div>
        </div>


        {/* 09 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>09</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
           <h3>{ts("items.software.title")}</h3>
          <p>{ts("items.software.description")}</p>
          </div>
        </div>


        {/* 10 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>10</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.flutter.title")}</h3>
            <p>{ts("items.flutter.description")}</p>
          </div>
        </div>


        {/* 11 */}
        <div className="service-card service-card-blue">
          <div className="service-card-top">
            <span>11</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
            <h3>{ts("items.network.title")}</h3>
            <p>{ts("items.network.description")}</p>
          </div>
        </div>


        {/* 12 */}
        <div className="service-card service-card-green">
          <div className="service-card-top">
            <span>12</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
           <h3>{ts("items.security.title")}</h3>
            <p>{ts("items.security.description")}</p>
          </div>
        </div>


        {/* 13 */}
        <div className="service-card service-card-yellow">
          <div className="service-card-top">
            <span>13</span>
            <div className="service-arrow">↗</div>
          </div>

          <div>
           <h3>{ts("items.influencer.title")}</h3>
            <p>{ts("items.influencer.description")}</p>
          </div>
        </div>

      </div>

    </div>
  </section>



{/* 02 - TECHNOLOGY */}

<section id="technology" className="section tech-section">
  <div className="page-width">

    <p className="eyebrow">{ttech("eyebrow")}</p>

    <h2 className="tech-heading">
      {ttech("title")}{" "}
      <span>{ttech("titleHighlight")}</span>
    </h2>

    <p className="section-subtitle">
      {ttech("description")}
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
  {ttech("schedule")} <span>→</span>
</a>

  </div>
</section>



{/* 05 - ENGAGEMENT MODELS */}

<section id="work" className="dark-engagement-section">

  <div className="page-width">

    <div className="dark-engagement-header">

     <p className="dark-eyebrow">
        {teng("eyebrow")}
      </p>

      <h2>
        {teng("title")}{" "}
        <span>{teng("titleHighlight")}</span>
      </h2>

      <p>
        {teng("description")}
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
         <h3>{teng("scale.title")}</h3>

          <h4>{teng("scale.subtitle")}</h4>

          <p>{teng("scale.description")}</p>
        </div>

        <a href="#contact">
          {teng("scale.button")} <span>→</span>
        </a>

      </article>


      {/* LAUNCH */}
      <article className="dark-engagement-card">

        <div className="dark-card-top">
          <span className="dark-card-number">02</span>

          <div className="dark-card-icon">↗</div>
        </div>

        <div>
          <h3>{teng("launch.title")}</h3>

          <h4>{teng("launch.subtitle")}</h4>

          <p>{teng("launch.description")}</p>
        </div>

        <a href="#contact">
          {teng("launch.button")}<span>→</span>
        </a>

      </article>


      {/* FLEXIBLE */}
      <article className="dark-engagement-card">

        <div className="dark-card-top">
          <span className="dark-card-number">03</span>

          <div className="dark-card-icon">↗</div>
        </div>

        <div>
         <h3>{teng("flexible.title")}</h3>

          <h4>{teng("flexible.subtitle")}</h4>

          <p>{teng("flexible.description")}</p>
        </div>

          <a href="#contact">
            {teng("flexible.button")} <span>→</span>
          </a>

      </article>

    </div>

  </div>

</section>



  {/* CONTACT */}

  <section id="contact" className="contact-section">

    <div className="page-width contact-layout">

      <div className="contact-left">

       <p className="eyebrow">{tc("eyebrow")}</p>

      <h2>
        {tc("title")} <span>{tc("titleHighlight")}</span>
      </h2>

        <div className="contact-stats">

          <div className="contact-stat">
            <div className="stat-icon">✦</div>
            <div>
            <h3>
              <CountUp end={3} duration={1800} /> {tc("experience")}
            </h3>
            <p>{tc("experienceDescription")}</p>
            </div>
          </div>

          <div className="contact-stat">
            <div className="stat-icon">☺</div>
            <div>
           <h3>
            <CountUp end={700} duration={2200} /> {tc("clients")}
          </h3>
          <p>{tc("clientsDescription")}</p>
            </div>
          </div>

          <div className="contact-stat">
            <div className="stat-icon">▣</div>
            <div>
             <h3>
              <CountUp end={500} duration={2600} /> {tc("projects")}
            </h3>
            <p>{tc("projectsDescription")}</p>
            </div>
          </div>

          <div className="contact-stat">
            <div className="stat-icon">♧</div>
            <div>
             <h3>
                <CountUp end={25} duration={1800} /> {tc("professionals")}
              </h3>
              <p>{tc("professionalsDescription")}</p>
            </div>
          </div>

        </div>

      </div>


    <div className="contact-form-card">

      <h2>{tc("formTitle")}</h2>

      <form className="contact-form" onSubmit={handleSubmit}>

  <div className="form-group">
    <label htmlFor="fullName">{tc("fullName")}</label>

    <input
      id="fullName"
      type="text"
      value={formData.fullName}
      onChange={handleChange}
      required
    />
  </div>


  <div className="form-group">
    <label htmlFor="email">{tc("email")}</label>

    <input
      id="email"
      type="email"
      value={formData.email}
      onChange={handleChange}
      required
    />
  </div>


  <div className="form-group">
    <label htmlFor="mobile">{tc("mobile")}</label>

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
      placeholder={tc("mobilePlaceholder")}
      value={formData.mobile}
      onChange={handleChange}
      required
    />

    </div>
  </div>


  <div className="form-group">
    <label htmlFor="industry">{tc("industry")}</label>

    <input
      id="industry"
      type="text"
      value={formData.industry}
      onChange={handleChange}
      required
    />
  </div>


  <div className="form-group message-group">
    <label htmlFor="message">{tc("message")}</label>

    <textarea
      id="message"
      placeholder={tc("messagePlaceholder")}
      value={formData.message}
      onChange={handleChange}
      required
    ></textarea>
  </div>


<p className="privacy-note">
  <strong>{tc("note")}</strong> {tc("privacyNote")}
</p>

<button type="submit" className="form-submit">
  {tc("schedule")} <span>→</span>
</button>

</form>

    </div>

  </div>

</section>

<footer className="blackryce-footer">

  <div className="blackryce-footer-content page-width">

    {/* BRAND */}
    <div className="footer-brand">

      <div className="blackryce-logo">
        BLACKRYCE
        <span>TECHNOLOGIES LLP</span>
      </div>

      <p className="blackryce-tagline">
        {tf("tagline")}
      </p>

     <p className="blackryce-description">
        {tf("description")}
      </p>

      <h3>{tf("social")}</h3>

      <div className="blackryce-social-links">
  <a href="https://www.facebook.com/blackryce" aria-label="Facebook">
    f
  </a>

  <a
    href="https://www.instagram.com/blackryce_technologies"
    aria-label="Instagram"
  >
    <img src="/tech-logos/download-white.png" alt="Instagram" />
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

      <h3>{tf("quickLinks")}</h3>

      <div className="footer-link-list">
       <a href="#top">{tf("home")}</a>
        <a href="#services">{tf("services")}</a>
        <a href="#technology">{tf("technology")}</a>
        <a href="#industries">{tf("industries")}</a>
        <a href="#work">{tf("work")}</a>
        <a href="#contact">{tf("contact")}</a>
      </div>

    </div>


    {/* SERVICES */}
    <div className="footer-services">

     <h3>{tf("servicesTitle")}</h3>

      <div className="footer-service-list">
  <a href="#services">{ts("items.website.title")}</a>
  <a href="#services">{ts("items.corporate.title")}</a>
  <a href="#services">{ts("items.ecommerce.title")}</a>
  <a href="#services">{ts("items.uiux.title")}</a>
  <a href="#services">{ts("items.responsive.title")}</a>
  <a href="#services">{ts("items.crm.title")}</a>
  <a href="#services">{ts("items.seo.title")}</a>
  <a href="#services">{ts("items.performance.title")}</a>
  <a href="#services">{ts("items.software.title")}</a>
</div>

    </div>


    {/* CONTACT */}
   <div className="footer-contact">

  <h3>{tf("contactTitle")}</h3>

  <h4>{tf("country")}</h4>

  <p>{tf("address")}</p>

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
  {tf("copyright")} <br />
</span>
     
  <div>
  <Link href="/privacy-policy">{tf("privacyPolicy")}</Link>
  <Link href="/terms-condition">{tf("terms")}</Link>
  </div>
</div>

</footer>


    </main>
  );
}

