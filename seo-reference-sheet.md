# NEXORACREATIONS — COMPLETE SEO REFERENCE SHEET
# Web Designer | Web Developer | Website Builder | Jaipur
# ============================================================


## ============================================================
## SECTION A: ALT TEXT FOR 5 KEY IMAGES
## ============================================================

### IMAGE 1 — Hero Banner
File:    /assets/hero-web-design-jaipur.jpg
Alt:     "Nexoracreations team working on a custom web design project for a Jaipur-based business — laptop screens showing responsive website layouts"
Use:     Hero section, homepage
Notes:   Load with loading="eager" fetchpriority="high" — this is above the fold

---

### IMAGE 2 — Custom Web Design Service
File:    /assets/custom-web-design-jaipur.jpg
Alt:     "Custom web design mockup created by Nexoracreations for a Jaipur clothing boutique — showing mobile and desktop responsive layouts side by side"
Use:     Services section
Notes:   Load with loading="lazy"

---

### IMAGE 3 — About / Team Photo
File:    /assets/nexoracreations-team-jaipur.jpg
Alt:     "Nexoracreations web design team in their Jaipur studio — two designers reviewing a portfolio website on a large monitor"
Use:     About section
Notes:   Load with loading="lazy"; helps with E-E-A-T signals (real faces, real studio)

---

### IMAGE 4 — Portfolio: Jewellery E-Commerce
File:    /assets/portfolio-jaipur-jewels.jpg
Alt:     "E-commerce website designed by Nexoracreations for Jaipur Jewels — showing a gold-themed product page with jewellery photography on desktop and mobile screens"
Use:     Portfolio section
Notes:   Load with loading="lazy"

---

### IMAGE 5 — Portfolio: Travel Portal
File:    /assets/portfolio-pink-city-travels.jpg
Alt:     "Tourism website for Pink City Travels built by Nexoracreations — homepage featuring Jaipur's Hawa Mahal, tour packages grid, and an online booking form"
Use:     Portfolio section
Notes:   Load with loading="lazy"; Hawa Mahal reference adds local relevance signal

---


## ============================================================
## SECTION B: PAGE-LEVEL META TAGS (All 5 Pages)
## ============================================================

### HOME PAGE (index.html)
Title:       Nexoracreations – Expert Web Designer & Web Developer in Jaipur | Custom Website Builder
Description: Nexoracreations is Jaipur's trusted web designer & web development agency. We build stunning, fast, SEO-optimized websites for businesses across Rajasthan. Get a free quote today!
Canonical:   https://www.nexoracreations.com/

---

### SERVICES PAGE (/services/)
Title:       Web Design & Development Services in Jaipur | Nexoracreations
Description: Explore Nexoracreations' full range of web services in Jaipur: custom web design, website builder packages, e-commerce development, and SEO optimization. Free consultation available.
Canonical:   https://www.nexoracreations.com/services/
H1:          Professional Web Design & Development Services in Jaipur
H2 options:  Custom Web Design | Web Development | Website Builder Packages | E-Commerce | SEO

---

### PORTFOLIO PAGE (/portfolio/)
Title:       Web Design Portfolio — Jaipur Client Projects | Nexoracreations
Description: Browse Nexoracreations' web design portfolio. See the websites we've built for Jaipur businesses — from e-commerce stores to corporate sites and travel portals.
Canonical:   https://www.nexoracreations.com/portfolio/
H1:          Our Web Design Portfolio — Websites Built for Jaipur Businesses
H2 options:  Featured Projects | E-Commerce Websites | Corporate & Business Sites | Client Results

---

### ABOUT PAGE (/about/)
Title:       About Nexoracreations — Jaipur's Trusted Web Design Studio
Description: Meet the team behind Nexoracreations, Jaipur's top-rated web design and development studio. Learn about our process, values, and why local businesses choose us.
Canonical:   https://www.nexoracreations.com/about/
H1:          About Nexoracreations — Web Designers & Developers Based in Jaipur
H2 options:  Who We Are | Our Design Process | Why Choose a Jaipur Web Designer? | Our Values

---

### CONTACT PAGE (/contact/)
Title:       Contact Nexoracreations — Web Designer in Jaipur | Free Quote
Description: Get in touch with Nexoracreations for a free web design quote in Jaipur. Call, email, or fill out our project form. We respond within 24 hours.
Canonical:   https://www.nexoracreations.com/contact/
H1:          Contact Nexoracreations — Start Your Web Design Project in Jaipur
H2 options:  Get a Free Quote | Our Location | Send Us a Message | Talk to Our Team

---


## ============================================================
## SECTION C: JSON-LD SCHEMAS FOR INNER PAGES
## ============================================================

### SERVICES PAGE — Service Schema
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Web Design & Development Services in Jaipur",
  "provider": {
    "@type": "LocalBusiness",
    "name": "Nexoracreations",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    }
  },
  "serviceType": ["Web Design", "Web Development", "Website Builder", "E-Commerce Development", "SEO"],
  "areaServed": "Jaipur, Rajasthan",
  "description": "Professional web design and web development services for businesses in Jaipur and Rajasthan.",
  "url": "https://www.nexoracreations.com/services/"
}
</script>

---

### CONTACT PAGE — ContactPage Schema
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ContactPage",
  "name": "Contact Nexoracreations",
  "description": "Contact Nexoracreations web design studio in Jaipur for a free consultation and project quote.",
  "url": "https://www.nexoracreations.com/contact/",
  "mainEntity": {
    "@type": "LocalBusiness",
    "name": "Nexoracreations",
    "telephone": "+91-XXXXXXXXXX",
    "email": "hello@nexoracreations.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jaipur",
      "addressRegion": "Rajasthan",
      "addressCountry": "IN"
    }
  }
}
</script>

---

### PORTFOLIO PAGE — ItemList Schema
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Nexoracreations Web Design Portfolio — Jaipur Projects",
  "url": "https://www.nexoracreations.com/portfolio/",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Jaipur Jewels E-Commerce Website",
      "description": "Custom jewellery e-commerce store with Razorpay payment integration",
      "url": "https://www.nexoracreations.com/portfolio/jaipur-jewels/"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Pink City Travels — Tourism Portal",
      "description": "Full-featured travel booking website with tour listings and availability calendar",
      "url": "https://www.nexoracreations.com/portfolio/pink-city-travels/"
    }
  ]
}
</script>


## ============================================================
## SECTION D: FAQ SCHEMA (add to homepage for rich results)
## ============================================================

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a website cost in Jaipur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "At Nexoracreations, website prices in Jaipur start from ₹15,000 for a basic business website and go up based on complexity, features, and custom design requirements. Contact us for a free, no-obligation quote."
      }
    },
    {
      "@type": "Question",
      "name": "How long does it take to build a website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A standard business website typically takes 2–4 weeks. Complex projects like e-commerce platforms or custom web applications may take 6–10 weeks. We always provide a clear timeline before starting."
      }
    },
    {
      "@type": "Question",
      "name": "Does Nexoracreations offer SEO services in Jaipur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Nexoracreations provides on-page SEO, technical SEO, and local SEO services specifically for Jaipur and Rajasthan businesses. Every website we build includes foundational SEO as standard."
      }
    },
    {
      "@type": "Question",
      "name": "Can you redesign my existing website?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Absolutely. We specialise in website redesigns — improving design, performance, mobile responsiveness, and SEO without losing your existing content or rankings."
      }
    },
    {
      "@type": "Question",
      "name": "Do you work with clients outside Jaipur?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. While we are based in Jaipur, we work with clients across Rajasthan and all of India. We communicate via video calls, WhatsApp, and email for seamless remote collaboration."
      }
    }
  ]
}
</script>


## ============================================================
## SECTION E: DEPLOYMENT CHECKLIST
## ============================================================

PRE-LAUNCH:
[ ] Replace all placeholder phone numbers with real number
[ ] Replace placeholder address with real Jaipur office address
[ ] Update og:image URL with actual 1200x630px image
[ ] Update all lastmod dates in sitemap.xml
[ ] Add real Google Analytics / Search Console tracking code
[ ] Verify canonical URLs match actual live URLs (no trailing slash inconsistency)
[ ] Test JSON-LD schemas at: https://search.google.com/test/rich-results
[ ] Validate HTML at: https://validator.w3.org/
[ ] Test page speed at: https://pagespeed.web.dev/

POST-LAUNCH:
[ ] Submit sitemap.xml to Google Search Console
[ ] Submit sitemap.xml to Bing Webmaster Tools
[ ] Create Google Business Profile for "Nexoracreations, Jaipur"
[ ] Add business to Justdial, Sulekha, IndiaMART for local citations
[ ] Set up Google Analytics 4
[ ] Verify robots.txt is accessible at /robots.txt
[ ] Confirm no important pages are accidentally blocked in robots.txt
