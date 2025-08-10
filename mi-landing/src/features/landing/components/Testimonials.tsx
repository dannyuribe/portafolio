export function Testimonials() {
  return (
    <section className="py-16 px-4 bg-gray-100 dark:bg-gray-900" id="testimonios">
      <h2 className="text-3xl font-bold mb-10 text-center">Testimonios</h2>

      <div className="max-w-3xl mx-auto space-y-8">
        <blockquote className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <p className="text-lg italic">"Danny fue muy profesional desarrollando nuestra landing. Excelente trabajo y comunicación."</p>
          <footer className="mt-4 text-right font-semibold text-gray-700 dark:text-gray-300">— Cliente freelance</footer>
        </blockquote>

        <blockquote className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md">
          <p className="text-lg italic">"Su app de tesis fue destacada. Muy buen manejo de Kotlin y arquitectura móvil."</p>
          <footer className="mt-4 text-right font-semibold text-gray-700 dark:text-gray-300">— Profesor de tesis</footer>
        </blockquote>
      </div>
    </section>
  )
}