const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-white px-6 md:px-12"
    >
      <div className="max-w-4xl text-center">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
          Si tu negocio lo necesita,
          <span className="text-blue-600"> nosotros lo programamos</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-8">
          Creamos sistemas, plataformas y apps 100% a medida: desde reservas y
          ventas online hasta automatización, pagos e integraciones.
        </p>
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full text-lg hover:bg-blue-700 transition"
        >
          Hablemos de tu proyecto
        </a>
        <p className="text-sm text-gray-500 mt-4">
          Desarrollado por Danny Uribe – Ingeniero en Sistemas
        </p>
      </div>
    </section>
  );
};

export default Hero;
