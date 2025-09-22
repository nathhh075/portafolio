import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Skills() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const skills = [
    { id: 1, title: "Web Development", percent: "30%" },
    { id: 2, title: "Character Design", percent: "40%" },
    { id: 3, title: "Game Design", percent: "30%" },
    { id: 4, title: "3D modeling", percent: "30%" },
  ];

  return (
    <section
      id="skills"
      className="scroll-mt-20 py-16 md:py-20 relative"
    >
      <h2 className="text-3xl font-bold mb-4 text-foreground opacity-80">
        My <span className="text-primary">Skills</span>
      </h2>

      <p className="mb-8 opacity-90 text-justify mx-auto max-w-6xl px-4 md:px-6 text-center text-foreground">
        Me apasiona el Character Design y el Game Design, donde combino creatividad y técnica para dar vida a personajes únicos y experiencias interactivas que conecten con los usuarios.
                En el área de UI/UX Design, me enfoco en crear interfaces funcionales, intuitivas y atractivas, buscando siempre un balance entre estética y usabilidad.
                Como Web Developer, aplico mis conocimientos en frontend para desarrollar sitios y aplicaciones modernas, responsivas y con un diseño visual que potencie la experiencia digital.
              </p>

      <div className="container mx-auto max-w-10xl">
        <div className="bg-card/50 rounded-3xl shadow-lg p-10">
          <div className="mx-auto max-w-6xl px-4 md:px-6 text-center text-foreground">
            
            {/* Carrusel */}
            <Carousel
              responsive={responsive}
              infinite={true}
              autoPlay={true}
              autoPlaySpeed={3000}
              keyBoardControl={true}
              containerClass="carousel-container"
              itemClass="carousel-item"
            >
              {skills.map((skill) => (
                <div
                  key={skill.id}
                  className="skill-item flex flex-col items-center"
                >
                  <div className="circle">
                    <span>{skill.percent}</span>
                  </div>
                  <h5 className="mt-4 text-lg font-semibold">
                    {skill.title}
                  </h5>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
