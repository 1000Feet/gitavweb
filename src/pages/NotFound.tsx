import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-cream px-6">
      <div className="text-center max-w-md">
        <p className="text-gold uppercase tracking-[0.3em] text-sm mb-4">
          404 · Pagina non trovata
        </p>
        <h1 className="font-serif text-5xl md:text-6xl text-ocean mb-6">
          Ci siamo persi
        </h1>
        <p className="text-text-light mb-8 leading-relaxed">
          La pagina che cerchi non esiste più o è stata spostata. Torna alla
          home per scoprire le nostre strutture in Maremma.
        </p>
        <Link
          to="/"
          className="inline-block bg-ocean text-white px-8 py-3 rounded-full font-medium tracking-wide hover:bg-ocean-light transition-colors"
        >
          ← Torna alla home
        </Link>
      </div>
    </div>
  );
}
