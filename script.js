
/* ==========================================
   MD ASIB HOSSAIN — PORTFOLIO
   Replace the profile image URL and social links.
========================================== */

const PROFILE_IMAGE_URL =
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=85";

const EMAIL = "asifiqbal14160@gmail.com";

// Replace these demo URLs with your own exact profiles.
const FIVERR_URL = "https://www.fiverr.com/";
const GITHUB_URL = "https://github.com/";

const projects = [
  {
    name: "Kitchen Cabinet Specialist",
    type: "Business Website",
    url: "https://kitchencabinetspecialist.com.au",
    desc: "A service-business website with clear navigation and a professional presentation.",
    tags: ["WordPress", "Responsive", "Web Design"]
  },
  {
    name: "West Coast Pickleball Club",
    type: "Sports & Community",
    url: "https://westcoastpickleballclub.com.au",
    desc: "A community sports website focused on accessible information and a clean layout.",
    tags: ["WordPress", "UI Design", "Mobile"]
  },
  {
    name: "English Lessons Online",
    type: "Education Website",
    url: "https://englishlessons.online",
    desc: "An education-focused web experience with a clear content structure.",
    tags: ["WordPress", "Landing Pages", "UX"]
  },
  {
    name: "Office Clean",
    type: "Service Website",
    url: "https://office-clean.com.au",
    desc: "A service-oriented layout designed to make information and enquiries easy to find.",
    tags: ["Elementor", "Responsive", "Business"]
  },
  {
    name: "Shianpin Tea",
    type: "Product Website",
    url: "https://shianpiintea.com.au",
    desc: "A product-led website with a clean visual direction and product presentation.",
    tags: ["WordPress", "Product UI", "Design"]
  },
  {
    name: "Studio32",
    type: "Creative Website Demo",
    url: "https://studio32.demo-techcilo.com",
    desc: "A creative web demo exploring typography, layout and visual presentation.",
    tags: ["Elementor", "Creative", "UI"]
  },
  {
    name: "FightLab",
    type: "Fitness Website Demo",
    url: "https://fightlab.demo-techcilo.com",
    desc: "A fitness-themed demo with bold visual hierarchy and clear content sections.",
    tags: ["WordPress", "Fitness", "Responsive"]
  },
  {
    name: "XFC",
    type: "Sports Website Demo",
    url: "https://xfc.demo-techcilo.com",
    desc: "A sports-themed demo focused on energetic presentation and structured content.",
    tags: ["Web Design", "Sports", "Elementor"]
  }
];

const app = document.querySelector("#app");
const nav = document.querySelector(".nav");
const menuToggle = document.querySelector(".menu-toggle");

document.body.classList.add("js-ready");
document.querySelector("#year").textContent = new Date().getFullYear();

function projectCards(items) {
  return items.map((p, index) => `
    <article class="card project-card reveal">
      <a href="${p.url}" target="_blank" rel="noopener noreferrer"
         aria-label="Open ${p.name}">
        <div class="project-art">
          <div class="project-window">
            <span>PROJECT / 0${index + 1}</span>
          </div>
        </div>
      </a>
      <div class="project-body">
        <div class="project-top">
          <h3>${p.name}</h3>
          <a class="project-link" href="${p.url}" target="_blank"
             rel="noopener noreferrer" aria-label="Visit project">↗</a>
        </div>
        <p>${p.desc}</p>
        <div class="tags">
          ${p.tags.map(tag => `<span>${tag}</span>`).join("")}
        </div>
      </div>
    </article>
  `).join("");
}

function homePage() {
  return `
  <section class="container hero">
    <div class="hero-copy">
      <span class="eyebrow reveal">Independent Web Designer</span>
      <h1 class="reveal">
        <span>I build</span>
        <span class="gradient">digital</span>
        <span class="outline">experiences.</span>
      </h1>
      <p class="lead reveal">
        Hey, I'm <strong>Md Asib Hossain</strong> — a WordPress &
        Elementor web designer creating modern, responsive websites
        with thoughtful layouts and smooth user experiences.
      </p>
      <div class="btn-row reveal">
        <a class="btn btn-primary" href="#projects">Explore My Work ↗</a>
        <a class="btn" href="#contact">Let's Talk ↗</a>
      </div>
      <div class="hero-note reveal">
        <span class="status-dot"></span>
        WORDPRESS · ELEMENTOR · RESPONSIVE DESIGN
      </div>
    </div>

    <div class="hero-visual" id="heroVisual">
      <div class="orbit"></div>
      <div class="profile-frame" id="profileFrame">
        <div class="profile-fallback">AH</div>
        <img id="profileImage" src="${PROFILE_IMAGE_URL}"
             alt="Md Asib Hossain profile portrait">
      </div>
      <div class="float-tag tag-one">
        <strong>WordPress</strong>Website Design
      </div>
      <div class="float-tag tag-two">
        <strong>Elementor Pro</strong>Custom Layouts
      </div>
      <div class="float-tag tag-three">
        <strong>Responsive</strong>Mobile-first Design
      </div>
    </div>
  </section>

  <div class="container trust reveal">
    <span>My toolkit</span>
    <strong>WordPress</strong>
    <strong>Elementor Pro</strong>
    <strong>WooCommerce</strong>
    <strong>HTML / CSS / JS</strong>
    <strong>Figma to Web</strong>
  </div>

  <section class="container section">
    <div class="section-head reveal">
      <div>
        <span class="eyebrow">What I Do</span>
        <h2>Design that works<br><span class="gradient">for your goals.</span></h2>
      </div>
      <p>Useful, attractive and responsive websites for businesses,
         creators and growing brands.</p>
    </div>
    <div class="grid">
      <article class="card reveal">
        <span class="card-number">01 / DESIGN</span>
        <div class="card-icon">✳</div>
        <h3>WordPress Websites</h3>
        <p>Professional websites with consistent design and practical navigation.</p>
      </article>
      <article class="card reveal">
        <span class="card-number">02 / CONVERT</span>
        <div class="card-icon">↗</div>
        <h3>Landing Pages</h3>
        <p>Focused layouts that guide visitors toward a clear next step.</p>
      </article>
      <article class="card reveal">
        <span class="card-number">03 / COMMERCE</span>
        <div class="card-icon">◇</div>
        <h3>WooCommerce</h3>
        <p>Product and shop layouts designed for a smoother browsing experience.</p>
      </article>
    </div>
  </section>

  <section class="section-small" style="background:#ffffff04;border-block:1px solid var(--line)">
    <div class="container">
      <div class="section-head reveal">
        <div>
          <span class="eyebrow">Selected Work</span>
          <h2>Built for the <span class="gradient">real web.</span></h2>
        </div>
        <a class="btn" href="#projects">View All Projects ↗</a>
      </div>
      <div class="grid">${projectCards(projects.slice(0, 3))}</div>
    </div>
  </section>

  <section class="container section">
    <div class="cta reveal">
      <span class="eyebrow">Have a project in mind?</span>
      <h2>Let's make your next website <span class="gradient">stand out.</span></h2>
      <p class="lead">Tell me about your idea and let's discuss the next step.</p>
      <div class="btn-row">
        <a class="btn btn-primary" href="#contact">Start a Project ↗</a>
        <a class="btn" href="mailto:${EMAIL}">Email Me</a>
      </div>
    </div>
  </section>`;
}

function aboutPage() {
  return `
  <section class="container section">
    <span class="eyebrow reveal">About Me</span>
    <h1 class="reveal">Thoughtful design.<br><span class="gradient">Practical results.</span></h1>

    <div class="split">
      <div class="reveal">
        <p class="lead">I'm Md Asib Hossain, a WordPress and Elementor web designer
        from Bangladesh. I enjoy turning ideas into clean, responsive websites.</p>
        <p>My work focuses on clear structure, consistent styling, responsive
        layouts and a smooth experience across devices. I build business websites,
        landing pages, portfolios and WooCommerce designs.</p>
        <div class="stat-grid">
          <div class="stat"><strong>2+ Years</strong><span>Experience</span></div>
          <div class="stat"><strong>Responsive</strong><span>Design Approach</span></div>
        </div>
      </div>
      <div class="reveal">
        <h3>Skills & Tools</h3>
        <p>Tools I use to create and customize web experiences.</p>
        <div class="skill-list">
          <span>WordPress</span><span>Elementor Pro</span>
          <span>WooCommerce</span><span>HTML5</span><span>CSS3</span>
          <span>JavaScript</span><span>Responsive Design</span>
          <span>Landing Pages</span><span>Theme Customization</span>
          <span>Figma to Web</span><span>Blog Management</span>
        </div>
        <div style="height:24px"></div>
        <h3>My approach</h3>
        <p>Understand the goal, plan the content, create a visual direction,
        build responsively and test the details before handover.</p>
      </div>
    </div>
  </section>

  <section class="section-small" style="border-block:1px solid var(--line)">
    <div class="container">
      <span class="eyebrow reveal">My Process</span>
      <h2 class="reveal">From idea to launch.</h2>
      <div class="process">
        <article class="process-step reveal"><span>STEP 01</span><h3>Discover</h3><p>Understand the goals, audience and project requirements.</p></article>
        <article class="process-step reveal"><span>STEP 02</span><h3>Plan</h3><p>Organize the content, sections and design direction.</p></article>
        <article class="process-step reveal"><span>STEP 03</span><h3>Build</h3><p>Create the website and adapt it for mobile screens.</p></article>
        <article class="process-step reveal"><span>STEP 04</span><h3>Refine</h3><p>Review navigation, spacing and responsive behavior.</p></article>
      </div>
    </div>
  </section>`;
}

function servicesPage() {
  const services = [
    ["01", "WordPress Website Design", "Business websites tailored to your brand, content and goals.", "WordPress · Elementor"],
    ["02", "Elementor Landing Pages", "Focused landing pages with clear hierarchy and calls to action.", "Landing Pages · Responsive"],
    ["03", "WooCommerce Design", "Product layouts and shop pages with consistent visual styling.", "WooCommerce · Product UI"],
    ["04", "Website Redesign", "Refresh outdated layouts with improved structure and mobile behavior.", "Redesign · UI"],
    ["05", "Responsive Fixes", "Fix spacing, typography and layout issues across different screen sizes.", "CSS · Elementor"],
    ["06", "Theme Customization", "Customize existing WordPress pages and themes to fit your requirements.", "WordPress · CSS"]
  ];

  return `
  <section class="container section">
    <span class="eyebrow reveal">Services</span>
    <h1 class="reveal">The right build for<br><span class="gradient">your next move.</span></h1>
    <p class="lead reveal">Practical web design support for businesses, creators and growing brands.</p>
    <div class="grid" style="margin-top:40px">
      ${services.map(s => `
        <article class="card reveal">
          <span class="card-number">${s[0]} / SERVICE</span>
          <div class="card-icon">✳</div>
          <h3>${s[1]}</h3>
          <p>${s[2]}</p>
          <div class="tags" style="margin-top:18px"><span>${s[3]}</span></div>
        </article>
      `).join("")}
    </div>
  </section>
  <section class="container section-small">
    <div class="cta reveal">
      <span class="eyebrow">Need a website?</span>
      <h2>Let's find the <span class="gradient">right approach.</span></h2>
      <p class="lead">Share your idea, reference or current website.</p>
      <div class="btn-row"><a class="btn btn-primary" href="#contact">Discuss Your Project ↗</a></div>
    </div>
  </section>`;
}

function projectsPage() {
  return `
  <section class="container section">
    <span class="eyebrow reveal">Portfolio / Projects</span>
    <h1 class="reveal">Selected work.<br><span class="gradient">Digital experiences.</span></h1>
    <p class="lead reveal">Explore selected website links and design projects. Each card opens its website in a new tab.</p>
    <div class="grid" style="margin-top:40px">${projectCards(projects)}</div>
    <p class="note">Portfolio note: only showcase work you have permission to present. Verify every project link before sharing this site with clients.</p>
  </section>`;
}

function contactPage() {
  return `
  <section class="container section">
    <span class="eyebrow reveal">Contact</span>
    <h1 class="reveal">Have an idea?<br><span class="gradient">Let's talk.</span></h1>

    <div class="contact-layout">
      <div class="reveal">
        <p class="lead">Tell me what you want to build, improve or redesign.
        Include a few details and I'll be able to understand your idea better.</p>

        <div class="contact-links">
          <a class="contact-link" href="mailto:${EMAIL}">
            <div>Email<small>${EMAIL}</small></div><b>↗</b>
          </a>
          <a class="contact-link" href="${FIVERR_URL}" target="_blank" rel="noopener noreferrer">
            <div>Fiverr<small>Freelance profile</small></div><b>↗</b>
          </a>
          <a class="contact-link" href="${GITHUB_URL}" target="_blank" rel="noopener noreferrer">
            <div>GitHub<small>Code and projects</small></div><b>↗</b>
          </a>
        </div>
        <p class="note">Update the Fiverr and GitHub URLs in script.js to your actual profiles.</p>
      </div>

      <form class="contact-form reveal" id="contactForm">
        <div class="field">
          <label for="name">YOUR NAME</label>
          <input id="name" name="name" autocomplete="name" placeholder="Your name" required>
        </div>
        <div class="field">
          <label for="email">EMAIL ADDRESS</label>
          <input id="email" name="email" type="email" autocomplete="email" placeholder="you@example.com" required>
        </div>
        <div class="field">
          <label for="subject">PROJECT TYPE</label>
          <input id="subject" name="subject" placeholder="WordPress, landing page, etc.">
        </div>
        <div class="field">
          <label for="message">YOUR MESSAGE</label>
          <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
        </div>
        <button class="btn btn-primary" type="submit">Prepare Email ↗</button>
        <p class="note">This form opens your email application. It does not store messages on a server.</p>
      </form>
    </div>
  </section>`;
}

const pageTemplates = {
  home: homePage,
  about: aboutPage,
  services: servicesPage,
  projects: projectsPage,
  contact: contactPage
};

function currentRoute() {
  const route = location.hash.replace(/^#\/?/, "").split("?")[0].toLowerCase();
  return pageTemplates[route] ? route : "home";
}

function setupProfileImage() {
  const img = document.querySelector("#profileImage");
  if (!img) return;

  img.addEventListener("error", () => {
    img.style.display = "none";
  }, { once: true });
}

function setupContactForm() {
  const form = document.querySelector("#contactForm");
  if (!form) return;

  form.addEventListener("submit", event => {
    event.preventDefault();

    const data = new FormData(form);
    const subject = encodeURIComponent(
      data.get("subject") || "Portfolio project enquiry"
    );
    const body = encodeURIComponent(
      `Hi Asib,\n\n${data.get("message")}\n\n` +
      `Name: ${data.get("name")}\nEmail: ${data.get("email")}`
    );

    window.location.href =
      `mailto:${EMAIL}?subject=${subject}&body=${body}`;
  });
}

function setupReveal() {
  const elements = document.querySelectorAll(".reveal");

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    elements.forEach(el => observer.observe(el));
  } else {
    elements.forEach(el => el.classList.add("visible"));
  }
}

function setupAnimations() {
  if (!window.gsap) return;

  if (window.ScrollTrigger) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const visual = document.querySelector("#heroVisual");
  const frame = document.querySelector("#profileFrame");
  const orbit = document.querySelector(".orbit");

  if (visual) {
    gsap.fromTo(visual,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );
  }

  if (orbit) {
    gsap.to(orbit, {
      rotateZ: 340,
      duration: 40,
      repeat: -1,
      ease: "none"
    });
  }

  if (frame && visual && matchMedia("(pointer:fine)").matches) {
    visual.addEventListener("mousemove", event => {
      const rect = visual.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      gsap.to(frame, {
        rotateY: x * 13,
        rotateX: y * -10,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 800
      });
    });

    visual.addEventListener("mouseleave", () => {
      gsap.to(frame, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "power3.out"
      });
    });
  }

  if (window.ScrollTrigger) {
    gsap.utils.toArray(".card").forEach(card => {
      gsap.fromTo(card,
        { y: 18, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 92%",
            once: true
          }
        }
      );
    });
  }
}

function renderPage() {
  const route = currentRoute();
  app.innerHTML = pageTemplates[route]();

  document.querySelectorAll("[data-route]").forEach(link => {
    link.classList.toggle("active", link.dataset.route === route);
  });

  nav.classList.remove("open");
  menuToggle.setAttribute("aria-expanded", "false");

  const title = route.charAt(0).toUpperCase() + route.slice(1);
  document.title = `${title} | Md Asib Hossain`;

  window.scrollTo({ top: 0, behavior: "instant" });

  setupProfileImage();
  setupContactForm();
  setupReveal();
  setupAnimations();
}

menuToggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(open));
});

document.addEventListener("click", event => {
  const ambient = document.querySelector(".ambient");

  if (ambient && matchMedia("(pointer:fine)").matches) {
    ambient.style.left = `${event.clientX - 170}px`;
    ambient.style.top = `${event.clientY - 170}px`;
  }
});

window.addEventListener("hashchange", renderPage);

if (!location.hash) {
  history.replaceState(null, "", "#home");
}

renderPage();
