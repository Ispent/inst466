import './PageShared.css'
import './Research.css'

const sources = [
  {
    authors: 'Wilson, K., & Caliskan, A.',
    year: '2024',
    title: 'Gender, Race, and Intersectional Bias in Resume Screening via Language Model Retrieval',
    journal: 'Proceedings of the AAAI/ACM Conference on AI, Ethics, and Society, 7(1), 1578–1590.',
    url: 'https://doi.org/10.1609/aies.v7i1.31748',
    keyFinding: 'White-associated names preferred 85.1% of the time; Black male candidates preferred in 0% of direct comparisons.',
    summary: 'Researchers at the University of Washington tested 554 resumes and 571 job descriptions across three LLM models, generating over 3 million comparisons. The only variable changed between resumes was whether the applicant\'s name was statistically associated with a Black or white applicant. The results revealed staggering racial bias across all three models, with intersectional effects compounding the penalty for Black male candidates specifically.',
  },
  {
    authors: 'An, J., Huang, D., Lin, C., & Tai, M.',
    year: '2025',
    title: 'Measuring Gender and Racial Biases in Large Language Models: Intersectional Evidence from Automated Resume Evaluation',
    journal: 'PNAS Nexus, 4(3), pgaf089.',
    url: 'https://doi.org/10.1093/pnasnexus/pgaf089',
    keyFinding: 'Across GPT-3.5, GPT-4o, Gemini 1.5, Claude 3.5, and Llama 3, Black male applicants were consistently disadvantaged relative to white candidates, even with identical qualifications.',
    summary: 'This large-scale randomized experiment scored 361,000 synthetic resumes across five major AI models with randomly assigned racially coded names. The study confirmed that the racial bias found in the Wilson & Caliskan study was not model-specific, it appeared across every model tested, with Black male candidates facing the steepest and most consistent penalties. Both race and gender independently compounded disadvantage.',
  },
  {
    authors: 'Fountain, J. E.',
    year: '2022',
    title: 'The Moon, the Ghetto and Artificial Intelligence: Reducing Systemic Racism in Computational Algorithms',
    journal: 'Government Information Quarterly, 39(2), 101645.',
    url: 'https://doi.org/10.1016/j.giq.2021.101645',
    keyFinding: 'Machine learning hiring systems scored candidates lower based on zip codes, a direct proxy for socioeconomic status and race because historical data treated signs of privilege as indicators of quality.',
    summary: 'This study examines how systemic racism becomes embedded in AI systems through the data they are trained on. In the context of hiring, models trained on historical recruitment data learn that signals associated with privileged backgrounds, certain zip codes, universities, and institutions correlate with success, and they penalize candidates who lack those signals. This isn\'t an edge case but a structural flaw in how these systems are designed and trained.',
  },
  {
    authors: 'Fabris, A., et al.',
    year: '2025',
    title: 'Fairness and Bias in Algorithmic Hiring: A Multidisciplinary Survey',
    journal: 'ACM Transactions on Intelligent Systems and Technology, 16(1), 1–54.',
    url: 'https://doi.org/10.1145/3696457',
    keyFinding: 'Bias in algorithmic hiring operates across multiple dimensions simultaneously including race, gender, and socioeconomic background. Existing technical mitigation tools are insufficient on their own.',
    summary: 'A comprehensive survey of current research on algorithmic hiring bias, drawing from computer science, law, sociology, and organizational behavior. The authors catalog the many ways bias manifests in automated hiring pipelines and evaluate the adequacy of existing interventions, both technical (bias auditing tools) and regulatory (EEOC guidance, NYC Local Law 144). The paper argues that no single solution is sufficient and that structural reform is necessary.',
  },
  {
    authors: 'Trumble, S.',
    year: '2025',
    title: 'Algorithmic Hiring and the Efficiency Paradox: Systemic Failures of ATS in U.S. Labor Markets',
    journal: 'Social Science Research Network. Data: Harvard Business School & Bureau of Labor Statistics.',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5327840',
    keyFinding: 'ATS contributes to inflated hiring costs, extended unemployment periods, and the systematic exclusion of qualified candidates, reinforcing socioeconomic bias at scale.',
    summary: 'Drawing on employment data from Harvard Business School and the Bureau of Labor Statistics, this paper argues that ATS systems paradoxically harm employers as well as applicants. By over-filtering based on credentials and rigid keyword matching, these tools narrow talent pipelines, extend time-to-hire, and exclude candidates who are qualified but whose resumes don\'t conform to format expectations. The socioeconomic bias is not incidental. It is built into the scoring logic of most commercial ATS systems.',
  },
]

export default function Research() {
  return (
    <div className="page research-page">
      <header className="page-header">
        <p className="page-eyebrow">Evidence base</p>
        <h1>Research</h1>
        <p className="page-sub">
          Peer-reviewed studies and reports documenting the scale and nature of algorithmic bias in automated hiring systems.
        </p>
      </header>

      <div className="page-body">
        <div className="research-list">
          {sources.map((s, i) => (
            <article key={i} className="research-card">
              <div className="research-card-header">
                <span className="research-index">0{i + 1}</span>
                <div>
                  <p className="research-authors">{s.authors} ({s.year})</p>
                  <h2 className="research-title">
                    {s.url !== '#'
                      ? <a href={s.url} target="_blank" rel="noreferrer">{s.title}</a>
                      : s.title}
                  </h2>
                  <p className="research-journal">{s.journal}</p>
                </div>
              </div>
              <div className="research-finding">
                <span className="finding-label">Key Finding</span>
                <p>{s.keyFinding}</p>
              </div>
              <p className="research-summary">{s.summary}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
