import './Logo.css'

interface LogoProps {
  className?: string
  width?: number
  height?: number
}

const Logo: React.FC<LogoProps> = ({ className = '', width = 120, height = 85 }) => {
  return (
    <div className={`logo ${className}`}>
      <img
        src="/eveai_logo_light_sm.svg"
        alt="eve.ai - AI Consulting"
        width={width}
        height={height}
        className="logo-image"
      />
    </div>
  )
}

export default Logo