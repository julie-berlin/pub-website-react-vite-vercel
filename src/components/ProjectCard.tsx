import { useState, useRef, useEffect } from 'react'
import { ProjectCard as ProjectCardType } from '../types/portfolio'
import './ProjectCard.css'

interface ProjectCardProps {
  project: ProjectCardType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false)
  const [imageLoading, setImageLoading] = useState(true)
  const [imageError, setImageError] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  const handleImageLoad = () => {
    setImageLoading(false)
  }

  const handleImageError = () => {
    setImageLoading(false)
    setImageError(true)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    )

    if (cardRef.current) {
      observer.observe(cardRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className={`project-card ${isFlipped ? 'flipped' : ''}`}
      onClick={handleCardClick}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleCardClick()
        }
      }}
      role="button"
      aria-label={`${isFlipped ? 'Show overview' : 'Show details'} for ${project.title} project. Press Enter or Space to flip card.`}
      aria-expanded={isFlipped}
      aria-describedby={`card-${project.title.replace(/\s+/g, '-').toLowerCase()}-content`}
    >
      <div className="project-card-inner">
        {/* Front of card */}
        <div className="project-card-front">
          <div className="project-card-image">
            {imageLoading && (
              <div className="image-placeholder">
                <div className="image-skeleton"></div>
              </div>
            )}
            {imageError ? (
              <div className="image-error">
                <div className="image-error-icon">📷</div>
                <span className="image-error-text">Image unavailable</span>
              </div>
            ) : (
              isVisible && (
                <img
                  src={project.coverImage}
                  alt={project.title}
                  onLoad={handleImageLoad}
                  onError={handleImageError}
                  style={{ display: imageLoading ? 'none' : 'block' }}
                />
              )
            )}
          </div>
          <div className="project-card-content" id={`card-${project.title.replace(/\s+/g, '-').toLowerCase()}-content`}>
            <h3 className="project-card-title" id={`card-${project.title.replace(/\s+/g, '-').toLowerCase()}-title`}>
              {project.title}
            </h3>
            <p className="project-card-description">
              {project.description}
            </p>
            <div className="project-card-tags" role="list" aria-label="Project technologies">
              {project.tags.map((tag, index) => (
                <span
                  key={index}
                  className="project-tag"
                  role="listitem"
                  style={{ '--index': index } as React.CSSProperties}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="project-card-back" aria-hidden={!isFlipped}>
          <div className="project-card-back-content">
            <h3 className="project-card-title" aria-describedby={`card-${project.title.replace(/\s+/g, '-').toLowerCase()}-details`}>
              {project.title}
            </h3>
            <p className="project-card-detailed-description" id={`card-${project.title.replace(/\s+/g, '-').toLowerCase()}-details`}>
              {project.detailedDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard