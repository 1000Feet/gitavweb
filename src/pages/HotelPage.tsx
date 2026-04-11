import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getHotelBySlug } from "../data/hotels";

interface Props {
  slug: string;
}

const themeAccents: Record<
  string,
  { bg: string; text: string; gradient: string }
> = {
  ocean: {
    bg: "bg-ocean",
    text: "text-ocean",
    gradient: "from-ocean to-ocean-light",
  },
  pine: {
    bg: "bg-emerald-800",
    text: "text-emerald-800",
    gradient: "from-emerald-900 to-emerald-700",
  },
  sunset: {
    bg: "bg-gold",
    text: "text-gold",
    gradient: "from-gold to-gold-light",
  },
  sand: {
    bg: "bg-amber-700",
    text: "text-amber-800",
    gradient: "from-amber-800 to-amber-600",
  },
};

export default function HotelPage({ slug }: Props) {
  const hotel = getHotelBySlug(slug);
  const navigate = useNavigate();

  useEffect(() => {
    if (hotel) {
      document.title = `${hotel.name} · Gitav`;
      window.scrollTo(0, 0);
    }
  }, [hotel]);

  if (!hotel) {
    navigate("/", { replace: true });
    return null;
  }

  const theme = themeAccents[hotel.theme || "ocean"];

  return (
    <div className="min-h-screen bg-cream">
      {/* Top Nav */}
      <nav className="absolute top-0 left-0 right-0 z-50 px-6 py-5 md:px-10 md:py-7">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link
            to="/"
            className="text-white/90 hover:text-white text-sm md:text-base font-medium tracking-wide flex items-center gap-2"
          >
            ← <span className="hidden sm:inline">Tutte le strutture</span>
            <span className="sm:hidden">Home</span>
          </Link>
          <span className="text-white/80 text-xs md:text-sm uppercase tracking-[0.25em]">
            {hotel.brand}
          </span>
        </div>
      </nav>

      {/* ═══════ HERO ═══════ */}
      <header className="relative overflow-hidden bg-deep-dark text-white min-h-[92vh] flex items-center">
        <div
          className="absolute inset-0 bg-cover bg-center animate-slow-zoom"
          style={{ backgroundImage: `url(${hotel.heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-deep-dark/50 via-deep-dark/30 to-deep-dark/80" />

        <div className="relative w-full max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
          <p
            className="inline-block bg-white/15 backdrop-blur px-4 py-2 rounded-full text-xs md:text-sm uppercase tracking-[0.25em] text-white/90 mb-8 animate-fade-up"
            style={{ animationDelay: "0.1s" }}
          >
            {hotel.badge}
          </p>
          <h1
            className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1.05] mb-6 animate-fade-up"
            style={{ animationDelay: "0.25s" }}
          >
            {hotel.name.split(" ").map((w, i) =>
              i === hotel.name.split(" ").length - 1 ? (
                <em key={i} className="text-gold-light">
                  {w}
                </em>
              ) : (
                <span key={i}>{w} </span>
              )
            )}
          </h1>
          <p
            className="text-xl md:text-2xl text-white/85 font-light max-w-2xl mx-auto mb-4 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {hotel.heroSubtitle.it}
          </p>
          <p
            className="text-sm md:text-base text-white/60 italic max-w-2xl mx-auto animate-fade-up"
            style={{ animationDelay: "0.5s" }}
          >
            {hotel.heroSubtitle.en}
          </p>

          {hotel.bookingUrl && (
            <a
              href={hotel.bookingUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-10 bg-gold hover:bg-gold-light text-deep-dark px-8 py-4 rounded-full font-semibold tracking-wide transition-colors animate-fade-up"
              style={{ animationDelay: "0.6s" }}
            >
              Prenota ora · Book now
            </a>
          )}
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-hint text-white/70 text-2xl">
          ↓
        </div>
      </header>

      {/* ═══════ INTRO ═══════ */}
      <section className="max-w-4xl mx-auto px-6 py-20 md:py-28 text-center">
        <p className={`uppercase tracking-[0.3em] text-xs md:text-sm mb-5 ${theme.text}`}>
          {hotel.introLabel}
        </p>
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-ocean mb-8 leading-tight">
          {hotel.introTitleIt}{" "}
          <em className="text-gold">{hotel.introTitleEm}</em>
          {hotel.introTitleAfter && <> {hotel.introTitleAfter}</>}
        </h2>
        <p className="text-text-body text-lg md:text-xl leading-relaxed mb-4">
          {hotel.description.it}
        </p>
        <p className="text-text-light text-base md:text-lg leading-relaxed italic">
          {hotel.description.en}
        </p>
      </section>

      {/* ═══════ HIGHLIGHTS STRIP ═══════ */}
      <section className="bg-mist py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            {hotel.highlights.map((h, i) => (
              <div
                key={i}
                className="text-center p-4"
                style={{ animation: `fadeUp 0.7s ${i * 0.1}s both` }}
              >
                <div className="text-4xl md:text-5xl mb-3">{h.icon}</div>
                <h3 className="font-serif text-xl md:text-2xl text-ocean mb-1">
                  {h.title}
                </h3>
                <p className="text-xs md:text-sm text-text-light italic mb-2">
                  {h.titleEn}
                </p>
                <p className="text-sm text-text-body leading-snug">
                  {h.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ SERVICES ═══════ */}
      <section className="max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14 md:mb-20">
          <p className={`uppercase tracking-[0.3em] text-xs md:text-sm mb-4 ${theme.text}`}>
            I nostri servizi · Our services
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ocean">
            Tutto ciò che serve, <em className="text-gold">ben fatto</em>
          </h2>
        </div>

        <div className="space-y-20 md:space-y-28">
          {hotel.services.map((s, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 md:gap-16 items-center ${
                i % 2 === 1 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-xl aspect-[4/3]">
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
              <div>
                <p className={`text-xs md:text-sm uppercase tracking-[0.25em] mb-3 ${theme.text}`}>
                  0{i + 1} · {s.titleEn}
                </p>
                <h3 className="font-serif text-3xl md:text-4xl text-ocean mb-5 leading-tight">
                  {s.title}
                </h3>
                <p className="text-text-body text-base md:text-lg leading-relaxed mb-3">
                  {s.description}
                </p>
                <p className="text-text-light text-sm md:text-base italic leading-relaxed">
                  {s.descriptionEn}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ HOURS ═══════ */}
      <section className={`py-20 md:py-28 bg-gradient-to-br ${theme.gradient} text-white`}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-14">
            <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-4 text-white/80">
              Orari · Opening hours
            </p>
            <h2 className="font-serif text-4xl md:text-5xl">
              Quando ci <em className="text-gold-light">trovi</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {hotel.hours.map((card, i) => (
              <div
                key={i}
                className="bg-white/10 backdrop-blur rounded-2xl p-6 border border-white/20 hover:bg-white/15 transition-colors"
                style={{ animation: `fadeUp 0.7s ${i * 0.08}s both` }}
              >
                <div className="text-3xl mb-3">{card.icon}</div>
                <h3 className="font-serif text-xl md:text-2xl mb-1">
                  {card.title}
                </h3>
                <p className="text-xs text-white/60 italic mb-4">
                  {card.titleEn}
                </p>
                <div className="space-y-2">
                  {card.rows.map((r, ri) => (
                    <div
                      key={ri}
                      className="flex justify-between items-baseline gap-2 text-sm border-b border-white/10 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="text-white/80">{r.label}</span>
                      <span className="font-semibold text-white text-right">
                        {r.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════ BENEFITS ═══════ */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="text-center mb-14">
          <p className={`uppercase tracking-[0.3em] text-xs md:text-sm mb-4 ${theme.text}`}>
            Perché sceglierci · Why us
          </p>
          <h2 className="font-serif text-4xl md:text-5xl text-ocean">
            Piccoli dettagli, <em className="text-gold">grande differenza</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {hotel.benefits.map((b, i) => (
            <div
              key={i}
              className={`p-6 md:p-8 rounded-2xl bg-white shadow-sm hover:shadow-xl transition-all duration-300 border border-mist ${
                b.wide ? "sm:col-span-2" : ""
              }`}
              style={{ animation: `fadeUp 0.7s ${i * 0.08}s both` }}
            >
              <div className="text-3xl md:text-4xl mb-4">{b.icon}</div>
              <h3 className="font-serif text-xl md:text-2xl text-ocean mb-1">
                {b.title}
              </h3>
              <p className="text-xs text-text-light italic mb-3">
                {b.titleEn}
              </p>
              <p className="text-text-body text-sm md:text-base leading-relaxed">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════ GALLERY ═══════ */}
      {hotel.gallery.length > 0 && (
        <section className="bg-sand/40 py-20 md:py-28">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className={`uppercase tracking-[0.3em] text-xs md:text-sm mb-4 ${theme.text}`}>
                Gallery
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-ocean">
                Uno sguardo al <em className="text-gold">villaggio</em>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
              {hotel.gallery.map((src, i) => (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-2xl aspect-square ${
                    i === 0 ? "col-span-2 row-span-2 aspect-square md:aspect-auto" : ""
                  }`}
                >
                  <img
                    src={src}
                    alt={`${hotel.shortName} ${i + 1}`}
                    className="absolute inset-0 w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ═══════ RULES ═══════ */}
      {hotel.rules.length > 0 && (
        <section className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center mb-12">
            <p className={`uppercase tracking-[0.3em] text-xs md:text-sm mb-4 ${theme.text}`}>
              Buone norme · House rules
            </p>
            <h2 className="font-serif text-4xl md:text-5xl text-ocean">
              Per stare <em className="text-gold">bene insieme</em>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {hotel.rules.map((r, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl border border-mist bg-white"
              >
                <h3 className="font-serif text-xl text-ocean mb-2">
                  {r.titleIt}
                </h3>
                <p className="text-sm text-text-body leading-relaxed mb-2">
                  {r.descriptionIt}
                </p>
                <p className="text-xs text-text-light italic leading-relaxed">
                  {r.descriptionEn}
                </p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* ═══════ PDFS ═══════ */}
      {hotel.pdfs.length > 0 && (
        <section className="max-w-4xl mx-auto px-6 pb-20">
          <div className="text-center mb-10">
            <p className={`uppercase tracking-[0.3em] text-xs md:text-sm mb-3 ${theme.text}`}>
              Documenti · Documents
            </p>
            <h2 className="font-serif text-3xl md:text-4xl text-ocean">
              Scarica le <em className="text-gold">informazioni</em>
            </h2>
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {hotel.pdfs.map((p, i) => (
              <a
                key={i}
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-white border border-mist hover:border-gold hover:shadow-lg transition-all px-6 py-4 rounded-full"
              >
                <span className="text-2xl">📄</span>
                <span className="text-ocean font-medium">{p.label}</span>
                <span className="text-xs text-text-light">→</span>
              </a>
            ))}
          </div>
        </section>
      )}

      {/* ═══════ CTA / CONTACTS ═══════ */}
      <section className="bg-deep-dark text-white py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="uppercase tracking-[0.3em] text-xs md:text-sm mb-5 text-gold-light">
            Contatti · Contacts
          </p>
          <h2 className="font-serif text-4xl md:text-5xl mb-8">
            Pronti a <em className="text-gold-light">partire?</em>
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Scrivici o chiamaci per prenotare la tua prossima vacanza in Maremma.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10">
            {hotel.contacts.numbers.map((n, i) => (
              <a
                key={i}
                href={n.phone ? `tel:${n.phone}` : undefined}
                className="bg-white/5 backdrop-blur border border-white/10 rounded-2xl p-5 hover:bg-white/10 transition-colors"
              >
                <p className="text-xs text-white/50 uppercase tracking-wider mb-1">
                  {n.label}
                </p>
                <p className="text-lg md:text-xl font-medium text-white">
                  {n.value}
                </p>
              </a>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-10">
            {hotel.contacts.email && (
              <a
                href={`mailto:${hotel.contacts.email}`}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-light text-deep-dark px-7 py-3 rounded-full font-semibold transition-colors"
              >
                ✉️ {hotel.contacts.email}
              </a>
            )}
            {hotel.contacts.website && (
              <a
                href={hotel.contacts.website}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-7 py-3 rounded-full font-semibold border border-white/20 transition-colors"
              >
                🌐 Sito ufficiale
              </a>
            )}
          </div>

          <Link
            to="/"
            className="text-white/60 hover:text-white text-sm tracking-wide inline-block"
          >
            ← Torna a tutte le strutture
          </Link>
        </div>
      </section>

      {/* ═══════ FOOTER ═══════ */}
      <footer className="bg-[#091c2a] text-white/60 py-10">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="font-serif text-xl text-white mb-2">
            {hotel.name}
          </p>
          <p className="text-xs md:text-sm">
            © {new Date().getFullYear()} Gitav Group · {hotel.location},{" "}
            {hotel.region}
          </p>
        </div>
      </footer>
    </div>
  );
}
