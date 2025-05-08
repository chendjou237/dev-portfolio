import React from 'react'
import { currentProjects } from '../../../utils/data/current-projects'

const ProjectCard = ({ project }) => (
  <div className={`p-6 rounded-xl border backdrop-blur-sm transition-all duration-300 group bg-gray-800/50 border-gray-700/50 hover:border-${project.color}-500/50`}>
    <h3 className={`mb-3 text-xl font-semibold text-${project.color}-400`}>{project.title}</h3>
    <p className="mb-4 text-gray-300">{project.description}</p>
    <div className="flex flex-wrap gap-2">
      {project.technologies.map((tech, index) => (
        <span
          key={index}
          className={`px-3 py-1 text-sm text-${tech.color}-300 rounded-full bg-${tech.color}-500/20`}
        >
          {tech.name}
        </span>
      ))}
    </div>
  </div>
)

const CurrentlyWorkingOn = () => {
  return (
    <section className="py-16 w-full bg-gradient-to-b to-transparent from-gray-900/50">
      <div className="px-4 mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold text-white md:text-4xl">
          Currently Working On
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {currentProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CurrentlyWorkingOn
