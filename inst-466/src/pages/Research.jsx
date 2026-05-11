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
    summary: 'In this 2024 study out of the University of Washington, researchers tested 554 resumes and 571 job descriptions across three LLM models, generating over 3 million comparisons. The only thing they changed between resumes was the name — specifically, whether it was statistically associated with a Black or white applicant. Astonishingly, resumes with white-associated names were preferred 85.1% of the time, while Black-associated names were preferred in only 8.6% of comparisons. When researchers looked strictly at Black male candidates versus white male candidates, the Black male candidates were preferred in zero percent of tests. What makes this study especially important is that it shows this isn\'t just a one-model problem — the bias was consistent across all three models tested, and we can clearly see how both race and gender compound the disadvantage.',
  },
  {
    authors: 'An, J., Huang, D., Lin, C., & Tai, M.',
    year: '2025',
    title: 'Measuring Gender and Racial Biases in Large Language Models: Intersectional Evidence from Automated Resume Evaluation',
    journal: 'PNAS Nexus, 4(3), pgaf089.',
    url: 'https://doi.org/10.1093/pnasnexus/pgaf089',
    keyFinding: 'Across GPT-3.5, GPT-4o, Gemini 1.5, Claude 3.5, and Llama 3, Black male applicants were consistently disadvantaged relative to white candidates, even with identical qualifications.',
    summary: 'This study took things a step further by scoring 361,000 fake resumes across five of the most widely used AI models, including GPT-3.5 Turbo, GPT-4o, Gemini 1.5 Flash, Claude 3.5 Sonnet, and Llama 3-70b. Qualifications were kept identical, with only the names being randomly assigned. Across every single model, Black male applicants were consistently disadvantaged relative to white candidates. This is important because it confirms that what Wilson & Caliskan found wasn\'t just a fluke or a problem with one specific model. We can see the same pattern of bias show up regardless of which AI is doing the screening, and Black male candidates faced the steepest penalties across the board.',
  },
  {
    authors: 'Fountain, J. E.',
    year: '2022',
    title: 'The Moon, the Ghetto and Artificial Intelligence: Reducing Systemic Racism in Computational Algorithms',
    journal: 'Government Information Quarterly, 39(2), 101645.',
    url: 'https://doi.org/10.1016/j.giq.2021.101645',
    keyFinding: 'Machine learning hiring systems scored candidates lower based on zip codes, a direct proxy for socioeconomic status and race because historical data treated signs of privilege as indicators of quality.',
    summary: 'This study looks at how systemic racism gets baked into AI systems through the data they are trained on, and it\'s a really important piece for understanding why bias in hiring tools isn\'t accidental. When these models are trained on historical hiring data, they learn to associate certain background signals, like specific zip codes, universities, or institutions, with being a quality candidate. That\'s because historically, candidates from more privileged backgrounds were the ones getting hired. So the model doesn\'t just learn your qualifications, it learns to treat signs of privilege as indicators of quality. This wasn\'t an unexpected edge case the researchers stumbled on. It was a broader structural flaw embedded in how these AI tools are designed and trained from the start.',
  },
  {
    authors: 'Fabris, A., et al.',
    year: '2025',
    title: 'Fairness and Bias in Algorithmic Hiring: A Multidisciplinary Survey',
    journal: 'ACM Transactions on Intelligent Systems and Technology, 16(1), 1–54.',
    url: 'https://doi.org/10.1145/3696457',
    keyFinding: 'Bias in algorithmic hiring operates across multiple dimensions simultaneously including race, gender, and socioeconomic background. Existing technical mitigation tools are insufficient on their own.',
    summary: 'This is one of the more broad pieces of research on this topic, pulling together findings from computer science, law, sociology, and organizational behavior to paint a full picture of how algorithmic bias in hiring actually works. What\'s notable here is that the authors don\'t just document the problem, they also look at whether the tools we have to fix it are actually working. They look at both technical interventions like bias auditing tools, and regulatory ones like the EEOC guidance and NYC Local Law 144, which requires independent audits of AI hiring tools. Their overall takeaway is that none of these solutions on their own are enough, and that addressing this issue is going to require more than just patching individual tools.',
  },
  {
    authors: 'Trumble, S.',
    year: '2025',
    title: 'Algorithmic Hiring and the Efficiency Paradox: Systemic Failures of ATS in U.S. Labor Markets',
    journal: 'Social Science Research Network. Data: Harvard Business School & Bureau of Labor Statistics.',
    url: 'https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5327840',
    keyFinding: 'ATS contributes to inflated hiring costs, extended unemployment periods, and the systematic exclusion of qualified candidates, reinforcing socioeconomic bias at scale.',
    summary: 'Drawing on data from the Harvard Business School and the Bureau of Labor Statistics, this paper makes a really interesting argument — that ATS systems don\'t just harm applicants, they actually end up hurting the employers using them too. By over-filtering based on credentials and rigid keyword matching, these tools narrow down the talent pipeline so much that companies end up with longer hiring timelines and miss out on qualified candidates whose resumes just didn\'t fit the format the system was looking for. And when you look at who gets excluded the most, it falls along socioeconomic lines. That\'s not a side effect of how these systems work. According to this research, it\'s built directly into their scoring logic.',
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
