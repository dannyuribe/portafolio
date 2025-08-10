export function Skills() {
  const skills = [
    "React", "TailwindCSS", "Node.js", "Express",
    "TypeScript", "JavaScript", "PostgreSQL", "MongoDB",
    "Kotlin", "Firebase", "gRPC", "ASP.NET Core"
  ]

  return (
    <section id="skills" className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Habilidades Técnicas</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {skills.map((skill) => (
            <li
              key={skill}
              className="px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 rounded-lg shadow"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}