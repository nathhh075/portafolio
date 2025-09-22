import {Mail } from "lucide-react";

export default function Bubble() {
    const urlWhat = "https://api.whatsapp.com/send?phone=573152094604&text=Hola,%20quiero%20saber%20m%C3%A1s%20sobre%20tus%20servicios"; 

  return (
    <div id="burbuja" className="bg-blue-500 text-white p-4 rounded-lg max-w-xs">
      <a href={urlWhat} target="_blank"><Mail className="size-10"/></a>
    </div>
  );
}