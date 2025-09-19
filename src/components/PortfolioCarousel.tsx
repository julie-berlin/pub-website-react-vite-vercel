import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-duotone-svg-icons'
import { ProjectCard as ProjectCardType } from '../types/portfolio'
import ProjectCard from './ProjectCard'
import './PortfolioCarousel.css'

interface PortfolioCarouselProps {
  projects: ProjectCardType[]
  title?: string
  subtitle?: string
}

const PortfolioCarousel: React.FC<PortfolioCarouselProps> = ({
  projects,
  title,
  subtitle
}) => {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)

  const scrollAmount = 370 // Card width + margin

  const updateScrollButtons = () => {
    const carousel = carouselRef.current
    if (!carousel) return

    setCanScrollLeft(carousel.scrollLeft > 0)
    setCanScrollRight(
      carousel.scrollLeft < carousel.scrollWidth - carousel.clientWidth
    )

    // Calculate current slide based on scroll position
    const slideIndex = Math.round(carousel.scrollLeft / scrollAmount)
    setCurrentSlide(slideIndex)
  }

  const scrollLeft = () => {
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.scrollBy({ left: -scrollAmount, behavior: 'smooth' })
  }

  const scrollRight = () => {
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }

  const scrollToSlide = (slideIndex: number) => {
    const carousel = carouselRef.current
    if (!carousel) return
    carousel.scrollTo({ left: slideIndex * scrollAmount, behavior: 'smooth' })
  }

  useEffect(() => {
    const carousel = carouselRef.current
    if (!carousel) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.target !== carousel) return

      switch (e.key) {
        case 'ArrowLeft':
          e.preventDefault()
          scrollLeft()
          break
        case 'ArrowRight':
          e.preventDefault()
          scrollRight()
          break
        case 'Home':
          e.preventDefault()
          carousel.scrollTo({ left: 0, behavior: 'smooth' })
          break
        case 'End':
          e.preventDefault()
          carousel.scrollTo({ left: carousel.scrollWidth, behavior: 'smooth' })
          break
      }
    }

    const handleScroll = () => {
      updateScrollButtons()
    }

    carousel.addEventListener('keydown', handleKeyDown)
    carousel.addEventListener('scroll', handleScroll)

    // Initial button state
    updateScrollButtons()

    return () => {
      carousel.removeEventListener('keydown', handleKeyDown)
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <section className="portfolio-carousel-section">
      <div className="container">
        {(title || subtitle) && (
          <div className="portfolio-carousel-header">
            {title && <h2 className="section-title">{title}</h2>}
            {subtitle && <p className="section-subtitle">{subtitle}</p>}
          </div>
        )}

        <div className="portfolio-carousel-container">
          <button
            className={`carousel-nav-button carousel-nav-left ${!canScrollLeft ? 'disabled' : ''}`}
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Previous projects"
          >
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>

          <div
            ref={carouselRef}
            className="portfolio-carousel"
            tabIndex={0}
            role="region"
            aria-label="Portfolio projects carousel. Use arrow keys to navigate."
          >
            {projects.map((project, index) => (
              <ProjectCard
                key={`${project.title}-${index}`}
                project={project}
              />
            ))}
          </div>

          <button
            className={`carousel-nav-button carousel-nav-right ${!canScrollRight ? 'disabled' : ''}`}
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Next projects"
          >
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="carousel-pagination">
          {projects.map((_, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioCarousel