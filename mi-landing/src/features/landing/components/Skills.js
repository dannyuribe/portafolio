import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export function Skills() {
    const skills = [
        "React", "TailwindCSS", "Node.js", "Express",
        "TypeScript", "JavaScript", "PostgreSQL", "MongoDB",
        "Kotlin", "Firebase", "gRPC", "ASP.NET Core"
    ];
    return (_jsx("section", { id: "skills", className: "py-16 bg-gray-50 dark:bg-gray-900", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4", children: [_jsx("h2", { className: "text-3xl font-bold mb-8 text-center", children: "Habilidades T\u00E9cnicas" }), _jsx("ul", { className: "flex flex-wrap justify-center gap-4", children: skills.map((skill) => (_jsx("li", { className: "px-4 py-2 text-sm font-medium bg-white dark:bg-gray-800 rounded-lg shadow", children: skill }, skill))) })] }) }));
}
