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
      eyebrow: 'Engenheiro de Software | Back-end .NET | Arquitetura e AWS',
      title: 'Matheus Moreira Pessoa',
      copy: 'Analista de Sistemas Sênior com experiência em arquitetura, desenvolvimento e sustentação de sistemas e APIs C#/.NET, do levantamento de requisitos e desenho de soluções em camadas e DDD até testes, implantação e manutenção em produção.',
      cases: 'Ver estudos de caso',
      resume: 'Baixar currículo',
      system: 'Acessar sistema',
      stats: [
        ['2020', 'Experiência em sistemas públicos'],
        ['Experiência multissetorial', 'Governo, educação e ambiente corporativo'],
        ['Full stack', 'Front-end, back-end, dados, cloud e operação'],
      ],
      profile:
        'C#/.NET, Angular, Oracle, SQL Server, PostgreSQL, Docker, Kubernetes, Git/GitHub, CI/CD e AWS EC2/ECS/S3.',
    },
    about: {
      eyebrow: 'Sobre',
      title: 'Engenharia de software com visão de produto, operação e negócio.',
      heading: 'Resumo profissional',
      paragraphs: [
        'Analista de Sistemas Sênior com experiência em arquitetura, desenvolvimento e sustentação de sistemas e APIs C#/.NET, do levantamento de requisitos e desenho de soluções em camadas e DDD até testes, implantação e manutenção em produção.',
        'Defino arquiteturas de dados e APIs conforme os requisitos do sistema, equilibrando desempenho, escalabilidade, segurança e uso eficiente de recursos. Colaboro com áreas de negócio e equipes técnicas para entregar soluções confiáveis.',
      ],
      contact: 'Contato',
      focus: [
        [
          'Produto',
          'Entendimento do problema, priorização, organização e acompanhamento de entregas.',
        ],
        [
          'Engenharia',
          'APIs, front-end, regras de negócio, integrações, testes e evolução técnica.',
        ],
        ['Operação', 'Publicação, logs, diagnóstico de erros, banco de dados, cloud e suporte.'],
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
          'TCS Brasil',
          'Analista de Sistemas Pleno',
          'Soluções em .NET Framework, .NET Core/.NET 6+ e Blazor. Docker, Kubernetes, Git, CI/CD, revisões de código e participação na arquitetura. Integração com Oracle, procedures, otimização de consultas, Microsoft Graph API, SharePoint REST e AWS S3.',
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
      title: 'Aplicações, arquitetura e integrações.',
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
          title: 'Argo Inteligência Digital',
          details: [
            'Desenvolvimento e sustentação de soluções para a Prefeitura de Goiânia com Oracle, Angular, C#/.NET 10, microsserviços, Docker e Kubernetes. Implementação de regras de negócio, integrações, validações, análise de incidentes e evolução de aplicações em produção.',
            'Analista de Sistemas Sênior',
            'Desenvolvimento, integração e sustentação de aplicações.',
            'C#/.NET, Angular, Oracle, Docker, Kubernetes',
          ],
          result: 'Atuação descrita no currículo atualizado.',
          url: '',
        },
        {
          tag: 'Produto',
          title: 'Senac Goiás',
          details: [
            'Desenvolvimento do Copa Sesc para gestão de torneios e pagamentos com C#/.NET, APIs e Blazor. Cadastros, formulários, validações, modelagem e migrações de dados, logs e desempenho. Implantação na AWS com Docker e Kubernetes, CI/CD e autenticação JWT com integração a serviços Microsoft.',
            'Analista de Sistemas de TI',
            'Desenvolvimento, integração e sustentação de aplicações.',
            'C#/.NET, Blazor, AWS, JWT',
          ],
          result: 'Atuação descrita no currículo atualizado.',
          url: '',
        },
        {
          tag: 'Setor público',
          title: 'Estado de Goiás | SEDI / Cast Group',
          details: [
            'Sustentação e evolução de sistemas em C#/.NET e OutSystems com regras de licitação. Atuação no GOMAP com DDD, NHibernate e Oracle, modelagem e documentação com Oracle Designer e dicionário de dados, Scrum e revisões de código.',
            'Sistemas públicos',
            'Desenvolvimento, integração e sustentação de aplicações.',
            'C#/.NET, OutSystems, DDD, NHibernate, Oracle',
          ],
          result: 'Atuação descrita no currículo atualizado.',
          url: '',
        },
      ],
    },
    architecture: {
      eyebrow: 'Decisões técnicas',
      title: 'Como transformo experiência em engenharia prática.',
      copy: 'Este portfólio também demonstra o Task Manager full stack: API REST, frontend Angular, autenticação, isolamento de tarefas por usuário, formulário público de mensagens, testes, Swagger, Nginx, Docker e publicação estática no GitHub Pages.',
      metrics: [
        ['DDD', 'Domínio separado de infraestrutura e interface.'],
        ['CI/CD', 'Build, testes, Docker e GitHub Pages.'],
        ['Cloud', 'Preparação para AWS EC2, Nginx e proxy de API.'],
      ],
      steps: [
        [
          '01. Domínio',
          'Regra de negócio protegida',
          'Entidades, value objects, factories e casos de uso para reduzir acoplamento em controllers.',
        ],
        [
          '02. API',
          'Contrato REST e persistência',
          'Spring Boot, JPA, validações, tratamento global de erros e Swagger para leitura rápida do contrato.',
        ],
        [
          '03. Interface',
          'Angular com fluxo claro',
          'Componentes, signals, facade, services HTTP e separação entre portfólio público e área logada.',
        ],
        [
          '04. Publicação',
          'Docker, Nginx e Pages',
          'Execução local com Docker Compose e publicação do portfólio como vitrine pública no GitHub Pages.',
        ],
      ],
    },
    resume: {
      eyebrow: 'Currículo',
      title: 'Competências principais, formação e download em PDF.',
      skills: [
        [
          '01',
          'Back-end',
          'C#, .NET, ASP.NET Core, Web API, REST, Entity Framework Core, Dapper, POO / OOP, DDD.',
        ],
        ['02', 'Front-end', 'Angular, Blazor, React Native, JavaScript/TypeScript, HTML/CSS, MVC.'],
        [
          '03',
          'Dados e cloud',
          'Oracle, SQL Server, PostgreSQL, NoSQL, PL/SQL, AWS EC2/ECS/S3, Docker, Kubernetes.',
        ],
        [
          '04',
          'Qualidade e integrações',
          'xUnit, NUnit, Serilog, Application Insights, Git/GitHub, Jenkins, GitHub Actions, REST, SOAP, Microsoft Graph API, SharePoint REST, SAP.',
        ],
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
        'DDD',
        'APIs REST',
        'Microsserviços',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'JWT',
        'AWS',
        'Testes automatizados',
      ],
    },
    code: {
      eyebrow: 'Código fonte',
      title: 'Repositórios do projeto',
      links: [
        [
          'Backend',
          'netPrecisionBack-End',
          'API Spring Boot com autenticação, tarefas, mensagens, Swagger e testes.',
        ],
        [
          'Frontend',
          'netPrecisionFront-endAngular',
          'Angular com portfólio, login, cadastro, área logada e integração com a API.',
        ],
        ['Perfil', 'GitHub Matheus Pessoa', 'Outros estudos, evoluções e projetos publicados.'],
      ],
    },
    message: {
      eyebrow: 'Contato',
      title: 'Fale comigo sobre código, produto ou oportunidades.',
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
      eyebrow: 'Software Engineer | Back-end .NET | Architecture & AWS',
      title: 'Matheus Moreira Pessoa',
      copy: 'Senior Systems Analyst experienced in designing, developing and maintaining C#/.NET systems and APIs, from requirements and layered architecture with DDD to testing, deployment and production support.',
      cases: 'View case studies',
      resume: 'Download resume',
      system: 'Open system',
      stats: [
        ['2020', 'Experience in public-sector systems'],
        ['Multi-sector experience', 'Government, education and enterprise environments'],
        ['Full stack', 'Front-end, back-end, data, cloud and operations'],
      ],
      profile:
        'C#/.NET, Angular, Oracle, SQL Server, PostgreSQL, Docker, Kubernetes, Git/GitHub, CI/CD and AWS EC2/ECS/S3.',
    },
    about: {
      eyebrow: 'About',
      title: 'Software engineering with product, operations and business context.',
      heading: 'Professional summary',
      paragraphs: [
        'Senior Systems Analyst experienced in designing, developing and maintaining C#/.NET systems and APIs, from requirements and layered architecture with DDD to testing, deployment and production support.',
        'I design data and API architectures around system requirements, balancing performance, scalability, security and efficient resource use. I collaborate with business and technical teams to deliver reliable solutions.',
      ],
      contact: 'Contact',
      focus: [
        ['Product', 'Problem understanding, prioritization, organization and delivery tracking.'],
        [
          'Engineering',
          'APIs, front-end, business rules, integrations, tests and technical evolution.',
        ],
        ['Operations', 'Deployments, logs, error diagnosis, databases, cloud and support.'],
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
          'TCS Brasil',
          'Mid-level Systems Analyst',
          '.NET Framework, .NET Core/.NET 6+ and Blazor solutions, Docker, Kubernetes, Git, CI/CD, code reviews and architecture. Oracle integration, stored procedures, query optimization, Microsoft Graph API, SharePoint REST and AWS S3.',
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
      title: 'Applications, architecture and integrations.',
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
          title: 'Argo Inteligência Digital',
          details: [
            'Development and production support for Goiânia City Hall using Oracle, Angular, C#/.NET 10, microservices, Docker and Kubernetes. Business rules, integrations, validation and incident analysis.',
            'Senior Systems Analyst',
            'Development, integration and production support.',
            'C#/.NET, Angular, Oracle, Docker, Kubernetes',
          ],
          result: 'Experience described in the updated resume.',
          url: '',
        },
        {
          tag: 'Product',
          title: 'Senac Goiás',
          details: [
            'Copa Sesc tournament and payment management with C#/.NET APIs and Blazor. Forms, validation, data modeling and migrations, logs and performance. AWS deployment with Docker and Kubernetes, CI/CD and JWT authentication integrated with Microsoft services.',
            'IT Systems Analyst',
            'Development, integration and production support.',
            'C#/.NET, Blazor, AWS, JWT',
          ],
          result: 'Experience described in the updated resume.',
          url: '',
        },
        {
          tag: 'Public sector',
          title: 'State of Goiás | SEDI / Cast Group',
          details: [
            'Maintenance and evolution of C#/.NET and OutSystems systems for procurement. GOMAP with DDD, NHibernate and Oracle, database modeling and documentation with Oracle Designer, Scrum and code reviews.',
            'Public-sector systems',
            'Development, integration and production support.',
            'C#/.NET, OutSystems, DDD, NHibernate, Oracle',
          ],
          result: 'Experience described in the updated resume.',
          url: '',
        },
      ],
    },
    architecture: {
      eyebrow: 'Technical decisions',
      title: 'How I turn experience into practical engineering.',
      copy: 'This portfolio also demonstrates the full-stack Task Manager: REST API, Angular frontend, authentication, user-scoped tasks, public contact form, tests, Swagger, Nginx, Docker and static publishing on GitHub Pages.',
      metrics: [
        ['DDD', 'Domain separated from infrastructure and interface.'],
        ['CI/CD', 'Build, tests, Docker and GitHub Pages.'],
        ['Cloud', 'Preparation for AWS EC2, Nginx and API proxying.'],
      ],
      steps: [
        [
          '01. Domain',
          'Protected business rules',
          'Entities, value objects, factories and use cases to reduce coupling in controllers.',
        ],
        [
          '02. API',
          'REST contract and persistence',
          'Spring Boot, JPA, validations, global error handling and Swagger for quick contract reading.',
        ],
        [
          '03. Interface',
          'Clear Angular flow',
          'Components, signals, facade, HTTP services and separation between public portfolio and logged-in area.',
        ],
        [
          '04. Deployment',
          'Docker, Nginx and Pages',
          'Local execution with Docker Compose and portfolio publishing as a public showcase on GitHub Pages.',
        ],
      ],
    },
    resume: {
      eyebrow: 'Resume',
      title: 'Core skills, education and PDF download.',
      skills: [
        [
          '01',
          'Back-end',
          'C#, .NET, ASP.NET Core, Web API, REST, Entity Framework Core, Dapper, POO / OOP, DDD.',
        ],
        ['02', 'Front-end', 'Angular, Blazor, React Native, JavaScript/TypeScript, HTML/CSS, MVC.'],
        [
          '03',
          'Data & cloud',
          'Oracle, SQL Server, PostgreSQL, NoSQL, PL/SQL, AWS EC2/ECS/S3, Docker, Kubernetes.',
        ],
        [
          '04',
          'Quality & integrations',
          'xUnit, NUnit, Serilog, Application Insights, Git/GitHub, Jenkins, GitHub Actions, REST, SOAP, Microsoft Graph API, SharePoint REST, SAP.',
        ],
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
        'DDD',
        'APIs REST',
        'Microsserviços',
        'Docker',
        'Kubernetes',
        'CI/CD',
        'JWT',
        'AWS',
        'Automated tests',
      ],
    },
    code: {
      eyebrow: 'Source code',
      title: 'Project repositories',
      links: [
        [
          'Backend',
          'netPrecisionBack-End',
          'Spring Boot API with authentication, tasks, messages, Swagger and tests.',
        ],
        [
          'Frontend',
          'netPrecisionFront-endAngular',
          'Angular with portfolio, login, sign-up, logged-in area and API integration.',
        ],
        ['Profile', 'Matheus Pessoa GitHub', 'Other studies, improvements and published projects.'],
      ],
    },
    message: {
      eyebrow: 'Contact',
      title: 'Contact me about code, product or opportunities.',
      name: 'Name',
      email: 'Email',
      subject: 'Subject',
      text: 'Message',
      sending: 'Sending...',
      send: 'Send message',
    },
  },
} as const;
