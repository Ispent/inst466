import './PageShared.css'
import './About.css'

export default function About() {
  return (
    <div className="page about-page">
      <header className="page-header">
        <p className="page-eyebrow">About this project</p>
        <h1>Mission & Purpose</h1>
        <p className="page-sub">
          Decoded is a public education tool built to close the information gap between job seekers and the automated systems that evaluate them.
        </p>
      </header>

      <div className="page-body">
        <section className="about-section">
          <h2>The Problem</h2>
          <p>
            Within the United States, employment isn't just a matter of income, it's the driving force behind stability in housing, healthcare, and access to education. When the system that dictates access to these resources has bias embedded in it, it doesn't just disadvantage individuals. It reproduces and repeats the structural inequalities already present in our society.
          </p>
          <p>
            As of today, an estimated 99% of Fortune 500 companies utilize automated tools to screen applicants. These tools, applicant tracking systems (ATS) and AI-powered screening software, promise efficiency and objectivity. But research consistently shows they are not objective. They carry deep racial and socioeconomic bias that disproportionately harms Black applicants and those from lower-income backgrounds.
          </p>
          <p>
            For Black Americans and those from lower-income backgrounds, these AI-driven hiring tools are just a new face in a long history of systematic discrimination and marginalization.
          </p>
        </section>

        <div className="pull-quote">
          <blockquote>
            "Resumes with white-associated names were preferred 85.1% of the time. Black male candidates were preferred in zero percent of direct comparisons."
          </blockquote>
          <cite>Wilson & Caliskan, 2024 (University of Washington)</cite>
        </div>

        <section className="about-section">
          <h2>The Gap</h2>
          <p>
            Most tools designed to address algorithmic hiring bias are enterprise-level product, built for developers and data scientists, not for the average job seeker. What's missing is a tool that empowers individual applicants with the knowledge to understand and navigate a system that is actively working against them.
          </p>
          <p>
            This project addresses that gap by making research-backed information about AI hiring bias accessible, understandable, and actionable for everyday people.
          </p>
        </section>

        <section className="about-section">
          <h2>Our Approach</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Transparency</h3>
              <p>We explain how ATS and AI screening systems work, how bias enters these systems, and what resume characteristics are flagged or penalized in plain language.</p>
            </div>
            <div className="approach-card">
              <h3>Education</h3>
              <p>We surface peer-reviewed research and real-world case studies so applicants understand the documented scale and nature of this problem.</p>
            </div>
            <div className="approach-card">
              <h3>Action</h3>
              <p>We connect users with advocacy organizations, legal resources, and tools designed to help them both navigate and push back against biased systems.</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
