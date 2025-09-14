import './Demo.css'

interface DemoProps {
  title?: string
  description?: string
  demoContent?: React.ReactNode
}

const Demo: React.FC<DemoProps> = ({
  title = 'See Our AI in Action',
  description = 'Experience the power of our AI solutions with live demonstrations',
  demoContent,
}) => {
  return (
    <section id="demo" className="demo">
      <div className="container">
        <div className="demo-header">
          <h2 className="section-title">{title}</h2>
          <p className="section-subtitle">{description}</p>
        </div>
        <div className="demo-content">
          {demoContent || (
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