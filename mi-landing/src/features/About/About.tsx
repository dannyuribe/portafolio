const About = () => {
  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12" id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Sobre mí</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Soy un <strong>Ingeniero en Sistemas</strong>, con
          experiencia en el desarrollo de aplicaciones web y móviles. Me
          apasiona crear soluciones tecnológicas que mejoren la vida de las
          personas y ayuden a crecer a los negocios.
        </p>
        <p className="mt-4 text-gray-700 text-lg leading-relaxed">
          He trabajado con tecnologías como <strong>React</strong>,{" "}
          <strong>TailwindCSS</strong>, <strong>.NET</strong> y{" "}
          <strong>Kotlin</strong>. Siempre estoy aprendiendo y buscando nuevos
          desafíos.
        </p>
      </div>
    </section>
  );
};

export default About;