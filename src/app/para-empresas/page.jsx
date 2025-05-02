// src/app/para-empresas/page.jsx
import Head from "next/head";

export default function ParaEmpresas() {
  return (
    <>
      <Head>
        <title>Sumana | Para Empresas</title>
        <meta name="description" content="Soluciones inteligentes para reclutamiento empresarial con IA." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-4xl mx-auto pt-40 px-4 bg-[#FDF8F3] text-[#1F2937]">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Soluciones para Empresas</h1>
          <p className="text-lg">
            Automatiza y optimiza tu proceso de selección con entrevistas inteligentes y análisis impulsado por IA.
          </p>
        </section>

        <section className="grid gap-6 md:grid-cols-3 mb-20">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">📝 Entrevistas Asíncronas</h2>
            <p>Permite a los candidatos responder a su propio ritmo. Sin agendas ni retrasos.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">📊 Evaluación con IA</h2>
            <p>Recibe perfiles detallados con insights clave para tomar mejores decisiones.</p>
          </div>
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-xl font-semibold mb-2">⏱ Optimización del Tiempo</h2>
            <p>Reduce tu ciclo de contratación hasta en un 60% sin comprometer la calidad.</p>
          </div>
        </section>
      </main>
    </>
  );
}
