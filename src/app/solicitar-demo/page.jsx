'use client';

import { useEffect } from 'react';
import Head from "next/head";

export default function SolicitarDemo() {
  useEffect(() => {
    // Listen for the iframe load event
    const iframe = document.getElementById('hidden-iframe');
    if (iframe) {
      iframe.onload = () => {
        // Delay to allow processing, then redirect
        setTimeout(() => {
          window.location.href = '/gracias';
        }, 1000);
      };
    }
  }, []);

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

        {/* Hidden iframe to submit form without page reload */}
        <iframe name="hidden-iframe" id="hidden-iframe" style={{ display: 'none' }}></iframe>

        <form
          action="https://script.google.com/macros/s/AKfycbz2Q_aFXfhrqnBCusqhn8u9r8oId5Byo5I5ptsANyvXYxjPcc6wRFDtCBQtXwx0An_ukg/exec"
          method="POST"
          target="hidden-iframe"
          className="flex flex-col gap-4"
        >
          <input type="text" name="nombre" placeholder="Nombre completo" required className="p-3 rounded border border-gray-300" />
          <input type="email" name="email" placeholder="Correo electrónico" required className="p-3 rounded border border-gray-300" />
          <input type="text" name="empresa" placeholder="Nombre de la empresa" required className="p-3 rounded border border-gray-300" />
          <textarea name="mensaje" rows={4} placeholder="Cuéntanos más sobre tus necesidades..." className="p-3 rounded border border-gray-300"></textarea>

          <button type="submit" className="bg-[#F76C5E] text-white font-semibold py-3 rounded hover:bg-[#e55a4e]">
            Enviar solicitud
          </button>
        </form>
      </main>
    </>
  );
}
