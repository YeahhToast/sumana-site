// src/app/como-funciona/page.jsx
import Head from "next/head";

export default function ComoFunciona() {
  return (
    <>
      <Head>
        <title>Sumana | Cómo Funciona</title>
        <meta name="description" content="Descubre cómo Sumana transforma el proceso de selección con entrevistas inteligentes y seguras." />
      </Head>

      <main className="max-w-4xl mx-auto pt-40 px-4 text-[#1F2937]">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">¿Cómo Funciona Sumana?</h1>
          <p className="text-lg">
            Una solución inteligente que automatiza entrevistas, reduce costos y garantiza privacidad de datos.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-20">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">🤖 Entrevistas con IA</h2>
            <p>Candidatos responden a preguntas vía texto o video. La IA analiza y entrega resultados de forma automática.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">⏱️ Ahorro de Tiempo y Costos</h2>
            <p>Reduce hasta un 60% el tiempo y los recursos en tus procesos de contratación.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">🔐 Privacidad y Seguridad</h2>
            <p>Toda la información es cifrada y almacenada cumpliendo altos estándares de protección de datos.</p>
          </div>
        </section>
      </main>
    </>
  );
}
