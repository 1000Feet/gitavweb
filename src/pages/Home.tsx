import { Link } from "react-router-dom";
import { hotels } from "../data/hotels";

const themeTint: Record<string, string> = {
  ocean: "from-ocean/85 to-ocean/20",
  pine: "from-emerald-900/85 to-emerald-700/10",
  sunset: "from-gold/85 to-amber-500/10",
  sand: "from-amber-900/80 to-amber-600/10",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Hero */}
      <header className="relative overflow-hidden bg-deep-dark text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-40 animate-slow-zoom"
          style={{
            backgroundImage: `url(${hotels[0].heroImage})`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-dark/60 via-deep-dark/40 to-deep-dark" />

        <div className="relative max-w-6xl mx-auto px-6 pt-20 pb-28 md:pt-32 md:pb-40 text-center">
          <p className="uppercase tracking-[0.35em] text-gold-light text-xs md:text-sm mb-6 animate-fade-up">
            Gitav Group · Maremma Toscana
          </p>
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 animate-fade-up" style={{ animationDelay: "0.15s" }}>
            Le tue <em className="text-gold-light">vacanze</em>
            <br />
            sulla Costa d'Argento
          </h1>
          <p className="max-w-2xl mx-auto text-white/85 text-lg md:text-xl font-light leading-relaxed animate-fade-up" style={{ animationDelay: "0.3s" }}>
            Otto strutture tra villaggi, camping e resort — tutte affacciate sul mare più bello della Toscana.
          </p>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-hint text-white/70 text-2xl">
          ↓
        </div>
      </header>

      {/* Intro */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className="text-gold uppercase tracking-[0.3em] text-xs md:text-sm mb-4">
          Scegli la tua struttura
        </p>
        <h2 className="font-serif text-4xl md:text-5xl text-ocean mb-6">
          Otto modi di vivere la Maremma
        </h2>
        <p className="text-text-light text-lg leading-relaxed max-w-2xl mx-auto">
          Dal villaggio in pineta al resort sul mare, dall'agriturismo al
          camping immerso nella natura: ogni struttura Gitav è un'esperienza
          diversa, ma tutte condividono la stessa cura per i dettagli e
          l'amore per la Costa d'Argento.
        </p>
      </section>

      {/* Hotel cards */}
      <section className="max-w-7xl mx-auto px-6 pb-20 md:pb-32">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {hotels.map((h, idx) => (
            <Link
              key={h.slug}
              to={`/${h.slug}`}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              style={{
                animation: `fadeUp 0.8s ${idx * 0.08}s both`,
              }}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src={h.cardImage || h.heroImage}
                  alt={h.name}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${
                    themeTint[h.theme || "ocean"]
                  }`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

                {/* Brand badge */}
                <div className="absolute top-5 left-5 right-5 flex justify-between items-start">
                  <span className="bg-white/95 backdrop-blur text-ocean text-[10px] md:text-xs uppercase tracking-[0.2em] font-semibold px-3 py-1.5 rounded-full">
                    {h.brand}
                  </span>
                  <span className="bg-black/30 backdrop-blur text-white text-[10px] md:text-xs uppercase tracking-wider px-3 py-1.5 rounded-full">
                    {h.type}
                  </span>
                </div>

                {/* Title block */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7 text-white">
                  <p className="text-xs md:text-sm uppercase tracking-[0.2em] text-white/80 mb-2">
                    📍 {h.location}
                  </p>
                  <h3 className="font-serif text-2xl md:text-3xl leading-tight mb-2">
                    {h.shortName}
                  </h3>
                  <p className="text-white/85 text-sm md:text-base italic mb-4 font-light">
                    {h.tagline.it}
                  </p>
                  <div className="flex items-center gap-2 text-gold-light text-sm font-medium group-hover:gap-3 transition-all">
                    Scopri
                    <span className="transition-transform group-hover:translate-x-1">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-deep-dark text-white/80 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-2xl md:text-3xl text-white mb-3">
            Gitav Group
          </p>
          <p className="text-sm md:text-base text-white/60 max-w-xl mx-auto leading-relaxed mb-6">
            Vacanze in Maremma Toscana · Villaggi, Camping, Resort &
            Agriturismo
          </p>
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Gitav Group · Tutti i diritti
            riservati
          </p>
        </div>
      </footer>
    </div>
  );
}
