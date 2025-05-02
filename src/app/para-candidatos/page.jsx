// src/app/para-candidatos/page.jsx
import Head from "next/head";

export default function ParaCandidatos() {
  return (
    <>
      <Head>
        <title>Sumana | Para Candidatos</title>
        <meta name="description" content="Herramientas inteligentes para candidatos: entrevistas flexibles y agenda automatizada." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-4xl mx-auto pt-40 px-4 text-[#1F2937]">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Herramientas para Candidatos</h1>
          <p className="text-lg">
            Explora formas más flexibles y eficaces para participar en tus entrevistas, con apoyo inteligente desde el primer contacto.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-20">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">📝 Entrevistas por Texto</h2>
            <p>Responde preguntas clave de forma escrita y asincrónica, mejorando la claridad y comparación de perfiles.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">🎥 Video Entrevistas Asíncronas</h2>
            <p>Graba tus respuestas cuando mejor te convenga. Sin horarios, sin presión.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">📅 Agendamiento con IA</h2>
            <p>Nuestra IA coordina entrevistas en tiempo real automáticamente. Rápido, eficiente y sin correos.</p>
          </div>
        </section>
      </main>
    </>
  );
}
