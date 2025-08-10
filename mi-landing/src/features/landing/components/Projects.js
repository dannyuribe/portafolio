import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";
import { projects } from "../data/projects";
export function Projects() {
    const scrollRefs = useRef([]);
    const scroll = (idx, direction) => {
        const container = scrollRefs.current[idx];
        if (container) {
            container.scrollBy({
                left: direction === "left" ? -300 : 300,
                behavior: "smooth",
            });
        }
    };
    return (_jsx("section", { id: "projects", className: "w-full py-12 px-1 md:px-8 bg-white", children: _jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-8", children: "Proyectos Destacados" }), _jsx("div", { className: "flex overflow-x-auto space-x-6 md:grid md:grid-cols-2 md:gap-10 p-1", children: projects.map((project, idx) => (_jsxs(Card, { className: "bg-white rounded-2xl shadow-md overflow-hidden min-w-[85%] md:min-w-0", children: [_jsxs("div", { className: "relative w-full", children: [_jsx("div", { ref: (el) => {
                                            if (el)
                                                scrollRefs.current[idx] = el;
                                        }, className: "flex overflow-x-auto scroll-smooth no-scrollbar", children: project.images.map((img, i) => (_jsx("img", { src: img, alt: `${project.title} screenshot ${i + 1}`, className: "w-full flex-shrink-0 object-cover", style: { minWidth: "100%", height: "220px" } }, i))) }), project.images.length > 1 && (_jsxs(_Fragment, { children: [_jsx("button", { onClick: () => scroll(idx, "left"), className: "absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow", children: _jsx(ChevronLeft, { className: "w-5 h-5" }) }), _jsx("button", { onClick: () => scroll(idx, "right"), className: "absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1 shadow", children: _jsx(ChevronRight, { className: "w-5 h-5" }) })] }))] }), _jsxs(CardHeader, { className: "text-left", children: [_jsx(CardTitle, { children: project.title }), _jsx(CardDescription, { children: project.description })] }), _jsx(CardContent, { className: "flex flex-wrap gap-2", children: project.technologies.map((tech, i) => (_jsx(Badge, { variant: "secondary", children: tech }, i))) }), _jsxs(CardFooter, { className: "flex gap-4", children: [project.demoUrl && (_jsx(Button, { asChild: true, children: _jsx("a", { href: project.demoUrl, target: "_blank", rel: "noopener noreferrer", children: "Ver Demo" }) })), project.codeUrl && (_jsx(Button, { variant: "outline", asChild: true, children: _jsx("a", { href: project.codeUrl, target: "_blank", rel: "noopener noreferrer", children: "Ver C\u00F3digo" }) }))] })] }, idx))) })] }) }));
}
