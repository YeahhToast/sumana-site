'use client';

import { useState } from 'react';
import Head from "next/head";
import { useRouter } from 'next/navigation';

export default function SolicitarDemo() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    try {
      await fetch('https://script.google.com/macros/s/AKfycbz2Q_aFXfhrqnBCusqhn8u9r8oId5Byo5I5ptsANyvXYxjPcc6wRFDtCBQtXwx0An_ukg/exec', {
        method: 'POST',
        body: formData,
      });

      router.push('/gracias');
    } catch (err) {
      alert("Hubo un error al enviar el formulario.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Sumana | Solicitar Demo</title>
        <meta name="description" content="Solicita una demo personalizada para conocer cómo Sumana mejora tu proceso de selección con IA." />
      </Head>

      <main className="max-w-2xl mx-auto pt-40 px-4 text-[#1F2937]">
        <h1 className="text-4xl font-bold mb-4 text-center">Solicita una Demo</h1>
        <p className="mb-8 text-center text-lg">
          Descubre cómo Sumana puede transformar tu proceso de reclutamiento con entrevistas automáticas y análisis impulsado por IA.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input type="text" name="nombre" placeholder="Nombre completo" required className="p-3 rounded border border-gray-300" />
          <input type="email" name="email" placeholder="Correo electrónico" required className="p-3 rounded border border-gray-300" />
          <input type="text" name="empresa" placeholder="Nombre de la empresa" required className="p-3 rounded border border-gray-300" />
          <textarea name="mensaje" rows={4} placeholder="Cuéntanos más sobre tus necesidades..." className="p-3 rounded border border-gray-300"></textarea>

          <button type="submit" disabled={loading} className="bg-[#F76C5E] text-white font-semibold py-3 rounded hover:bg-[#e55a4e]">
            {loading ? "Enviando..." : "Enviar solicitud"}
          </button>
        </form>
      </main>
    </>
  );
}
