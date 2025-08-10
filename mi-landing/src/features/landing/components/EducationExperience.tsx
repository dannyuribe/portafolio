import { GraduationCap, Code2, Smartphone } from "lucide-react"

export function EducationExperience() {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto" id="experiencia">
      <h2 className="text-3xl font-bold mb-10 text-center">Educación & Experiencia</h2>

      <div className="space-y-10">
        <div className="flex items-start gap-4">
            <GraduationCap className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold">Ingeniero en Sistemas</h3>
              <p className="text-muted-foreground">
                Universidad Cooperativa de Colombia · 2020 – 2025
              </p>
              <p className="mt-1 text-sm">
                Especializado en el diseño y desarrollo de soluciones digitales de alto impacto: 
                plataformas web, aplicaciones móviles y APIs robustas. Experiencia en proyectos 
                reales que priorizan el rendimiento, la escalabilidad y una experiencia de usuario excepcional.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
              <Code2 className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold">Analista de Desarrollo Full Stack – QCode</h3>
                <p className="text-muted-foreground">Mar. 2023 – Actualidad · Envigado, Antioquia (Remoto)</p>
                <p className="mt-1 text-sm">
                  Participación en procesos ágiles para el desarrollo y mantenimiento de aplicaciones empresariales. 
                  Refactorización de código, documentación técnica y colaboración con equipos multidisciplinarios. 
                  Tecnologías principales: MySQL, AngularJS y herramientas de backend y frontend.
                </p>
              </div>
          </div>

          <div className="flex items-start gap-4">
            <Code2 className="w-8 h-8 text-primary flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold">Desarrollador de Software – IBIS Creativa S.A.S.</h3>
              <p className="text-muted-foreground">Abr. 2022 – Nov. 2022 · Cali, Valle del Cauca</p>
              <p className="mt-1 text-sm">
                Desarrollo de soluciones digitales personalizadas, incluyendo sistemas web y aplicaciones 
                para clientes corporativos. Participación en todas las etapas del ciclo de vida del software, 
                desde la planificación hasta el despliegue.
              </p>
            </div>
          </div>

      </div>
    </section>
  )
}