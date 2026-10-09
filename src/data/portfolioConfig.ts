import { PortfolioConfig } from '../types/portfolio';

export const initialPortfolioConfig: PortfolioConfig = {
  profile: {
    name: "Ashfeer K A",
    title: "Senior Accounting & Clerical Specialist | Vibe Coding & AI Tech Innovator (11 Years Exp.)",
    typingTitles: [
      "Accounting Clerk & Financial Operations Specialist",
      "Bookkeeping & Ledger Reconciliation Lead (11 Yrs)",
      "Vibe Coding & Software Developer",
      "Google AI Studio & Antigravity Specialist",
      "Android Studio & AI Tool Automation Specialist"
    ],
    email: "ashfeerka@gmail.com",
    phone: "+91 9567476983",
    location: "Kalpetta, Wayanad, Kerala – 673121, India",
    githubUsername: "ashfeerka007-netizen",
    githubUrl: "https://github.com/ashfeerka007-netizen",
    linkedinUrl: "https://linkedin.com/in/ashfeerka",
    avatarUrl: `${import.meta.env.BASE_URL || '/'}profile.jpg`.replace('//', '/'),
    summary: "Accomplished Accounting and Administrative Professional with 11 years of dedicated expertise in bookkeeping, ledger reconciliation, accounts payable/receivable, audit compliance, and clerical operations at Wayanad District Police Co-operative Society Ltd. Combines deep financial domain mastery with cutting-edge software development skills—utilizing Vibe Coding, Google AI Studio, Antigravity, and Android Studio to build automated accounting tools, digital ledger utilities, and modern enterprise applications.",
    yearsOfExperience: 11,
    projectsCompleted: 50,
    clientsServed: 35,
    codeLines: "150K+",
    mission: "Delivering meticulous financial accuracy, 100% audit compliance, and modern AI-driven accounting software automation across 11 years of professional excellence.",
    coreStrengths: [
      "Bookkeeping & Ledger Reconciliation (11 Years)",
      "Accounts Payable/Receivable & Cash Book Management",
      "Co-operative Society Accounting & Audit Compliance",
      "Vibe Coding & Rapid Software Application Prototyping",
      "Google AI Studio & Antigravity Agent Engineering",
      "Android Studio Mobile Dev & AI Prompt Engineering"
    ],
    technicalInterests: [
      "Financial Accounting & Co-operative Ledger Systems",
      "Vibe Coding Methodologies & Modern AI Frameworks",
      "Google AI Studio & Antigravity Workflows",
      "Android Studio Native & Cross-Platform Mobile Apps",
      "AI Prompt Engineering & Financial Workflow Automation"
    ],
    values: [
      {
        title: "11 Years Accounting Precision",
        description: "Meticulous accuracy in ledger reconciliation, cash book auditing, and regulatory compliance.",
        icon: "ShieldCheck"
      },
      {
        title: "Vibe Coding Innovation",
        description: "Transforming financial & operational workflows using Google AI Studio, Antigravity, and Android Studio.",
        icon: "Sparkles"
      },
      {
        title: "Audit & Co-operative Integrity",
        description: "Strict adherence to Kerala State Co-operative regulations and financial accounting standards.",
        icon: "BookOpenCheck"
      },
      {
        title: "AI Tool & Mobile Mastery",
        description: "Leveraging AI prompt engineering and Android Studio mobile builds to streamline office operations.",
        icon: "Cpu"
      }
    ]
  },
  experiences: [
    {
      id: "exp-1",
      role: "Accounting Clerk & Operations Specialist",
      company: "Wayanad District Police Co-operative Society Ltd",
      location: "Kalpetta North, Wayanad, Kerala",
      type: "Full-time",
      startDate: "2015",
      endDate: "Present",
      description: "Managing day-to-day administrative and accounting functions, ledger reconciliation, compliance, vendor coordination, and office documentation for 11 years.",
      responsibilities: [
        "Perform day-to-day administrative and accounting functions, including filing, scanning, photocopying, and managing office records.",
        "Handle accounts payable/receivable, ledger reconciliation, cash book auditing, and financial reporting.",
        "Prepare official letters, invoices, and delivery notes with high accuracy and timeliness.",
        "Coordinate with vendors, members, and external audit agencies for seamless co-operative operations.",
        "Leverage AI tools, Vibe Coding, and software automation to streamline clerical and ledger workflows."
      ],
      achievements: [
        "Maintained 11 years of flawless financial record keeping and audit compliance.",
        "Digitized administrative filing and ledger auditing using modern tech tools."
      ],
      technologies: ["Financial Software", "Bookkeeping", "MS Office (Excel, Word)", "Google Workspace", "AI Tools & Prompting", "Ledger Accounting"]
    },
    {
      id: "exp-2",
      role: "Software Developer & Vibe Coding Specialist",
      company: "Independent Software & Tech Innovations",
      location: "Wayanad, Kerala, India",
      type: "Full-time",
      startDate: "2020",
      endDate: "Present",
      description: "Pioneering rapid software product development using Vibe Coding, Google AI Studio applets, Antigravity AI frameworks, and Android Studio mobile engineering.",
      responsibilities: [
        "Architect and deploy full-stack web applications and Android mobile tools using Vibe Coding techniques.",
        "Utilize Google AI Studio and Antigravity agents to accelerate feature delivery and complex logic generation.",
        "Engineered AI prompt pipelines for automated document analysis, data processing, and user interaction.",
        "Build intuitive user interfaces in React, TypeScript, Tailwind CSS, and Android Studio."
      ],
      achievements: [
        "Delivered 20+ vibe-coded web applets and mobile tools with rapid 10x iteration speed.",
        "Integrated Antigravity and Google AI Studio workflows for enterprise accounting & management tools."
      ],
      technologies: ["Vibe Coding", "Google AI Studio", "Antigravity", "Android Studio", "React", "TypeScript", "Tailwind CSS", "AI Prompting"]
    }
  ],
  skills: [
    {
      category: "Administrative & Accounting Core (11 Years Experience)",
      skills: [
        { name: "Bookkeeping & Ledger Reconciliation", level: 98, years: 11, icon: "BookOpenCheck", isPrimary: true },
        { name: "Financial Reporting & Audit Compliance", level: 96, years: 11, icon: "Database", isPrimary: true },
        { name: "Cash Book & Accounts Payable/Receivable", level: 98, years: 11, icon: "Calculator", isPrimary: true },
        { name: "Office Administration & Filing Systems", level: 98, years: 11, icon: "Briefcase", isPrimary: true },
        { name: "MS Office & Google Workspace", level: 98, years: 11, icon: "Layout", isPrimary: true }
      ]
    },
    {
      category: "Vibe Coding & AI Software Engineering",
      skills: [
        { name: "Vibe Coding Methodology", level: 98, years: 4, icon: "Sparkles", isPrimary: true },
        { name: "Google AI Studio", level: 96, years: 3, icon: "Globe", isPrimary: true },
        { name: "Antigravity Agent Framework", level: 94, years: 3, icon: "Cpu", isPrimary: true },
        { name: "AI Tool Utilisation & Prompting", level: 98, years: 4, icon: "Zap", isPrimary: true },
        { name: "Android Studio (Mobile Dev)", level: 90, years: 3, icon: "Terminal", isPrimary: true }
      ]
    },
    {
      category: "Web & Mobile Software Development",
      skills: [
        { name: "React.js & TypeScript", level: 95, years: 4, icon: "Code2", isPrimary: true },
        { name: "Tailwind CSS & UI Design", level: 96, years: 4, icon: "Palette", isPrimary: true },
        { name: "Node.js & REST APIs", level: 90, years: 4, icon: "Server" },
        { name: "Android Studio Kotlin / Java", level: 88, years: 3, icon: "HardDrive" }
      ]
    },
    {
      category: "Professional Competencies",
      skills: [
        { name: "Financial Meticulousness & Audit Precision", level: 98, icon: "ShieldCheck" },
        { name: "Rapid Solution Prototyping", level: 98, icon: "Lightbulb" },
        { name: "Member & Vendor Relations", level: 95, icon: "UserCheck" },
        { name: "Time Management & Multitasking", level: 96, icon: "Clock" }
      ]
    }
  ],
  projects: [
    {
      id: "proj-1",
      title: "Co-operative Society Financial Ledger & Audit System",
      description: "Digital ledger reconciliation and financial reporting system backed by 11 years of accounting domain mastery.",
      longDescription: "Streamlined financial accounting, member accounts payable/receivable, ledger reconciliation, and official documentation system for the Wayanad District Police Co-operative Society Ltd.",
      category: "Accounting Systems",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
      techStack: ["Financial Software", "MS Excel", "Ledger Accounting", "Compliance Tools"],
      features: [
        "Day-to-day accounts payable and receivable logging",
        "Automated monthly ledger reconciliation and trial balance",
        "Co-operative regulatory compliance auditing reports",
        "Official document & invoice generation templates"
      ],
      githubUrl: "https://linkedin.com/in/ashfeerka",
      liveDemoUrl: "#resume",
      role: "Accounting Clerk & Tech Lead",
      duration: "11 Years (2015 – Present)",
      achievements: [
        "Maintained 100% compliance with Kerala State Co-operative regulations over 11 years.",
        "Zero error rate in official financial reporting."
      ],
      featured: true,
      status: "Production"
    },
    {
      id: "proj-2",
      title: "Antigravity & Google AI Studio Vibe-Coded Web Suite",
      description: "Rapidly built web application suite engineered via Vibe Coding, Google AI Studio, and Antigravity agents.",
      longDescription: "Demonstrating the power of Vibe Coding: an interconnected web software platform built with Google AI Studio and Antigravity AI frameworks, featuring instant real-time UI components, reactive state management, and automated backend APIs.",
      category: "AI & Vibe Coding",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
      techStack: ["Vibe Coding", "Google AI Studio", "Antigravity", "React", "TypeScript", "Tailwind CSS"],
      features: [
        "Prompt-driven component synthesis and state management",
        "Antigravity agent task automation pipeline",
        "Google AI Studio model integration for instant UI updates",
        "Polished responsive dark/light mode UI theme"
      ],
      githubUrl: "https://github.com/ashfeerka007-netizen",
      liveDemoUrl: "#software-portfolio",
      role: "Lead Vibe Coder & Architect",
      duration: "Ongoing",
      achievements: [
        "Achieved 10x faster development iteration cycle.",
        "Seamless integration between AI Studio and React runtime."
      ],
      featured: true,
      status: "Production"
    },
    {
      id: "proj-3",
      title: "Android Studio Mobile Management Application",
      description: "Native Android application built in Android Studio with responsive mobile UI, offline SQLite sync, and AI assistant.",
      longDescription: "Developed in Android Studio, this mobile application provides portable office administration, ledger verification, and real-time task notifications for on-the-go professionals.",
      category: "Mobile",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80",
      techStack: ["Android Studio", "Kotlin", "Java", "SQLite", "Android SDK"],
      features: [
        "Android Studio mobile layout & Material Design controls",
        "Offline database sync with Room / SQLite",
        "Push notification reminders for financial dues",
        "Exportable PDF mobile receipts and document viewer"
      ],
      githubUrl: "https://github.com/ashfeerka007-netizen",
      liveDemoUrl: "#resume",
      role: "Mobile Developer",
      duration: "4 Months",
      achievements: [
        "Optimized for smooth execution across diverse Android device tiers.",
        "Zero-lag offline data caching."
      ],
      featured: true,
      status: "Active"
    }
  ],
  softwareSolutions: [
    {
      id: "sol-1",
      name: "Co-operative Society Accounting & Audit System",
      tagline: "Comprehensive Ledger Reconciliation, Accounts Payable/Receivable & Member Dues Management (11 Years Domain Mastery)",
      shortDescription: "A specialized accounting workflow solution designed for co-operative societies to manage accounts, daily ledger entries, and audit compliance.",
      overview: "Managing co-operative society financial records requires high precision, regulatory compliance, and rapid ledger auditing. Backed by 11 years of experience, this workflow handles daily cash entries, accounts payable/receivable, official invoice generation, and monthly balance reporting.",
      icon: "BookOpenCheck",
      features: [
        "Accounts Payable & Receivable Tracking",
        "Daily Ledger Entry & Automatic Trial Balance",
        "Official Letter, Invoice & Delivery Note Generator",
        "Vendor & Member Communication Management",
        "Co-operative Society Compliance & Audit Logging",
        "Monthly & Annual Financial Reporting"
      ],
      architecture: [
        "Standardized Ledger Accounting Workflows",
        "Automated MS Excel & Financial Software Calculations",
        "Digital Scanning & Document Indexing Engine",
        "Secure Local & Cloud Archiving Protocols"
      ],
      technologies: ["Financial Software", "Bookkeeping", "MS Excel", "Google Sheets", "Ledger Accounting"],
      challengesSolved: [
        "Eliminated reconciliation errors in daily cash books and ledger balances.",
        "Ensured 100% compliance with Kerala State Co-operative Union regulations."
      ],
      futureImprovements: [
        "Cloud-synced member portal for instant dues checking.",
        "AI automated expense categorization."
      ],
      previewType: "cashbook"
    },
    {
      id: "sol-2",
      name: "Vibe-Coded AI & Mobile Platform",
      tagline: "Antigravity Agents, Google AI Studio Applets & Android Studio Integration",
      shortDescription: "A modern software ecosystem constructed via Vibe Coding methodology, connecting AI agents with Android Studio mobile apps.",
      overview: "Combining Antigravity agent capabilities with Google AI Studio and Android Studio native builds, this solution demonstrates how Vibe Coding turns concepts into full-fledged cross-platform applications in record time.",
      icon: "Sparkles",
      features: [
        "Google AI Studio & Antigravity Agent Workflow Orchestration",
        "Vibe Coding Rapid Feature Iteration Pipeline",
        "Android Studio Mobile Companion Integration",
        "Advanced AI Prompt Engineering for Business Logic",
        "Real-Time Data Visualizers & Interactive Dashboards"
      ],
      architecture: [
        "React + TypeScript Web Client + Vite Engine",
        "Android Studio Native Mobile Client Bridge",
        "Google AI Studio & Antigravity Model Connectors",
        "Tailwind CSS Sleek Dark Interface System"
      ],
      technologies: ["Vibe Coding", "Google AI Studio", "Antigravity", "Android Studio", "React", "TypeScript"],
      challengesSolved: [
        "Accelerated software release velocity by 80% with Vibe Coding.",
        "Unified web and Android Studio workflows under single AI architecture."
      ],
      futureImprovements: [
        "Voice-directed vibe coding agent interface.",
        "Automated cross-platform APK compilation."
      ],
      previewType: "vibe"
    }
  ],
  education: [
    {
      id: "edu-1",
      institution: "School of Distant Education, University of Calicut",
      degree: "B. Com (Specialisation in Co-operation)",
      location: "Calicut, Kerala, India",
      duration: "Completed",
      achievements: [
        "Specialized in Co-operative Accounting, Business Law, and Financial Management.",
        "Comprehensive study of co-operative audit principles and ledger management."
      ],
      courses: [
        "Co-operative Theory & Practice",
        "Financial Accounting",
        "Co-operative Law & Rules",
        "Business Management",
        "Auditing & Ledger Reconciliation"
      ]
    },
    {
      id: "edu-2",
      institution: "Co-operative Examination Board, State Co-operative Union, Kerala",
      degree: "JDC – Junior Diploma in Co-operation",
      location: "Kerala, India",
      duration: "Completed",
      achievements: [
        "Certified in Kerala Co-operative Societies Act & State Co-operative Regulations.",
        "Passed with distinction in co-operative bookkeeping and statutory reporting."
      ],
      courses: [
        "Co-operative Accounting & Bookkeeping",
        "Co-operative Banking & Credit",
        "Co-operative Audit",
        "General Management & Secretarial Practice"
      ]
    },
    {
      id: "edu-3",
      institution: "SKMJ HSS, Kalpetta, Wayanad, Kerala",
      degree: "SSLC & Plus Two",
      location: "Kalpetta, Wayanad, Kerala",
      duration: "Completed",
      achievements: [
        "Completed Secondary & Higher Secondary Education in Commerce / Science."
      ],
      courses: [
        "Commerce & Accountancy",
        "Mathematics & Computer Science",
        "English Communication"
      ]
    }
  ],
  certifications: [
    {
      id: "cert-1",
      title: "Vibe Coding & AI Software Engineering",
      organization: "Google AI Studio & Antigravity Specialist",
      issueDate: "2024",
      credentialUrl: "https://linkedin.com/in/ashfeerka",
      skills: ["Vibe Coding", "Google AI Studio", "Antigravity", "AI Prompting", "Android Studio"]
    },
    {
      id: "cert-2",
      title: "JDC (Junior Diploma in Co-operation)",
      organization: "State Co-operative Union, Kerala",
      issueDate: "Completed",
      credentialUrl: "https://linkedin.com/in/ashfeerka",
      skills: ["Co-operative Audit", "Bookkeeping", "Co-operative Law", "Financial Records"]
    },
    {
      id: "cert-3",
      title: "Microsoft Office Suite & Financial Accounting Proficiency",
      organization: "Professional Certification",
      issueDate: "Verified",
      credentialUrl: "https://linkedin.com/in/ashfeerka",
      skills: ["MS Excel", "MS Word", "MS Outlook", "Google Workspace", "Financial Reporting"]
    }
  ]
};


