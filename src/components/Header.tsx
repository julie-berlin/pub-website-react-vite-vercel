import { useState } from 'react'
import { useStore } from '@store/useStore'
import './Header.css'

interface HeaderProps {
  logo?: string
}

const Header: React.FC<HeaderProps> = ({ logo = 'eve.ai' }) => {
  const { isMenuOpen, toggleMenu } = useStore()
  const [activeLink, setActiveLink] = useState('home')

  const navItems = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'services', label: 'Services', href: '#services' },
    { id: 'demo', label: 'Demo', href: '#demo' },
    { id: 'about', label: 'About', href: '#about' },
    { id: 'contact', label: 'Contact', href: '#contact' },
  ]

  const handleNavClick = (id: string) => {
    setActiveLink(id)
    if (isMenuOpen) toggleMenu()
  }

  return (
    <header className="header">
      <div className="container">
        <nav className="nav" role="navigation" aria-label="Main navigation">
          <a href="#home" className="logo">
            {logo}
          </a>

          <button
            className={`menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-expanded={isMenuOpen}
            aria-label="Toggle navigation menu"
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