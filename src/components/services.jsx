import {Info, Rocket, Sparkles} from "lucide-react"

export default function Services() {
    const items = [
        {icon: <Info className="size-4" />, title: "Claro", desc: "Mensajes simples y directos. La gente te lo agradece."}, 
        {icon: <Rocket className="size-4" />, title: "Rápido", desc: "Carga veloz y navegación suave sin rutas complicadas."}, 
        {icon: <Sparkles className="size-4" />, title: "Bonito", desc: "Diseño limpio, tipografía legible y buen contraste."}, 
      ];

    return(
    <section id="servicios" className="scroll-mt-20 py-16 md:py-20 bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Servicios</h2>
            <p className="mt-4 text-lg text-slate-600">Lo que ofrezco para tu web informativa One‑Page</p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
            {items.map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-2xl shadow hover:shadow-md transition-shadow">
                <div className="mb-4 text-indigo-600">{item.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600">{item.desc}</p>
                </div>
            ))}
            </div>
        </div>
    </section>
    );
}