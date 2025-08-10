import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRef } from "react"
import { services } from "../data/services"
import { Badge } from "@/components/ui/badge"

export function Services() {
  const scrollRefs = useRef<HTMLDivElement[]>([])

  return (
    <section id="services" className="w-full py-12 px-1 md:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Servicios</h2>

        <div className="flex overflow-x-auto py-3 space-x-6 md:grid md:grid-cols-2 md:gap-10 p-1 lg:grid lg:grid-cols-3 lg:gap-5">
          {services.map((service, idx) => {
            const Icon = service.Icon
            return (
              <Card
                key={idx}
                className={`flex flex-col min-w-[250px] md:min-w-0 p-6 text-center shadow-md rounded-xl transition-transform hover:scale-[1.02] ${
                  service.destacar ? "border-2 border-yellow-400 shadow-lg" : ""
                }`}
              >
                {/* Header */}
                <CardHeader className="flex flex-col items-center relative">
                  {service.destacar && (
                    <Badge className="absolute -top-2 right-2 bg-yellow-400 text-black">
                      Más Popular
                    </Badge>
                  )}
                  {Icon && <Icon className="w-12 h-12 mb-4 text-gray-800" />}
                  <CardTitle className="text-lg font-semibold">{service.title}</CardTitle>
                </CardHeader>

                {/* Descripción */}
                <CardContent>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardContent>

                {/* Botón */}
                <CardFooter className="flex flex-col gap-2 mt-auto">
                  {service.contactarUrl && (
                    <Button asChild className={service.destacar ? "bg-yellow-400 hover:bg-yellow-500 text-black" : ""}>
                      <a href={service.contactarUrl} target="_blank" rel="noopener noreferrer">
                        {service.buttonName}
                      </a>
                    </Button>
                  )}
                  {service.microcopy && (
                    <span className="text-xs text-gray-500">{service.microcopy}</span>
                  )}
                </CardFooter>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}