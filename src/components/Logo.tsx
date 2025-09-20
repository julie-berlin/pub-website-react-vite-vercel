import { config } from '../config'
import './Logo.css'

interface LogoProps {
  className?: string
  width?: number
  height?: number
  variant?: 'light' | 'dark'
}

const Logo: React.FC<LogoProps> = ({
  className = '',
  width = config.dimensions.logo.default.width,
  height = config.dimensions.logo.default.height,
  variant = 'light'
}) => {
  const logoSrc = variant === 'dark' ? config.assets.logo.dark : config.assets.logo.light

  return (
    <div
      className={`logo ${className}`}
      style={{
        '--logo-width': `${width}px`,
        '--logo-height': `${height}px`
      } as React.CSSProperties}
    >
      <img
        src={logoSrc}
        alt={config.assets.logo.alt}
        className="logo-image"
      />
    </div>
  )
}

export default Logo