import { useState, useEffect } from 'react'
import { config } from '../config'
import './Demo.css'

interface DemoProps {
  title?: string
  description?: string
  demoContent?: React.ReactNode
  showTableauDemo?: boolean
}

const Demo: React.FC<DemoProps> = ({
  title = 'See Our AI in Action',
  description = 'Experience the power of our AI solutions with live demonstrations',
  demoContent,
  showTableauDemo = true,
}) => {
  const [iframeError, setIframeError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Set a timeout for iframe loading
    const timeout = setTimeout(() => {
      if (isLoading) {
        setIframeError(true)
        setIsLoading(false)
      }
    }, config.timeouts.iframeLoad)

    return () => clearTimeout(timeout)
  }, [isLoading])

  const handleIframeLoad = () => {
    setIsLoading(false)
    setIframeError(false)
  }

  const handleIframeError = () => {
    setIframeError(true)
    setIsLoading(false)
  }

  const handleOpenInNewTab = () => {
    window.open(
      config.tableau.shareUrl,
      '_blank',
      'noopener,noreferrer'
    )
  }

  const tableauContent = (showTableauDemo && config.features.showTableauDemo) && (
    <div>
      <div className="demo-header-controls">
        <button
          onClick={handleOpenInNewTab}
          className="demo-new-tab-button"
          aria-label="Open HR Analytics Dashboard in new tab"
        >
          <span>Open Dashboard in New Tab</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </button>
      </div>

      <div className="demo-tableau-container" role="region" aria-label="HR Analytics Dashboard">

      {isLoading && (
        <div className="demo-loading" aria-live="polite" aria-busy="true">
          <div className="demo-spinner" aria-hidden="true"></div>
          <p>Loading HR Analytics Dashboard...</p>
        </div>
      )}

      {iframeError && (
        <div className="demo-fallback" role="alert">
          <div className="demo-fallback-content">
            <h3>HR Analytics Dashboard</h3>
            <p>The interactive dashboard is temporarily unavailable.</p>
            <p>This dashboard showcases:</p>
            <ul>
              <li>Real-time people analytics and insights</li>
              <li>Employee engagement metrics</li>
              <li>Workforce planning visualizations</li>
              <li>Diversity and inclusion analytics</li>
            </ul>
            <a
              href={config.tableau.shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="demo-external-link"
              aria-label="View HR Analytics Dashboard on Tableau Public (opens in new tab)"
            >
              View Dashboard Directly on Tableau
            </a>
          </div>
        </div>
      )}

      <iframe
        src={config.tableau.embedUrl}
        className={`demo-iframe ${iframeError ? 'demo-iframe-hidden' : ''}`}
        allowFullScreen
        title="eve.ai HR Analytics Dashboard - Interactive data visualization showing people analytics and workforce insights"
        loading="lazy"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        aria-hidden={iframeError}
        tabIndex={iframeError ? -1 : 0}
      />
      </div>
    </div>
  )

  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="demo-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{description}</p>
        </div>
        <div className="demo-content">
          {demoContent || tableauContent || (
            <div className="demo-placeholder">
              <div className="demo-window">
                <div className="demo-window-header">
                  <span className="demo-window-dot"></span>
                  <span className="demo-window-dot"></span>
                  <span className="demo-window-dot"></span>
                </div>
                <div className="demo-window-body">
                  <p>Interactive AI Demo</p>
                  <div className="demo-animation">
                    <div className="demo-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default Demo