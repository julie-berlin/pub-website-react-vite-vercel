import { useState } from 'react'
import { ProjectCard as ProjectCardType } from '../types/portfolio'
import './ProjectCard.css'

interface ProjectCardProps {
  project: ProjectCardType
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleCardClick = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div
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
      aria-label={`View details for ${project.title}. Click to flip card.`}
    >
      <div className="project-card-inner">
        {/* Front of card */}
        <div className="project-card-front">
          <div className="project-card-image">
            <img src={project.coverImage} alt={project.title} />
          </div>
          <div className="project-card-content">
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
            <div className="project-card-tags">
              {project.tags.map((tag, index) => (
                <span key={index} className="project-tag">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Back of card */}
        <div className="project-card-back">
          <div className="project-card-back-content">
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-detailed-description">
              {project.detailedDescription}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard