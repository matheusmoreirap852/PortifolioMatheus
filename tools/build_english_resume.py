from pathlib import Path
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_CENTER
from reportlab.lib.pagesizes import A4
import shutil

root=Path(__file__).resolve().parents[1]
out=root/'public/resume-matheus-pessoa.pdf'
styles=getSampleStyleSheet()
styles.add(ParagraphStyle(name='NameCV',fontName='Helvetica-Bold',fontSize=20,leading=24,textColor=HexColor('#15334d'),spaceAfter=5))
styles.add(ParagraphStyle(name='SubtitleCV',fontName='Helvetica-Bold',fontSize=10,leading=14,textColor=HexColor('#15334d'),spaceAfter=6))
styles.add(ParagraphStyle(name='SectionCV',fontName='Helvetica-Bold',fontSize=11,leading=14,textColor=HexColor('#15334d'),spaceBefore=12,spaceAfter=6))
styles.add(ParagraphStyle(name='BodyCV',fontName='Helvetica',fontSize=9.3,leading=13,spaceAfter=6))
styles.add(ParagraphStyle(name='RoleCV',fontName='Helvetica-Bold',fontSize=10,leading=14,spaceBefore=7,spaceAfter=3))
story=[]
def p(text,style='BodyCV'): story.append(Paragraph(text,styles[style]))
def role(company,title,dates,body):
 p(company+' | '+title,'RoleCV');p(dates);p(body)
def heading(text):p(text,'SectionCV')
p('MATHEUS MOREIRA PESSOA','NameCV')
p('SOFTWARE ENGINEER | BACK-END .NET | ARCHITECTURE &amp; AWS','SubtitleCV')
p('Goiânia, GO, Brazil | +55 62 98582-1680 | matheus.pessoa.dev@gmail.com')
p('<link href="https://github.com/matheusmoreirap852" color="#15334d">GitHub</link> | <link href="https://www.linkedin.com/in/matheus-moreira-pessoa-80b42a1b6" color="#15334d">LinkedIn</link> | <link href="https://matheusmoreirap852.github.io/PortifolioMatheus/" color="#15334d">Portfolio</link>')
heading('PROFESSIONAL PROFILE')
p('Senior Systems Analyst experienced in architecture, development and maintenance of C#/.NET systems and APIs. Work spans requirements gathering and layered solution design with DDD through testing, deployment, version control and production support.')
p('Experience with Oracle and SQL Server, with current use of Supabase (PostgreSQL); knowledge of NoSQL databases, stored procedures, optimized queries and read routing. Design of data and API architectures according to system requirements, balancing performance, scalability, security and efficient resource use. Hands-on experience with Docker, Git/GitHub, CI/CD, Kubernetes and AWS EC2/ECS/S3. Collaboration with business stakeholders and technical teams to deliver reliable, scalable solutions.')
heading('TECHNICAL SKILLS')
p('<b>Back-end:</b> C#, .NET, ASP.NET Core, Web API / RESTful, Entity Framework Core, Dapper, object-oriented programming and DDD.')
p('<b>Front-end:</b> Angular components, services, routing, forms and HttpClient; React Native components, props/state, hooks and navigation; JavaScript/TypeScript and HTML/CSS. Interface modeling, MVC where applicable, componentization and code reuse.')
p('<b>Integrations:</b> REST, SOAP, Microsoft Graph API, SharePoint REST and SAP.')
p('<b>Data &amp; cloud:</b> Oracle, SQL Server, Supabase (PostgreSQL), NoSQL, PL/SQL, AWS EC2/ECS/S3, Docker and Kubernetes.')
p('<b>Quality:</b> xUnit, NUnit, Serilog, Application Insights, Git/GitHub and CI/CD with Jenkins / GitHub Actions.')
heading('PROFESSIONAL EXPERIENCE')
role('Argo Inteligência Digital','Senior Systems Analyst','Jun 2026 - present','Development and maintenance of solutions for Goiânia City Hall using Oracle, Angular, C#/.NET 10, microservices, Docker and Kubernetes. Implementation of business rules, integrations and validation, incident analysis and evolution of production applications.')
role('Óticas Brasil','Software Engineer | Contractor','Nov 2025 - Jun 2026','Development of a .NET application with DDD architecture and an MVC front-end in Blazor, Docker and Kubernetes, integrated with store Oracle databases. Communication services, consolidated queries and data-access optimization; Oracle-SQL Server integration for Slim4 and support for workloads on AWS EC2.')
story.append(PageBreak())
p('MATHEUS MOREIRA PESSOA','SubtitleCV')
heading('PROFESSIONAL EXPERIENCE - CONTINUED')
role('TCS Brasil','Mid-level Systems Analyst','Jan 2024 - Jun 2026','Development of .NET Framework and .NET Core/.NET 6+ solutions, Blazor, Docker, Kubernetes, Git, CI/CD and code reviews. Contributions to project architecture, Oracle integration, stored procedures and query optimization. Work with Microsoft Graph API, SharePoint REST and AWS S3.')
role('Senac Goiás','IT Systems Analyst','Jul 2022 - Feb 2024','Development and evolution of Copa Sesc for tournament and payment management. C#/.NET features and APIs with a Blazor interface, including registrations, forms and validation for events and social assistance services. Support for application execution and deployment on AWS using Docker and Kubernetes. Error handling, logging and performance improvements for high-usage periods. Data modeling and migrations, collaboration with infrastructure, DBA and DevOps teams on CI/CD and production support. JWT authentication and authorization with public/private keys and Microsoft service integrations.')
role('State of Goiás | SEDI / Cast Group','Public-sector systems','2020 - 2022','Maintenance and evolution of C#/.NET and OutSystems public-sector systems, implementing procurement business rules. Work on GOMAP using DDD, NHibernate and Oracle. Data modeling and database documentation with Oracle Designer and the data dictionary. Collaboration in Scrum, planning, daily meetings and code reviews held on Wednesdays and Thursdays.')
heading('RELEVANT PROJECT')
p('Rental management system | Personal project','RoleCV')
p('Web application for rental management, with customer, vehicle, company, contract and maintenance modules. Built with ASP.NET Core and .NET 10, using a layered architecture based on DDD principles and separating business rules, application and infrastructure.')
p('REST API and Blazor interface; persistence with Entity Framework Core and PostgreSQL hosted on Supabase. JWT authentication, SEFAZ API integration, automated tests, LINQ queries and lambda expressions, with data-access optimization. Packaged with Docker and deployed on AWS EC2/ECS, with S3 storage.')
p('<link href="https://github.com/matheusmoreirap852/LocadoraInfinite" color="#15334d">github.com/matheusmoreirap852/LocadoraInfinite</link>')
heading('EDUCATION &amp; LANGUAGES')
p('<b>Systems Analysis and Development</b> | PUC Goiás, 2018-2021.<br/><b>Postgraduate studies in AI and Data Science for Public Management</b> | UFG, 2026-2028.')
p('<b>AI &amp; integrations:</b> OpenAI API, autonomous agents, context/database integrations and advanced prompts.')
p('<b>Languages:</b> English B2 (fluent conversation with native speakers) | Advanced Spanish.')
def footer(canvas,doc):
 canvas.setFont('Helvetica',8);canvas.setFillColor(HexColor('#607080'));canvas.drawRightString(A4[0]-40,23,f'{doc.page}')
SimpleDocTemplate(str(out),pagesize=A4,rightMargin=40,leftMargin=40,topMargin=33,bottomMargin=35,title='Matheus Moreira Pessoa - Resume',author='Matheus Moreira Pessoa').build(story,onFirstPage=footer,onLaterPages=footer)
shutil.copyfile(out,root/'resume-matheus-pessoa.pdf')
if __name__=='__main__':
 import pypdfium2 as pdfium
 preview=root/'tmp/pdfs';preview.mkdir(parents=True,exist_ok=True)
 pdf=pdfium.PdfDocument(str(out))
 for i in range(len(pdf)):
  pdf[i].render(scale=1.3).to_pil().save(preview/f'resume-en-{i+1}.png')
 print(f'Generated {len(pdf)} pages')
