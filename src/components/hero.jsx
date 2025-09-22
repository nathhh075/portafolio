import React from "react";
import { Mail } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="scroll-mt-20 pt-28 md:pt-32 bg-base py-16 md:py-20 relative min-h-screen flex flex-col items-center justify-center text-center px-4"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
          <span className="opacity-0 animate-fade-in">Hola, Soy </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-2">{" "}NathGuevara</span>
        </h1>
        <p className="mt-4 text-lg text-foreground opacity-0 max-w-2xl mx-auto text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
          Un sitio claro, rápido y bonito para contar quién eres, qué haces y cómo contactarte. 
          Sin humo, sin drama.
        </p>

        <div className=" mt-6 flex flex-col sm:flex-row gap-4 justify-center text-gradient ml-2 opacity-0 animate-fade-in-delay-4 " >
          <a
            href="#contacto"
            className="opacity-70 inline-flex items-center rounded-2xl px-5 py-3 border border-border text-foreground hover:bg-card"
          >
            <Mail className="size-4" /> {" "}Contáctame
          </a>
          <a
            href="#proyectos"
            className="opacity-70 inline-flex items-center rounded-2xl px-5 py-3 border border-border text-foreground hover:bg-card"
          >
            Mis proyectos
          </a>
        </div>
      </div>
    </section>
  );
}
