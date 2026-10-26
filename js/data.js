// js/data.js - Centralized Bilingual Portfolio & Resume Data
const portfolioData = {
  profile: {
    name: "Giovane Aires Gomes",
    title: {
      en: "Software Engineer / AI Specialist",
      pt: "Engenheiro de Software / Especialista em IA"
    },
    location: {
      en: "Curitiba - PR, Brazil (Available for Remote / Hybrid)",
      pt: "Curitiba - PR, Brasil (Disponível para Remoto / Híbrido)"
    },
    status: {
      en: "Open to exciting opportunities & impactful AI / Frontend projects",
      pt: "Aberto a projetos inovadores e oportunidades em IA e Frontend"
    },
    bio: {
      en: "Software Engineer and AI Specialist with over 6 years of frontend experience and 11 years in the tech industry. Specialist in React, React Native, TypeScript, JavaScript, and applied Generative AI solutions. Proven expertise in building high-performance web and mobile applications, SPAs, PWAs, and offline-first architectures with real-time WebSocket synchronization and REST API integrations.",
      pt: "Desenvolvedor Frontend e Especialista em IA com mais de 6 anos de experiência em frontend e 11 anos na área de tecnologia. Especialista em React, React Native, TypeScript e JavaScript, com experiência no desenvolvimento de aplicações web e mobile de alta performance, SPAs, PWAs e arquiteturas offline-first, com sincronização em tempo real via WebSockets e integração com APIs REST."
    },
    summary: {
      en: "Strong experience working in multidisciplinary agile teams, collaborating across backend, product, business, and UI/UX design to deliver new features, define robust frontend architectures, and implement intelligent AI workflows that guarantee code quality, high performance, and scalability.",
      pt: "Possuo experiência atuando em ambientes ágeis multidisciplinares, colaborando com backend, produto, negócio e design na construção de novas funcionalidades, na definição de arquitetura frontend e em soluções com IA, garantindo qualidade, performance e escalabilidade das aplicações."
    },
    contact: {
      phone: "(42) 9 9988-5444",
      phoneRaw: "+5542999885444",
      whatsappUrl: "https://wa.me/5542999885444",
      email: "giovaneag33@gmail.com",
      github: "https://github.com/giovanegomes",
      linkedin: "https://www.linkedin.com/in/giovanegomes/",
      locationName: "Curitiba - PR, Brasil"
    }
  },

  metrics: [
    {
      value: "6+",
      label: { en: "Years in Frontend", pt: "Anos em Frontend" }
    },
    {
      value: "11+",
      label: { en: "Years in Technology", pt: "Anos em Tecnologia" }
    },
    {
      value: "AI & Mobile",
      label: { en: "Generative AI & React Native", pt: "IA Generativa & React Native" }
    },
    {
      value: "Offline-First",
      label: { en: "Real-Time WebSockets Sync", pt: "Sincronização em Tempo Real" }
    }
  ],

  ui: {
    en: {
      navHome: "Home",
      navAbout: "About",
      navResume: "Resume",
      navProjects: "Projects",
      navContact: "Contact",
      btnResume: "Curriculum Vitae",
      btnDownloadCV: "Print / Save PDF",
      btnContact: "Get in Touch",
      btnViewProjects: "View Projects",
      btnDetails: "Project Details",
      btnLiveDemo: "Live Demo",
      btnSourceCode: "Source Code",
      btnSendMessage: "Send Message",
      filterAll: "All",
      filterAI: "AI & Agents",
      filterFullStack: "Full Stack",
      filterFrontend: "Frontend & Mobile",
      aboutTitle: "About Me",
      aboutSubtitle: "Engineering the intersection of high-performance frontend architectures, mobile apps, and artificial intelligence.",
      resumeTitle: "Curriculum Vitae",
      resumeSubtitle: "A track record of technical leadership, scalable architectures, and continuous innovation.",
      experienceTitle: "Work Experience",
      educationTitle: "Education & Specializations",
      skillsTitle: "Core Competencies & Tech Stack",
      differentiatorsTitle: "Key Differentiators",
      languagesTitle: "Languages",
      projectsTitle: "Featured Projects",
      projectsSubtitle: "Selected work showcasing AI integrations, full-stack systems, mobile apps, and offline-first interfaces.",
      contactTitle: "Contact & Collaboration",
      contactSubtitle: "Have an exciting project, full-time opportunity, or want to discuss AI and frontend engineering? Let's connect.",
      phoneLabel: "Phone / WhatsApp",
      emailLabel: "Email",
      locationLabel: "Location",
      formNamePlaceholder: "Your Full Name",
      formEmailPlaceholder: "Your Email Address",
      formSubjectPlaceholder: "Subject",
      formMessagePlaceholder: "How can I help you?",
      formSuccessMessage: "Thank you! Your message has been prepared.",
      copyEmail: "Copy Email",
      copiedEmail: "Copied to clipboard!",
      modalClose: "Close modal",
      footerRights: "All rights reserved.",
      footerBuiltWith: "Crafted with pure HTML5, CSS3, & Vanilla JS. AI-optimized with Antigravity.",
      greeting: "Hello, I'm"
    },
    pt: {
      navHome: "Início",
      navAbout: "Sobre",
      navResume: "Currículo",
      navProjects: "Projetos",
      navContact: "Contato",
      btnResume: "Currículo",
      btnDownloadCV: "Imprimir / Salvar PDF",
      btnContact: "Fale Comigo",
      btnViewProjects: "Ver Projetos",
      btnDetails: "Ver Detalhes",
      btnLiveDemo: "Demonstração",
      btnSourceCode: "Código Fonte",
      btnSendMessage: "Enviar Mensagem",
      filterAll: "Todos",
      filterAI: "IA & Agentes",
      filterFullStack: "Full Stack",
      filterFrontend: "Frontend & Mobile",
      aboutTitle: "Sobre Mim",
      aboutSubtitle: "Engenharia na intersecção entre arquiteturas frontend de alta performance, aplicações mobile e inteligência artificial.",
      resumeTitle: "Currículo Profissional",
      resumeSubtitle: "Trajetória de 11 anos em tecnologia marcada por código limpo, arquiteturas escaláveis e inovação contínua.",
      experienceTitle: "Experiência Profissional",
      educationTitle: "Formação & Especializações",
      skillsTitle: "Competências & Tecnologias",
      differentiatorsTitle: "Diferenciais Competitivos",
      languagesTitle: "Idiomas",
      projectsTitle: "Projetos em Destaque",
      projectsSubtitle: "Seleção de aplicações web, mobile, integrações de IA e arquiteturas offline-first.",
      contactTitle: "Contato & Parcerias",
      contactSubtitle: "Tem um projeto em mente, uma oportunidade ou quer conversar sobre engenharia de IA e frontend? Vamos conversar.",
      phoneLabel: "Telefone / WhatsApp",
      emailLabel: "E-mail",
      locationLabel: "Localização",
      formNamePlaceholder: "Seu Nome Completo",
      formEmailPlaceholder: "Seu E-mail",
      formSubjectPlaceholder: "Assunto",
      formMessagePlaceholder: "Como posso te ajudar?",
      formSuccessMessage: "Obrigado! Sua mensagem foi preparada com sucesso.",
      copyEmail: "Copiar E-mail",
      copiedEmail: "Copiado para a área de transferência!",
      modalClose: "Fechar modal",
      footerRights: "Todos os direitos reservados.",
      footerBuiltWith: "Desenvolvido com HTML5 puro, CSS3 e Vanilla JS. Otimizado com Antigravity.",
      greeting: "Olá, eu sou"
    }
  },

  resume: {
    experience: [
      {
        id: "exp-ai-specialist",
        role: {
          en: "Artificial Intelligence Specialist",
          pt: "Especialista em Inteligência Artificial"
        },
        company: "Grupo Marista",
        period: {
          en: "Jul 2026 - Present",
          pt: "Jul/2026 - Atual"
        },
        location: "Curitiba - PR (Híbrido)",
        summary: {
          en: "Spearheading the engineering of applied generative AI solutions, agentic workflows, LLM integrations, and modern high-performance interfaces.",
          pt: "Liderando a arquitetura e implementação de soluções em Inteligência Artificial Generativa, fluxos agênticos, integração de LLMs e interfaces modernas de alta performance."
        },
        highlights: {
          en: [
            "Architecting and building generative AI pipelines, agentic workflows, and semantic retrieval systems (RAG).",
            "Integrating LLM APIs into web and enterprise products with strict schema validation and token streaming.",
            "Designing intuitive, zero-latency user interfaces and developer tools for interacting with autonomous agents.",
            "Driving engineering best practices, prompt optimization, vector embeddings, and observability in AI systems."
          ],
          pt: [
            "Arquitetura e desenvolvimento de pipelines de IA generativa, fluxos agênticos e sistemas de busca semântica (RAG).",
            "Integração de APIs de LLMs em produtos corporativos com streaming em tempo real e validações estritas de schema.",
            "Criação de interfaces reativas e intuitivas de alta performance para orquestração e uso de agentes inteligentes.",
            "Disseminação de boas práticas de engenharia de software, otimização de prompts e observabilidade em sistemas de IA."
          ]
        },
        technologies: ["Generative AI", "LLMs", "Agentic Workflows", "React", "TypeScript", "Python", "Vector Search", "REST APIs"]
      },
      {
        id: "exp-agro1",
        role: {
          en: "React Frontend & Mobile Developer",
          pt: "Desenvolvedor Frontend React"
        },
        company: "AGRO1",
        period: {
          en: "Dec 2021 - Jul 2026",
          pt: "Dez/2021 - Jul/2026"
        },
        location: "Curitiba - PR (Remoto)",
        summary: {
          en: "Engineered scalable React web applications and high-performance React Native mobile apps with offline-first architecture and real-time WebSocket sync.",
          pt: "Desenvolvimento de aplicações web em React e aplicativos móveis em React Native com arquitetura offline-first e sincronização em tempo real via WebSockets."
        },
        highlights: {
          en: [
            "Developed reusable, modular, and scalable components in React adhering strictly to Clean Code principles.",
            "Engineered high-performance mobile applications in React Native featuring offline-first architecture and real-time synchronization via WebSockets.",
            "Integrated with RESTful APIs and collaborated closely with the backend team to define data contracts and schema structures.",
            "Delivered new features, continuous architectural improvements, and bug fixes following agile sprint planning.",
            "Migrated legacy systems to React and React Native, significantly improving runtime performance and code maintainability.",
            "Authored automated unit and integration tests using Jest and React Testing Library.",
            "Actively participated in technical discussions, architectural decision-making, and peer code reviews.",
            "Provided technical mentorship and support to junior engineering team members."
          ],
          pt: [
            "Desenvolvimento de componentes reutilizáveis e escaláveis em React seguindo princípios de Clean Code.",
            "Desenvolvimento de aplicativos móveis de alta performance em React Native, com arquitetura offline-first e sincronização em tempo real via WebSockets.",
            "Integração com APIs RESTful e colaboração com time de backend na definição de contratos e estrutura de dados.",
            "Desenvolvimento de novas funcionalidades, melhorias e correção de bugs seguindo o planejamento de sprints.",
            "Migração de sistemas legados para React e React Native, melhorando performance e manutenibilidade do código.",
            "Escrita de testes automatizados com Jest e React Testing Library.",
            "Participação ativa em discussões técnicas, decisões de arquitetura e code reviews.",
            "Mentoria e apoio técnico a desenvolvedores com menos experiência."
          ]
        },
        technologies: ["React", "React Native", "TypeScript", "JavaScript", "WebSockets", "Offline-First", "Jest", "React Testing Library", "REST APIs", "Clean Code"]
      },
      {
        id: "exp-unimed-dev",
        role: {
          en: "Development Analyst (VueJS & PWAs)",
          pt: "Analista de Desenvolvimento"
        },
        company: "Unimed Ponta Grossa",
        period: {
          en: "Jan 2020 - Nov 2021",
          pt: "Jan/2020 – Nov/2021"
        },
        location: "Ponta Grossa - PR",
        summary: {
          en: "Developed responsive web applications and PWAs in VueJS, integrated REST/SOAP APIs, and modeled PostgreSQL databases.",
          pt: "Desenvolvimento de aplicações web em VueJS, PWAs responsivas otimizadas para mobile e desktop, integração com APIs REST/SOAP e modelagem PostgreSQL."
        },
        highlights: {
          en: [
            "Engineered responsive, accessible enterprise web applications in VueJS.",
            "Developed responsive Progressive Web Apps (PWAs) optimized for seamless mobile and desktop accessibility.",
            "Integrated with healthcare and enterprise RESTful and SOAP APIs.",
            "Designed and maintained PostgreSQL relational database models and queries.",
            "Collaborated within multidisciplinary agile teams applying Scrum and Kanban methodologies."
          ],
          pt: [
            "Desenvolvimento de aplicações corporativas modernas em VueJS.",
            "Desenvolvimento de PWAs responsivas, otimizadas para acesso mobile e desktop.",
            "Integração com APIs REST e SOAP para serviços corporativos e assistenciais.",
            "Modelagem e manutenção de banco de dados relacional PostgreSQL.",
            "Atuação em times ágeis multidisciplinares utilizando Scrum e Kanban."
          ]
        },
        technologies: ["VueJS", "PWA", "JavaScript", "REST APIs", "SOAP", "PostgreSQL", "Scrum", "Kanban"]
      },
      {
        id: "exp-unimed-bi",
        role: {
          en: "Business Intelligence Analyst",
          pt: "Analista de Business Intelligence"
        },
        company: "Unimed Ponta Grossa",
        period: {
          en: "Apr 2018 - Dec 2019",
          pt: "Abr/2018 – Dez/2019"
        },
        location: "Ponta Grossa - PR",
        summary: {
          en: "Delivered interactive analytics dashboards, business process modeling, and data-driven insights.",
          pt: "Criação de painéis interativos de análise e inteligência de negócios, além de modelagem e otimização de processos corporativos."
        },
        highlights: {
          en: [
            "Created interactive dashboards and analytical views utilizing QlikView, Qlik Sense, and Tableau.",
            "Modeled corporate business workflows and process mining using Upflux.",
            "Extracted, sanitized, and modeled high volumes of healthcare and operational data with SQL."
          ],
          pt: [
            "Criação de dashboards interativos com QlikView, Qlik Sense e Tableau.",
            "Modelagem de processos corporativos e mineração de processos com Upflux.",
            "Extração, tratamento e análise de indicadores operacionais e assistenciais via SQL."
          ]
        },
        technologies: ["QlikView", "Qlik Sense", "Tableau", "Upflux", "SQL", "Data Modeling"]
      },
      {
        id: "exp-cartago-dev",
        role: {
          en: "Development Analyst (PHP & Frontend)",
          pt: "Analista de Desenvolvimento"
        },
        company: "Cartago Softwares",
        period: {
          en: "Jul 2015 - Mar 2018",
          pt: "Jul/2015 – Mar/2018"
        },
        location: "Ponta Grossa - PR",
        summary: {
          en: "Developed and maintained REST APIs and backend services in PHP, along with responsive frontends in HTML, CSS, and JavaScript.",
          pt: "Desenvolvimento e manutenção de APIs REST e serviços backend em PHP, e construção de interfaces frontend com HTML, CSS e JavaScript."
        },
        highlights: {
          en: [
            "Developed and maintained REST APIs and backend services in PHP, implementing business logic, database integrations, and third-party API consumption.",
            "Maintained and enhanced core enterprise platforms using PHP backend and HTML5, CSS3, and JavaScript on the frontend.",
            "Authored complex SQL queries (SELECT, JOIN, GROUP BY), relational data models, and DML operations for high-reliability systems."
          ],
          pt: [
            "Desenvolvimento e manutenção de APIs REST e serviços backend em PHP, incluindo regras de negócio, integração com banco de dados e consumo de serviços externos.",
            "Desenvolvimento e manutenção dos sistemas da empresa, utilizando PHP no backend e HTML, CSS e Javascript no frontend.",
            "Modelagem de dados relacionais e escrita de queries SQL complexas para relatórios e operações transacionais."
          ]
        },
        technologies: ["PHP", "JavaScript", "HTML5", "CSS3", "REST APIs", "MySQL", "Relational Modeling"]
      },
      {
        id: "exp-cartago-support-qa",
        role: {
          en: "Technical Support Analyst & QA Intern",
          pt: "Analista de Suporte Técnico & Estágio em Testes"
        },
        company: "Cartago Softwares",
        period: {
          en: "Oct 2013 - Jun 2015",
          pt: "Out/2013 – Jun/2015"
        },
        location: "Ponta Grossa - PR",
        summary: {
          en: "Foundation of 11 years in technology: client technical support, custom SQL reporting, and software quality assurance.",
          pt: "Início da trajetória de 11 anos em tecnologia: suporte a clientes, geração de relatórios personalizados via SQL e garantia de qualidade de software."
        },
        highlights: {
          en: [
            "Technical customer support and authoring custom business reports using SQL (Apr 2014 – Jun 2015).",
            "Software quality assurance internship testing web and desktop systems ensuring compliance with requirements and standards (Oct 2013 – May 2014)."
          ],
          pt: [
            "Suporte a clientes e geração de relatórios personalizados via SQL (abr/2014 – jun/2015).",
            "Testes de sistemas garantindo conformidade com requisitos e padrões de qualidade (out/2013 – mai/2014)."
          ]
        },
        technologies: ["SQL", "Relational Databases", "Software Testing", "Customer Support", "DML"]
      }
    ],

    education: [
      {
        degree: {
          en: "Postgraduate Specialization - Applied Generative Artificial Intelligence",
          pt: "Especialização em Inteligência Artificial Generativa Aplicada"
        },
        institution: {
          en: "UTFPR (Federal University of Technology - Paraná)",
          pt: "UTFPR (Universidade Tecnológica Federal do Paraná)"
        },
        period: "Cursando / In Progress",
        location: "Curitiba - PR, Brazil",
        details: {
          en: "Advanced postgraduate studies focused on Large Language Models (LLMs), Agentic Architectures, Prompt Engineering, RAG systems, and AI integration into production software.",
          pt: "Pós-graduação com foco em Modelos de Linguagem (LLMs), Arquiteturas Agênticas, Engenharia de Prompts, sistemas RAG e integração prática de IA em aplicações corporativas."
        }
      },
      {
        degree: {
          en: "MBA in Information Technology Management",
          pt: "MBA em Gestão de Tecnologia da Informação"
        },
        institution: {
          en: "Santana Pós - Faculdade Santana",
          pt: "Santana Pós - Faculdade Santana"
        },
        period: "2021",
        location: "Ponta Grossa - PR, Brazil",
        details: {
          en: "Strategic IT governance, agile team leadership, project management, and technology alignment with business value and scalability.",
          pt: "Gestão estratégica de TI, liderança de equipes ágeis, governança de projetos e alinhamento tecnológico com objetivos de negócio."
        }
      },
      {
        degree: {
          en: "Associate Degree in Systems Analysis and Development (TADS)",
          pt: "Tecnólogo em Análise e Desenvolvimento de Sistemas"
        },
        institution: {
          en: "UTFPR (Federal University of Technology - Paraná)",
          pt: "UTFPR (Universidade Tecnológica Federal do Paraná)"
        },
        period: "2019",
        location: "Ponta Grossa - PR, Brazil",
        details: {
          en: "Comprehensive computer science foundations in software engineering, database modeling, algorithms, data structures, and web technologies.",
          pt: "Formação completa com base em engenharia de software, modelagem de banco de dados, algoritmos, estruturas de dados e desenvolvimento web."
        }
      }
    ],

    certifications: [
      {
        title: {
          en: "Applied Generative AI & Agentic Systems",
          pt: "IA Generativa Aplicada & Sistemas Agênticos"
        },
        issuer: "UTFPR",
        year: "2026"
      },
      {
        title: {
          en: "Offline-First Mobile Architecture & WebSockets",
          pt: "Arquitetura Mobile Offline-First & WebSockets"
        },
        issuer: "Advanced Engineering",
        year: "2024"
      },
      {
        title: {
          en: "Clean Code & Automated Testing (Jest & RTL)",
          pt: "Clean Code & Testes Automatizados (Jest & RTL)"
        },
        issuer: "Software Quality Mastery",
        year: "2023"
      }
    ],

    differentiators: [
      {
        title: {
          en: "Offline-First Architecture & Data Synchronization",
          pt: "Arquitetura Offline-First e Sincronização de Dados"
        },
        description: {
          en: "Extensive hands-on experience designing resilient mobile and web systems with local persistence and real-time WebSocket synchronization.",
          pt: "Experiência prática na construção de sistemas móveis e web resilientes com persistência local e sincronização em tempo real via WebSockets."
        }
      },
      {
        title: {
          en: "Fast Learner & Backend Adaptability",
          pt: "Facilidade de Aprendizado e Adaptação a Stacks Backend"
        },
        description: {
          en: "Demonstrated agility adopting new frameworks, libraries, and diverse backend environments (Node.js, PHP, Python, SQL/NoSQL).",
          pt: "Agilidade comprovada para rápida assimilação de novas tecnologias e adaptação harmoniosa a diferentes ecossistemas de backend."
        }
      },
      {
        title: {
          en: "API Contract Architecture & Team Collaboration",
          pt: "Colaboração Ativa na Definição de APIs"
        },
        description: {
          en: "Proven track record collaborating with backend, product, and design teams to co-define robust RESTful/GraphQL schemas and efficient data contracts.",
          pt: "Atuação estreita com equipes de backend, produto e design na co-criação de contratos eficientes de APIs RESTful e GraphQL."
        }
      }
    ],

    skills: [
      {
        category: {
          en: "Frontend & Mobile Engineering",
          pt: "Frontend & Engenharia Mobile"
        },
        items: [
          { name: "ReactJS", level: 98 },
          { name: "React Native", level: 96 },
          { name: "TypeScript", level: 96 },
          { name: "JavaScript (ES6+)", level: 98 },
          { name: "Next.js", level: 90 },
          { name: "VueJS", level: 88 },
          { name: "PWA & Offline-First", level: 95 },
          { name: "Responsividade (Mobile & Web)", level: 98 },
          { name: "State (Redux, Zustand, Context)", level: 94 },
          { name: "Styled Components & Tailwind", level: 92 },
          { name: "Material UI & Bootstrap", level: 90 },
          { name: "Semantic HTML5 & Modern CSS3", level: 98 }
        ]
      },
      {
        category: {
          en: "Architecture, Real-Time & AI",
          pt: "Arquitetura, Tempo Real & IA"
        },
        items: [
          { name: "Arquitetura Offline-First", level: 96 },
          { name: "WebSockets (Real-Time Sync)", level: 94 },
          { name: "APIs RESTful", level: 96 },
          { name: "GraphQL", level: 88 },
          { name: "Inteligência Artificial Generativa", level: 92 },
          { name: "Agentic Workflows & LLMs", level: 90 },
          { name: "Clean Code & Boas Práticas", level: 96 }
        ]
      },
      {
        category: {
          en: "Testing & DevOps / Tooling",
          pt: "Testes, DevOps & Ferramentas"
        },
        items: [
          { name: "Jest", level: 92 },
          { name: "React Testing Library", level: 92 },
          { name: "Git & GitHub", level: 96 },
          { name: "GitHub Actions & CI/CD", level: 88 },
          { name: "Sentry (Observability)", level: 90 },
          { name: "Docker", level: 85 }
        ]
      },
      {
        category: {
          en: "Databases & Backend",
          pt: "Bancos de Dados & Backend"
        },
        items: [
          { name: "Modelagem Relacional", level: 92 },
          { name: "SQL (SELECT, JOIN, GROUP BY)", level: 95 },
          { name: "Manipulação de Dados (DML)", level: 95 },
          { name: "PostgreSQL", level: 92 },
          { name: "MySQL", level: 90 },
          { name: "Oracle", level: 85 },
          { name: "MongoDB", level: 84 },
          { name: "PHP (APIs & Backend)", level: 88 }
        ]
      }
    ],

    languages: [
      {
        name: { en: "Portuguese", pt: "Português" },
        proficiency: { en: "Native", pt: "Nativo" }
      },
      {
        name: { en: "English", pt: "Inglês" },
        proficiency: {
          en: "Advanced (Reading & Writing) | Intermediate (Speaking)",
          pt: "Avançado (leitura e escrita) | Intermediário (conversação)"
        }
      }
    ]
  },

  projects: [
    {
      id: "agentic-workflow-engine",
      category: "ai",
      featured: true,
      title: {
        en: "Agentic AI Workflow Orchestrator",
        pt: "Orquestrador de Fluxos de IA Agêntica"
      },
      shortDescription: {
        en: "Autonomous multi-agent platform orchestrating generative LLMs, tool executions, and vector memory retrieval.",
        pt: "Plataforma autônoma multiagente orquestrando LLMs generativas, chamadas de ferramentas e memória vetorial."
      },
      longDescription: {
        en: "Engineered an intelligent workflow orchestrator capable of planning, dividing, and executing multi-step complex software tasks. Built on clean event-driven principles with progressive disclosure, sandboxed command execution, and structured reflection.",
        pt: "Desenvolveu um orquestrador inteligente capaz de planejar, dividir e executar tarefas de software complexas em várias etapas. Construído com princípios orientados a eventos, sandboxing seguro e autoreflexão estruturada."
      },
      technologies: ["TypeScript", "Generative AI", "LLMs", "Node.js", "Docker", "Vector DB"],
      highlights: {
        en: [
          "Reduced complex task turnaround time by 65% through autonomous decomposition.",
          "Integrated real-time streaming feedback and structured JSON schema validations.",
          "Created modular server adapters for local tooling integration."
        ],
        pt: [
          "Redução de 65% no tempo de conclusão de tarefas complexas via decomposição autônoma.",
          "Integração de streaming em tempo real e validações estritas de schema JSON.",
          "Criação de adaptadores modulares para integração de ferramentas e APIs."
        ]
      },
      demoUrl: "#",
      repoUrl: "https://github.com/giovanegomes",
      badge: "AI & Agents"
    },
    {
      id: "agro-offline-mobile",
      category: "frontend",
      featured: true,
      title: {
        en: "Offline-First Mobile & Real-Time Sync",
        pt: "App Mobile Offline-First & Sincronização em Tempo Real"
      },
      shortDescription: {
        en: "High-performance React Native mobile app with local database persistence and automatic real-time WebSocket sync.",
        pt: "Aplicativo móvel de alta performance em React Native com persistência local e sincronização automática via WebSockets."
      },
      longDescription: {
        en: "Architected and delivered an enterprise mobile application engineered for field operations where internet connectivity is unstable or absent. Utilizes local reactive database storage, bi-directional delta synchronization, and conflict resolution via WebSockets.",
        pt: "Arquitetou e entregou um aplicativo móvel corporativo projetado para operações em campo com conectividade instável ou ausente. Utiliza banco de dados local reativo, sincronização diferencial bidirecional e resolução de conflitos via WebSockets."
      },
      technologies: ["React Native", "TypeScript", "WebSockets", "Offline-First", "Jest", "Clean Code"],
      highlights: {
        en: [
          "Seamless offline availability with automatic zero-loss queue sync upon reconnection.",
          "60 FPS fluid UI performance on both Android and iOS devices.",
          "Automated unit and integration test coverage exceeding 85% with Jest & RTL."
        ],
        pt: [
          "Disponibilidade offline contínua com sincronização automática em fila sem perda de dados na reconexão.",
          "Performance fluida a 60 FPS em dispositivos Android e iOS.",
          "Cobertura de testes automatizados superior a 85% com Jest e React Testing Library."
        ]
      },
      demoUrl: "#",
      repoUrl: "https://github.com/giovanegomes",
      badge: "Mobile & Real-Time"
    },
    {
      id: "clinical-pwa-vue",
      category: "frontend",
      featured: true,
      title: {
        en: "Enterprise Responsive PWA Suite",
        pt: "Suíte Corporativa de PWAs Responsivas"
      },
      shortDescription: {
        en: "Responsive Progressive Web Application with fast load times, REST/SOAP integrations, and PostgreSQL backend.",
        pt: "Aplicação Progressiva (PWA) responsiva com carregamento ultra-rápido, integração REST/SOAP e PostgreSQL."
      },
      longDescription: {
        en: "Engineered a high-availability PWA designed for both desktop workstations and mobile browsers. Focused on accessibility, service worker caching, instant responsiveness, and robust healthcare API data flow.",
        pt: "Desenvolveu uma PWA de alta disponibilidade para navegadores desktop e mobile. Foco em acessibilidade, cache com service workers, resposta instantânea e fluxo de dados confiável com APIs hospitalares."
      },
      technologies: ["VueJS", "PWA", "JavaScript", "REST APIs", "PostgreSQL", "CSS3"],
      highlights: {
        en: [
          "Engineered for touch-screen mobile devices and desktop clinical workstations.",
          "Integrated REST & SOAP enterprise services with resilient error handling.",
          "Optimized relational queries and database indexes reducing latency by 45%."
        ],
        pt: [
          "Projetado para tablets, smartphones e estações de trabalho desktop.",
          "Integração com serviços corporativos REST e SOAP com tratamento resiliente de erros.",
          "Otimização de queries relacionais e índices no PostgreSQL reduzindo latência em 45%."
        ]
      },
      demoUrl: "#",
      repoUrl: "https://github.com/giovanegomes",
      badge: "VueJS & PWA"
    },
    {
      id: "enterprise-fullstack-services",
      category: "fullstack",
      featured: false,
      title: {
        en: "Full Stack Service Architecture & APIs",
        pt: "Arquitetura de Serviços Full Stack & APIs"
      },
      shortDescription: {
        en: "Decoupled REST API services, transactional SQL modeling, and reactive frontend components.",
        pt: "Serviços desacoplados de APIs REST, modelagem SQL transacional e componentes frontend reativos."
      },
      longDescription: {
        en: "Engineered end-to-end web services featuring robust business logic, high-volume database queries, third-party API consumers, and performant user interfaces.",
        pt: "Desenvolveu serviços web de ponta a ponta com regras de negócio robustas, consultas de alto volume em banco de dados, consumo de APIs terceiras e interfaces performáticas."
      },
      technologies: ["PHP", "JavaScript", "MySQL", "REST APIs", "HTML5", "CSS3"],
      highlights: {
        en: [
          "Architected RESTful endpoints supporting critical enterprise workflows.",
          "Engineered complex SQL aggregations (JOIN, GROUP BY) for real-time analytics.",
          "Zero-friction UI integration adhering to accessibility and responsive design."
        ],
        pt: [
          "Construção de endpoints RESTful para processos corporativos críticos.",
          "Queries SQL avançadas com agregações para suporte a relatórios e tomadas de decisão.",
          "Integração fluida entre frontend e backend com foco em estabilidade e segurança."
        ]
      },
      demoUrl: "#",
      repoUrl: "https://github.com/giovanegomes",
      badge: "Full Stack"
    },
    {
      id: "zero-dep-design-system",
      category: "frontend",
      featured: false,
      title: {
        en: "Vanilla Lightweight Design System",
        pt: "Design System Leve em Vanilla Web"
      },
      shortDescription: {
        en: "Ultra-fast, accessible component token library built without bundlers or runtime bloat, achieving perfect 100/100 Lighthouse scores.",
        pt: "Biblioteca de tokens e componentes ultra-rápida e acessível construída sem bundlers, alcançando pontuação 100/100 no Lighthouse."
      },
      longDescription: {
        en: "Created an uncompromising, modern design system based on native CSS custom properties, utility compositions, and native web dialog primitives. Highly customizable with instant theme switching and print optimization.",
        pt: "Criou um design system moderno e sem concessões baseado em CSS custom properties nativas, utilitários e primitivas de diálogo da web. Altamente customizável com troca instantânea de tema e otimização para impressão."
      },
      technologies: ["HTML5", "CSS3", "JavaScript (ES6+)", "WCAG 2.1 AAA", "SVG"],
      highlights: {
        en: [
          "Sub-15KB uncompressed total bundle size with zero external CDN requests.",
          "Built-in full print stylesheet for instant CV export.",
          "Native dark/light mode with CSS variables."
        ],
        pt: [
          "Tamanho total inferior a 15KB sem nenhuma dependência de CDN externa.",
          "Folha de estilos completa para impressão e exportação de currículo integrada.",
          "Modo claro e escuro nativo com variáveis CSS."
        ]
      },
      demoUrl: "#",
      repoUrl: "https://github.com/giovanegomes",
      badge: "Design System"
    }
  ]
};

// Expose globally for browser usage or Node verification
if (typeof window !== 'undefined') {
  window.portfolioData = portfolioData;
}
if (typeof globalThis !== 'undefined') {
  globalThis.portfolioData = portfolioData;
}
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
}
