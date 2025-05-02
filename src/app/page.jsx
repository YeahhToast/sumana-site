// src/app/page.jsx
import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sumana | Selección Inteligente con IA</title>
        <meta name="description" content="Entrevistas automáticas y análisis impulsado por IA para reclutamiento más inteligente." />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className="max-w-5xl mx-auto pt-36 px-4">
        <section className="flex flex-col md:flex-row items-center justify-between gap-10 mb-20">
          <div className="md:w-1/2">
            <h1 className="text-4xl font-bold mb-4">Selección Inteligente con IA</h1>
            <p className="mb-6 text-lg">Sumana transforma tus procesos de reclutamiento con entrevistas automáticas y evaluaciones precisas impulsadas por inteligencia artificial.</p>
            <Link href="/solicitar-demo" className="bg-[#f5655b] text-white font-semibold py-3 px-6 rounded hover:bg-[#e34b41]">
              Solicitar Demo
            </Link>
          </div>
          <div className="md:w-1/2">
            <img
              src="https://raw.githubusercontent.com/YeahhToast/sumana_assets/refs/heads/main/Sumana%20Chat%20Image.png"
              alt="Ilustración de IA"
              className="w-full rounded"
            />
          </div>
        </section>

        <section id="empresas" className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">Para Empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">✉ Entrevistas Asíncronas</h3>
              <p>Evalúa candidatos en cualquier momento, sin necesidad de coordinación.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">🧪 Análisis con IA</h3>
              <p>Obtén perfiles detallados y comparativos automáticamente.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">🚀 Agilidad en Contratación</h3>
              <p>Reduce tiempos de selección hasta en un 60%.</p>
            </div>
          </div>
        </section>

        <section id="candidatos" className="mb-20 text-center">
          <h2 className="text-2xl font-semibold mb-4">Para Candidatos</h2>
          <p>Accede a entrevistas flexibles, sin presión de horarios. Comparte tu historia con confianza.</p>
        </section>

        <section id="funciona" className="mb-20">
          <h2 className="text-2xl font-semibold mb-6 text-center">¿Cómo Funciona?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">1. Subes la vacante</h3>
              <p>Define requisitos y competencias.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">2. Invitamos candidatos</h3>
              <p>Ellos responden entrevistas en video con IA.</p>
            </div>
            <div className="bg-white p-6 rounded shadow">
              <h3 className="font-bold mb-2">3. Te entregamos el top</h3>
              <p>Recibes los mejores perfiles para avanzar.</p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
