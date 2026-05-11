import { Link } from 'react-router-dom'
import './Home.css'

const stats = [
  { number: '99%', label: 'of Fortune 500 companies use automated screening to filter applicants' },
  { number: '85.1%', label: 'of the time, white-associated names were preferred over Black-associated names by AI models' },
  { number: '0%', label: 'of tests preferred Black male candidates over white male candidates in direct comparison' },
  { number: '7.5M', label: 'middle and high-wage jobs denied to workers skilled through alternative routes over two decades' },
]

const explainers = [
  {
    title: 'What is an ATS?',
    body: 'An Applicant Tracking System (ATS) is software that automatically filters and ranks job applications before a human ever sees them. Most large companies use these tools to manage high volumes of applicants.',
  },
  {
    title: 'How does bias enter the system?',
    body: 'These AI models are trained on historical hiring data that already reflects decades of racial and socioeconomic discrimination. The model learns to treat signals of privilege as indicators of quality.',
  },
  {
    title: 'Who is most affected?',
    body: 'Black applicants with racially identifiable names face the steepest penalties. Candidates from lower socioeconomic backgrounds are also disadvantaged through zip code signals, lack of degree credentials, and word choice.',
  },
  {
    title: 'Why does this matter?',
    body: 'Employment in the US isn\'t just about income. It drives access to housing, healthcare, and education. A biased hiring system doesn\'t just disadvantage individuals; it reproduces and reinforces structural inequality.',
  },
]

export default function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <p className="hero-eyebrow">AI Hiring Bias: The Hidden Filter</p>
          <h1>Your resume is being judged before a human reads it.</h1>
          <p className="hero-sub">
            Automated systems screen millions of applicants every day. Research shows they carry deep racial and socioeconomic bias. This site breaks down how it works, who it hurts, and what you can do about it.
          </p>
          <div className="hero-cta">
            <Link to="/research" className="btn-primary">See the Research</Link>
            <Link to="/about" className="btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      <section className="stats-section">
        <p className="section-label">By the numbers</p>
        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.number} className="stat-card">
              <span className="stat-number">{s.number}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="explainer-section">
        <p className="section-label">Understanding the issue</p>
        <h2 className="section-heading">What you need to know</h2>
        <div className="explainer-grid">
          {explainers.map((e) => (
            <div key={e.title} className="explainer-card">
              <h3>{e.title}</h3>
              <p>{e.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <div className="cta-band-inner">
          <h2>Ready to understand the system working against you?</h2>
          <div className="hero-cta">
            <Link to="/research" className="btn-primary">Explore Research</Link>
            <Link to="/resources" className="btn-secondary">Find Resources</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
