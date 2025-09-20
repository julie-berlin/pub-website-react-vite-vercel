import { useState } from 'react'
import { useStore } from '@store/useStore'
import Logo from './Logo'
import { getContent } from '../content'
import { config } from '../config'
import './Header.css'

const Header: React.FC = () => {
  const { isMenuOpen, toggleMenu } = useStore()
  const [activeLink, setActiveLink] = useState('home')
  const content = getContent('en')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    ...content.navigation.header.mainNav.map(item => ({
      id: item.href.replace('#', ''),
      label: item.text,
      href: item.href
    }))
  ]

  const handleNavClick = (id: string) => {
    setActiveLink(id)
    if (isMenuOpen) toggleMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a href={content.navigation.header.logo.href} className="logo-link" aria-label={content.navigation.header.logo.ariaLabel}>
            <Logo width={config.dimensions.logo.default.width} height={config.dimensions.logo.default.height} />
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? content.navigation.header.mobileMenu.closeLabel : content.navigation.header.mobileMenu.openLabel}
          >
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
            <span className="menu-icon"></span>
          </button>

          <ul className={`nav-list ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  className={`nav-link ${activeLink === item.id ? 'active' : ''}`}
                  onClick={() => handleNavClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header