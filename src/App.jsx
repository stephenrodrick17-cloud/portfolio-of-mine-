import { useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Award,
  Check,
  Code2,
  Dna,
  ExternalLink,
  FlaskConical,
  Mail,
  Menu,
  Microscope,
  MoveUpRight,
  ScanLine,
  Sparkles,
  X,
} from "lucide-react";
import ProjectDetail from "./ProjectDetail.jsx";
import { projects } from "./projects.js";

const featuredProjects = projects.slice(0, 4);

function CursorFlow() {
  const flowRef = useRef(null);

  useEffect(() => {
    const flow = flowRef.current;
    const hasFinePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!flow || !hasFinePointer || prefersReducedMotion) return;

    let lastPoint = null;
    let lastDropAt = 0;

    const handlePointerMove = (event) => {
      if (event.pointerType !== "mouse") return;

      const point = { x: event.clientX, y: event.clientY };
      if (!lastPoint) {
        lastPoint = point;
        return;
      }

      const dx = point.x - lastPoint.x;
      const dy = point.y - lastPoint.y;
      const distance = Math.hypot(dx, dy);
      const now = performance.now();
      if (distance < 14 || now - lastDropAt < 42) return;

      const drift = Math.min(distance, 32);
      const drop = document.createElement("span");
      drop.className = "cursor-drop";
      drop.style.left = `${point.x}px`;
      drop.style.top = `${point.y}px`;
      drop.style.setProperty("--drop-angle", `${Math.atan2(dy, dx) * (180 / Math.PI) + 90}deg`);
      drop.style.setProperty("--drop-drift-x", `${(-dx / distance) * drift}px`);
      drop.style.setProperty("--drop-drift-y", `${(-dy / distance) * drift}px`);
      flow.appendChild(drop);
      const cleanupTimer = window.setTimeout(() => drop.remove(), 900);
      drop.addEventListener("animationend", () => {
        window.clearTimeout(cleanupTimer);
        drop.remove();
      }, { once: true });

      while (flow.childElementCount > 14) {
        if (flow.firstElementChild) flow.firstElementChild.remove();
      }

      lastPoint = point;
      lastDropAt = now;
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, []);

  return <div className="cursor-flow" ref={flowRef} aria-hidden="true" />;
}

const experience = [
  {
    date: "SEP 2026 — NOW",
    role: "Research Intern · Bioinformatician",
    place: "CSIR — Central Leather Research Institute",
    detail:
      "Investigating peritoneal fibrosis through literature review, biomarker discovery, and analysis of experimental data.",
    tag: "FIBROSIS RESEARCH",
  },
  {
    date: "MAY — JUL 2026",
    role: "Summer Research Intern",
    place: "Ramakrishna Mission Vidyamandira",
    detail:
      "Applied computational biology across sequence analysis, protein structure modelling, phylogenetics, and molecular docking.",
    tag: "COMPUTATIONAL BIOLOGY",
  },
  {
    date: "JUN — JUL 2025",
    role: "Summer Intern",
    place: "National Institute of Technology Andhra Pradesh",
    detail:
      "Explored cerium nanoparticle synthesis and characterization, with hands-on exposure to SEM, TEM, and FTIR workflows.",
    tag: "NANOBIOTECHNOLOGY",
  },
];

const linkedin = "https://www.linkedin.com/in/stephenrodrick";

const recognitions = [
  {
    award: "1st place · AI-assisted MRI Ideathon",
    org: "VM Smart Idea Hackathon · Vel Tech Multi Tech",
    detail: "Recognised at the VM Smart Idea Hackathon for an AI-assisted MRI ideathon entry.",
    year: "2026",
    url: "https://www.linkedin.com/posts/stephenrodrick_biotechnology-hackathon-innovation-activity-7430939239900487680-FWJf",
  },
  {
    award: "3rd place · GEMINI.EXE Championship",
    org: "NeuroVision AI · TrishulX",
    detail: "NeuroVision AI earned third place in the GEMINI.EXE Championship.",
    year: "2026",
    url: "https://www.linkedin.com/posts/stephenrodrick_hackathon-ai-innovation-activity-7459289825876062208-yDVm",
  },
  {
    award: "1st place · Circuit Craze",
    org: "TEXUS'25 · SRMIST Ramapuram",
    detail: "Placed first in Circuit Craze at TEXUS'25, hosted at SRMIST Ramapuram.",
    year: "2025",
    url: linkedin,
  },
  {
    award: "2nd place · SARAM Project Expo",
    org: "Underwater Rover · SRMIST Ramapuram",
    detail: "The Underwater Rover project placed second at the SARAM Project Expo.",
    year: "2025",
    url: linkedin,
  },
  {
    award: "3rd place · Vazhitheer Road Safety Hackathon",
    org: "Team Geo Visionaries · Shaastra / IIT Madras",
    detail: "Third place with Team Geo Visionaries at the Vazhitheer Road Safety Hackathon.",
    year: "2025",
    url: linkedin,
  },
  {
    award: "Semi-finalist · Uzhavu Hackathon",
    org: "Crop Connect · NAF / Shaastra",
    detail: "Crop Connect advanced to the semi-finals of the Uzhavu Hackathon.",
    year: "2025",
    url: linkedin,
  },
  {
    award: "Runner-up · Bio-Hackathon",
    org: "Bio-Nauts · SRMIST Ramapuram",
    detail: "Runner-up with Bio-Nauts at the SRMIST Ramapuram Bio-Hackathon.",
    year: "2024",
    url: linkedin,
  },
  {
    award: "Runner-up · Cyber Carnival",
    org: "Computer Science department presentation",
    detail: "Runner-up in the Computer Science department presentation at Cyber Carnival.",
    year: "2025",
    url: linkedin,
  },
  {
    award: "2nd place · Biomedical Engineering Ideathon",
    org: "BIORGANZA'24 · SRMIST Ramapuram",
    detail: "Placed second at the Biomedical Engineering Ideathon during BIORGANZA'24.",
    year: "2024",
    url: linkedin,
  },
];

const linkedinHighlights = [
  {
    date: "30 OCT 2026",
    kind: "PATENT APPLICATION · OPTICNOVA",
    title: "Ophthalmic patent application published",
    copy:
      "Application 202641126774 A appeared in Indian Patent Office Journal 44/2026. The post names SRMIST Ramapuram and Easwari Engineering College as applicants; publication is not a grant.",
    url: "https://www.linkedin.com/posts/stephenrodrick_indian-patent-office-journal-no-442026-activity-7522321219292176384-nt2S",
  },
  {
    date: "2026",
    kind: "RESEARCH · ICEST",
    title: "Cerium-oxide research at ICEST 2026",
    copy:
      "Presented the Hibiscus-assisted, iron-doped cerium-oxide study; the LinkedIn post says the paper appeared in the conference souvenir as CP104.",
    url: "https://www.linkedin.com/posts/stephenrodrick_research-nanotechnology-greensynthesis-activity-7457705824430342144-j5b8",
  },
  {
    date: "2026",
    kind: "RECOGNITION · NEUROVISION AI",
    title: "3rd place at the GEMINI.EXE Championship",
    copy:
      "The post records NeuroVision AI's third-place finish in the TrishulX-organised championship after an 11-hour hackathon.",
    url: "https://www.linkedin.com/posts/stephenrodrick_hackathon-ai-innovation-activity-7459289825876062208-yDVm",
  },
  {
    date: "SUMMER 2026",
    kind: "INTERNSHIP · RAMAKRISHNA MISSION VIDYAMANDIRA",
    title: "Bioinformatics & Structural Biology internship completed",
    copy:
      "The post thanks Dr. Dipendu Sarkar, Department of Microbiology, and the Summer Internship Cell for their guidance.",
    url: "https://www.linkedin.com/posts/stephenrodrick_bioinformatics-structuralbiology-computationalbiology-activity-7480243913421692928-xNiv",
  },
  {
    date: "2026",
    kind: "RESEARCH PRESENTATION · SHAASTRA / IIT MADRAS",
    title: "Selected to present at ICON 26",
    copy:
      "Shared a research presentation at the International Research Conference on Smart Manufacturing, conducted by Shaastra at IIT Madras.",
    url: "https://www.linkedin.com/posts/stephenrodrick_researchjourney-studentresearch-shaastra-activity-7423469401884241920-KeCR",
  },
  {
    date: "2026",
    kind: "PROJECT PRESENTATION · NEUROVISION AI",
    title: "Presented the MRI analysis project at Project Day",
    copy:
      "The post describes a prototype combining MRI preprocessing, heatmap visualisation, segmentation, and YOLO-based detection.",
    url: "https://www.linkedin.com/posts/stephenrodrick_artificialintelligence-medicalimaging-activity-7424514677813960704-1rya",
  },
  {
    date: "FEB 2026",
    kind: "WINNER · VM SMART IDEA HACKATHON",
    title: "1st place for an AI-assisted MRI ideathon",
    copy:
      "LinkedIn's honors entry describes the winning end-to-end brain-MRI analysis framework; SRM's post dates the VM Smart Idea Hackathon to 19–20 February.",
    url: "https://www.linkedin.com/posts/stephenrodrick_biotechnology-hackathon-innovation-activity-7430939239900487680-FWJf",
  },
  {
    date: "2026",
    kind: "HACKATHON BUILD · IGNITE'26",
    title: "Blockchain-based ticket verification prototype",
    copy:
      "Built in an eight-hour hackathon at Easwari Engineering College, with QR verification, Polygon, SMS checks, and multilingual support.",
    url: "https://www.linkedin.com/posts/stephenrodrick_hackathon-blockchain-python-activity-7442299875108696064-HB2a",
  },
  {
    date: "2026",
    kind: "SOCIAL-IMPACT BUILD",
    title: "Grama Vaani · voice-enabled community platform",
    copy:
      "A post describes a voice-first concept for rural information sharing and access to essential services, designed around low-literacy and low-connectivity contexts.",
    url: "https://www.linkedin.com/posts/stephenrodrick_promptwars-hack2skill-aiforgood-activity-7453888840227782656-i8iF",
  },
];

const filters = ["All work", ...new Set(featuredProjects.map((project) => project.category))];

function SectionHeading({ index, label, title, copy }) {
  return (
    <div className="section-heading">
      <div className="section-index mono">
        <span>{index}</span>
        <span className="index-rule" />
        <span>{label}</span>
      </div>
      <div className="section-title-wrap">
        <h2>{title}</h2>
        {copy && <p>{copy}</p>}
      </div>
    </div>
  );
}

function ProjectGraphic({ type, number }) {
  return (
    <div className={`project-graphic graphic-${type}`} aria-hidden="true">
      <span className="graphic-index mono">FIELD NOTE / {number}</span>
      {type === "network" && (
        <svg viewBox="0 0 360 200" className="network-art">
          <g className="network-lines">
            <path d="M37 139 90 72 140 119 188 42 236 91 305 51" />
            <path d="M37 139 108 155 140 119 202 158 236 91 301 140" />
            <path d="M90 72 108 155M188 42 202 158M305 51 301 140" />
          </g>
          {[[37, 139], [90, 72], [140, 119], [188, 42], [236, 91], [305, 51], [108, 155], [202, 158], [301, 140]].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r={i === 2 || i === 4 ? 5 : 3.2} />
          ))}
          <circle className="network-halo" cx="188" cy="42" r="20" />
        </svg>
      )}
      {type === "scan" && (
        <div className="scan-art">
          <div className="scan-ring ring-one" />
          <div className="scan-ring ring-two" />
          <div className="scan-crosshair" />
          <div className="scan-brain">
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <span className="scan-coordinate mono">MRI / AXIAL 04</span>
        </div>
      )}
      {type === "optic" && (
        <div className="optic-art">
          <div className="optic-orbit orbit-a" />
          <div className="optic-orbit orbit-b" />
          <div className="optic-core"><ScanLine size={30} strokeWidth={1} /></div>
          <span className="optic-label optic-label-a mono">CDR 0.62</span>
          <span className="optic-label optic-label-b mono">DISC / CUP</span>
        </div>
      )}
      {type === "brain" && (
        <div className="brain-art">
          <Dna size={90} strokeWidth={0.75} />
          <span className="brain-ring" />
          <span className="brain-ring ring-offset" />
          <span className="brain-label mono">NEURO / DATA</span>
        </div>
      )}
      {type === "water" && (
        <div className="water-art">
          <div className="water-disc"><span /><span /><span /><span /><span /></div>
          <div className="water-ripple ripple-a" />
          <div className="water-ripple ripple-b" />
          <span className="water-label mono">BIOFILTER / 01</span>
        </div>
      )}
      {type === "molecule" && (
        <div className="molecule-art">
          <FlaskConical size={68} strokeWidth={0.8} />
          <span className="molecule-orb orb-a" />
          <span className="molecule-orb orb-b" />
          <span className="molecule-orb orb-c" />
          <span className="molecule-label mono">CeO₂ · Fe</span>
        </div>
      )}
      <span className="graphic-corner">{number}</span>
    </div>
  );
}

function App() {
  const [activeFilter, setActiveFilter] = useState("All work");
  const [menuOpen, setMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [expandedRecognition, setExpandedRecognition] = useState(null);
  const [projectSlug, setProjectSlug] = useState(() => {
    const match = window.location.hash.match(/^#project\/(.+)$/);
    return match ? match[1] : "";
  });
  const visibleProjects = activeFilter === "All work"
    ? featuredProjects
    : featuredProjects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const updateProjectRoute = () => {
      const match = window.location.hash.match(/^#project\/(.+)$/);
      setProjectSlug(match ? match[1] : "");
      if (match) window.scrollTo({ top: 0, behavior: "instant" });
    };
    window.addEventListener("hashchange", updateProjectRoute);
    return () => window.removeEventListener("hashchange", updateProjectRoute);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("main > section");
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!sections.length || prefersReducedMotion || !("IntersectionObserver" in window)) return;

    document.documentElement.classList.add("motion-ready");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -8% 0px" });

    sections.forEach((section) => {
      section.classList.add("scroll-reveal");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("motion-ready");
      sections.forEach((section) => section.classList.remove("scroll-reveal", "is-visible"));
    };
  }, [projectSlug]);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("sr5145@srmist.edu.in");
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch (error) {
      window.location.href = "mailto:sr5145@srmist.edu.in";
    }
  };

  const closeMenu = () => setMenuOpen(false);
  const selectedProject = featuredProjects.find((project) => project.slug === projectSlug);

  if (selectedProject) {
    return (
      <>
        <CursorFlow />
        <ProjectDetail key={selectedProject.slug} project={selectedProject} projects={featuredProjects} />
      </>
    );
  }

  return (
    <>
      <CursorFlow />
      <div className="grain" aria-hidden="true" />
      <header className="topbar">
        <a className="wordmark" href="#home" aria-label="Stephen Rodrick, home">
          <span className="wordmark-mark">S<span>R</span></span>
          <span className="wordmark-name">STEPHEN RODRICK</span>
        </a>
        <nav className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#work" onClick={closeMenu}>Selected work</a>
          <a href="#journey" onClick={closeMenu}>Journey</a>
          <a href="#updates" onClick={closeMenu}>Updates</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span className="availability-dot" /> OPEN TO OPPORTUNITIES
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main>
        <section className="hero page-grid" id="home">
          <div className="hero-copy">
            <div className="eyebrow mono"><span className="eyebrow-line" /> BIOTECHNOLOGY × INTELLIGENCE</div>
            <h1>Biology,<br />with a <span>new lens.</span></h1>
            <p className="hero-description">
              I’m Stephen—a biotechnology researcher exploring how computational thinking can make sense of life’s most complex systems.
            </p>
            <div className="hero-actions">
              <a className="button button-light" href="#work">Explore selected work <ArrowDownRight size={16} /></a>
              <a className="text-link" href="#about">A little about me <ArrowRight size={15} /></a>
            </div>
            <div className="hero-location mono"><span>13°01' N</span><span className="coord-separator">/</span><span>CHENNAI, INDIA</span></div>
          </div>

          <div className="hero-art" aria-label="Abstract scientific visualization">
            <div className="art-topline mono"><span>FIG. 01</span><span>INTERDISCIPLINARY BY DESIGN</span></div>
            <div className="hero-orbit orbit-large" />
            <div className="hero-orbit orbit-medium" />
            <div className="hero-orbit orbit-small" />
            <div className="hero-core">
              <div className="hero-core-inner">
                <Dna size={83} strokeWidth={0.7} />
              </div>
            </div>
            <span className="orbit-dot dot-one" />
            <span className="orbit-dot dot-two" />
            <span className="orbit-dot dot-three" />
            <span className="art-coordinate mono coord-one">BIO / 09</span>
            <span className="art-coordinate mono coord-two">DATA / 35</span>
            <span className="art-coordinate mono coord-three">AI / 26</span>
            <div className="art-caption mono"><span>FIG 01 — RESEARCH IN MOTION</span><span>∞</span></div>
          </div>

          <div className="hero-bottom">
            <span className="mono">CURRENTLY STUDYING AT SRM IST</span>
            <a href="#about" aria-label="Scroll to about section"><ArrowDown size={17} /></a>
            <span className="mono">SCROLL TO DISCOVER</span>
          </div>
        </section>

        <section className="intro-section page-grid" id="about">
          <SectionHeading index="01" label="THE APPROACH" title={<>Curiosity is my<br /><em>favorite instrument.</em></>} />
          <div className="intro-body">
            <p className="intro-lead">
              I work where <span>biology meets computation</span>—turning messy, meaningful data into questions we can answer.
            </p>
            <p className="intro-detail">
              From transcriptomic signatures in fibrosis to explainable models for medical imaging, I’m drawn to research that bridges rigorous science and real-world impact. Currently pursuing a B.Tech in Biotechnology at SRM Institute of Science and Technology.
            </p>
            <div className="focus-list">
              <span><Dna size={15} /> BIOINFORMATICS</span>
              <span><ScanLine size={15} /> MEDICAL AI</span>
              <span><Microscope size={15} /> TRANSLATIONAL RESEARCH</span>
            </div>
          </div>
          <div className="stat-block">
            <div className="stat-big">9.35<span>/10</span></div>
            <div className="stat-caption mono">ACADEMIC CGPA<br />B.TECH · BIOTECHNOLOGY</div>
            <span className="stat-cross">+</span>
          </div>
          <div className="intro-foot mono"><span>SRM INSTITUTE OF SCIENCE AND TECHNOLOGY</span><span>CLASS OF 2027</span></div>
        </section>

        <section className="work-section page-grid" id="work">
          <SectionHeading
            index="02"
            label="SELECTED WORK"
            title={<>Research, with<br /><em>room to wonder.</em></>}
            copy="A selection of ideas I’ve been building, testing, and learning from."
          />
          <div className="filter-row" role="group" aria-label="Filter projects">
            {filters.map((filter) => (
              <button
                className={activeFilter === filter ? "filter-button active" : "filter-button"}
                key={filter}
                onClick={() => setActiveFilter(filter)}
                aria-pressed={activeFilter === filter}
              >
                {filter}
                {activeFilter === filter && <span className="filter-dot" />}
              </button>
            ))}
            <span className="project-count mono">{String(visibleProjects.length).padStart(2, "0")} PROJECTS</span>
          </div>
          <div className="project-grid">
            {visibleProjects.map((project) => (
              <a className="project-card" href={`#project/${project.slug}`} key={project.slug}>
                <ProjectGraphic type={project.visual} number={project.number} />
                <div className="project-meta mono"><span>{project.category.toUpperCase()}</span><span>{project.date}</span></div>
                <div className="project-title-row">
                  <h3>{project.title}</h3>
                  <span className="project-arrow"><ArrowUpRight size={18} /></span>
                </div>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">{project.tags.map((tag) => <span className="mono" key={tag}>{tag}</span>)}</div>
                <div className="project-metric"><span className="metric-value">{project.metric}</span><span className="mono">{project.metricLabel}</span></div>
              </a>
            ))}
          </div>
          <div className="work-note mono"><Sparkles size={14} /> EVERY GOOD RESULT STARTS WITH A BETTER QUESTION.</div>
        </section>

        <section className="journey-section page-grid" id="journey">
          <SectionHeading
            index="03"
            label="THE JOURNEY"
            title={<>Learning by<br /><em>getting closer.</em></>}
            copy="A few places, people, and projects that have shaped how I think."
          />
          <div className="journey-content">
            <div className="journey-column">
              <div className="subsection-title mono"><span>01 / EXPERIENCE</span><span className="subsection-line" /></div>
              {experience.map((item, index) => (
                <article className="experience-item" key={item.place}>
                  <div className="experience-marker"><span>{String(index + 1).padStart(2, "0")}</span></div>
                  <div className="experience-content">
                    <div className="experience-date mono">{item.date}</div>
                    <h3>{item.role}</h3>
                    <div className="experience-place">{item.place}</div>
                    <p>{item.detail}</p>
                    <span className="experience-tag mono">{item.tag}</span>
                  </div>
                </article>
              ))}
              <div className="subsection-title awards-heading mono"><span>02 / RECOGNITION</span><span className="subsection-line" /></div>
              <div className="recognition-list">
                {recognitions.map((item, index) => {
                  const [placement, title] = item.award.split(" · ");
                  const isExpanded = expandedRecognition === item.award;
                  const itemNumber = String(index + 1).padStart(2, "0");
                  const totalItems = String(recognitions.length).padStart(2, "0");

                  return (
                    <article
                      className={`recognition-item${index === 0 ? " is-featured" : ""}${isExpanded ? " is-expanded" : ""}`}
                      key={item.award}
                    >
                      <button
                        className="recognition-card"
                        type="button"
                        aria-label={`${isExpanded ? "Hide" : "Show"} details for ${item.award}`}
                        aria-expanded={isExpanded}
                        onClick={() => setExpandedRecognition(isExpanded ? null : item.award)}
                      >
                        <span className="recognition-index mono">{itemNumber} / {totalItems}</span>
                        <span className="recognition-place">{placement}</span>
                        <span className="recognition-card-copy">
                          <span className="recognition-year mono">{item.year}{index === 0 ? " · FEATURED WIN" : ""}</span>
                          <h4>{title}</h4>
                          <span className="recognition-org">{item.org}</span>
                        </span>
                        <span className="recognition-mark" aria-hidden="true"><Award size={20} /></span>
                      </button>
                      <div className="recognition-detail">
                        <div className="recognition-detail-content">
                          <p>{item.detail}</p>
                          <a href={item.url} target="_blank" rel="noreferrer">
                            {item.url === linkedin ? "View LinkedIn profile" : "View post"}
                            <ArrowUpRight size={14} aria-hidden="true" />
                          </a>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
              <p className="recognition-note">
                The LinkedIn Vazhitheer entry heading says “2nd”; its certificate description says “Third Place,” matching the résumé. The portfolio uses the certificate description.
              </p>
            </div>
            <aside className="journey-aside">
              <div className="subsection-title mono"><span>03 / EDUCATION</span><span className="subsection-line" /></div>
              <article className="education-card">
                <span className="education-year mono">2023 — 2027</span>
                <div className="education-symbol"><FlaskConical size={24} strokeWidth={1} /></div>
                <h3>B.Tech, Biotechnology</h3>
                <p>SRM Institute of Science and Technology<br />Ramapuram, Chennai</p>
                <div className="education-grade"><span className="mono">CURRENT CGPA</span><strong>9.35</strong></div>
              </article>
              <div className="patent-card">
                <div className="patent-heading"><span className="patent-icon"><Sparkles size={15} /></span><span className="mono">PUBLISHED PATENT APPLICATION</span></div>
                <h3>AI-powered ophthalmic diagnostics</h3>
                <p>Automated fundus analysis, biomarker quantification, and disease severity classification.</p>
                <span className="patent-date mono">INDIAN PATENT OFFICE · 2026</span>
              </div>
              <div className="publication-note">
                <span className="mono">ALSO IN PRINT</span>
                <p>Algae Based Biofilter System for Greywater Purification</p>
                <span className="mono">IJSDR · 2025</span>
              </div>
            </aside>
          </div>
        </section>

        <section className="updates-section page-grid" id="updates">
          <SectionHeading
            index="04"
            label="FROM LINKEDIN"
            title={<>Recent work,<br /><em>in your words.</em></>}
            copy="Selected public posts and profile honors, linked to their original LinkedIn sources."
          />
          <div className="updates-grid">
            {linkedinHighlights.map((item) => (
              <a className="update-card" href={item.url} target="_blank" rel="noreferrer" key={item.title}>
                <div className="update-meta mono"><span>{item.kind}</span><time>{item.date}</time></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <span className="update-source mono">OPEN LINKEDIN POST <ExternalLink size={12} /></span>
              </a>
            ))}
          </div>
          <a className="updates-profile-link mono" href={linkedin} target="_blank" rel="noreferrer">
            VIEW ALL PUBLIC POSTS <ExternalLink size={13} />
          </a>
        </section>

        <section className="toolkit-section page-grid">
          <div className="toolkit-heading">
            <div className="section-index mono"><span>05</span><span className="index-rule" /><span>THE TOOLKIT</span></div>
            <h2>Fluent in <em>both.</em></h2>
            <p>Comfortable moving from biological questions to computational tools—and back again.</p>
          </div>
          <div className="toolkit-lists">
            <div className="toolkit-group"><span className="mono">COMPUTATION</span><p>Python <i>·</i> PyTorch <i>·</i> TensorFlow <i>·</i> OpenCV <i>·</i> Scikit-learn <i>·</i> Pandas <i>·</i> NumPy</p></div>
            <div className="toolkit-group"><span className="mono">BIOLOGY & DATA</span><p>Transcriptomics <i>·</i> Protein modelling <i>·</i> Phylogenetics <i>·</i> Molecular docking <i>·</i> GEO analysis <i>·</i> PPI networks</p></div>
            <div className="toolkit-group"><span className="mono">RESEARCH</span><p>Statistical analysis <i>·</i> Literature review <i>·</i> Medical image processing <i>·</i> Scientific communication</p></div>
          </div>
          <div className="toolkit-index mono"><span>TOOLS ARE A STARTING POINT.</span><span>GOOD QUESTIONS DO THE REST.</span></div>
        </section>

        <section className="contact-section page-grid" id="contact">
          <div className="contact-orbit" aria-hidden="true"><div /><span /><span /></div>
          <div className="contact-copy">
            <div className="section-index mono"><span>06</span><span className="index-rule" /><span>LET’S CONNECT</span></div>
            <h2>Have a question<br />worth <em>exploring?</em></h2>
            <p>I’m always glad to meet curious people working across biology, technology, and research.</p>
            <a className="button button-light contact-button" href="mailto:sr5145@srmist.edu.in">Say hello <ArrowUpRight size={16} /></a>
          </div>
          <div className="contact-details">
            <span className="mono">FIND ME HERE</span>
            <button className="contact-link" onClick={copyEmail}>
              <span className="contact-link-icon">{copied ? <Check size={17} /> : <Mail size={17} />}</span>
              <span>{copied ? "Email copied" : "sr5145@srmist.edu.in"}</span>
              <MoveUpRight size={14} />
            </button>
            <a className="contact-link muted-link" href={linkedin} target="_blank" rel="noreferrer">
              <span className="contact-link-icon"><ArrowUpRight size={17} /></span>
              <span>Connect on LinkedIn</span>
              <ExternalLink size={14} />
            </a>
            <a className="contact-link muted-link" href="https://github.com/stephenrodrick17-cloud" target="_blank" rel="noreferrer">
              <span className="contact-link-icon"><Code2 size={17} /></span>
              <span>Explore my GitHub</span>
              <ExternalLink size={14} />
            </a>
            <span className="contact-note mono">CHENNAI, INDIA · UTC +5:30</span>
          </div>
        </section>
      </main>

      <footer className="footer page-grid">
        <a className="wordmark footer-mark" href="#home"><span className="wordmark-mark">S<span>R</span></span><span className="wordmark-name">STEPHEN RODRICK</span></a>
        <span className="footer-note mono">BUILT AROUND CURIOSITY.</span>
        <a className="back-top mono" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a>
        <span className="footer-copy mono">© 2026 · ALL THOUGHTS IN PROGRESS.</span>
      </footer>
    </>
  );
}

export default App;
