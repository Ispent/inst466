import './PageShared.css'
import './Videos.css'
import instaReel from '../assets/insta_reel_advocacy.mp4'

const videos = [
  {
    title: 'AI is Hiring and Firing People',
    embedUrl: 'https://www.youtube.com/embed/3oszbn5-Reg',
    type: 'youtube',
  },
  {
    title: 'AI Hiring Bias (Instagram Reel)',
    embedUrl: instaReel,
    type: 'local',
  },
  {
    title: 'How AI is Changing Hiring',
    embedUrl: 'https://www.youtube.com/embed/hHYgOUpyMIY',
    type: 'youtube',
  },
  {
    title: 'The Problem with AI Hiring Tools',
    embedUrl: 'https://www.youtube.com/embed/Chos7GKdcWo',
    type: 'youtube',
  },
]

export default function Videos() {
  return (
    <div className="page videos-page">
      <header className="page-header">
        <p className="page-eyebrow">Watch & learn</p>
        <h1>Videos</h1>
        <p className="page-sub">
          Documentaries, explainers, news coverage, and advocacy content about AI hiring bias and algorithmic discrimination.
        </p>
      </header>

      <div className="page-body">
        <div className="videos-grid">
          {videos.map((v, i) => (
            <div key={i} className="video-card">
              <div className="video-embed">
                {v.type === 'youtube' ? (
                  <iframe
                    src={v.embedUrl}
                    title={v.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video src={v.embedUrl} controls />
                )}
              </div>
              <div className="video-info">
                <h3>{v.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
