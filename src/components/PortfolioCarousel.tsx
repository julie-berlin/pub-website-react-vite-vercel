import { useRef, useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/pro-duotone-svg-icons'
import { ProjectCard as ProjectCardType } from '../types/portfolio'
import ProjectCard from './ProjectCard'
import { shuffle } from '../utils/shuffle'
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
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)
  const [shuffledProjects, setShuffledProjects] = useState<ProjectCardType[]>(projects)

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
    setCurrentSlide(Math.min(slideIndex, shuffledProjects.length - 1))
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

  // Touch event handlers for swipe functionality
  const minSwipeDistance = 50

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null) // Reset touchEnd when a new touch starts
    setTouchStart(e.targetTouches[0].clientX)
  }

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX)
  }

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return

    const distance = touchStart - touchEnd
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && canScrollRight) {
      scrollRight()
    }
    if (isRightSwipe && canScrollLeft) {
      scrollLeft()
    }

    // Reset touch states
    setTouchStart(null)
    setTouchEnd(null)
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
      // Throttle scroll updates for performance
      clearTimeout(carousel.dataset.scrollTimeout as any)
      carousel.dataset.scrollTimeout = setTimeout(() => {
        updateScrollButtons()
      }, 10) as any
    }

    carousel.addEventListener('keydown', handleKeyDown)
    carousel.addEventListener('scroll', handleScroll)

    // Initial button state
    updateScrollButtons()

    return () => {
      carousel.removeEventListener('keydown', handleKeyDown)
      carousel.removeEventListener('scroll', handleScroll)
    }
  }, [shuffledProjects.length])

  // Shuffle projects on component mount
  useEffect(() => {
    setShuffledProjects(shuffle(projects))
  }, [projects])

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
            aria-label="View previous projects in carousel"
            aria-controls="portfolio-carousel"
          >
            <FontAwesomeIcon icon={faChevronLeft} aria-hidden="true" />
          </button>

          <div
            ref={carouselRef}
            className="portfolio-carousel"
            id="portfolio-carousel"
            tabIndex={0}
            role="group"
            aria-label={`Portfolio projects carousel with ${shuffledProjects.length} projects. Use arrow keys to navigate or swipe on mobile.`}
            aria-live="polite"
            aria-atomic="false"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            {shuffledProjects.map((project, index) => (
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
            aria-label="View next projects in carousel"
            aria-controls="portfolio-carousel"
          >
            <FontAwesomeIcon icon={faChevronRight} aria-hidden="true" />
          </button>
        </div>

        {/* Pagination indicators */}
        <div className="carousel-pagination" role="tablist" aria-label="Portfolio project navigation">
          {shuffledProjects.map((project, index) => (
            <button
              key={index}
              className={`pagination-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => scrollToSlide(index)}
              role="tab"
              aria-label={`Go to project ${index + 1}: ${project.title}`}
              aria-selected={index === currentSlide}
              tabIndex={index === currentSlide ? 0 : -1}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default PortfolioCarousel