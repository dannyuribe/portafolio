import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useRef } from "react"
import { projects } from "../data/projects"

export function Projects() {
  
  const scrollRefs = useRef<HTMLDivElement[]>([])

  const scroll = (idx: number, direction: "left" | "right") => {
    const container = scrollRefs.current[idx]
    if (container) {
      container.scrollBy({
        left: direction === "left" ? -300 : 300,
        behavior: "smooth",
      })
    }
  }

  return (
    <section id="projects" className="w-full py-12 px-1 md:px-8 bg-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Proyectos Destacados</h2>

        <div className="flex overflow-x-auto space-x-6 md:grid md:grid-cols-2 md:gap-10 p-1">
          {projects.map((project, idx) => (
            <Card
              key={idx}
              className="bg-white rounded-2xl shadow-md overflow-hidden min-w-[85%] md:min-w-0"
            >
              {/* Slider de imágenes */}
              <div className="relative w-full">
                <div
                  ref={(el) => {
                    if (el) scrollRefs.current[idx] = el
                  }}
                  className="flex overflow-x-auto scroll-smooth no-scrollbar"
                >
                  {project.images.map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`${project.title} screenshot ${i + 1}`}
                      className="w-full flex-shrink-0 object-cover"
                      style={{ minWidth: "100%", height: "220px" }}
                    />
                  ))}
                </div>

                {project.images.length > 1 && (
                  <>
                    <button
                      onClick={() => scroll(idx, "left")}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => scroll(idx, "right")}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Contenido */}
              <CardHeader className="text-left">
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>

              <CardContent className="flex flex-wrap gap-2">
                {project.technologies.map((tech, i) => (
                  <Badge key={i} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </CardContent>

              <CardFooter className="flex gap-4">
                {project.demoUrl && (
                  <Button asChild>
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Demo
                    </a>
                  </Button>
                )}
                {project.codeUrl && (
                  <Button variant="outline" asChild>
                    <a
                      href={project.codeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Ver Código
                    </a>
                  </Button>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}