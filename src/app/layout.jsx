import "./globals.css";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sumana",
  description: "IA para entrevistas inteligentes",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className="bg-[#FDF8F3]">
      <body className={`${inter.className} bg-[#FDF8F3] text-[#1F2937] min-h-screen flex flex-col`}>
        <header className="fixed top-0 w-full bg-[#FDF8F3] shadow-md py-2 px-10 flex justify-between items-center z-50">
          <Link href="/">
            <img
              src="https://raw.githubusercontent.com/YeahhToast/sumana_assets/refs/heads/main/Sumana%20Logo.png"
              alt="Sumana logo"
              width={140}
            />
          </Link>
          <nav className="space-x-6">
            <Link href="/">Inicio</Link>
            <Link href="/para-empresas">Para Empresas</Link>
            <Link href="/para-candidatos">Para Candidatos</Link>
            <Link href="/como-funciona">Cómo Funciona</Link>
          </nav>
          <Link
            href="/solicitar-demo"
            className="demo-button bg-[#f5655b] text-white font-bold py-2 px-5 rounded-md hover:bg-[#e34b41]"
          >
            Solicitar Demo
          </Link>
        </header>

        <main className="pt-36 bg-[#FDF8F3] flex-grow">
          {children}
        </main>

        <footer className="text-center text-sm py-10 text-gray-500 bg-[#FDF8F3]">
          &copy; 2025 Sumana. Todos los derechos reservados.
        </footer>
      </body>
    </html>
  );
}

