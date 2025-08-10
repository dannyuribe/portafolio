import { Mail, Github, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Contacto</h2>
        <p className="text-gray-700 dark:text-gray-300 mb-8">
          ¿Te interesa trabajar conmigo o quieres saber más? No dudes en escribirme.
        </p>

        <div className="flex justify-center gap-6 text-gray-800 dark:text-gray-200">
          <a
            href="mailto:dannyuribe.dev@gmail.com"
            className="hover:text-blue-600 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
          <a
            href="https://github.com/dannyuribe"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://co.linkedin.com/in/danny-uribe-632a52202"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-700 transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Botón para descargar CV */}
        <div className="mt-8">
          <a
            href="/cv_danny_uribe.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Descargar CV
          </a>
        </div>
      </div>
    </section>
  )
}