export const WorkProcess = () => {
  const steps = [
    { step: "Reunión inicial", desc: "Entendemos tu negocio y definimos objetivos." },
    { step: "Diseño y prototipo", desc: "Te mostramos cómo lucirá antes de programar." },
    { step: "Desarrollo e integración", desc: "Creamos el sistema y conectamos herramientas." },
    { step: "Pruebas y lanzamiento", desc: "Nos aseguramos de que todo funcione al 100%." },
    { step: "Soporte y optimización", desc: "Te acompañamos para mejorar resultados." }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Nuestro Proceso de Trabajo</h2>
        <div className="grid md:grid-cols-5 gap-6">
          {steps.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">{item.step}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
