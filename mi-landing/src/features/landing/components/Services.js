import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import { services } from "../data/services";
import { Badge } from "@/components/ui/badge";
export function Services() {
    const scrollRefs = useRef([]);
    return (_jsx("section", { id: "services", className: "w-full py-12 px-1 md:px-8 bg-gray-50", children: _jsxs("div", { className: "max-w-6xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-8", children: "Servicios" }), _jsx("div", { className: "flex overflow-x-auto py-3 space-x-6 md:grid md:grid-cols-2 md:gap-10 p-1 lg:grid lg:grid-cols-3 lg:gap-5", children: services.map((service, idx) => {
                        const Icon = service.Icon;
                        return (_jsxs(Card, { className: `flex flex-col min-w-[250px] md:min-w-0 p-6 text-center shadow-md rounded-xl transition-transform hover:scale-[1.02] ${service.destacar ? "border-2 border-yellow-400 shadow-lg" : ""}`, children: [_jsxs(CardHeader, { className: "flex flex-col items-center relative", children: [service.destacar && (_jsx(Badge, { className: "absolute -top-2 right-2 bg-yellow-400 text-black", children: "M\u00E1s Popular" })), Icon && _jsx(Icon, { className: "w-12 h-12 mb-4 text-gray-800" }), _jsx(CardTitle, { className: "text-lg font-semibold", children: service.title })] }), _jsx(CardContent, { children: _jsx(CardDescription, { className: "text-gray-600", children: service.description }) }), _jsxs(CardFooter, { className: "flex flex-col gap-2 mt-auto", children: [service.contactarUrl && (_jsx(Button, { asChild: true, className: service.destacar ? "bg-yellow-400 hover:bg-yellow-500 text-black" : "", children: _jsx("a", { href: service.contactarUrl, target: "_blank", rel: "noopener noreferrer", children: service.buttonName }) })), service.microcopy && (_jsx("span", { className: "text-xs text-gray-500", children: service.microcopy }))] })] }, idx));
                    }) })] }) }));
}
