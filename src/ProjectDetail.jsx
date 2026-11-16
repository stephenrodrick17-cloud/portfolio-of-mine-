import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  Code2,
  Dna,
  ExternalLink,
  FlaskConical,
  Menu,
  ScanLine,
  Sparkles,
  X,
} from "lucide-react";

const artworkIcons = {
  network: Dna,
  scan: ScanLine,
  optic: ScanLine,
  brain: Dna,
  water: Sparkles,
  molecule: FlaskConical,
};

function ProjectImage({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (!project.image || imageFailed) {
    const Icon = artworkIcons[project.visual] || Dna;
    return (
      <div className={`detail-art detail-art-${project.visual}`}>
        <span className="detail-art-label mono">
          {imageFailed ? "PROJECT IMAGE UNAVAILABLE" : "RESEARCH FIELD NOTE"}
        </span>
        <span className="detail-art-orbit detail-art-orbit-a" />
        <span className="detail-art-orbit detail-art-orbit-b" />
        <span className="detail-art-core"><Icon size={64} strokeWidth={0.8} /></span>
        <span className="detail-art-caption mono">{project.organization}</span>
      </div>
    );
  }

  return (
    <figure className="detail-photo">
      <a href={project.imageSource} target="_blank" rel="noreferrer" aria-label={project.imageSourceLabel || "View image source"}>
        <img
          src={project.image}
          alt={project.imageAlt}
          loading="lazy"
          onError={() => setImageFailed(true)}
        />
      </a>
      <figcaption className="mono">
        <span>{project.imageCaption || "PROJECT IMAGE"}</span>
        <a href={project.imageSource} target="_blank" rel="noreferrer">
          {project.imageSourceLabel || "VIEW SOURCE"} <ExternalLink size={12} />
        </a>
      </figcaption>
    </figure>
  );
}

function ProjectDetail({ project, projects }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const [activeFlowStep, setActiveFlowStep] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);
  const tabs = Object.keys(project.tabs);
  const flow = project.flow || [];
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const previousProject = projects[(currentIndex - 1 + projects.length) % projects.length];
  const nextProject = projects[(currentIndex + 1) % projects.length];
  const Icon = artworkIcons[project.visual] || Dna;

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <header className="topbar detail-topbar">
        <a className="wordmark" href="#home" aria-label="Stephen Rodrick, home">
          <span className="wordmark-mark">S<span>R</span></span>
          <span className="wordmark-name">STEPHEN RODRICK</span>
        </a>
        <nav className={menuOpen ? "nav detail-nav nav-open" : "nav detail-nav"} aria-label="Main navigation">
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#work" onClick={() => setMenuOpen(false)}>Selected work</a>
          <a href="#journey" onClick={() => setMenuOpen(false)}>Journey</a>
          <a href="#updates" onClick={() => setMenuOpen(false)}>Updates</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <a className="availability" href="#contact">
          <span className="availability-dot" /> OPEN TO OPPORTUNITIES
        </a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
      </header>

      <main className="detail-page">
        <div className="detail-crumbs page-grid">
          <a href="#work"><ArrowLeft size={14} /> ALL PROJECTS</a>
          <span className="mono">PROJECT FILE / {project.number}</span>
        </div>

        <section className="detail-hero page-grid">
          <div className="detail-hero-copy">
            <div className="eyebrow mono"><span className="eyebrow-line" /> {project.category.toUpperCase()} / {project.period}</div>
            <h1>{project.title}</h1>
            <p>{project.summary}</p>
            <div className="detail-tags">
              {project.tags.map((tag) => <span className="mono" key={tag}>{tag}</span>)}
            </div>
          </div>
          <ProjectImage project={project} />
        </section>

        <section className="detail-body page-grid">
          <div className="detail-story">
            <div className="section-index mono">
              <span>01</span><span className="index-rule" /><span>THE PROJECT</span>
            </div>
            <h2>Work shaped by<br /><em>the question.</em></h2>
            <p className="detail-role">{project.role}</p>

            <div className="detail-tabs" role="tablist" aria-label={`${project.title} project details`}>
              {tabs.map((tab) => (
                <button
                  type="button"
                  id={`tab-${project.slug}-${tab.toLowerCase()}`}
                  role="tab"
                  aria-selected={activeTab === tab}
                  aria-controls={`panel-${project.slug}`}
                  className={activeTab === tab ? "detail-tab active" : "detail-tab"}
                  onClick={() => setActiveTab(tab)}
                  key={tab}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div
              className="detail-tab-panel"
              id={`panel-${project.slug}`}
              role="tabpanel"
              aria-labelledby={`tab-${project.slug}-${activeTab.toLowerCase()}`}
            >
              <div className="detail-panel-label mono"><Icon size={15} /> {activeTab.toUpperCase()} / PROJECT NOTES</div>
              <ul>
                {project.tabs[activeTab].map((item) => <li key={item}>{item}</li>)}
              </ul>
            </div>

            {flow.length > 0 && (
              <section className="detail-flow" aria-label={`${project.title} research workflow`}>
                <div className="detail-flow-heading">
                  <span className="mono">INTERACTIVE WORKFLOW</span>
                  <span className="mono">{String(activeFlowStep + 1).padStart(2, "0")} / {String(flow.length).padStart(2, "0")}</span>
                </div>
                <div
                  className="detail-flow-steps"
                  style={{
                    "--flow-count": flow.length,
                    "--flow-progress": `${flow.length > 1 ? (activeFlowStep / (flow.length - 1)) * 100 : 0}%`,
                  }}
                >
                  {flow.map((step, index) => (
                    <button
                      type="button"
                      className={index === activeFlowStep ? "detail-flow-step active" : "detail-flow-step"}
                      aria-pressed={index === activeFlowStep}
                      aria-label={`Step ${index + 1}: ${step.label}`}
                      onClick={() => setActiveFlowStep(index)}
                      key={step.label}
                    >
                      <span className="detail-flow-node">{String(index + 1).padStart(2, "0")}</span>
                      <span className="detail-flow-label mono">{step.label}</span>
                    </button>
                  ))}
                </div>
                <div className="detail-flow-detail" aria-live="polite">
                  <span className="mono">STEP {String(activeFlowStep + 1).padStart(2, "0")}</span>
                  <div>
                    <strong>{flow[activeFlowStep].label}</strong>
                    <p>{flow[activeFlowStep].detail}</p>
                  </div>
                </div>
              </section>
            )}

            {project.recognition && (
              <a className="detail-recognition" href={project.recognitionUrl || undefined} target={project.recognitionUrl ? "_blank" : undefined} rel={project.recognitionUrl ? "noreferrer" : undefined}>
                <Sparkles size={16} />
                <div>
                  <span className="mono">RECOGNITION / RESEARCH RECORD</span>
                  <p>{project.recognition}</p>
                  {project.recognitionUrl && <span className="detail-recognition-source mono">OPEN LINKEDIN SOURCE <ExternalLink size={11} /></span>}
                </div>
                {project.recognitionUrl && <ExternalLink className="detail-recognition-arrow" size={14} />}
              </a>
            )}
          </div>

          <aside className="detail-sidebar">
            <div className="detail-index-card">
              <span className="mono detail-side-label">WHERE I DID THE WORK</span>
              <div className="detail-org-mark"><FlaskConical size={21} strokeWidth={1} /></div>
              <h3>{project.organization}</h3>
              <p>{project.location}</p>
              <span className="detail-date mono">{project.period}</span>
              {project.organizationUrl && (
                <a className="detail-source-link" href={project.organizationUrl} target="_blank" rel="noreferrer">
                  OFFICIAL INSTITUTE WEBSITE <ExternalLink size={13} />
                </a>
              )}
            </div>

            <div className="detail-metric-card">
              <span className="mono detail-side-label">A POINT OF REFERENCE</span>
              <strong>{project.metric}</strong>
              <span className="mono">{project.metricLabel}</span>
            </div>

            <div className="detail-note-card">
              <span className="mono detail-side-label">SOURCE & CONTEXT</span>
              <p>{project.note}</p>
              {project.githubNote && <p className="github-context">{project.githubNote}</p>}
            </div>
          </aside>
        </section>

        <section className="detail-links page-grid">
          <div>
            <span className="mono">02 / KEEP EXPLORING</span>
            <h2>Follow the <em>work.</em></h2>
          </div>
          <div className="detail-link-list">
            {project.githubUrl ? (
              <a href={project.githubUrl} target="_blank" rel="noreferrer">
                <span className="detail-link-icon"><Code2 size={17} /></span>
                <span>View public repository <small>{project.githubUrl.replace("https://github.com/", "")}</small></span>
                <ExternalLink size={15} />
              </a>
            ) : (
              <a href="https://github.com/stephenrodrick17-cloud" target="_blank" rel="noreferrer">
                <span className="detail-link-icon"><Code2 size={17} /></span>
                <span>Explore my GitHub profile <small>{project.githubNote}</small></span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.demoUrl && (
              <a href={project.demoUrl} target="_blank" rel="noreferrer">
                <span className="detail-link-icon"><ArrowUpRight size={17} /></span>
                <span>Open the live project <small>Hosted project demo</small></span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.linkedinUrl && (
              <a href={project.linkedinUrl} target="_blank" rel="noreferrer">
                <span className="detail-link-icon"><ArrowUpRight size={17} /></span>
                <span>Read the LinkedIn post <small>Public project update or recognition</small></span>
                <ExternalLink size={15} />
              </a>
            )}
            {project.organizationUrl && (
              <a href={project.organizationUrl} target="_blank" rel="noreferrer">
                <span className="detail-link-icon"><FlaskConical size={17} /></span>
                <span>Visit the institution <small>Official institution website</small></span>
                <ExternalLink size={15} />
              </a>
            )}
          </div>
        </section>

        <nav className="detail-project-nav page-grid" aria-label="Browse project details">
          <a href={`#project/${previousProject.slug}`} className="detail-project-link">
            <span className="mono"><ArrowLeft size={13} /> PREVIOUS PROJECT</span>
            <strong>{previousProject.title}</strong>
          </a>
          <a href="#work" className="detail-all-link mono">ALL WORK <ArrowUpRight size={14} /></a>
          <a href={`#project/${nextProject.slug}`} className="detail-project-link next">
            <span className="mono">NEXT PROJECT <ArrowRight size={13} /></span>
            <strong>{nextProject.title}</strong>
          </a>
        </nav>
      </main>

      <footer className="footer page-grid">
        <a className="wordmark footer-mark" href="#home">
          <span className="wordmark-mark">S<span>R</span></span><span className="wordmark-name">STEPHEN RODRICK</span>
        </a>
        <span className="footer-note mono">BUILT AROUND CURIOSITY.</span>
        <a className="back-top mono" href="#home">BACK TO TOP <ArrowUpRight size={13} /></a>
        <span className="footer-copy mono">© 2026 · ALL THOUGHTS IN PROGRESS.</span>
      </footer>
    </>
  );
}

export default ProjectDetail;
