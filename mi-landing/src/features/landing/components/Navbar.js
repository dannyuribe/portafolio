import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
const navLinks = [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Servicios", href: "#services" },
    //{ label: "Proyectos", href: "#projects" },
    { label: "Proceso de Trabajo", href: "#workProcess" },
    { label: "Habilidades", href: "#skills" },
    { label: "Educación & Experiencia", href: "#experiencia" },
    { label: "Contacto", href: "#contact" },
];
export function Navbar() {
    return (_jsx("header", { className: "sticky top-0 z-50 w-full bg-white border-b shadow-sm", children: _jsxs("div", { className: "max-w-6xl mx-auto px-4 py-2 flex items-center justify-between", children: [_jsx("span", { className: "text-xl font-bold tracking-tight", children: "Danny Uribe" }), _jsx("nav", { className: "hidden md:flex space-x-6", children: navLinks.map((link) => (_jsx("a", { href: link.href, className: "text-sm font-medium text-muted-foreground hover:text-black transition", children: link.label }, link.href))) }), _jsx("div", { className: "md:hidden", children: _jsxs(Sheet, { children: [_jsx(SheetTrigger, { asChild: true, children: _jsx(Button, { variant: "ghost", size: "icon", children: _jsx(Menu, { className: "w-5 h-5" }) }) }), _jsx(SheetContent, { side: "right", children: _jsx("nav", { className: "flex flex-col gap-4 mt-6", children: navLinks.map((link) => (_jsx("a", { href: link.href, className: "text-base font-medium text-muted-foreground hover:text-black transition", children: link.label }, link.href))) }) })] }) })] }) }));
}
