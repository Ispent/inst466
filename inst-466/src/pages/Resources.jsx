import './PageShared.css'
import './Resources.css'

const websites = [
  {
    name: 'Opportunity@Work',
    url: 'https://www.opportunityatwork.org',
    description: 'A nonprofit advocating for workers Skilled Through Alternative Routes (STARs), people without four-year degrees who have been systematically locked out of middle and high-wage jobs by credential-based hiring systems. Their STARSight tool uses AI to match workers to jobs based on actual skills.',
  },
  {
    name: 'AI Fairness 360 (IBM Research)',
    url: 'https://aif360.res.ibm.com',
    description: 'An open-source Python toolkit from IBM Research containing over 70 fairness metrics and bias mitigation algorithms. Primarily aimed at developers, it allows engineers to audit AI systems for bias before deployment. Actively used to audit AI-driven recruitment systems in finance and HR.',
  },
  {
    name: 'EEOC: AI and Algorithmic Fairness',
    url: 'https://www.eeoc.gov/laws/guidance/questions-and-answers-clarification-and-guidance-uniform-guidelines-employee-selection',
    description: 'Official guidance from the U.S. Equal Employment Opportunity Commission affirming that civil rights laws, including Title VII of the Civil Rights Act, apply to AI-driven hiring tools. Employers cannot use an algorithm to escape liability for discriminatory outcomes.',
  },
  {
    name: 'Blendoor',
    url: 'https://blendoor.com',
    description: 'A bias-blind recruiting platform that strips names, photos, and graduation dates from candidate profiles during the early screening stages. Designed with the principle that blind screening can reduce bias before a human reviewer is involved.',
  },
  {
    name: 'Algorithmic Justice League',
    url: 'https://www.ajl.org',
    description: 'An organization led by Joy Buolamwini that works to raise awareness of algorithmic bias in facial recognition and AI systems more broadly. Produces research, media, and policy advocacy around the harms of unchecked AI, including in employment contexts.',
  },
  {
    name: 'Data & Society Research Institute',
    url: 'https://datasociety.net',
    description: 'An independent research organization studying the social and cultural implications of data-centric technologies and automation. Produces accessible public reports on how algorithmic systems affect labor, hiring, and economic equity.',
  },
  {
    name: 'Electronic Privacy Information Center (EPIC)',
    url: 'https://epic.org/issues/data-protection/worker-privacy/',
    description: 'A public interest research center focused on privacy and civil liberties in the digital age. Their worker privacy project specifically tracks how employers use surveillance technologies, AI, and data collection against workers and applicants.',
  },
  {
    name: 'Center for Democracy & Technology: AI & Civil Rights',
    url: 'https://cdt.org/area-of-focus/ai-and-automated-decision-making/',
    description: 'Policy advocacy and research organization working to ensure that AI systems used in employment comply with civil rights laws and are designed to reduce rather than amplify existing inequalities.',
  },
]

const socialMedia = [
  {
    platform: 'Opportunity@Work',
    handle: '@OpptyAtWork',
    url: 'https://twitter.com/OpptyAtWork',
    platform_name: 'X (Twitter)',
    description: 'Updates on STARs workforce research, legislative advocacy, and employer partnerships working to remove unnecessary degree requirements.',
  },
  {
    platform: 'Algorithmic Justice League',
    handle: '@AJLUnited',
    url: 'https://twitter.com/AJLUnited',
    platform_name: 'X (Twitter)',
    description: 'Research findings, advocacy campaigns, and media coverage on algorithmic bias and AI accountability across sectors including hiring.',
  },
  {
    platform: 'Data & Society',
    handle: '@datasociety',
    url: 'https://twitter.com/datasociety',
    platform_name: 'X (Twitter)',
    description: 'Commentary and links to public research reports on the intersection of technology, labor, and social equity.',
  },
  {
    platform: 'EEOC',
    handle: '@EEOCnews',
    url: 'https://twitter.com/EEOCnews',
    platform_name: 'X (Twitter)',
    description: 'Official updates from the U.S. Equal Employment Opportunity Commission, including guidance and enforcement actions related to AI in hiring.',
  },
  {
    platform: 'Center for Democracy & Technology',
    handle: '@CenDemTech',
    url: 'https://twitter.com/CenDemTech',
    platform_name: 'X (Twitter)',
    description: 'Policy updates and commentary on AI regulation, digital rights, and civil liberties including employment discrimination.',
  },
]

export default function Resources() {
  return (
    <div className="page resources-page">
      <header className="page-header">
        <p className="page-eyebrow">Tools & organizations</p>
        <h1>Resources</h1>
        <p className="page-sub">
          Organizations, platforms, and communities working to address algorithmic bias in hiring, along with ways to stay informed.
        </p>
      </header>

      <div className="page-body">
        <section className="resources-section">
          <h2 className="resources-section-title">Organizations & Websites</h2>
          <div className="resources-grid">
            {websites.map((w) => (
              <a key={w.name} href={w.url} target="_blank" rel="noreferrer" className="resource-card">
                <span className="resource-name">{w.name}</span>
                <span className="resource-url">{w.url.replace('https://', '')}</span>
                <p className="resource-desc">{w.description}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="resources-section">
          <h2 className="resources-section-title">Social Media Pages</h2>
          <div className="social-list">
            {socialMedia.map((s) => (
              <a key={s.handle} href={s.url} target="_blank" rel="noreferrer" className="social-card">
                <div className="social-meta">
                  <span className="social-platform-label">{s.platform_name}</span>
                  <span className="social-handle">{s.handle}</span>
                  <span className="social-name">{s.platform}</span>
                </div>
                <p className="social-desc">{s.description}</p>
              </a>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
