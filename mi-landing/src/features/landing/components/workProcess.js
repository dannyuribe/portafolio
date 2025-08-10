import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const WorkProcess = () => {
    const steps = [
        { step: "1. Reunión inicial", desc: "Entendemos tu negocio y definimos objetivos." },
        { step: "2. Diseño y prototipo", desc: "Te mostramos cómo lucirá antes de programar." },
        { step: "3. Desarrollo e integración", desc: "Creamos el sistema y conectamos herramientas." },
        { step: "4. Pruebas y lanzamiento", desc: "Nos aseguramos de que todo funcione al 100%." },
        { step: "5. Soporte y optimización", desc: "Te acompañamos para mejorar resultados." }
    ];
    return (_jsx("section", { className: "py-16 bg-gray-50", id: "workProcess", children: _jsxs("div", { className: "max-w-5xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-10", children: "Nuestro Proceso de Trabajo" }), _jsx("div", { className: "grid md:grid-cols-3 gap-6", children: steps.map((item, i) => (_jsxs("div", { className: "bg-white p-6 rounded-xl shadow hover:shadow-lg transition", children: [_jsx("h3", { className: "text-xl font-semibold mb-2", children: item.step }), _jsx("p", { className: "text-gray-600", children: item.desc })] }, i))) })] }) }));
};
