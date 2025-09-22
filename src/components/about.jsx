import perfil from "../assets/img/cuidado-cabello-mujer_961307-11651.jpg";

export default function About() {
  return (
    <section
      id="acerca"
      className="scroll-mt-20 py-16 md:py-20 relative"
    >
      <div className="container mx-auto max-w-15xl">
        <div className="bg-card bg-opacity-[0.98] rounded-3xl shadow-lg p-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 grid md:grid-cols-2 gap-10 items-center">
            {/* Texto */}
            <div>
              <h2 className="text-3xl font-bold text-primary opacity-80">
                About Me...
              </h2>
              <p className="mt-4 text-foreground opacity-80 leading-relaxed">
                Soy estudiante de Ingeniería Multimedia en la Universidad de San Buenaventura, 
                apasionada por el arte, el diseño y la animación. Tengo conocimientos en desarrollo 
                web y de aplicaciones móviles, con enfoque en frontend y diseño UI/UX, donde combino 
                creatividad y tecnología para crear experiencias digitales atractivas.
              </p>
              <ul className="mt-6 space-y-2 text-foreground opacity-80">
                <li>- 1 año de experiencia</li>
                <li>- Clientes en LATAM y EE. UU.</li>
                <li>- Apasionados por la educación y la tecnología</li>
              </ul>
            </div>

  
            <div className="aspect-[4/3] rounded-3xl bg-card shadow-sm border border-border p-4 overflow-hidden">
              <img 
                src={perfil}
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
