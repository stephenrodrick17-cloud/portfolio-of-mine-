const linkedin = "https://www.linkedin.com/in/stephenrodrick";

export const projects = [
  {
    number: "01",
    slug: "pan-fibrotic-biomarker-discovery",
    title: "Pan-fibrotic biomarker discovery",
    category: "Bioinformatics",
    date: "2026 — NOW",
    description:
      "A multi-organ transcriptomic study of fibrosis signals across 1,069 biopsy samples and 14 public cohorts.",
    tags: ["TRANSCRIPTOMICS", "MACHINE LEARNING", "BIOMARKERS"],
    metric: "1,069",
    metricLabel: "BIOPSY SAMPLES",
    visual: "network",
    organization: "CSIR — Central Leather Research Institute",
    location: "Chennai, India",
    period: "SEP 2026 — NOW",
    organizationUrl: "https://www.clri.org/",
    image:
      "https://raw.githubusercontent.com/stephenrodrick17-cloud/CSIR-project-/main/graphical_abstract/graphical_abstract_infographic.jpg",
    imageAlt: "Repository graphical abstract showing the pan-fibrotic analysis workflow",
    imageSource:
      "https://github.com/stephenrodrick17-cloud/CSIR-project-/blob/main/graphical_abstract/graphical_abstract_infographic.jpg",
    imageSourceLabel: "VIEW GITHUB FIGURE",
    imageCaption: "PROJECT FIGURE · CROSS-ORGAN ANALYSIS",
    githubUrl: "https://github.com/stephenrodrick17-cloud/CSIR-project-",
    githubNote:
      "The README reports 14 discovery cohorts, of which 9 paired case-control cohorts enter the supervised matrix. Its audit trail discloses earlier data-integrity corrections; the nomogram AUCs are explicitly in-sample.",
    linkedinUrl: "",
    summary:
      "A cross-organ investigation into shared molecular signals behind fibrotic disease, with emphasis on separating reproducible biology from tissue- or platform-specific noise.",
    role:
      "Research internship project at CSIR-CLRI, combining computational analysis, literature review, and interpretation of fibrosis-associated biomarkers.",
    tabs: {
      Overview: [
        "The repository reports 1,069 human biopsy samples across kidney, liver, lung, and skin, drawn from 14 discovery cohorts.",
        "Nine paired case-control cohorts contribute to the supervised discovery matrix; five single-arm cohorts contribute only to differential-expression discovery.",
        "The study combines public transcriptomic datasets across microarray and RNA-sequencing platforms.",
      ],
      Approach: [
        "Prioritised 86 conserved pan-fibrotic differentially expressed genes, then narrowed the set to 24 core extracellular-matrix candidates.",
        "Combined LASSO, SVM-RFE, Random Forest, XGBoost, co-expression, and interaction-network analyses.",
        "Separated discovery, intermediate replication, and held-out cross-platform validation tiers.",
      ],
      Outcomes: [
        "The README identifies COL15A1, COL3A1, and SERPINE2 as strict cross-platform-validated hub genes.",
        "COL1A1 and SERPINF2 are described as direction-concordant, not strictly validated, because they miss the independent RNA-seq significance threshold.",
        "Nomogram AUCs are in-sample only and are not evidence of clinical performance.",
      ],
    },
    recognition: "",
    recognitionUrl: "",
    note:
      "Repository-reported computational findings. The README documents prior data-integrity issues and corrections, and notes that no clinical validation is established.",
    flow: [
      { label: "COHORTS", detail: "Public biopsy datasets across four organs and multiple platforms." },
      { label: "DISCOVERY", detail: "Screen for conserved differential-expression signals." },
      { label: "ECM FILTER", detail: "Narrow 86 conserved genes to 24 core ECM candidates." },
      { label: "VALIDATION", detail: "Test candidates in held-out cohorts across platforms." },
    ],
  },
  {
    number: "02",
    slug: "neurovision",
    title: "NeuroVision AI",
    category: "Medical AI",
    date: "2025 — NOW",
    description:
      "A brain-MRI research prototype with image-level classification, evaluation audits, and clear boundaries around clinical use.",
    tags: ["MEDICAL IMAGING", "DEEP LEARNING", "MODEL AUDIT"],
    metric: "98.51%",
    metricLabel: "INTERNAL IMAGE-LEVEL ACCURACY",
    visual: "scan",
    organization: "SRM Institute of Science and Technology",
    location: "Ramapuram, Chennai",
    period: "OCT 2025 — NOW",
    organizationUrl: "https://srmrmp.edu.in/ramapuram-campus/",
    image:
      "https://raw.githubusercontent.com/stephenrodrick17-cloud/Neurovision-AI/50adc0c9047ad44abb5ca57741c3921b85b36a6a/paper_evidence/figures/fig5_seeds_internal_vs_external.png",
    imageAlt: "Repository figure comparing internal image-level accuracy with external ROC-AUC across seeds",
    imageSource:
      "https://github.com/stephenrodrick17-cloud/Neurovision-AI/blob/50adc0c9047ad44abb5ca57741c3921b85b36a6a/paper_evidence/figures/fig5_seeds_internal_vs_external.png",
    imageSourceLabel: "VIEW GITHUB FIGURE",
    imageCaption: "REPOSITORY EVALUATION · INTERNAL VS EXTERNAL",
    githubUrl: "https://github.com/stephenrodrick17-cloud/Neurovision-AI",
    githubNote:
      "The README calls this a research and educational prototype, not a medical device. Its dataset source and labels are unverified, and the split is image-level because patient IDs are unavailable.",
    linkedinUrl:
      "https://www.linkedin.com/posts/stephenrodrick_hackathon-ai-innovation-activity-7459289825876062208-yDVm",
    summary:
      "A brain-MRI research project exploring binary tumour-image classification, evaluation integrity, and how performance changes across datasets.",
    role:
      "Developed and evaluated the MRI classification and image-integrity workflow, and presented the project at student research events.",
    tabs: {
      Overview: [
        "The public README describes a binary classifier (tumour vs no tumour); it does not identify tumour subtypes.",
        "The corrected image-level test split contains 606 images; the README reports 98.51% accuracy on that internal split.",
        "Patient identifiers and independently verified dataset provenance are unavailable in the source dataset.",
      ],
      Approach: [
        "Grouped exact and visually similar images when creating the image-level split, then audited dataset overlap and MRI orientation.",
        "Compared the frozen model on the Cheng and BraTS cohorts and reported a separate patient-split BraTS reference model.",
        "Grad-CAM outputs are visualisations only; the README says lesion localisation has not been validated against expert annotations.",
      ],
      Outcomes: [
        "The README reports 72.41% tumour-positive slice sensitivity on the overlap-screened Cheng cohort, which contains no negative cases, and 0.6623 ROC-AUC on unrotated BraTS.",
        "A separate patient-split BraTS reference model reports 0.9738 ± 0.0011 ROC-AUC; this is not the same evaluation as the frozen discovery model.",
        "These are protocol-specific research results, not patient-independent or clinical performance claims.",
      ],
    },
    recognition:
      "3rd place · GEMINI.EXE Championship · NeuroVision AI · TrishulX · 2026",
    recognitionUrl:
      "https://www.linkedin.com/posts/stephenrodrick_hackathon-ai-innovation-activity-7459289825876062208-yDVm",
    note:
      "Research and education only. The repository warns against using the software for diagnosis, triage, treatment selection, or patient care.",
    flow: [
      { label: "MRI INPUT", detail: "Read a brain-image input and apply consistent preprocessing." },
      { label: "CLASSIFY", detail: "Predict one of two image-level classes: tumour or no tumour." },
      { label: "AUDIT", detail: "Check duplicates, orientation, split design, and source overlap." },
      { label: "EVALUATE", detail: "Compare internal results with external cohorts and disclose limits." },
    ],
  },
  {
    number: "03",
    slug: "opticnova",
    title: "OpticNova",
    category: "Medical AI",
    date: "2026",
    description:
      "An AI-assisted ophthalmic framework for fundus analysis, retinal measurements, and explainable reporting.",
    tags: ["OPHTHALMOLOGY", "SEGMENTATION", "BIOMARKERS"],
    metric: "202641126774",
    metricLabel: "PUBLISHED PATENT APPLICATION",
    visual: "optic",
    organization: "SRM Institute of Science and Technology",
    location: "Ramapuram, Chennai",
    period: "MAR — OCT 2026",
    organizationUrl: "https://srmrmp.edu.in/ramapuram-campus/",
    image:
      "https://raw.githubusercontent.com/stephenrodrick17-cloud/OpticNova/main/assets/diagnostic-workstation.png",
    imageAlt: "OpticNova diagnostic workstation interface from the project repository",
    imageSource:
      "https://github.com/stephenrodrick17-cloud/OpticNova/blob/main/assets/diagnostic-workstation.png",
    imageSourceLabel: "VIEW GITHUB SCREENSHOT",
    imageCaption: "PROJECT SCREENSHOT · OPTICNOVA WORKSTATION",
    githubUrl: "https://github.com/stephenrodrick17-cloud/OpticNova",
    githubNote:
      "The public repository describes the system components and interface. It does not provide evidence of clinical approval or independent clinical validation.",
    linkedinUrl:
      "https://www.linkedin.com/posts/stephenrodrick_indian-patent-office-journal-no-442026-activity-7522321219292176384-nt2S",
    summary:
      "An ophthalmic-imaging framework bringing fundus-image analysis, quantitative indicators, and explainable, uncertainty-aware reporting into one proposed workflow.",
    role:
      "Designed an integrated workflow spanning image enhancement, risk prediction, segmentation, biomarker measurement, and reporting.",
    tabs: {
      Overview: [
        "The repository describes a glaucoma-focused fundus analysis workflow.",
        "Proposed outputs include optic-disc and optic-cup segmentation, cup-to-disc ratio, ISNT assessment, vessel measures, and macular drusen analysis.",
        "The project explores explainable AI and privacy-preserving audio reporting.",
      ],
      Approach: [
        "Combines image enhancement with model-based risk prediction and optic-disc / optic-cup segmentation.",
        "The repository outlines EfficientNet, U-Net, YOLO, Grad-CAM, and quantitative retinal features.",
        "Bayesian uncertainty and bootstrap statistics are described as parts of the proposed scoring workflow.",
      ],
      Outcomes: [
        "Patent application 202641126774 A was published in Indian Patent Office Journal No. 44/2026, dated 30 October 2026.",
        "The LinkedIn post names Stephen Rodrick and Dr. Madhurima Joardar as inventors, with SRMIST Ramapuram and Easwari Engineering College as applicants.",
        "This is a published patent application, not confirmation that a patent has been granted or that the system is clinically validated.",
      ],
    },
    recognition:
      "Published patent application · 202641126774 A · Indian Patent Office Journal 44/2026",
    recognitionUrl:
      "https://www.linkedin.com/posts/stephenrodrick_indian-patent-office-journal-no-442026-activity-7522321219292176384-nt2S",
    note:
      "Patent publication and named applicants follow the public LinkedIn post. The application is not described as granted; the project is not represented as a clinically approved diagnostic.",
    flow: [
      { label: "FUNDUS", detail: "Start with a retinal fundus image." },
      { label: "ANALYSE", detail: "Enhance the image and run proposed detection and segmentation models." },
      { label: "MEASURE", detail: "Derive retinal indicators such as CDR, ISNT, and vessel features." },
      { label: "REPORT", detail: "Present an explainable, uncertainty-aware research summary." },
    ],
  },
  {
    number: "04",
    slug: "alzheimers-intelligence-unit",
    title: "Alzheimer’s Intelligence Unit",
    category: "Bioinformatics",
    date: "2026",
    description:
      "A multimodal research prototype connecting neuroimaging, biomarker modelling, molecular screening, and reporting.",
    tags: ["NEUROIMAGING", "DRUG DISCOVERY", "PYTHON"],
    metric: "MULTI",
    metricLabel: "MODAL RESEARCH PROTOTYPE",
    visual: "brain",
    organization: "Institution not specified",
    location: "Academic / experimental project",
    period: "FEB — MAY 2026",
    organizationUrl: "",
    image: null,
    imageAlt: "",
    imageSource: "",
    imageSourceLabel: "",
    imageCaption: "",
    githubUrl: "https://github.com/stephenrodrick17-cloud/alzheimers-intelligence-unit",
    githubNote:
      "The repository explicitly describes an academic and experimental platform, not a medical diagnostic tool. Road-map ideas are not presented as completed features.",
    linkedinUrl: "",
    summary:
      "A multimodal research platform concept connecting neuroimaging, biomarker profiles, computational drug discovery, and clinical-intelligence ideas.",
    role:
      "Built project components and research workflows across medical imaging, molecular informatics, data processing, and an API-backed platform.",
    tabs: {
      Overview: [
        "The public README describes MRI analysis, molecular screening, biomarker risk modelling, and clinical-intelligence concepts.",
        "The project is organised around imaging, biomarker, drug-discovery, and reporting components.",
        "The README lists PyTorch, RDKit, Biopython, FastAPI, SQLAlchemy, and SQLite among the technologies.",
      ],
      Approach: [
        "Connects MRI image-processing and deep-learning ideas with molecular descriptors and clinical-data workflows.",
        "Uses a prototype application structure to organise research components.",
        "README roadmap items are not represented here as finished or clinically validated features.",
      ],
      Outcomes: [
        "Created a public repository with application, training, utility, and database components.",
        "The README explicitly frames the platform as academic and experimental.",
        "No host university is identified in the résumé or the repository README.",
      ],
    },
    recognition: "",
    recognitionUrl: "",
    note:
      "Project summary follows the supplied résumé and public README. It is an experimental research prototype, not a diagnostic or patient-care system.",
    flow: [
      { label: "IMAGING", detail: "Explore MRI data and image-processing workflows." },
      { label: "BIOMARKERS", detail: "Organise biomarker and clinical-data concepts." },
      { label: "MOLECULES", detail: "Explore computational screening and molecular descriptors." },
      { label: "SYNTHESISE", detail: "Bring research outputs together for exploratory review." },
    ],
  },
  {
    number: "05",
    slug: "peritoneal-fibrosis",
    title: "Peritoneal fibrosis signatures",
    category: "Bioinformatics",
    date: "2026",
    description:
      "An eight-phase transcriptomic analysis of peritoneal-dialysis effluent and small external cohorts.",
    tags: ["DIALYSIS EFFLUENT", "TRANSCRIPTOMICS", "VALIDATION"],
    metric: "0.770",
    metricLabel: "NESTED-CV DISCOVERY AUC",
    visual: "network",
    organization: "Institution not specified in repository",
    location: "Public GEO cohorts · computational study",
    period: "2026",
    organizationUrl: "",
    image:
      "https://raw.githubusercontent.com/stephenrodrick17-cloud/peritonial-Fibrosis-/main/results/paper_style/Fig1.png",
    imageAlt: "Repository study workflow for peritoneal-dialysis fibrosis signature analysis",
    imageSource:
      "https://github.com/stephenrodrick17-cloud/peritonial-Fibrosis-/blob/main/results/paper_style/Fig1.png",
    imageSourceLabel: "VIEW GITHUB FIGURE",
    imageCaption: "REPOSITORY FIGURE · STUDY WORKFLOW",
    githubUrl: "https://github.com/stephenrodrick17-cloud/peritonial-Fibrosis-",
    githubNote:
      "The README reports a small discovery cohort and limited external samples. It explicitly says the signatures are exploratory, not a clinically validated assay, and that no intervention experiments were conducted.",
    linkedinUrl: "",
    summary:
      "A computational study of peritoneal membrane remodelling in peritoneal-dialysis patients, using effluent transcriptomics and independent public cohorts.",
    role:
      "Analysed public gene-expression cohorts with differential-expression, network, machine-learning, and external-validation workflows.",
    tabs: {
      Overview: [
        "The discovery cohort (GSE125498) compares 13 long-term and 20 short-term peritoneal-dialysis samples (N=33).",
        "The README also reports three small external cohorts, including single-cell effluent and surgical-biopsy data.",
        "The project seeks candidate matrisome signatures associated with dialysis vintage and membrane remodelling.",
      ],
      Approach: [
        "Combines limma differential expression, matrisome filtering, WGCNA, and consensus feature selection.",
        "Uses nested cross-validation with feature selection inside the training folds; the reported nested 5-fold AUC is 0.7700.",
        "Uses sample-level pseudobulk for single-cell cohorts to reduce cell-level pseudoreplication.",
      ],
      Outcomes: [
        "The README reports 813 nominal discovery DEGs and 143 genes at BH q<0.05; 44 overlap with the matrisome.",
        "In the primary single-cell validation cohort, BMP7 is reported as replicated, while CCBE1 changes direction.",
        "Small external sample sizes, public-metadata limits, and the absence of wet-lab experiments constrain interpretation.",
      ],
    },
    recognition: "",
    recognitionUrl: "",
    note:
      "The reported AUC is nested cross-validation within a small discovery cohort, not clinical validation. Candidate signatures remain exploratory.",
    flow: [
      { label: "EFFLUENT", detail: "Compare public peritoneal-dialysis effluent cohorts." },
      { label: "SIGNALS", detail: "Identify differential-expression and matrisome signals." },
      { label: "SELECT", detail: "Prioritise candidate genes with nested feature selection." },
      { label: "CHECK", detail: "Compare candidates with small external single-cell and tissue cohorts." },
    ],
  },
  {
    number: "06",
    slug: "ipf-lung-fibrosis",
    title: "IPF lung-fibrosis biomarkers",
    category: "Bioinformatics",
    date: "2026",
    description:
      "A cross-cohort matrisome analysis of idiopathic pulmonary fibrosis with held-out microarray and RNA-seq evaluation.",
    tags: ["IPF", "WGCNA", "CROSS-PLATFORM"],
    metric: "12",
    metricLabel: "CONSENSUS CANDIDATE GENES",
    visual: "network",
    organization: "Institution not specified in repository",
    location: "Public lung-tissue cohorts · computational study",
    period: "2026",
    organizationUrl: "",
    image:
      "https://raw.githubusercontent.com/stephenrodrick17-cloud/IPF-lung-Fibrosis-/ef45a15360a1e5f32cfb1980433c8eb021a591ec/results/figures/validation/roc_validation_comparison.png",
    imageAlt: "Repository ROC comparison for IPF signature external-validation cohorts",
    imageSource:
      "https://github.com/stephenrodrick17-cloud/IPF-lung-Fibrosis-/blob/ef45a15360a1e5f32cfb1980433c8eb021a591ec/results/figures/validation/roc_validation_comparison.png",
    imageSourceLabel: "VIEW GITHUB FIGURE",
    imageCaption: "REPOSITORY FIGURE · HELD-OUT COHORT COMPARISON",
    githubUrl: "https://github.com/stephenrodrick17-cloud/IPF-lung-Fibrosis-",
    githubNote:
      "The README distinguishes completely held-out cohorts from datasets already used during gene selection. It also notes the small control group in one external cohort, platform-specific threshold limitations, and no wet-lab validation.",
    linkedinUrl: "",
    summary:
      "A multi-cohort analysis of matrisome genes in idiopathic pulmonary fibrosis, with a frozen signature evaluated in independent lung-tissue datasets.",
    role:
      "Built a computational workflow for cohort harmonisation, co-expression analysis, feature selection, and cross-platform validation.",
    tabs: {
      Overview: [
        "The discovery cohort GSE32539 contains 168 samples; independent validation uses GSE53845 (48 samples) and GSE150910 (206 samples).",
        "A three-dataset intersection and WGCNA identified matrisome candidates before model selection.",
        "The repository distinguishes cohorts exposed to gene selection from fully held-out external validation cohorts.",
      ],
      Approach: [
        "Combines differential expression, WGCNA, LASSO, Random Forest, and SVM-RFE.",
        "A dual-model rank-product consensus identified a 12-gene candidate signature.",
        "The frozen risk score and discovery threshold were assessed on held-out microarray and RNA-seq cohorts.",
      ],
      Outcomes: [
        "The README reports that 11 of 12 candidate genes met its strict criteria in at least one held-out cohort; six passed in both.",
        "Reported full-signature AUCs are 1.000 in GSE53845 and 0.9452 in GSE150910; the former has only eight controls.",
        "A frozen threshold transfers poorly across platforms, and the study has no wet-lab or prospective clinical validation.",
      ],
    },
    recognition: "",
    recognitionUrl: "",
    note:
      "Results are repository-reported computational findings. Perfect AUC in the small microarray cohort is limited by its eight controls; these findings are not clinical validation.",
    flow: [
      { label: "DISCOVERY", detail: "Screen lung-tissue cohorts for reproducible IPF signals." },
      { label: "MATRISOME", detail: "Intersect differential-expression and co-expression candidates." },
      { label: "CONSENSUS", detail: "Combine feature-selection methods into a 12-gene panel." },
      { label: "VALIDATE", detail: "Evaluate the frozen signature in held-out microarray and RNA-seq cohorts." },
    ],
  },
  {
    number: "07",
    slug: "algae-based-greywater-biofilter",
    title: "Algae-based greywater biofilter",
    category: "Sustainability",
    date: "2025",
    description:
      "A published study exploring Chlorella vulgaris and Spirulina platensis for greywater treatment and reuse.",
    tags: ["ENVIRONMENTAL BIOTECH", "BIOFILTER", "PUBLICATION"],
    metric: "IJSDR",
    metricLabel: "RESEARCH PUBLICATION",
    visual: "water",
    organization: "Published research · IJSDR",
    location: "Research institution not specified in the résumé",
    period: "JUL 2025",
    organizationUrl: "",
    image: null,
    imageAlt: "",
    imageSource: "",
    imageSourceLabel: "",
    imageCaption: "",
    githubUrl: "",
    githubNote: "No directly matching public repository or paper URL was identified.",
    linkedinUrl: "",
    summary:
      "A publication on an algae-based greywater treatment concept, with a focus on water reuse and resource recovery.",
    role:
      "Contributed to the research presented in the résumé and publication record; the supplied résumé does not specify a host institution or detailed individual role.",
    tabs: {
      Overview: [
        "Investigated a sustainable biological treatment approach for greywater.",
        "The résumé summary reports reductions in BOD, COD, nitrates, and phosphates.",
        "The proposed reuse pathway is irrigation, with algae biomass considered for potential downstream use.",
      ],
      Approach: [
        "Used Chlorella vulgaris and Spirulina platensis as the biological treatment component.",
        "Framed water-quality outcomes around common wastewater indicators.",
        "Connected treatment with potential biomass reuse.",
      ],
      Outcomes: [
        "Listed as a July 2025 publication in IJSDR in the supplied résumé.",
        "No host institution or full publication link was specified.",
        "The résumé provides no numerical treatment measurements, so none are added here.",
      ],
    },
    recognition: "",
    recognitionUrl: "",
    note:
      "Publication outlet and project summary follow the supplied résumé. The project record does not provide quantitative measurements or a public source link.",
    flow: [
      { label: "GREYWATER", detail: "Begin with wastewater and common quality indicators." },
      { label: "ALGAE", detail: "Explore Chlorella and Spirulina as biological treatment agents." },
      { label: "MEASURE", detail: "Assess BOD, COD, nitrate, and phosphate indicators." },
      { label: "REUSE", detail: "Consider irrigation and biomass-reuse pathways." },
    ],
  },
  {
    number: "08",
    slug: "cerium-oxide-nanoparticles",
    title: "Cerium oxide nanoparticles",
    category: "Sustainability",
    date: "2025 — 2026",
    description:
      "Plant-assisted synthesis and iron-doped cerium oxide research, presented at environmental-sustainability conferences.",
    tags: ["NANOBIOTECH", "GREEN SYNTHESIS", "WATER"],
    metric: "CP104",
    metricLabel: "ICEST 2026 SOUVENIR",
    visual: "molecule",
    organization: "SRMIST / NIT Andhra Pradesh · source records differ",
    location: "SRMIST is named in the GitHub and LinkedIn research record; the résumé lists an NIT Andhra Pradesh internship.",
    period: "JUN — JUL 2025 · PRESENTED 2026",
    organizationUrl: "https://srmrmp.edu.in/ramapuram-campus/",
    image:
      "https://srmrmp.edu.in/wp-content/uploads/2023/08/IST-1.jpg",
    imageAlt: "SRM Institute of Science and Technology Ramapuram campus, official website",
    imageSource: "https://srmrmp.edu.in/ramapuram-campus/",
    imageSourceLabel: "VIEW OFFICIAL INSTITUTE SITE",
    imageCaption: "INSTITUTION IMAGE · OFFICIAL SRMIST WEBSITE",
    githubUrl: "https://github.com/stephenrodrick17-cloud/Cerium-Nanoparticles-",
    githubNote:
      "The résumé lists NIT Andhra Pradesh for a summer internship, while the repository README and LinkedIn conference post associate the cerium-oxide research with SRMIST and Dr. Madhurima Joardar. The exact relationship between these affiliations is not established by the public records.",
    linkedinUrl:
      "https://www.linkedin.com/posts/stephenrodrick_research-nanotechnology-greensynthesis-activity-7457705824430342144-j5b8",
    summary:
      "A materials-research project on Hibiscus-assisted synthesis and comparison of undoped and iron-doped cerium oxide nanoparticles.",
    role:
      "Explored nanoparticle synthesis and characterisation methods, with conference presentations documented in the public research record.",
    tabs: {
      Overview: [
        "The LinkedIn post describes a study titled “Green Synthesis, Characterization, and Comparative Analysis of Undoped and Iron-Doped Cerium Oxide Nanoparticles Using Hibiscus sp. Extract”.",
        "The work considers potential applications in water-pollution detection.",
        "The paper was presented at ICEST 2026 and listed in the conference souvenir as CP104.",
      ],
      Approach: [
        "Explored plant-assisted green synthesis and iron doping of cerium oxide nanoparticles.",
        "The résumé describes SEM, TEM, and FTIR exposure; the public repository outlines experimental and characterisation methods.",
        "Connected material properties to potential environmental-biotechnology applications.",
      ],
      Outcomes: [
        "The LinkedIn post records a presentation at the 4th International Conference on Environmental Sustainability & Technology, organised by Amity University Madhya Pradesh, Gwalior.",
        "The résumé reports 90% purity, but the public repository does not establish this as an independently verified result.",
        "Institution attribution differs between résumé and project sources; see the source note before assigning the work to one host.",
      ],
    },
    recognition:
      "Research paper · ICEST 2026 conference souvenir · CP104",
    recognitionUrl:
      "https://www.linkedin.com/posts/stephenrodrick_research-nanotechnology-greensynthesis-activity-7457705824430342144-j5b8",
    note:
      "The public sources disagree on the host affiliation. The 90% purity figure comes from the résumé, not a verified result in the current repository README.",
    flow: [
      { label: "EXTRACT", detail: "Prepare Hibiscus sp. extract for plant-assisted synthesis." },
      { label: "SYNTHESISE", detail: "Compare undoped and iron-doped cerium oxide preparations." },
      { label: "CHARACTERISE", detail: "Explore material characterisation and property comparison." },
      { label: "PRESENT", detail: "Share the study at ICEST 2026; souvenir reference CP104." },
    ],
  },
  {
    number: "09",
    slug: "infrastructure-damage-detection",
    title: "Infrastructure damage detection",
    category: "Applied AI",
    date: "2026",
    description:
      "A computer-vision prototype for identifying road and structural damage and routing repair alerts.",
    tags: ["COMPUTER VISION", "YOLOV8", "SMART INFRASTRUCTURE"],
    metric: "YOLOv8",
    metricLabel: "DAMAGE-DETECTION PIPELINE",
    visual: "water",
    organization: "Institution not specified in repository",
    location: "Public GitHub project",
    period: "2026",
    organizationUrl: "",
    image: null,
    imageAlt: "",
    imageSource: "",
    imageSourceLabel: "",
    imageCaption: "",
    githubUrl: "https://github.com/stephenrodrick17-cloud/IIT-project-on-road-",
    githubNote:
      "The README outlines features, datasets, and example performance figures but does not document an independent evaluation protocol; treat metrics as project-reported.",
    linkedinUrl: "",
    summary:
      "An AI-assisted infrastructure-maintenance concept connecting visual damage detection with severity, location, and repair coordination.",
    role:
      "Built a public prototype specification spanning the detection interface, backend services, dashboard, and model-training workflow.",
    tabs: {
      Overview: [
        "The repository describes pothole, crack, and structural-damage detection from uploaded images or camera input.",
        "Proposed workflow includes severity categorisation, GPS location, repair-cost estimation, and contractor recommendations.",
        "The README describes React, FastAPI, YOLOv8, and a database-backed dashboard.",
      ],
      Approach: [
        "Organises detection, severity, map, report-history, and alert features into an end-to-end application.",
        "The README lists RDD2020, CrackForest, and a pothole dataset as potential training sources.",
        "Deployment and SMS/email integrations are described in the README; this page does not claim that every external integration is live.",
      ],
      Outcomes: [
        "The README reports approximately 92% detection accuracy on RDD2020 but does not specify a reproducible split or evaluation protocol.",
        "The prototype design links detection outputs to repair planning and dashboard views.",
        "Reported performance is repository-reported and should not be read as an independently validated field result.",
      ],
    },
    recognition:
      "3rd place · Vazhitheer Road Safety Hackathon · Team Geo Visionaries · Shaastra / IIT Madras · 2025",
    recognitionUrl: linkedin,
    note:
      "The repository does not identify its host institution or explicitly connect itself to the Vazhitheer entry. LinkedIn's award heading says second place, while its certificate description says third; the résumé also lists third.",
    flow: [
      { label: "CAPTURE", detail: "Upload an infrastructure image or provide a camera frame." },
      { label: "DETECT", detail: "Run the proposed YOLOv8 damage-detection workflow." },
      { label: "ASSESS", detail: "Classify severity and associate a location and cost estimate." },
      { label: "ROUTE", detail: "Display a report and proposed contractor / alert actions." },
    ],
  },
  {
    number: "10",
    slug: "computational-biology-internship",
    title: "Computational biology internship",
    category: "Bioinformatics",
    date: "2026",
    description:
      "Sequence analysis, protein modelling, phylogenetics, and molecular docking across a summer research internship.",
    tags: ["PROTEIN MODELLING", "PHYLOGENETICS", "MOLECULAR DOCKING"],
    metric: "3",
    metricLabel: "MONTHS OF RESEARCH",
    visual: "network",
    organization: "Ramakrishna Mission Vidyamandira",
    location: "Belur Math, West Bengal",
    period: "MAY — JUL 2026",
    organizationUrl: "https://www.vidyamandira.ac.in/",
    image: "https://www.vidyamandira.ac.in/images/photos/Vidyamandira3.jpg",
    imageAlt: "Ramakrishna Mission Vidyamandira, from the official college website",
    imageSource: "https://www.vidyamandira.ac.in/links/home/index.html",
    imageSourceLabel: "VIEW OFFICIAL INSTITUTE SITE",
    imageCaption: "INSTITUTION IMAGE · OFFICIAL COLLEGE WEBSITE",
    githubUrl: "",
    githubNote: "No directly matching public repository was identified.",
    linkedinUrl:
      "https://www.linkedin.com/posts/stephenrodrick_bioinformatics-structuralbiology-computationalbiology-activity-7480243913421692928-xNiv",
    summary:
      "A summer research internship applying computational-biology methods to genes, proteins, biomarkers, and candidate ligands.",
    role:
      "Completed a summer internship in Bioinformatics and Structural Biology at Ramakrishna Mission Vidyamandira, under Dr. Dipendu Sarkar in the Department of Microbiology.",
    tabs: {
      Overview: [
        "Applied sequence analysis, phylogenetics, promoter prediction, and mutation assessment.",
        "Explored protein-structure modelling and motif / domain identification.",
        "Used bioinformatics databases for genomic, proteomic, and functional-annotation workflows.",
      ],
      Approach: [
        "Built familiarity with structure validation and biomarker / ligand analysis.",
        "Applied molecular docking and interaction analysis to drug-discovery and structural-biology questions.",
        "Used computational workflows to automate parts of protein and drug-design exploration.",
      ],
      Outcomes: [
        "Completed the summer internship in Bioinformatics and Structural Biology, as announced in the public LinkedIn post.",
        "The résumé describes automated model generation as a project outcome.",
        "The LinkedIn post credits Dr. Dipendu Sarkar and the Summer Internship Cell for guidance.",
      ],
    },
    recognition: "Summer internship completed · Bioinformatics & Structural Biology · 2026",
    recognitionUrl:
      "https://www.linkedin.com/posts/stephenrodrick_bioinformatics-structuralbiology-computationalbiology-activity-7480243913421692928-xNiv",
    note:
      "Internship dates and methods follow the supplied résumé; completion and supervisor details follow the public LinkedIn post.",
    flow: [
      { label: "SEQUENCE", detail: "Analyse biological sequences and related annotations." },
      { label: "STRUCTURE", detail: "Explore protein modelling and structural validation." },
      { label: "INTERACTIONS", detail: "Use docking and interaction analysis to explore candidates." },
      { label: "INTERPRET", detail: "Summarise computational evidence in biological context." },
    ],
  },
];
