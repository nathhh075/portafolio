import { useState } from "react";

export default function Projects() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const cards = [
    { 
      title: "Rock, Paper, Sissors", 
      desc: "Una animación de 20 segundos que combina tecnicas de stopmotion con rotoscopia.",
      video: "/src/assets/videos/ROCK, PAPER, SUSHI.mp4",
      img: "/src/assets/img/Captura de pantalla 2025-09-22 022604.png"
    },
    { 
      title: "Diseño PagWeb", 
      desc: "Realicé el diseño de una pagina web para la pasteleria de doña Elvia",
      link: "https://www.figma.com/proto/nrkpZCdmrL17qZc4t713uU/Pasteleria-de-do%C3%B1a-Elvia?node-id=3-40&p=f&t=Xv7p1haqXuGOr5hN-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=3%3A40",
      img: "/src/assets/img/Captura de pantalla 2025-09-22 022322.png"
      
    },
    { 
      title: "Gato 3D", 
      desc: "Modelado 3D de un gato utilizando blender.",
      img: "/src/assets/img/gatito.png"
    },
  ];

  const handleClick = (c) => {
    if (c.video) {
      setSelectedVideo(c.video); // abre popup con video
    } else if (c.link) {
      window.open(c.link, "_blank"); // abre enlace en nueva pestaña
    }
  };

    return (
    <section id="proyectos" className="scroll-mt-20 py-16 md:py-20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-card/20 rounded-3xl shadow-lg p-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
            
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-90">
              My <span className="text-primary">Projects</span>
            </h2>
            
            {/* Descripción */}
            <p className="mt-4 text-foreground opacity-80 leading-relaxed max-w-2xl mx-auto">
              Estos son mis proyectos presentados a los largo de mi 5to semestre
            </p>

            {/* Grid de tarjetas */}
            <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {cards.map((c, i) => (
                <article
                  key={i}
                  onClick={() => handleClick(c)}
                  className="cursor-pointer group rounded-2xl bg-card/30 backdrop-blur-md border border-border shadow-md overflow-hidden transition-transform hover:scale-105 hover:shadow-xl"
                >
                  <div className="aspect-[4/3] bg-muted/30">
                    <img 
                      src={c.img} 
                      alt={c.title} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {c.title}
                    </h3>
                    <p className="mt-2 text-sm text-foreground opacity-80">
                      {c.desc}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup de video */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50">
          <div className="relative w-[90%] max-w-4xl">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-10 right-0 text-white text-2xl"
            >
              ✖
            </button>
            <video src={selectedVideo} controls autoPlay className="w-full rounded-lg" />
          </div>
        </div>
      )}
    </section>
  );
}