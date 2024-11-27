export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    company: "General Motors (GM) - Microsoft client",
    role: "Senior AI Consultant – Generative AI & LangChain Developer",
    period: "Feb 2024 – Present",
    description: "Leading the development and integration of advanced Generative AI solutions to enhance internal processes and decision-making at GM.",
    responsibilities: [
      "Spearheaded the development and integration of Generative AI models to enhance internal processes",
      "Developed and optimized LangChain-based applications for automating workflows and knowledge retrieval",
      "Leveraged Azure OpenAI services to build intelligent AI Agents and AI-powered search functionalities",
      "Integrated Python-based AI models with Azure Bot Services for robust chatbots",
      "Worked extensively with AI Search to enhance document retrieval using RAG",
      "Collaborated with cloud engineers for seamless deployment of AI models in Azure"
    ],
    technologies: ["Python", "LangChain", "Langraph", "Azure OpenAI", "Azure Cognitive Search", "Azure Functions", "NLP", "RAG", "Azure Bot Services"]
  },
  {
    company: "Con Edison AI",
    role: "Senior Consultant - AI Developer",
    period: "April 2024 – Aug 2024",
    description: "Developed an advanced AI chatbot for Con Edison's GRC knowledgebase, enhancing decision-making in the utility sector.",
    responsibilities: [
      "Led AI development using Python, Node.js, and React",
      "Implemented Retrieval Augmented Generation (RAG) for dynamic data integration",
      "Tailored the system to Con Edison's specific utility industry needs",
      "Collaborated with cross-functional teams to ensure accuracy and relevance"
    ],
    technologies: ["Python", "Node.js", "React", "Azure OpenAI", "Document Intelligence", "RAG"]
  },
  {
    company: "Edison GPT - Southern California Project",
    role: "Senior Consultant - AI Developer",
    period: "Aug 2023 – March 2024",
    description: "Developed a sophisticated AI chatbot serving as a comprehensive resource for GRC knowledgebase.",
    responsibilities: [
      "Led the development of an AI-driven chatbot for extensive GRC knowledge base",
      "Employed RAG to provide in-depth analysis and dynamic answers",
      "Worked closely with GRC experts to ensure accurate knowledge representation",
      "Engaged in iterative testing and refinement using prompt engineering"
    ],
    technologies: ["Python", "Azure OpenAI", "Azure AI Cognitive Search", "Lang chain", "Azure Functions", "RAG", "NLP", "Prompt Engineering"]
  },
  {
    company: "Three Stripes",
    role: "AI Developer – Product Developer",
    period: "March 2023 – Aug 2023",
    description: "Contributed to a cutting-edge productivity suite leveraging foundation models and generative AI for DevOps optimization.",
    responsibilities: [
      "Developed AI-powered solutions for streamlining development processes",
      "Implemented responsible AI and governance practices",
      "Enhanced testing and quality assurance workflows",
      "Integrated foundation models for automated development tasks"
    ],
    technologies: ["Python", "Azure OpenAI", "Lang chain", "Azure Functions", "NLP", "Prompt Engineering"]
  },
  {
    company: "CliftonLarsonAllen",
    role: "Software Developer – Senior Consultant",
    period: "Feb 2023 – Present",
    description: "Leading the development of audit and base microservices while consulting with business stakeholders.",
    responsibilities: [
      "Development of Backend Audit and Base Microservices",
      "Product improvement and optimization",
      "Business stakeholder consultation and solution design",
      "Implementation of scalable microservices architecture"
    ],
    technologies: ["Node.js", "MongoDB", "Azure", "Docker", "PostgreSQL", "Microservices"]
  },
  {
    company: "Price Spider - Where to Buy (WTB)",
    role: "Software Developer – Senior Consultant",
    period: "Nov 2020 – Jan 2023",
    description: "Led the development of retail solution platform helping brands build relationships with shoppers.",
    responsibilities: [
      "Development and maintenance of locate, wtb-api, pipeline, and wtb framework microservices",
      "R&D for product improvement and optimization",
      "Stakeholder requirement gathering and solution implementation",
      "Implementation of monitoring and observability solutions"
    ],
    technologies: ["Golang", "Node.js", "MongoDB", "AWS", "React", "Docker", "Kubernetes", "PostgreSQL", "Telegraf", "Influx", "Grafana", "CI/CD"]
  },
  {
    company: "Ace Turtle - Rubicon",
    role: "Software Developer",
    period: "Feb 2020 – Oct 2020",
    description: "Developed omnichannel retail product platform for integrated inventory and order management.",
    responsibilities: [
      "Development of product framework for end-to-end retail lifecycle",
      "Creation of aggregation framework for report generation",
      "Development and deployment of data lake solutions",
      "Implementation of analytics and ETL processes"
    ],
    technologies: ["Node.js", "MongoDB", "Restify", "AWS Lambda", "API Gateway", "SQS", "Glue", "Athena", "Express", "Angular"]
  },
  {
    company: "Developscripts - Mazzady Auction Software",
    role: "Software Engineer",
    period: "December 2018 – Feb 2020",
    description: "Developed comprehensive auction software providing various auction paradigms for ecommerce solutions.",
    responsibilities: [
      "Integration of customized auction solutions",
      "Development of backend and frontend components",
      "Integration of multiple payment gateways",
      "Implementation of real-time bidding features"
    ],
    technologies: ["Node.js", "MySQL", "Express", "Sequelize", "PayPal API", "Stripe API"]
  }
];