export default function Contact() {
  return (
    <section id="contacto" className="scroll-mt-20 py-16 md:py-20 relative">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-card/20 rounded-3xl shadow-lg p-10 backdrop-blur-md">
          <div className="mx-auto max-w-4xl text-center">
            
            {/* Título */}
            <h2 className="text-3xl md:text-4xl font-bold text-foreground opacity-90">
              Get in <span className="text-primary">Touch</span>
            </h2>

            {/* Descripción */}
            <p className="mt-4 text-foreground opacity-80 leading-relaxed max-w-2xl mx-auto">
              ¿Listo para hablar? Escríbeme por correo o WhatsApp.  
            </p>

            {/* Formulario */}
            <form className="mt-10 bg-card/30 backdrop-blur-md p-8 rounded-2xl shadow-md text-left">
              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2 text-foreground opacity-80"
                  htmlFor="name"
                >
                  Nombre
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  type="text"
                  id="name"
                  name="name"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2 text-foreground opacity-80"
                  htmlFor="email"
                >
                  Correo Electrónico
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  type="email"
                  id="email"
                  name="email"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  className="block text-sm font-medium mb-2 text-foreground opacity-80"
                  htmlFor="message"
                >
                  Mensaje
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-background/50 border border-border text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                  id="message"
                  name="message"
                  rows="4"
                  required
                ></textarea>
              </div>

              <button
                className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90 transition duration-300"
                type="submit"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
