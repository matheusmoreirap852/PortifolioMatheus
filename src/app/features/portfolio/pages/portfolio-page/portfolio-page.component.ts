import { Component, computed, output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ContactMessageFacade } from '../../data-access/contact-message-facade.service';

@Component({
  selector: 'app-portfolio-page',
  imports: [FormsModule],
  templateUrl: './portfolio-page.component.html',
  styleUrl: './portfolio-page.component.scss',
})
export class PortfolioPageComponent {
  readonly accessSystem = output<void>();
  readonly menuOpen = signal(false);
  readonly language = signal<'pt' | 'en'>('pt');
  readonly content = computed(() => portfolioContent[this.language()]);
  readonly name = signal('');
  readonly email = signal('');
  readonly subject = signal('');
  readonly message = signal('');

  constructor(readonly contactMessageFacade: ContactMessageFacade) {}

  toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  closeMenu(): void {
    this.menuOpen.set(false);
  }

  toggleLanguage(): void {
    this.language.update((language) => (language === 'pt' ? 'en' : 'pt'));
    this.closeMenu();
  }

  sendMessage(): void {
    this.contactMessageFacade.send(
      {
        name: this.name(),
        email: this.email(),
        subject: this.subject(),
        message: this.message(),
      },
      () => this.clearForm(),
    );
  }

  private clearForm(): void {
    this.name.set('');
    this.email.set('');
    this.subject.set('');
    this.message.set('');
  }
}

const portfolioContent = {
  pt: {
    navigation: {
      about: 'Sobre',
      experience: 'Experiência',
      projects: 'Projetos',
      resume: 'Currículo',
      contact: 'Contato',
      system: 'Acessar sistema',
      languageLabel: 'English version',
      languageButton: 'EN',
    },
    hero: {
      eyebrow: 'Engenheiro de Software C# / .NET',
      title: 'Matheus Moreira Pessoa',
      copy: 'Analista de Sistemas Sênior com foco em desenvolvimento back-end C#/.NET. Desenvolvo e sustento APIs REST, regras de negócio e integrações com ASP.NET Core, arquitetura em camadas e DDD, do levantamento de requisitos aos testes e à implantação em produção.',
      cases: 'Ver projetos C# / .NET',
      resume: 'Baixar currículo',
      system: 'Acessar sistema',
      stats: [
        ['C# / .NET', 'ASP.NET Core e APIs REST'],
        ['DDD', 'Arquitetura em camadas e regras de negócio'],
        ['AWS', 'EC2/ECS, S3 e Docker'],
      ],
      profile:
        'Desenvolvimento back-end, EF Core e Dapper, Oracle, SQL Server e PostgreSQL. Autenticação JWT, testes automatizados, observabilidade e CI/CD.',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Engenharia C# / .NET, da regra de negócio à produção.',
      heading: 'Resumo profissional',
      paragraphs: [
        'Analista de Sistemas Sênior com experiência em arquitetura, desenvolvimento e sustentação de sistemas e APIs C#/.NET, do levantamento de requisitos e desenho de soluções em camadas e DDD até testes, implantação e manutenção em produção.',
        'Defino arquiteturas de dados e APIs conforme os requisitos do sistema, equilibrando desempenho, escalabilidade, segurança e uso eficiente de recursos. Colaboro com áreas de negócio e equipes técnicas para entregar soluções confiáveis.',
      ],
      contact: 'Contato',
      focus: [
        ['Back-end .NET', 'C#, ASP.NET Core, APIs REST, regras de negócio e integrações.'],
        ['Arquitetura e dados', 'DDD, camadas, EF Core, Dapper e otimização de consultas.'],
        ['Qualidade e implantação', 'xUnit, NUnit, logs, Docker, CI/CD e AWS.'],
      ],
    },
    experience: {
      eyebrow: 'Experiência',
      title: 'Linha do tempo profissional até a atuação atual.',
      items: [
        [
          'Atual',
          'Jun 2026 - atual',
          'Argo Inteligência Digital',
          'Analista de Sistemas Sênior',
          'Desenvolvimento e sustentação de soluções para a Prefeitura de Goiânia com Oracle, Angular, C#/.NET 10, microsserviços, Docker e Kubernetes. Implementação de regras de negócio, integrações, validações, análise de incidentes e evolução de aplicações em produção.',
        ],
        [
          'PJ',
          'Nov 2025 - Jun 2026',
          'Óticas Brasil',
          'Software Engineer PJ',
          'Aplicação .NET com DDD e interface Blazor, Docker e Kubernetes, integrada às bases Oracle das lojas. Serviços de comunicação, consultas consolidadas, otimização de dados, integração Oracle–SQL Server para Slim4 e suporte a workloads em AWS EC2.',
        ],
        [
          'Corporativo',
          'Jan 2024 - Jun 2026',
          'Tata Consultancy Services | Petrobras',
          'Analista de Sistemas Pleno | Software Engineer',
          'Atuação remota em times corporativos com C#/.NET Framework, .NET Core/.NET 6+ e Blazor, documentação e reuniões técnicas. Participação na arquitetura, revisões de código, Docker, Kubernetes e CI/CD. Integração com Oracle, criação de procedures, otimização de consultas, Microsoft Graph API, SharePoint REST e AWS S3 para soluções de gestão documental.',
        ],
        [
          'Produto',
          'Jul 2022 - Fev 2024',
          'Senac Goiás',
          'Analista de Sistemas de TI',
          'Desenvolvimento do Copa Sesc para gestão de torneios e pagamentos com C#/.NET, APIs e Blazor. Cadastros, formulários, validações, modelagem e migrações de dados, logs e desempenho. Implantação na AWS com Docker e Kubernetes, CI/CD e autenticação JWT com integração a serviços Microsoft.',
        ],
        [
          'Setor público',
          '2020 - 2022',
          'Estado de Goiás | SEDI / Cast Group',
          'Sistemas públicos',
          'Sustentação e evolução de sistemas em C#/.NET e OutSystems com regras de licitação. Atuação no GOMAP com DDD, NHibernate e Oracle, modelagem e documentação com Oracle Designer e dicionário de dados, Scrum e revisões de código.',
        ],
      ],
    },
    cases: {
      eyebrow: 'Projetos',
      title: 'C# / .NET em aplicações de negócio.',
      labels: ['Contexto', 'Atuação', 'Solução', 'Tecnologias'],
      items: [
        {
          tag: 'Projeto próprio',
          title: 'LocadoraInfinite',
          details: [
            'Gerenciar clientes, veículos, empresas, contratos e manutenções.',
            'Desenvolvimento de uma aplicação web de locações, API REST e interface Blazor.',
            'Arquitetura em camadas com DDD, EF Core, PostgreSQL, JWT, integração SEFAZ e testes automatizados. Docker na AWS EC2/ECS e armazenamento S3.',
            'C#, ASP.NET Core, .NET 10, Blazor, PostgreSQL, EF Core, Docker, AWS.',
          ],
          result:
            'Gestão de locações com separação entre regras de negócio, aplicação e infraestrutura.',
          url: 'https://github.com/matheusmoreirap852/LocadoraInfinite',
        },
        {
          tag: 'Atual',
          title: 'Sistemas da Prefeitura de Goiânia',
          details: [
            'Desenvolvimento e sustentação de soluções para a Prefeitura de Goiânia com Oracle, Angular, C#/.NET 10, microsserviços, Docker e Kubernetes. Implementação de regras de negócio, integrações, validações, análise de incidentes e evolução de aplicações em produção.',
            'Analista de Sistemas Sênior',
            'Desenvolvimento, integração e sustentação de aplicações.',
            'C#/.NET, Angular, Oracle, Docker, Kubernetes',
          ],
          result: 'Regras de negócio, validações, análise de incidentes e evolução em produção.',
          url: '',
        },
        {
          tag: 'Produto',
          title: 'Copa Sesc — torneios e pagamentos',
          details: [
            'Desenvolvimento do Copa Sesc para gestão de torneios e pagamentos com C#/.NET, APIs e Blazor. Cadastros, formulários, validações, modelagem e migrações de dados, logs e desempenho. Implantação na AWS com Docker e Kubernetes, CI/CD e autenticação JWT com integração a serviços Microsoft.',
            'Analista de Sistemas de TI',
            'Desenvolvimento, integração e sustentação de aplicações.',
            'C#/.NET, Blazor, AWS, JWT',
          ],
          result: 'Formulários, migrações de dados, autenticação JWT e implantação na AWS.',
          url: '',
        },
        {
          tag: 'Setor público',
          title: 'GOMAP',
          details: [
            'Sustentação e evolução de sistemas em C#/.NET e OutSystems com regras de licitação. Atuação no GOMAP com DDD, NHibernate e Oracle, modelagem e documentação com Oracle Designer e dicionário de dados, Scrum e revisões de código.',
            'Sistemas públicos',
            'Desenvolvimento, integração e sustentação de aplicações.',
            'C#/.NET, OutSystems, DDD, NHibernate, Oracle',
          ],
          result: 'DDD, NHibernate, modelagem Oracle e documentação do banco de dados.',
          url: '',
        },
      ],
    },
    architecture: {
      eyebrow: 'Arquitetura .NET',
      title: 'LocadoraInfinite: do domínio à AWS.',
      copy: 'Meu projeto de gestão de locações reúne C#/.NET 10, ASP.NET Core, API REST e Blazor. Os módulos de clientes, veículos, empresas, contratos e manutenções são organizados em camadas de negócio, aplicação e infraestrutura.',
      metrics: [
        ['DDD', 'Arquitetura em camadas e regras de domínio.'],
        ['EF Core', 'Persistência PostgreSQL e consultas LINQ.'],
        ['AWS', 'Docker, execução EC2/ECS e armazenamento S3.'],
      ],
      steps: [
        [
          '01. Domínio',
          'Regras de negócio',
          'Arquitetura em camadas baseada em princípios de DDD, separando negócio, aplicação e infraestrutura.',
        ],
        [
          '02. API e dados',
          'ASP.NET Core e EF Core',
          'API REST, PostgreSQL hospedado no Supabase, LINQ e expressões lambda para acesso e otimização de consultas.',
        ],
        [
          '03. Segurança e qualidade',
          'JWT, integrações e testes',
          'Autenticação JWT, integração com a API da SEFAZ e testes automatizados.',
        ],
        [
          '04. Interface e cloud',
          'Blazor, Docker e AWS',
          'Interface Blazor, empacotamento Docker, implantação na AWS EC2/ECS e armazenamento S3.',
        ],
      ],
    },
    resume: {
      eyebrow: 'Currículo',
      title: 'Competências C# / .NET, formação e currículo.',
      skills: [
        [
          '01',
          'Back-end C# / .NET',
          'C#, .NET, ASP.NET Core, Web API / REST, Entity Framework Core, Dapper, POO e DDD.',
        ],
        [
          '02',
          'Dados e cloud',
          'Oracle, SQL Server, PostgreSQL, NoSQL, PL/SQL, AWS EC2/ECS/S3, Docker, Kubernetes.',
        ],
        [
          '03',
          'Qualidade e integrações',
          'xUnit, NUnit, Serilog, Application Insights, Git/GitHub, Jenkins, GitHub Actions, REST, SOAP, Microsoft Graph API, SharePoint REST, SAP.',
        ],
        ['04', 'Front-end', 'Angular, Blazor, React Native, JavaScript/TypeScript, HTML/CSS, MVC.'],
        [
          '05',
          'IA e integrações',
          'OpenAI API, agentes autônomos, integradores de contexto/DB e prompts avançados.',
        ],
      ],
      downloadTitle: 'Currículo em PDF',
      downloadCopy:
        'Currículo atualizado com experiência profissional, projetos, formação e idiomas.',
      downloadButton: 'Baixar currículo atualizado',
      downloadFile: 'curriculo-matheus-pessoa.pdf',
      educationTitle: 'Formação e idiomas',
      education: [
        'PUC Goiás - Análise e Desenvolvimento de Sistemas, 2018–2021',
        'UFG - Pós-graduação em IA e Ciência de Dados para Gestão Pública, 2026–2028',
        'Inglês B2 - conversação fluente com falantes nativos | Espanhol avançado',
      ],
      practicesLabel: 'Tecnologias e práticas',
      practices: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'EF Core',
        'Dapper',
        'DDD',
        'JWT',
        'xUnit',
        'NUnit',
        'Docker',
        'CI/CD',
        'AWS',
      ],
    },
    code: {
      eyebrow: 'Código fonte',
      title: 'Projeto em destaque e código do portfólio',
      links: [
        [
          'Projeto C# / .NET',
          'LocadoraInfinite',
          'ASP.NET Core, .NET 10, DDD, Blazor, EF Core, PostgreSQL e AWS.',
        ],
        [
          'Portfólio',
          'PortifolioMatheus',
          'Portfólio Angular com experiência profissional, projetos e currículo.',
        ],
        ['Perfil', 'GitHub Matheus Pessoa', 'Outros estudos, evoluções e projetos publicados.'],
      ],
    },
    message: {
      eyebrow: 'Contato',
      title: 'Fale comigo sobre oportunidades C# / .NET.',
      name: 'Nome',
      email: 'Email',
      subject: 'Assunto',
      text: 'Mensagem',
      sending: 'Enviando...',
      send: 'Enviar mensagem',
    },
  },
  en: {
    navigation: {
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      resume: 'Resume',
      contact: 'Contact',
      system: 'Open system',
      languageLabel: 'Versão em português',
      languageButton: 'PT',
    },
    hero: {
      eyebrow: 'C# / .NET Software Engineer',
      title: 'Matheus Moreira Pessoa',
      copy: 'Senior Systems Analyst focused on C#/.NET back-end development. I design and maintain REST APIs, business rules and integrations using ASP.NET Core, layered architecture and DDD, from requirements to testing and production deployment.',
      cases: 'Explore C# / .NET projects',
      resume: 'Download resume',
      system: 'Open system',
      stats: [
        ['C# / .NET', 'ASP.NET Core and REST APIs'],
        ['DDD', 'Layered architecture and business rules'],
        ['AWS', 'EC2/ECS, S3 and Docker'],
      ],
      profile:
        'Back-end development, EF Core and Dapper, Oracle, SQL Server and PostgreSQL. JWT authentication, automated tests, observability and CI/CD.',
    },
    about: {
      eyebrow: 'About',
      title: 'C# / .NET engineering, from business rules to production.',
      heading: 'Professional summary',
      paragraphs: [
        'Senior Systems Analyst experienced in designing, developing and maintaining C#/.NET systems and APIs, from requirements and layered architecture with DDD to testing, deployment and production support.',
        'I design data and API architectures around system requirements, balancing performance, scalability, security and efficient resource use. I collaborate with business and technical teams to deliver reliable solutions.',
      ],
      contact: 'Contact',
      focus: [
        ['Back-end .NET', 'C#, ASP.NET Core, REST APIs, business rules and integrations.'],
        [
          'Architecture and data',
          'DDD, layered architecture, EF Core, Dapper and query optimization.',
        ],
        ['Quality and deployment', 'xUnit, NUnit, logs, Docker, CI/CD and AWS.'],
      ],
    },
    experience: {
      eyebrow: 'Experience',
      title: 'Professional timeline up to my current role.',
      items: [
        [
          'Current',
          'Jun 2026 - present',
          'Argo Inteligência Digital',
          'Senior Systems Analyst',
          'Development and production support for Goiânia City Hall using Oracle, Angular, C#/.NET 10, microservices, Docker and Kubernetes. Business rules, integrations, validation and incident analysis.',
        ],
        [
          'Contract',
          'Nov 2025 - Jun 2026',
          'Óticas Brasil',
          'Software Engineer | contractor',
          '.NET application with DDD and Blazor, Docker and Kubernetes, integrated with store Oracle databases. Communication services, consolidated queries, data optimization, Oracle–SQL Server integration for Slim4 and AWS EC2 workloads.',
        ],
        [
          'Enterprise',
          'Jan 2024 - Jun 2026',
          'Tata Consultancy Services | Petrobras',
          'Mid-level Systems Analyst | Software Engineer',
          'Remote work in enterprise teams with C#/.NET Framework, .NET Core/.NET 6+ and Blazor, documentation and technical meetings. Architecture contributions, code reviews, Docker, Kubernetes and CI/CD. Oracle integration, stored procedures, query optimization, Microsoft Graph API, SharePoint REST and AWS S3 for document management solutions.',
        ],
        [
          'Product',
          'Jul 2022 - Feb 2024',
          'Senac Goiás',
          'IT Systems Analyst',
          'Copa Sesc tournament and payment management with C#/.NET APIs and Blazor. Forms, validation, data modeling and migrations, logs and performance. AWS deployment with Docker and Kubernetes, CI/CD and JWT authentication integrated with Microsoft services.',
        ],
        [
          'Public sector',
          '2020 - 2022',
          'State of Goiás | SEDI / Cast Group',
          'Public-sector systems',
          'Maintenance and evolution of C#/.NET and OutSystems systems for procurement. GOMAP with DDD, NHibernate and Oracle, database modeling and documentation with Oracle Designer, Scrum and code reviews.',
        ],
      ],
    },
    cases: {
      eyebrow: 'Projects',
      title: 'C# / .NET in business applications.',
      labels: ['Context', 'Role', 'Solution', 'Technologies'],
      items: [
        {
          tag: 'Personal project',
          title: 'LocadoraInfinite',
          details: [
            'Manage customers, vehicles, companies, contracts and maintenance.',
            'Development of a rental management web application, REST API and Blazor interface.',
            'Layered DDD architecture, EF Core, PostgreSQL, JWT, SEFAZ integration and automated tests. Docker deployment on AWS EC2/ECS with S3 storage.',
            'C#, ASP.NET Core, .NET 10, Blazor, PostgreSQL, EF Core, Docker, AWS.',
          ],
          result: 'Rental management with business, application and infrastructure layers.',
          url: 'https://github.com/matheusmoreirap852/LocadoraInfinite',
        },
        {
          tag: 'Current',
          title: 'Goiânia City Hall systems',
          details: [
            'Development and production support for Goiânia City Hall using Oracle, Angular, C#/.NET 10, microservices, Docker and Kubernetes. Business rules, integrations, validation and incident analysis.',
            'Senior Systems Analyst',
            'Development, integration and production support.',
            'C#/.NET, Angular, Oracle, Docker, Kubernetes',
          ],
          result: 'Business rules, validation, incident analysis and production evolution.',
          url: '',
        },
        {
          tag: 'Product',
          title: 'Copa Sesc — tournaments and payments',
          details: [
            'Copa Sesc tournament and payment management with C#/.NET APIs and Blazor. Forms, validation, data modeling and migrations, logs and performance. AWS deployment with Docker and Kubernetes, CI/CD and JWT authentication integrated with Microsoft services.',
            'IT Systems Analyst',
            'Development, integration and production support.',
            'C#/.NET, Blazor, AWS, JWT',
          ],
          result: 'Forms, data migrations, JWT authentication and AWS deployment.',
          url: '',
        },
        {
          tag: 'Public sector',
          title: 'GOMAP',
          details: [
            'Maintenance and evolution of C#/.NET and OutSystems systems for procurement. GOMAP with DDD, NHibernate and Oracle, database modeling and documentation with Oracle Designer, Scrum and code reviews.',
            'Public-sector systems',
            'Development, integration and production support.',
            'C#/.NET, OutSystems, DDD, NHibernate, Oracle',
          ],
          result: 'DDD, NHibernate, Oracle data modeling and database documentation.',
          url: '',
        },
      ],
    },
    architecture: {
      eyebrow: '.NET architecture',
      title: 'LocadoraInfinite: from domain to AWS.',
      copy: 'My rental management project brings together C#/.NET 10, ASP.NET Core, a REST API and Blazor. Customer, vehicle, company, contract and maintenance modules are organized in business, application and infrastructure layers.',
      metrics: [
        ['DDD', 'Layered architecture and domain rules.'],
        ['EF Core', 'PostgreSQL persistence and LINQ queries.'],
        ['AWS', 'Docker, EC2/ECS execution and S3 storage.'],
      ],
      steps: [
        [
          '01. Domain',
          'Business rules',
          'Layered architecture based on DDD principles separates business, application and infrastructure responsibilities.',
        ],
        [
          '02. API and data',
          'ASP.NET Core and EF Core',
          'REST API, PostgreSQL hosted on Supabase, LINQ and lambda expressions for data access and query optimization.',
        ],
        [
          '03. Security and quality',
          'JWT, integrations and tests',
          'JWT authentication, SEFAZ API integration and automated tests.',
        ],
        [
          '04. Interface and cloud',
          'Blazor, Docker and AWS',
          'Blazor interface, Docker packaging, deployment on AWS EC2/ECS and S3 storage.',
        ],
      ],
    },
    resume: {
      eyebrow: 'Resume',
      title: 'C# / .NET skills, education and resume.',
      skills: [
        [
          '01',
          'Back-end C# / .NET',
          'C#, .NET, ASP.NET Core, Web API / REST, Entity Framework Core, Dapper, OOP and DDD.',
        ],
        [
          '02',
          'Data & cloud',
          'Oracle, SQL Server, PostgreSQL, NoSQL, PL/SQL, AWS EC2/ECS/S3, Docker, Kubernetes.',
        ],
        [
          '03',
          'Quality & integrations',
          'xUnit, NUnit, Serilog, Application Insights, Git/GitHub, Jenkins, GitHub Actions, REST, SOAP, Microsoft Graph API, SharePoint REST, SAP.',
        ],
        ['04', 'Front-end', 'Angular, Blazor, React Native, JavaScript/TypeScript, HTML/CSS, MVC.'],
        [
          '05',
          'AI & integrations',
          'OpenAI API, autonomous agents, context/database integrations, advanced prompts.',
        ],
      ],
      downloadTitle: 'Resume PDF (Portuguese)',
      downloadCopy:
        'Updated resume with professional experience, projects, education and languages.',
      downloadButton: 'Download updated resume (PT)',
      downloadFile: 'curriculo-matheus-pessoa.pdf',
      educationTitle: 'Education and languages',
      education: [
        'PUC Goiás - Systems Analysis and Development, 2018–2021',
        'UFG - Postgraduate degree in AI and Data Science for Public Management, 2026–2028',
        'English B2 - fluent conversation with native speakers | Advanced Spanish',
      ],
      practicesLabel: 'Technologies and practices',
      practices: [
        'C#',
        '.NET',
        'ASP.NET Core',
        'EF Core',
        'Dapper',
        'DDD',
        'JWT',
        'xUnit',
        'NUnit',
        'Docker',
        'CI/CD',
        'AWS',
      ],
    },
    code: {
      eyebrow: 'Source code',
      title: 'Featured project and portfolio source',
      links: [
        [
          'C# / .NET project',
          'LocadoraInfinite',
          'ASP.NET Core, .NET 10, DDD, Blazor, EF Core, PostgreSQL and AWS.',
        ],
        [
          'Portfolio',
          'PortifolioMatheus',
          'Angular portfolio with professional experience, projects and resume.',
        ],
        ['Profile', 'Matheus Pessoa GitHub', 'Other studies, improvements and published projects.'],
      ],
    },
    message: {
      eyebrow: 'Contact',
      title: 'Contact me about C# / .NET opportunities.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      text: 'Message',
      sending: 'Sending...',
      send: 'Send message',
    },
  },
} as const;
