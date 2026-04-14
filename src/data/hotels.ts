import type { Hotel } from "./types";

// Asset base URL.
// Per default immagini e PDF vengono serviti direttamente da GitHub raw,
// così il progetto Lovable non deve gestire nessun file binario in `public/`.
// Se un giorno sposti gli asset su un CDN vero o li copi in `public/`,
// basta cambiare ASSET_BASE.
const ASSET_BASE =
  "https://raw.githubusercontent.com/1000Feet/gitavweb/main/public/hotels";

const img = (slug: string, name: string) =>
  `${ASSET_BASE}/${slug}/pics/${encodeURIComponent(name)}`;
const pdf = (slug: string, name: string) =>
  `${ASSET_BASE}/${slug}/pdfs/${encodeURIComponent(name)}`;

export const hotels: Hotel[] = [
  // ═══════════════════════════════════════════════════
  // IL GABBIANO
  // ═══════════════════════════════════════════════════
  {
    slug: "ilgabbiano",
    name: "Gitavillage Il Gabbiano",
    brand: "Gitavillage",
    shortName: "Il Gabbiano",
    type: "village",
    location: "Orbetello",
    region: "Maremma Toscana",
    tagline: {
      it: "Natura, mare e spazi aperti",
      en: "Nature, sea and open spaces",
    },
    description: {
      it: "Al Gitavillage Il Gabbiano la vacanza scorre con semplicità: natura, spazi aperti e tutto quello che serve per stare bene insieme. Che tu sia qui per rilassarti, giocare con i bambini o goderti il mare, sei nel posto giusto.\n\nEcco tutto quello che c'è da sapere per vivere al meglio il tuo soggiorno in libertà...e senza pensieri.",
      en: "At Gitavillage Il Gabbiano, holidays flow simply: nature, open spaces, and everything you need to feel good together. Whether you're here to relax, play with your children, or enjoy the sea, you're in the right place.\n\nHere's everything you need to know to make the most of your stay... in total freedom and without worries.",
    },
    badge: "🏕️ Orbetello · Maremma Toscana",
    heroImage: img("ilgabbiano", "beach-gitav_gitavillage_gabbiano_spiaggia_2021.jpg"),
    cardImage: img("ilgabbiano", "beach-gitav_gitavillage_gabbiano_spiaggia_2021.jpg"),
    heroSubtitle: {
      it: "Benvenuti al Gitavillage Il Gabbiano",
      en: "Welcome to Gitavillage Il Gabbiano",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "La tua",
    introTitleEm: "vacanza",
    introTitleAfter: "in Maremma",
    theme: "ocean",
    highlights: [
      {
        icon: "🏖️",
        title: "Spiaggia convenzionata",
        titleEn: "Partner beach",
        description: "Prenota il tuo posto: € 20/giorno (giu, lug, set), € 25 agosto. Sconto 20% con braccialetto Gitav (convenzione Singita).",
      },
      {
        icon: "🏊",
        title: "Piscina",
        titleEn: "Swimming pool",
        description: "Aperta tutti i giorni dalle 09:00 alle 19:00. La cuffia è consigliata, ma non obbligatoria.",
      },
      {
        icon: "🎭",
        title: "Animazione",
        titleEn: "Entertainment",
        description: "Attività sportive, giochi e spettacoli serali per tutta la famiglia.",
      },
      {
        icon: "🚣",
        title: "Canoe & Pedalò",
        titleEn: "Canoes & Pedal Boats",
        description: "Prenotazione gratuita per 30 minuti.",
      },
    ],
    services: [
      {
        title: "Gusto & Relax",
        titleEn: "Food & Relax",
        description:
          "Il buongiorno parte da qui (Bar) — Per iniziare la giornata con calma (e magari un buon caffè), il bar ti aspetta dalle 08:00 alle 23:00.\n\nA tavola, quando vuoi tu (Ristorante & Pizzeria) — Pranzo dalle 12:30 alle 14:00 e cena dalle 19:30 alle 23:00. La sera puoi gustare anche un'ottima pizza. Nota: disponibili piatti senza glutine semplici (cucina non certificata).\n\nSpiaggia — Puoi prenotare il tuo posto (previa verifica della disponibilità all'atto della prenotazione): € 20 al giorno (giugno, luglio, settembre), € 25 ad agosto (1 ombrellone + 2 lettini).\n\nConvenzione Singita — Con il braccialetto Gitav hai: 20% di sconto sui servizi spiaggia e 10% su food & drink.\n\nLa Piscina è aperta tutti i giorni dalle 09:00 alle 19:00. Il giovedì chiude alle 18:00 per preparare la grigliata serale. La cuffia è consigliata, ma non obbligatoria.\n\nIl Minimarket è aperto tutti i giorni dalle 08:00 alle 13:00 e dalle 16:00 alle 19:00.\n\nCanoe & Pedalò — Puoi prenotare gratuitamente canoe e pedalò per 30 min.",
        descriptionEn:
          "Start your day here (Bar) — To begin your day at your own pace (and maybe with a good coffee), the bar is open from 08:00 to 23:00.\n\nDining, whenever you like (Restaurant & Pizzeria) — Lunch from 12:30 to 14:00 and dinner from 19:30 to 23:00. In the evening, you can also enjoy delicious pizza. Note: simple gluten-free options are available (non-certified kitchen).\n\nBeach — You can reserve your spot (subject to availability at the time of booking): € 20 per day (June, July, September), € 25 in August (1 umbrella + 2 sunbeds).\n\nSingita Partnership — With your Gitav bracelet you get: 20% discount on beach services and 10% on food & drinks.\n\nThe Swimming Pool is open every day from 09:00 to 19:00. On Thursdays it closes at 18:00 for the evening BBQ setup. Swimming caps are recommended but not mandatory.\n\nThe Minimarket is open every day from 08:00 to 13:00 and from 16:00 to 19:00.\n\nCanoes & Paddle Boats — You can book canoes and paddle boats free of charge for 30 minutes.",
        image: img("ilgabbiano", "pool-gitav_gitavillage-il-gabbiano_piscina-20.jpeg"),
      },
      {
        title: "Esplorare e Divertirsi",
        titleEn: "Explore & Have Fun",
        description:
          "In Movimento — Vuoi scoprire i dintorni? Puoi noleggiare bici con i partner esterni: Maremma Escursioni (+39 371 3837052) o VTC Talamone (+39 347 2607983).\n\nEscursioni — Puoi prenotare una minicrociera all'isola del Giglio, una gita alle cascate di Saturnia o una passeggiata in carrozza nel Parco della Maremma e tante altre esperienze, chiamando il numero +39 371 3837052.\n\nCampi Sportivi & Ping-Pong — Campo da calcetto in erba sintetica e tavoli da ping-pong sono disponibili prenotandoli in Reception. Il materiale si ritira e si riconsegna direttamente lì.\n\nAnimazione — Attività sportive, giochi e spettacoli serali per tutta la famiglia. Dai un'occhiata al programma in bacheca!\n\nIl parco giochi ombreggiato è perfetto per scatenarsi in totale sicurezza!\n\nConnessione Wi-Fi — Disponibile nelle aree comuni (piscina, reception, ristorante e bar). Registrati con email, Google o Facebook per ricevere il PIN.",
        descriptionEn:
          "On the Move — Would you like to explore the surroundings? You can rent bikes with our external partners: Maremma Escursioni (+39 371 3837052) or VTC Talamone (+39 347 2607983).\n\nExcursions — You can book a mini cruise to Giglio Island, a trip to the Saturnia waterfalls, or a carriage ride in the Maremma Park and many other experiences by calling +39 371 3837052.\n\nSports Fields & Table Tennis — A five-a-side football field with synthetic grass and table tennis tables are available by booking at Reception. Equipment can be collected and returned there.\n\nEntertainment — Sports activities, games, and evening shows for the whole family. Check the notice board for the full program!\n\nThe shaded playground is perfect for having fun in total safety!\n\nWi-Fi Connection — Available in common areas (pool, reception, restaurant, and bar). Register via email, Google, or Facebook to receive your PIN.",
        image: img("ilgabbiano", "sports-gitav_gitavillage_gabbiano_sport_2021-25.jpg"),
      },
      {
        title: "Utilità per la Piazzola",
        titleEn: "Pitch Utilities & Emergencies",
        description:
          "Servizi Tecnici:\n• Energia — Ogni piazzola dispone di un attacco luce da 5A (max 1 kW) con spina europea (è consentito 1 solo attacco per piazzola).\n• Acqua — Docce calde sono incluse e funzionano tramite chip elettronico. Acqua potabile disponibile (consigliata solo per cucinare).\n• Barbecue — L'area comune è a disposizione per le tue grigliate.\n\nArea Lavanderia — Situata all'ingresso del blocco bagni (zona barbecue). Lavatrici e asciugatrici a moneta: € 5 a ciclo (monete da 1 o 2 euro), il detersivo è incluso nel lavaggio.\n\nComfort in alloggio:\n• Acqua potabile disponibile in tutta la struttura\n• Acqua calda solo in bagno\n• Piastra di cottura: scarica le istruzioni PDF\n\nVarie:\n• L'ATM si trova subito dopo l'uscita dal villaggio, sulla destra.\n• L'auto non può essere parcheggiata in piazzola.\n\nSicurezza — Numero unico emergenze 112 | Guardia Medica: 0564 869018/19.\n\nAmbiente — L'isola ecologica per la raccolta differenziata si trova all'interno del parcheggio.\n\nPer orientarti al meglio, qui trovi la mappa del villaggio (PDF).",
        descriptionEn:
          "Technical Services:\n• Electricity — Each pitch is equipped with a 5A power connection (max 1 kW) with a European plug (only 1 connection per pitch is allowed).\n• Water — Hot showers are included and operate via electronic chip. Drinking water is available (recommended for cooking only).\n• Barbecue — Shared area available for your BBQs.\n\nLaundry Area — Located at the entrance of the restroom block (BBQ area). Coin-operated washing machines and dryers: € 5 per cycle (1 or 2 euro coins), detergent included.\n\nIn your accommodation:\n• Drinking water available throughout the property\n• Hot water available in the bathroom only\n• Cooking hob: download PDF instructions\n\nGeneral Info:\n• The ATM is located just outside the village exit, on the right.\n• Cars cannot be parked on the pitch.\n\nSafety — Emergency number 112 | Medical Service: +39 0564 869018/19.\n\nEnvironment — The recycling area is located inside the parking area.",
        image: img("ilgabbiano", "utility-free-wifi.jpg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Il buongiorno parte da qui",
        titleEn: "Start your day here",
        rows: [
          { label: "Bar", labelEn: "Bar", value: "08:00–23:00" },
          { label: "Pranzo", labelEn: "Lunch", value: "12:30–14:00" },
          { label: "Cena / Pizzeria", labelEn: "Dinner / Pizzeria", value: "19:30–23:00" },
        ],
      },
      {
        icon: "🏊",
        title: "Piscina & Servizi",
        titleEn: "Pool & Services",
        rows: [
          { label: "Piscina", labelEn: "Pool", value: "09:00–19:00" },
          { label: "Giovedì", labelEn: "Thursdays", value: "chiude alle 18:00" },
          { label: "Minimarket", labelEn: "Minimarket", value: "08:00–13:00 / 16:00–19:00" },
        ],
      },
      {
        icon: "🏕️",
        title: "Il momento dei saluti",
        titleEn: "Time to say goodbye",
        rows: [
          { label: "Check-out alloggi", labelEn: "Accommodation check-out", value: "Entro le 10:00" },
          { label: "Villaggio fino a", labelEn: "Village until", value: "12:00" },
          { label: "Reception", labelEn: "Reception", value: "08:00–20:00" },
          { label: "Ufficio Cassa", labelEn: "Cash desk", value: "09:00–12:30 / 15:00–18:00" },
        ],
      },
      {
        icon: "🌙",
        title: "Silenzio",
        titleEn: "Quiet Hours",
        rows: [
          { label: "Pomeriggio", labelEn: "Afternoon", value: "13:00–15:30" },
          { label: "Sera / Notte", labelEn: "Evening / Night", value: "19:30–08:30" },
        ],
      },
    ],
    benefits: [
      {
        icon: "🏊",
        title: "Piscina",
        titleEn: "Swimming Pool",
        description: "Aperta tutti i giorni dalle 09:00 alle 19:00. La cuffia è consigliata, ma non obbligatoria.",
      },
      {
        icon: "🚣",
        title: "Canoe & Pedalò",
        titleEn: "Canoes & Pedal Boats",
        description: "Prenotazione gratuita per 30 minuti.",
      },
      {
        icon: "🎭",
        title: "Animazione",
        titleEn: "Entertainment",
        description: "Attività sportive, giochi e spettacoli serali per tutta la famiglia. Programma in bacheca.",
      },
      {
        icon: "⚽",
        title: "Campi Sportivi & Ping-Pong",
        titleEn: "Sports Fields & Table Tennis",
        description: "Campo da calcetto in erba sintetica e tavoli da ping-pong. Prenotazione in Reception, materiale si ritira e riconsegna lì.",
      },
      {
        icon: "🧒",
        title: "Parco giochi",
        titleEn: "Playground",
        description: "Area ombreggiata perfetta per scatenarsi in totale sicurezza.",
      },
      {
        icon: "🌐",
        title: "Wi-Fi gratuito",
        titleEn: "Free Wi-Fi",
        description: "Disponibile nelle aree comuni (piscina, reception, ristorante e bar). Registrati con email, Google o Facebook per il PIN.",
      },
    ],
    gallery: [
      img("ilgabbiano", "beach-gitav_gitavillage_gabbiano_spiaggia_2021.jpg"),
      img("ilgabbiano", "pool-gitav_gitavillage-il-gabbiano_piscina-20.jpeg"),
      img("ilgabbiano", "entertainment-gitav_gitavillage_gabbiano_animazione_20.jpg"),
      img("ilgabbiano", "sports-gitav_gitavillage_gabbiano_sport_2021-25.jpg"),
      img("ilgabbiano", "playground-gitav_gitavillage_gabbiano_-parco-giochi.jpg"),
      img("ilgabbiano", "watersports-gitavillage-argentario_canoe-e-pedalo-20.jpg"),
    ],
    rules: [
      {
        titleIt: "Orario del Silenzio",
        descriptionIt: "Dalle 13:00 alle 15:30 e dalle 19:30 alle 08:30 il villaggio si rilassa: in queste fasce non è possibile accedere, montare o spostare mezzi.",
        descriptionEn: "From 13:00 to 15:30 and from 19:30 to 08:30 the village slows down: during these times it is not allowed to enter, set up, or move vehicles.",
      },
      {
        titleIt: "Check-out",
        descriptionIt: "La sistemazione va liberata entro le ore 10:00, ma puoi continuare a goderti il villaggio fino alle 12:00.",
        descriptionEn: "Accommodation must be vacated by 10:00, but you can continue enjoying the village until 12:00.",
      },
      {
        titleIt: "Parcheggio",
        descriptionIt: "L'auto non può essere parcheggiata in piazzola.",
        descriptionEn: "Cars cannot be parked on the pitch.",
      },
      {
        titleIt: "Gluten free",
        descriptionIt: "Disponibili piatti senza glutine semplici (cucina non certificata).",
        descriptionEn: "Simple gluten-free options are available (non-certified kitchen).",
      },
      {
        titleIt: "Ambiente",
        descriptionIt: "L'isola ecologica per la raccolta differenziata si trova all'interno del parcheggio.",
        descriptionEn: "The recycling area is located inside the parking area.",
      },
    ],
    contacts: {
      website: "https://ilgabbianocampingvillage.com",
      email: "info@ilgabbianocampingvillage.com",
      numbers: [
        { label: "Emergenze / Emergency", value: "112" },
        { label: "Guardia Medica / Medical Service", value: "0564 869018/19", phone: "+390564869018" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "VTC Talamone (Bici / Bikes)", value: "+39 347 2607983", phone: "+393472607983" },
      ],
    },
    pdfs: [
      {
        label: "Istruzioni piano cottura",
        labelEn: "Cooking hob instructions",
        url: pdf("ilgabbiano", "istruzioni-piano-cottura-il-gabbiano.pdf"),
      },
    ],
    bookingUrl: "https://ilgabbianocampingvillage.com",
  },

  // ═══════════════════════════════════════════════════
  // ARGENTARIO
  // ═══════════════════════════════════════════════════
  {
    slug: "argentario",
    name: "Gitavillage Argentario",
    brand: "Gitavillage",
    shortName: "Argentario",
    type: "village",
    location: "Albinia",
    region: "Costa d'Argento · Toscana",
    tagline: {
      it: "Tra mare e pineta",
      en: "Between sea and pine forest",
    },
    description: {
      it: "Qui la vacanza prende il suo ritmo, tra il mare a pochi passi e la tranquillità della pineta. Al Gitavillage Argentario trovi spazi pensati per vivere ogni momento con semplicità: dal relax in spiaggia alle giornate in piscina, fino ai servizi che rendono tutto più facile, per grandi e piccoli.",
      en: "Here, your holiday finds its own rhythm, between the sea just a few steps away and the peaceful shade of the pine forest. At Gitavillage Argentario, you'll find spaces designed to enjoy every moment with ease: from relaxing on the beach to spending your day by the pool.",
    },
    badge: "🌲 Albinia · Costa d'Argento",
    heroImage: img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
    cardImage: img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
    heroSubtitle: {
      it: "Dove il mare incontra la pineta",
      en: "Where the sea meets the pine forest",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Tra mare e",
    introTitleEm: "pineta",
    theme: "pine",
    highlights: [
      {
        icon: "🏖️",
        title: "Spiaggia attrezzata",
        titleEn: "Equipped beach",
        description: "Aperta 09:00–19:00 con servizi completi.",
      },
      {
        icon: "🏊",
        title: "Piscine",
        titleEn: "Pools",
        description: "Aperte tutti i giorni dalle 09:00 alle 19:00.",
      },
      {
        icon: "🍽️",
        title: "3 ristoranti",
        titleEn: "3 restaurants",
        description: "Villaggio, spiaggia e Le Piscine.",
      },
      {
        icon: "🎪",
        title: "Animazione",
        titleEn: "Entertainment",
        description: "Attività di giorno e spettacoli serali.",
      },
    ],
    services: [
      {
        title: "Tre zone, tre esperienze",
        titleEn: "Three areas, three experiences",
        description:
          'Il ristorante "Le Piscine" ti aspetta a pranzo (12:30–15:00) e a cena (19:30–23:30), mentre il bar è aperto dalle 07:30 fino a mezzanotte. In zona camping, il ristorante "Al Mare Da Angela" è aperto a pranzo (12:00–14:30) e a cena (18:30–22:30). Sulla spiaggia trovi "La Rotonda", con bar dalle 07:30 alle 22:30.',
        descriptionEn:
          'The "Le Piscine" restaurant is open for lunch (12:30–15:00) and dinner (19:30–23:30), while the bar is open from 07:30 until midnight. In the camping area, "Al Mare Da Angela" serves lunch (12:00–14:30) and dinner (18:30–22:30). At the beach you\'ll find "La Rotonda" bar open 07:30–22:30.',
        image: img("argentario", "restaurant-gitav_gitavillage-_argentario_bar-la-rot.jpg"),
      },
      {
        title: "Spiaggia & Piscina",
        titleEn: "Beach & Pool",
        description:
          "La spiaggia attrezzata è attiva dalle 09:00 alle 19:00. Se il servizio non è incluso, puoi verificare la disponibilità direttamente con il bagnino (€ 20/giorno per 1 ombrellone + 2 lettini). Convenzione Singita: 20% di sconto sulla spiaggia e 10% su food & drink mostrando il braccialetto. Piscina aperta tutti i giorni 09:00–19:00 (cuffia obbligatoria).",
        descriptionEn:
          "The equipped beach is open 09:00–19:00. If the service is not included, check availability with the lifeguard (€20/day for 1 umbrella + 2 sunbeds). Singita partnership: 20% off beach services and 10% on food & drinks with your wristband. Pool open daily 09:00–19:00 (swim cap required).",
        image: img("argentario", "pool-gitav_gitavillage_argentario_piscine_202.jpg"),
      },
      {
        title: "Sport, Animazione & Bici",
        titleEn: "Sports, Entertainment & Bikes",
        description:
          "Campi di calcetto, pallavolo e ping-pong all'interno del villaggio (attrezzatura dallo staff animazione). Noleggio bici con partner esterni (Maremma Escursioni / VTC Talamone). Canoe e pedalò gratuiti su prenotazione (30 minuti). Attività sportive di giorno e spettacoli serali.",
        descriptionEn:
          "Football, volleyball and table tennis courts inside the village (equipment from the animation staff). Bike rental with external partners (Maremma Escursioni / VTC Talamone). Free canoes and pedal boats on reservation (30 minutes). Daily sports activities and evening shows.",
        image: img("argentario", "sports-gitav_gitavillage-argentario_impianti-sp.jpg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Colazione & Bar",
        titleEn: "Breakfast & Bar",
        rows: [
          { label: "Colazione", labelEn: "Breakfast", value: "07:30–10:30" },
          { label: "Bar Piscine", labelEn: "Pool Bar", value: "07:30–24:00" },
          { label: "Bar Camping", labelEn: "Camping Bar", value: "Dalle 07:15" },
          { label: "Bar La Rotonda", labelEn: "La Rotonda", value: "07:30–22:30" },
        ],
      },
      {
        icon: "🍽️",
        title: "Ristoranti",
        titleEn: "Restaurants",
        rows: [
          { label: "Le Piscine pranzo", labelEn: "Le Piscine lunch", value: "12:30–15:00" },
          { label: "Le Piscine cena", labelEn: "Le Piscine dinner", value: "19:30–23:30" },
          { label: "Da Angela pranzo", labelEn: "Da Angela lunch", value: "12:00–14:30" },
          { label: "Da Angela cena", labelEn: "Da Angela dinner", value: "18:30–22:30" },
        ],
      },
      {
        icon: "🏖️",
        title: "Spiaggia & Piscina",
        titleEn: "Beach & Pool",
        rows: [
          { label: "Spiaggia", labelEn: "Beach", value: "09:00–19:00" },
          { label: "Piscina", labelEn: "Pool", value: "09:00–19:00" },
          { label: "Reception", labelEn: "Reception", value: "08:00–20:00" },
          { label: "Cassa", labelEn: "Cash desk", value: "09:00–12:00 / 16:00–19:00" },
        ],
      },
      {
        icon: "🌙",
        title: "Silenzio & Check-out",
        titleEn: "Quiet & Check-out",
        rows: [
          { label: "Pausa", labelEn: "Break", value: "12:30–15:30" },
          { label: "Notte", labelEn: "Night", value: "19:30–08:30" },
          { label: "Check-out", labelEn: "Check-out", value: "Entro le 10:00" },
          { label: "Servizi fino", labelEn: "Services until", value: "12:00" },
        ],
      },
    ],
    benefits: [
      {
        icon: "🏊",
        title: "Piscine",
        titleEn: "Pools",
        description: "Accesso gratuito.",
      },
      {
        icon: "🚣",
        title: "Canoe & Pedalò",
        titleEn: "Canoes & Pedal Boats",
        description: "Gratis 30 minuti su prenotazione.",
      },
      {
        icon: "🎭",
        title: "Animazione",
        titleEn: "Entertainment",
        description: "Attività diurne e spettacoli serali.",
      },
      {
        icon: "⚽",
        title: "Campi sportivi",
        titleEn: "Sports courts",
        description: "Calcetto, pallavolo, ping-pong.",
      },
      {
        icon: "🎣",
        title: "Pesca",
        titleEn: "Fishing",
        description: "Consentita 19:00–07:00.",
      },
      {
        icon: "🌐",
        title: "Wi-Fi",
        titleEn: "Wi-Fi",
        description: "Nelle aree comuni.",
      },
    ],
    gallery: [
      img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
      img("argentario", "pool-gitav_gitavillage_argentario_piscine_202.jpg"),
      img("argentario", "beach-gitav_gitavillage_argentario_ristorante_.jpg"),
      img("argentario", "sports-gitav_gitavillage-argentario_impianti-sp.jpg"),
      img("argentario", "entertainment-gitav_gitavillage_argentario_animazione_.jpg"),
      img("argentario", "bikes-gitav_gitavillage-argentario_viale_bici_.jpg"),
      img("argentario", "watersports-gitavillage-argentario_canoe-e-pedalo-20.jpg"),
    ],
    rules: [
      {
        titleIt: "Biancheria",
        descriptionIt: "Se non inclusa, noleggio a € 10/persona per set. Contattaci allo 0564 1838523 (int. 3).",
        descriptionEn: "If not included, rental at €10 per person per set. Call 0564 1838523 (ext. 3).",
      },
      {
        titleIt: "Cuffia obbligatoria",
        descriptionIt: "In piscina è obbligatorio l'uso della cuffia.",
        descriptionEn: "Swim cap is mandatory in the pool.",
      },
      {
        titleIt: "Pesca",
        descriptionIt: "Consentita solo dalle 19:00 alle 07:00 (fuori orario balneazione).",
        descriptionEn: "Fishing allowed only 19:00–07:00 (outside swimming hours).",
      },
      {
        titleIt: "Piazzole",
        descriptionIt: "Attacco luce 6A (max 1kW). Il posto auto è disponibile solo di fronte alla Reception.",
        descriptionEn: "Pitch power connection 6A (max 1kW). Parking only in front of Reception.",
      },
      {
        titleIt: "Minimarket",
        descriptionIt: "Maggio/settembre 08:00–13:00 e 17:00–20:00. Giugno/luglio/agosto 08:00–14:00 e 16:30–20:00.",
        descriptionEn: "May/Sep 08:00–13:00 and 17:00–20:00. Jun/Jul/Aug 08:00–14:00 and 16:30–20:00.",
      },
    ],
    contacts: {
      numbers: [
        { label: "Reception", value: "0564 1838523", phone: "+390564183852" },
        { label: "Minimarket", value: "0564 870012", phone: "+390564870012" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "VTC Talamone", value: "+39 347 2607983", phone: "+393472607983" },
        { label: "Guardia Medica", value: "0564 869018/19", phone: "+390564869018" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [
      {
        label: "Istruzioni angolo cottura",
        labelEn: "Cooking hob instructions",
        url: pdf("argentario", "istruzioni-angolo-cottura-argentario.pdf"),
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // CALIFORNIA
  // ═══════════════════════════════════════════════════
  {
    slug: "california",
    name: "Gitavillage California",
    brand: "Gitavillage",
    shortName: "California",
    type: "village",
    location: "Montalto Marina",
    region: "Alto Lazio",
    tagline: {
      it: "Pineta, mare e benessere",
      en: "Pine forest, sea and wellness",
    },
    description: {
      it: "Immerso nella pineta e a pochi passi dal mare, il Gitavillage California è il luogo perfetto per vivere una vacanza in libertà. Qui il tempo rallenta, le giornate scorrono tra spiaggia, natura e momenti condivisi, e ogni spazio è pensato per farti sentire subito a tuo agio.",
      en: "Nestled in a pine forest and just a few steps from the sea, Gitavillage California is the perfect place to enjoy a carefree holiday. Here, time slows down, days flow between the beach, nature and shared moments.",
    },
    badge: "🌲 Montalto Marina · Lazio",
    heroImage: img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
    cardImage: img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
    heroSubtitle: {
      it: "Una casa lontano da casa",
      en: "A home away from home",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "La tua vacanza tra",
    introTitleEm: "pineta e mare",
    theme: "pine",
    highlights: [
      {
        icon: "💆",
        title: "SPA California",
        titleEn: "California Wellness",
        description: "Idromassaggio, Kneipp, doccia emozionale, massaggi.",
      },
      {
        icon: "🏋️",
        title: "Palestra open-air",
        titleEn: "Open-air gym",
        description: "Gratuita, immersa nella pineta.",
      },
      {
        icon: "🏊",
        title: "Piscine",
        titleEn: "Pools",
        description: "09:00–19:00 con lettini e ombrelloni.",
      },
      {
        icon: "🏖️",
        title: "Stabilimento",
        titleEn: "Beach club",
        description: "Spiaggia a pochi passi, 09:00–19:00.",
      },
    ],
    services: [
      {
        title: "Bar, Ristorante & Minimarket",
        titleEn: "Bar, Restaurant & Minimarket",
        description:
          "Il bar nella zona piscine è aperto dalle 07:30 alle 24:00: perfetto per la colazione, una pausa fresca o un drink serale. Il ristorante accoglie a pranzo (12:30–14:30) e a cena (19:00–22:30). Prenotazioni al +39 0766 396067. Il minimarket è aperto 08:00–13:00 e 16:30–20:00 per alimentari e giornali.",
        descriptionEn:
          "The poolside bar is open from 07:30 to 24:00—perfect for breakfast, a break or an evening drink. The restaurant welcomes you for lunch (12:30–14:30) and dinner (19:00–22:30). Bookings at +39 0766 396067. Minimarket open 08:00–13:00 and 16:30–20:00.",
        image: img("california", "market-minimarket.jpg"),
      },
      {
        title: "SPA, Palestra & Sport",
        titleEn: "SPA, Gym & Sports",
        description:
          "Concediti un momento tutto per te nella SPA California Wellness: idromassaggio, percorso Kneipp, doccia emozionale e massaggi. La palestra open-air è gratuita, immersa nella pineta. Campi sportivi disponibili: village gratis (max 1h/giorno), camping Tennis/Basket €10/h – Calcetto €25/h. Bocce e ping-pong liberi.",
        descriptionEn:
          "Treat yourself at California Wellness Spa: hydromassage, Kneipp path, emotional showers and massages. Open-air gym is free, in the pine forest. Sports fields: free for village guests (max 1h/day), camping Tennis/Basket €10/h – Five-a-side €25/h. Bocce and table tennis free.",
        image: img("california", "sports-palestra-open-air.jpg"),
      },
      {
        title: "Animazione & Attività",
        titleEn: "Entertainment & Activities",
        description:
          "Dal 06/06 al 06/09 la giornata è sempre piena di energia: spiaggia ore 10:00, piscina ore 16:00, anfiteatro ore 21:30. Noleggio bici con Jolly Bike (Massimiliano 339 1328662), canoe e pedalò gratuiti per 30 minuti su prenotazione. Escursioni a Giglio, Saturnia, Parco della Maremma al +39 371 3837052.",
        descriptionEn:
          "From 06/06 to 06/09 the day is always full of energy: beach at 10:00, pool at 16:00, amphitheatre at 21:30. Bike rental with Jolly Bike (Massimiliano 339 1328662), free canoes and pedal boats for 30 minutes on reservation. Excursions to Giglio, Saturnia, Maremma Park at +39 371 3837052.",
        image: img("california", "entertainment-animazione.jpeg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Bar & Ristorante",
        titleEn: "Bar & Restaurant",
        rows: [
          { label: "Bar piscine", labelEn: "Pool Bar", value: "07:30–24:00" },
          { label: "Pranzo", labelEn: "Lunch", value: "12:30–14:30" },
          { label: "Cena", labelEn: "Dinner", value: "19:00–22:30" },
          { label: "Minimarket", labelEn: "Minimarket", value: "08:00–13:00 / 16:30–20:00" },
        ],
      },
      {
        icon: "🏊",
        title: "Piscine & Spiaggia",
        titleEn: "Pool & Beach",
        rows: [
          { label: "Piscina", labelEn: "Pool", value: "09:00–19:00" },
          { label: "Spiaggia", labelEn: "Beach", value: "09:00–19:00" },
          { label: "Reception", labelEn: "Reception", value: "08:30–20:30" },
          { label: "Cassa", labelEn: "Cash desk", value: "08:30–13:30 / 14:30–19:30" },
        ],
      },
      {
        icon: "🏕️",
        title: "Check-out",
        titleEn: "Check-out",
        rows: [
          { label: "Alloggi", labelEn: "Accommodation", value: "Entro le 10:00" },
          { label: "Servizi fino", labelEn: "Services until", value: "12:00" },
          { label: "Piazzole", labelEn: "Pitches", value: "Entro le 12:00" },
        ],
      },
      {
        icon: "🌙",
        title: "Silenzio",
        titleEn: "Quiet Hours",
        rows: [
          { label: "Pomeriggio", labelEn: "Afternoon", value: "13:00–16:00" },
          { label: "Notte", labelEn: "Night", value: "00:00–08:00" },
          { label: "Emergenze h24", labelEn: "24h Emergency", value: "+39 376 1330296" },
        ],
      },
    ],
    benefits: [
      { icon: "🏊", title: "Piscine", titleEn: "Pools", description: "Lettini e ombrelloni fino esaurimento." },
      { icon: "💆", title: "SPA", titleEn: "SPA", description: "Accesso a pagamento." },
      { icon: "🏋️", title: "Palestra", titleEn: "Gym", description: "Open-air gratis nella pineta." },
      { icon: "🎭", title: "Animazione", titleEn: "Entertainment", description: "Dal 06/06 al 06/09." },
      { icon: "🚣", title: "Canoe & Pedalò", titleEn: "Canoes & Pedal Boats", description: "Gratis 30 min su prenotazione." },
      { icon: "🍽️", title: "Ristorante", titleEn: "Restaurant", description: "Piatti semplici e gustosi." },
    ],
    gallery: [
      img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
      img("california", "pool-gitav_gitavillage-california_piscina_202.jpg"),
      img("california", "sports-gitav_gitavillage_california_campi-sport.jpg"),
      img("california", "sports-palestra-open-air.jpg"),
      img("california", "entertainment-animazione.jpeg"),
      img("california", "watersports-canoa-e-pedalo.jpg"),
    ],
    rules: [
      {
        titleIt: "Cuffia obbligatoria",
        descriptionIt: "In piscina è obbligatorio l'uso della cuffia.",
        descriptionEn: "Swim cap mandatory in the pool.",
      },
      {
        titleIt: "Wi-Fi",
        descriptionIt: "1 ora gratuita al giorno. Connessione illimitata (2 dispositivi): € 10/7 giorni.",
        descriptionEn: "1 free hour per day. Unlimited (2 devices): €10/7 days.",
      },
      {
        titleIt: "Trasporti",
        descriptionIt: "Nessun taxi pubblico. Consigliati: Angelo Nacci 328 5396582, Taxi Capalbio 366 3922147.",
        descriptionEn: "No public taxis. Recommended: Angelo Nacci 328 5396582, Taxi Capalbio 366 3922147.",
      },
      {
        titleIt: "Biancheria",
        descriptionIt: "Inclusa nei Villini in muratura. Per le altre sistemazioni: € 10/persona.",
        descriptionEn: "Included in masonry villas. For other accommodations: €10/person.",
      },
      {
        titleIt: "Barbecue",
        descriptionIt: "Area comune (solo carbonella).",
        descriptionEn: "Shared area (charcoal only).",
      },
    ],
    contacts: {
      mainPhone: "+390766396067",
      numbers: [
        { label: "Ristorante", value: "0766 396067", phone: "+390766396067" },
        { label: "Emergenze h24", value: "+39 376 1330296", phone: "+393761330296" },
        { label: "Guardia Medica", value: "+39 350 1744989", phone: "+393501744989" },
        { label: "Taxi Angelo Nacci", value: "328 5396582", phone: "+393285396582" },
        { label: "Taxi Capalbio", value: "366 3922147", phone: "+393663922147" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [
      {
        label: "SPA California",
        labelEn: "SPA California",
        url: pdf("california", "spa-california.pdf"),
      },
      {
        label: "Area fitness",
        labelEn: "Fitness area",
        url: pdf("california", "area-fitness-californiapdf.pdf"),
      },
      {
        label: "Istruzioni angolo cottura",
        labelEn: "Cooking hob instructions",
        url: pdf("california", "istruzioni-angolo-cottura-california.pdf"),
      },
    ],
  },

  // ═══════════════════════════════════════════════════
  // CLUB DEGLI AMICI
  // ═══════════════════════════════════════════════════
  {
    slug: "clubdegliamici",
    name: "Club degli Amici",
    brand: "Gitavillage",
    shortName: "Club degli Amici",
    type: "village",
    location: "Pescia Romana",
    region: "Alto Lazio",
    tagline: {
      it: "Vacanza con il tuo amico a 4 zampe",
      en: "Holiday with your four-legged friend",
    },
    description: {
      it: "Qui trovi tutto quello che ti serve per vivere la tua vacanza in modo semplice, comodo e senza pensieri, insieme a tutta la famiglia… anche quella a quattro zampe. Dog beach, campo agility e attività cinofile gratuite: la vacanza è più bella quando nessuno resta indietro.",
      en: "Here you'll find everything you need to enjoy your holiday in a simple, comfortable and carefree way, together with your whole family… including your four-legged one. Dog beach, agility area and free dog activities: holidays are better when no one is left behind.",
    },
    badge: "🐾 Pescia Romana · Lazio",
    heroImage: img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
    cardImage: img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
    heroSubtitle: {
      it: "Vacanza insieme, davvero",
      en: "Holiday together, truly",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Tra",
    introTitleEm: "amici",
    introTitleAfter: "a 2 e a 4 zampe",
    theme: "sunset",
    highlights: [
      {
        icon: "🐾",
        title: "Dog friendly",
        titleEn: "Dog friendly",
        description: "Dog beach, campo agility, docce dedicate.",
      },
      {
        icon: "🏖️",
        title: "Spiaggia",
        titleEn: "Beach",
        description: "Stabilimento aperto 09:00–19:00.",
      },
      {
        icon: "🧘",
        title: "Yoga gratuito",
        titleEn: "Free yoga",
        description: "Luglio e agosto, mercoledì e venerdì.",
      },
      {
        icon: "🎭",
        title: "Animazione",
        titleEn: "Entertainment",
        description: "Laboratori per bambini e spettacoli serali.",
      },
    ],
    services: [
      {
        title: "Bar, Ristorante & Servizi",
        titleEn: "Bar, Restaurant & Services",
        description:
          "Il bar ti aspetta dalle 06:30 alle 24:00, dalla prima colazione fino all'ultimo drink. Il ristorante apre per pranzo (12:00–15:00) e cena (19:00–23:00) con proposte senza glutine semplici. Minimarket 08:00–13:00 e 17:00–20:00. Tabacchi e ATM a Pescia Romana.",
        descriptionEn:
          "The bar is open 06:30–24:00, from breakfast to your evening drink. Restaurant open for lunch (12:00–15:00) and dinner (19:00–23:00) with simple gluten-free options. Minimarket 08:00–13:00 and 17:00–20:00. Tobacco and ATM in Pescia Romana.",
        image: img("clubdegliamici", "market-minimarket.jpg"),
      },
      {
        title: "Spiaggia & Sport",
        titleEn: "Beach & Sports",
        description:
          "Stabilimento 09:00–19:00. Per ospiti village postazione inclusa, camping noleggio € 7/ombrellone + € 7/lettino. Campi sportivi gratuiti per village (tennis, calcetto, basket, pallavolo); per camping Tennis € 10/h (€15 dopo 21:00), Calcetto € 30/h (€35 dopo 21:00); Basket e pallavolo sempre gratuiti.",
        descriptionEn:
          "Beach club 09:00–19:00. Village guests get included spot, camping rental €7/umbrella + €7/sunbed. Sports fields free for village (tennis, football, basketball, volleyball); for camping Tennis €10/h (€15 after 21:00), Football €30/h (€35 after 21:00); Basketball and volleyball always free.",
        image: img("clubdegliamici", "sports-gitav_gitavillage-club-degli-amici_sport.jpg"),
      },
      {
        title: "Attività Cinofile & Yoga",
        titleEn: "Dog Activities & Yoga",
        description:
          "Il tuo cane è in vacanza con te, non in più: patio con cancelletto, docce dedicate (anche in spiaggia), dog beach, campo agility, attività cinofile gratuite in luglio e agosto. A luglio e agosto puoi partecipare anche alle lezioni gratuite di yoga (mercoledì e venerdì, 19:00–20:00).",
        descriptionEn:
          "Your dog is on holiday with you, not 'extra': gated patio, dedicated showers (also at the beach), dog beach, agility area, free dog activities in July and August. In July and August you can also join free yoga classes (Wednesday and Friday, 19:00–20:00).",
        image: img("clubdegliamici", "pets-gitav_gitavillage_club-degli-amici_cinof.jpg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Bar & Ristorante",
        titleEn: "Bar & Restaurant",
        rows: [
          { label: "Bar", labelEn: "Bar", value: "06:30–24:00" },
          { label: "Pranzo", labelEn: "Lunch", value: "12:00–15:00" },
          { label: "Cena", labelEn: "Dinner", value: "19:00–23:00" },
          { label: "Minimarket", labelEn: "Minimarket", value: "08:00–13:00 / 17:00–20:00" },
        ],
      },
      {
        icon: "🏖️",
        title: "Spiaggia",
        titleEn: "Beach",
        rows: [
          { label: "Stabilimento", labelEn: "Beach club", value: "09:00–19:00" },
          { label: "Reception", labelEn: "Reception", value: "08:00–20:00" },
          { label: "Cassa", labelEn: "Cash desk", value: "08:00–13:00 / 14:00–19:00" },
        ],
      },
      {
        icon: "🏕️",
        title: "Check-out",
        titleEn: "Check-out",
        rows: [
          { label: "Village", labelEn: "Village", value: "Entro le 10:00" },
          { label: "Smart oltre parch.", labelEn: "Smart pitches", value: "Entro le 22:00" },
          { label: "Comfort/Smart bagno", labelEn: "Comfort pitches", value: "Entro le 12:00" },
        ],
      },
      {
        icon: "🧘",
        title: "Yoga (lug/ago)",
        titleEn: "Yoga (Jul/Aug)",
        rows: [
          { label: "Mercoledì", labelEn: "Wednesday", value: "19:00–20:00" },
          { label: "Venerdì", labelEn: "Friday", value: "19:00–20:00" },
        ],
      },
    ],
    benefits: [
      { icon: "🐾", title: "Dog friendly", titleEn: "Dog friendly", description: "Dog beach e agility gratis." },
      { icon: "🧘", title: "Yoga gratis", titleEn: "Free yoga", description: "In luglio e agosto." },
      { icon: "🏖️", title: "Spiaggia", titleEn: "Beach", description: "Inclusa per village." },
      { icon: "⚽", title: "Sport gratis", titleEn: "Free sports", description: "Basket e pallavolo sempre." },
      { icon: "🎭", title: "Animazione", titleEn: "Entertainment", description: "Mattina, pomeriggio, sera." },
      { icon: "🌐", title: "Wi-Fi", titleEn: "Wi-Fi", description: "Comuni e appartamenti." },
    ],
    gallery: [
      img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
      img("clubdegliamici", "sports-gitav_gitavillage-club-degli-amici_sport.jpg"),
      img("clubdegliamici", "pets-gitav_gitavillage_club-degli-amici_cinof.jpg"),
      img("clubdegliamici", "pets-gitav_gitavillage_club-degli-amici__yoga.jpg"),
      img("clubdegliamici", "entertainment-gitav_gitavillage-club-degli-amici_anima.jpeg"),
      img("clubdegliamici", "watersports-canoa-e-pedalo.jpg"),
    ],
    rules: [
      {
        titleIt: "Cani al guinzaglio",
        descriptionIt: "Usa le aree dedicate quando previste. I cani non possono entrare in piscina.",
        descriptionEn: "Keep dogs on a leash. Use dedicated areas. Dogs not allowed in the pool.",
      },
      {
        titleIt: "Cauzione",
        descriptionIt: "Per i village, alla partenza riconsegna chiavi e ricevuta cauzione (€50).",
        descriptionEn: "For village units, return keys and deposit receipt (€50) at departure.",
      },
      {
        titleIt: "Wi-Fi",
        descriptionIt: "Disponibile nelle aree comuni e negli appartamenti. Password: Clubamici23.",
        descriptionEn: "Available in common areas and apartments. Password: Clubamici23.",
      },
      {
        titleIt: "Late check-out",
        descriptionIt: "Fino alle 20:00 su disponibilità — chiedi in Reception.",
        descriptionEn: "Until 20:00 subject to availability — ask at Reception.",
      },
      {
        titleIt: "Barbecue",
        descriptionIt: "Area comune gratuita (solo carbonella).",
        descriptionEn: "Free shared area (charcoal only).",
      },
    ],
    contacts: {
      numbers: [
        { label: "Ristorante", value: "333 1844969", phone: "+393331844969" },
        { label: "Bike rental (Cristian)", value: "389 0187339", phone: "+393890187339" },
        { label: "Guardia Medica", value: "350 1744989", phone: "+393501744989" },
        { label: "Farmacia Pescia Romana", value: "0766 831138", phone: "+390766831138" },
        { label: "NCC Renato", value: "366 3922147", phone: "+393663922147" },
        { label: "NCC Emiliano", value: "348 3630623", phone: "+393483630623" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [],
  },

  // ═══════════════════════════════════════════════════
  // LE CANNELLE
  // ═══════════════════════════════════════════════════
  {
    slug: "lecannelle",
    name: "The Caesar Le Cannelle",
    brand: "The Caesar",
    shortName: "Le Cannelle",
    type: "agriturismo",
    location: "Fonteblanda",
    region: "Maremma Toscana",
    tagline: {
      it: "Agriturismo diffuso nella Maremma",
      en: "Scattered agriturismo in Maremma",
    },
    description: {
      it: "Qui il tempo rallenta davvero. Tra il profumo della macchia mediterranea e il silenzio della Maremma, ogni giornata trova il suo ritmo naturale. Le Cannelle è un agriturismo diffuso dove puoi lasciarti guidare dai sapori genuini, dalla luce che cambia durante il giorno, da piccoli gesti quotidiani che riportano all'essenziale.",
      en: "Here, time truly slows down. Between the scent of Mediterranean scrub and the silence of the Maremma, each day finds its natural rhythm. Le Cannelle is a scattered agriturismo where you can simply let yourself be guided by genuine flavors and small daily gestures.",
    },
    badge: "🌿 Fonteblanda · Maremma",
    heroImage: img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
    cardImage: img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
    heroSubtitle: {
      it: "Il ritmo naturale della Maremma",
      en: "The natural rhythm of Maremma",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Il tempo",
    introTitleEm: "rallenta",
    introTitleAfter: "davvero",
    theme: "sand",
    highlights: [
      {
        icon: "🍷",
        title: "Pensione completa",
        titleEn: "Full board",
        description: "Colazione, pranzo in cestini termici e cena.",
      },
      {
        icon: "🏖️",
        title: "Spiaggia Poseidonia",
        titleEn: "Poseidonia beach",
        description: "Puoi pranzare direttamente sulla spiaggia.",
      },
      {
        icon: "🌳",
        title: "Natura",
        titleEn: "Nature",
        description: "Parco della Maremma e macchia mediterranea.",
      },
      {
        icon: "🚲",
        title: "Escursioni",
        titleEn: "Excursions",
        description: "Bici e visite guidate al parco.",
      },
    ],
    services: [
      {
        title: "Ristorazione in Pensione Completa",
        titleEn: "Full Board Dining",
        description:
          "La giornata inizia con la colazione a buffet dolce e salato (08:00–09:00). Per il pranzo è previsto un pasto freddo consegnato alle 12:30 presso Villa a Mare, preparato in cestini termici con il numero della tua camera: puoi gustarlo in camera, ai tavoli di Villa a Mare o sulla spiaggia Poseidonia. La cena viene servita alle 20:00 nel ristorante.",
        descriptionEn:
          "The day begins with a sweet and savory buffet breakfast (08:00–09:00). Lunch is a cold meal delivered at 12:30 at Villa a Mare, prepared in thermal baskets marked with your room number: enjoy it in your room, at Villa a Mare tables, or on Poseidonia beach. Dinner is served at 20:00 in the restaurant.",
        image: img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
      },
      {
        title: "Pulizia & Biancheria",
        titleEn: "Cleaning & Linen",
        description:
          "Ci occupiamo quotidianamente della pulizia della camera e del cambio della biancheria (inclusa nel soggiorno) quando necessario. Per la sistemazione in Torre, è disponibile un cambio biancheria extra al costo di € 10,00 a set per persona.",
        descriptionEn:
          "We take care of daily room cleaning and linen changes (included in your stay) whenever necessary. For Tower accommodations, an extra linen change is available at €10.00 per set per person.",
        image: img("lecannelle", "utility-biancheria.jpg"),
      },
      {
        title: "Esplorare il territorio",
        titleEn: "Exploring the area",
        description:
          "Noleggio bici tramite partner esterno nel paese di Talamone: contattare il Sig. Carlo al +39 347 2607983. Per scoprire la Maremma consigliamo maremmaescursioni.it e per visite guidate al Parco Regionale della Maremma: parco-maremma.it o +39 0564 393238.",
        descriptionEn:
          "Bike rental through an external partner in Talamone: contact Mr. Carlo at +39 347 2607983. To explore Maremma we recommend maremmaescursioni.it; for guided tours of the Maremma Regional Park: parco-maremma.it or +39 0564 393238.",
        image: img("lecannelle", "bikes-bike.png"),
      },
    ],
    hours: [
      {
        icon: "🍽️",
        title: "Ristorazione",
        titleEn: "Dining",
        rows: [
          { label: "Colazione", labelEn: "Breakfast", value: "08:00–09:00" },
          { label: "Pranzo (cestino)", labelEn: "Lunch (basket)", value: "Dalle 12:30" },
          { label: "Cena", labelEn: "Dinner", value: "20:00" },
        ],
      },
      {
        icon: "🏨",
        title: "Reception & Check-out",
        titleEn: "Reception & Check-out",
        rows: [
          { label: "Reception", labelEn: "Reception", value: "09:00–19:00" },
          { label: "Check-out", labelEn: "Check-out", value: "Entro le 10:00" },
        ],
      },
    ],
    benefits: [
      { icon: "🍷", title: "Pensione completa", titleEn: "Full board", description: "Colazione, pranzo e cena." },
      { icon: "🧺", title: "Biancheria", titleEn: "Linen", description: "Cambio incluso." },
      { icon: "🧹", title: "Pulizia", titleEn: "Cleaning", description: "Camera quotidiana." },
      { icon: "🏖️", title: "Spiaggia Poseidonia", titleEn: "Poseidonia beach", description: "Pranzo in spiaggia." },
      { icon: "🌳", title: "Parco Maremma", titleEn: "Maremma Park", description: "A pochi chilometri." },
      { icon: "🅿️", title: "Parcheggio", titleEn: "Parking", description: "Disponibile in struttura." },
    ],
    gallery: [
      img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
      img("lecannelle", "bikes-bike.png"),
      img("lecannelle", "excursions-escursioni.png"),
      img("lecannelle", "utility-salute.jpg"),
      img("lecannelle", "utility-biancheria.jpg"),
    ],
    rules: [
      {
        titleIt: "Rispetto degli orari",
        descriptionIt: "Ti chiediamo di rispettare l'orario della cena (20:00) per permettere a tutti di viverla con tranquillità.",
        descriptionEn: "Please respect dinner time (20:00) so everyone can enjoy it in a relaxed atmosphere.",
      },
      {
        titleIt: "Cambio biancheria Torre",
        descriptionIt: "Disponibile a richiesta: € 10,00 a set per persona.",
        descriptionEn: "Available on request: €10.00 per set per person.",
      },
      {
        titleIt: "Farmacie",
        descriptionIt: "Farmacia a Fonteblanda (3 km), Parafarmacia ad Albinia (12 km).",
        descriptionEn: "Pharmacy in Fonteblanda (3 km), parapharmacy in Albinia (12 km).",
      },
      {
        titleIt: "Cure non urgenti",
        descriptionIt: "Numero unico europeo 116117. L'ospedale più vicino è a Orbetello (21 km).",
        descriptionEn: "European number 116117. Nearest hospital in Orbetello (21 km).",
      },
    ],
    contacts: {
      numbers: [
        { label: "Noleggio bici (Carlo)", value: "+39 347 2607983", phone: "+393472607983" },
        { label: "Parco della Maremma", value: "+39 0564 393238", phone: "+390564393238" },
        { label: "Cure non urgenti", value: "116117" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [],
  },

  // ═══════════════════════════════════════════════════
  // LE MARZE
  // ═══════════════════════════════════════════════════
  {
    slug: "lemarze",
    name: "Gitavillage Le Marze",
    brand: "Gitavillage",
    shortName: "Le Marze",
    type: "village",
    location: "Castiglione della Pescaia",
    region: "Maremma Toscana",
    tagline: {
      it: "Pineta, sport e avventura",
      en: "Pine forest, sports and adventure",
    },
    description: {
      it: "Immerso nella pineta e a pochi passi dal mare, il Gitavillage Le Marze è il luogo perfetto per vivere la Toscana in modo autentico. Tra natura, sport e momenti di relax, ogni giornata qui segue il tuo ritmo: puoi rallentare, esplorare o semplicemente goderti il tempo all'aria aperta.",
      en: "Nestled in the pine forest and just a few steps from the sea, Gitavillage Le Marze is the perfect place to experience Tuscany in an authentic way. Between nature, sports and moments of relaxation, every day here follows your own rhythm.",
    },
    badge: "🌲 Castiglione della Pescaia",
    heroImage: img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
    cardImage: img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
    heroSubtitle: {
      it: "Il tuo ritmo, ogni giorno",
      en: "Your own rhythm, every day",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Natura,",
    introTitleEm: "sport",
    introTitleAfter: "e avventura",
    theme: "pine",
    highlights: [
      {
        icon: "🌳",
        title: "Parco Avventura",
        titleEn: "Adventure Park",
        description: "Tra gli alberi, 15:00–20:00. Tariffe agevolate.",
      },
      {
        icon: "🏖️",
        title: "Spiaggia",
        titleEn: "Beach",
        description: "Inclusa per alcune sistemazioni.",
      },
      {
        icon: "🐾",
        title: "Pet friendly",
        titleEn: "Pet friendly",
        description: "Docce dedicate e bau beach a 4 km.",
      },
      {
        icon: "⚽",
        title: "Sport gratis",
        titleEn: "Free sports",
        description: "Calcetto, pallavolo, ping-pong.",
      },
    ],
    services: [
      {
        title: "Bar, Ristorante & Pizzeria",
        titleEn: "Bar, Restaurant & Pizzeria",
        description:
          "Bar Centrale o Bar Piscina aperti dalle 07:30 alle 23:30. Bar Spiaggia attivo 09:00–20:00. Il ristorante & pizzeria accoglie a pranzo (12:30–14:30) e a cena (19:00–22:30), con possibilità di asporto. Prenotazioni Fiorella: 335 6364972. Piatti senza glutine semplici disponibili (cucina non certificata).",
        descriptionEn:
          "Central Bar or Pool Bar open 07:30–23:30. Beach Bar open 09:00–20:00. The restaurant & pizzeria welcomes you for lunch (12:30–14:30) and dinner (19:00–22:30), with takeaway. Bookings with Fiorella: 335 6364972. Simple gluten-free dishes available (kitchen not certified).",
        image: img("lemarze", "utility-acqua-potabile.jpg"),
      },
      {
        title: "Mare, Piscina & Parco Avventura",
        titleEn: "Sea, Pool & Adventure Park",
        description:
          "Spiaggia inclusa per Top Castiglione, Air Dream, Premium, Superior e Pineta; per le altre sistemazioni: € 20/giorno (giu/set), € 25 (lug), € 28 (ago). Piscina 10:00–19:00 (cuffia obbligatoria). Il Parco Avventura tra gli alberi è aperto dalle 15:00 alle 20:00 (fino al 14/09), tariffe agevolate per ospiti da € 8 a € 17.",
        descriptionEn:
          "Beach included for Top Castiglione, Air Dream, Premium, Superior and Pineta; for others: €20/day (Jun/Sep), €25 (Jul), €28 (Aug). Pool 10:00–19:00 (swim cap required). Adventure Park among trees open 15:00–20:00 (until 14/09), special guest rates €8–€17.",
        image: img("lemarze", "adventure-gitav_gitavillage_le-marze_parco-avventu.jpg"),
      },
      {
        title: "Pet Friendly & Animazione",
        titleEn: "Pet Friendly & Entertainment",
        description:
          "Gli amici a 4 zampe sono i benvenuti: docce dedicate nei bagni Bianco e Giallo, bau beach Selene a 4 km. L'animazione accompagna la giornata: mattina in spiaggia, pomeriggio in piscina, sera in anfiteatro. Sport gratis (calcetto, pallavolo, ping-pong). Noleggio bici in struttura € 10/giorno.",
        descriptionEn:
          "Pets are welcome: dedicated showers in the White and Yellow blocks, nearest bau beach is Selene (4 km). Entertainment: morning at the beach, afternoon at the pool, evening at the amphitheatre. Free sports (football, volleyball, table tennis). Bike rental €10/day on site.",
        image: img("lemarze", "pets-gitav_gitavillage_le-marze_pet-friendly_.jpg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Bar & Ristorante",
        titleEn: "Bar & Restaurant",
        rows: [
          { label: "Bar Centrale/Piscina", labelEn: "Main/Pool Bar", value: "07:30–23:30" },
          { label: "Bar Spiaggia", labelEn: "Beach Bar", value: "09:00–20:00" },
          { label: "Pranzo", labelEn: "Lunch", value: "12:30–14:30" },
          { label: "Cena", labelEn: "Dinner", value: "19:00–22:30" },
        ],
      },
      {
        icon: "🏊",
        title: "Piscina & Avventura",
        titleEn: "Pool & Adventure",
        rows: [
          { label: "Piscina", labelEn: "Pool", value: "10:00–19:00" },
          { label: "Parco Avventura", labelEn: "Adventure Park", value: "15:00–20:00" },
          { label: "Reception", labelEn: "Reception", value: "09:00–20:00" },
        ],
      },
      {
        icon: "🏕️",
        title: "Check-out",
        titleEn: "Check-out",
        rows: [
          { label: "Alloggi", labelEn: "Accommodation", value: "Entro le 10:00" },
          { label: "Piazzole", labelEn: "Pitches", value: "Entro le 12:00" },
          { label: "Servizi tutto giorno", labelEn: "Services all day", value: "Disponibili" },
        ],
      },
      {
        icon: "🌙",
        title: "Silenzio",
        titleEn: "Quiet Hours",
        rows: [
          { label: "Pomeriggio", labelEn: "Afternoon", value: "13:00–15:00" },
          { label: "Notte", labelEn: "Night", value: "22:00–07:00" },
          { label: "Guardiania", labelEn: "Night security", value: "+39 333 4800599" },
        ],
      },
    ],
    benefits: [
      { icon: "🌳", title: "Parco Avventura", titleEn: "Adventure Park", description: "Tariffe agevolate." },
      { icon: "🐾", title: "Pet friendly", titleEn: "Pet friendly", description: "Cani benvenuti." },
      { icon: "⚽", title: "Sport gratis", titleEn: "Free sports", description: "Calcetto, volley, ping-pong." },
      { icon: "🎭", title: "Animazione", titleEn: "Entertainment", description: "Mattina, pomeriggio, sera." },
      { icon: "🏊", title: "Piscina", titleEn: "Pool", description: "10:00–19:00." },
      { icon: "🚲", title: "Noleggio bici", titleEn: "Bike rental", description: "€ 10/giorno." },
    ],
    gallery: [
      img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
      img("lemarze", "pool-gitav_gitavillage_le-marze_piscina_2021-.jpeg"),
      img("lemarze", "adventure-gitav_gitavillage_le-marze_parco-avventu.jpg"),
      img("lemarze", "sports-gitav_gitavillage_le-marze_campi-sportiv.jpg"),
      img("lemarze", "pets-gitav_gitavillage_le-marze_pet-friendly_.jpg"),
      img("lemarze", "bikes-noleggio-bici.jpg"),
    ],
    rules: [
      {
        titleIt: "Cuffia obbligatoria",
        descriptionIt: "In piscina è obbligatorio l'uso della cuffia.",
        descriptionEn: "Swim cap mandatory in the pool.",
      },
      {
        titleIt: "Cani",
        descriptionIt: "Sempre al guinzaglio sotto l'ombrellone, non possono fare il bagno in mare.",
        descriptionEn: "Always on a leash under the umbrella, cannot swim in the sea.",
      },
      {
        titleIt: "Biancheria",
        descriptionIt: "Prima fornitura inclusa. Cambi extra € 10/persona per set.",
        descriptionEn: "First supply included. Extra changes €10/person per set.",
      },
      {
        titleIt: "Medico",
        descriptionIt: "Dr. Vaziri su appuntamento (€ 50 a visita).",
        descriptionEn: "Dr. Vaziri by appointment (€50 per visit).",
      },
      {
        titleIt: "Piazzole",
        descriptionIt: "Attacco 6A (max 1kW). Posto auto nel parcheggio (non in piazzola).",
        descriptionEn: "6A connection (max 1kW). Parking in lot (not on pitch).",
      },
    ],
    contacts: {
      numbers: [
        { label: "Ristorante (Fiorella)", value: "335 6364972", phone: "+393356364972" },
        { label: "Guardiania notturna", value: "+39 333 4800599", phone: "+393334800599" },
        { label: "Taxi Claudio", value: "+39 338 7295102", phone: "+393387295102" },
        { label: "PietroGas (bombole)", value: "328 1636024", phone: "+393281636024" },
        { label: "Guardia Medica", value: "116117" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [],
  },

  // ═══════════════════════════════════════════════════
  // OSA RESORT
  // ═══════════════════════════════════════════════════
  {
    slug: "osaresort",
    name: "The Caesar Argentario Osa Resort",
    brand: "The Caesar",
    shortName: "Osa Resort",
    type: "resort",
    location: "Albinia",
    region: "Argentario · Toscana",
    tagline: {
      it: "Relax e comfort tra natura e mare",
      en: "Relax and comfort between nature and sea",
    },
    description: {
      it: "Immerso nella quiete della natura e a pochi passi dal mare, il resort è il luogo ideale per rallentare i ritmi e ritrovare il piacere delle cose semplici. Qui trovi comfort, servizi e momenti di puro relax.",
      en: "Nestled in the quiet of nature and just a short distance from the sea, the resort is the perfect place to slow down and rediscover the pleasure of simple things. Here you'll find comfort, services, and pure relaxation.",
    },
    badge: "✨ Albinia · Argentario",
    heroImage: img("osaresort", "beach-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
    cardImage: img("osaresort", "beach-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
    heroSubtitle: {
      it: "Il piacere delle cose semplici",
      en: "The pleasure of simple things",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Un resort di",
    introTitleEm: "charme",
    introTitleAfter: "sul mare",
    theme: "sand",
    highlights: [
      {
        icon: "🕛",
        title: "Reception 24h",
        titleEn: "24h reception",
        description: "Sempre a tua disposizione.",
      },
      {
        icon: "🚌",
        title: "Navetta spiaggia",
        titleEn: "Beach shuttle",
        description: "Stabilimento IDEAL raggiungibile in navetta.",
      },
      {
        icon: "🍷",
        title: "Ristorante",
        titleEn: "Restaurant",
        description: "À la carte e pizzeria.",
      },
      {
        icon: "🎯",
        title: "Sport & Animazione",
        titleEn: "Sports & Entertainment",
        description: "Calcetto, basket, tennis e spettacoli.",
      },
    ],
    services: [
      {
        title: "Bar, Ristorante & Pizzeria",
        titleEn: "Bar, Restaurant & Pizzeria",
        description:
          "Bar aperto tutti i giorni dalle 07:30 alle 24:00. A pranzo (12:00–14:00) è disponibile una carta dedicata. La sera dalle 20:00 menù à la carte e pizze. Su richiesta prepariamo semplici piatti senza glutine (cucina non certificata).",
        descriptionEn:
          "Bar open daily 07:30–24:00. Lunch (12:00–14:00) has a dedicated menu. Dinner from 20:00 features an à la carte menu and freshly baked pizzas. Simple gluten-free dishes on request (kitchen not certified).",
        image: img("osaresort", "restaurant-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      },
      {
        title: "Spiaggia, Piscina & Navetta",
        titleEn: "Beach, Pool & Shuttle",
        description:
          "Lo stabilimento IDEAL si trova a pochi chilometri in direzione Roma, raggiungibile in auto o con navetta prenotabile in Reception. Convenzione Singita: 20% sui servizi spiaggia e 10% su food & drink mostrando il braccialetto. Piscina aperta 09:00–13:00 e 15:00–19:00 (cuffia obbligatoria).",
        descriptionEn:
          "IDEAL beach club is a few kilometres away (towards Rome), reachable by car or shuttle bookable at Reception. Singita partnership: 20% off beach services and 10% on food & drinks with your wristband. Pool open 09:00–13:00 and 15:00–19:00 (swim cap required).",
        image: img("osaresort", "beach-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      },
      {
        title: "Sport, Animazione & Transfer",
        titleEn: "Sports, Entertainment & Transfer",
        description:
          "Sono disponibili calcetto, basket, tennis, ping pong, bocce e volley (prenotazione in Reception). Durante la settimana laboratori per bambini e spettacoli 3–4 volte a settimana (programma in piscina). Noleggio teli mare € 7/giorno con cauzione € 50. Servizio transfer prenotabile con 48h di anticipo allo 0564 1810005.",
        descriptionEn:
          "Football, basketball, tennis, table tennis, bowls and volleyball available (booking at Reception). Kids' workshops and evening shows 3–4 times per week (programme at the pool). Beach towel rental €7/day with €50 deposit. Transfer service bookable 48h in advance at 0564 1810005.",
        image: img("osaresort", "sports-campi-sportivi_2021-21.jpg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Bar & Ristorante",
        titleEn: "Bar & Restaurant",
        rows: [
          { label: "Bar", labelEn: "Bar", value: "07:30–24:00" },
          { label: "Colazione", labelEn: "Breakfast", value: "07:30–10:30" },
          { label: "Pranzo", labelEn: "Lunch", value: "12:00–14:00" },
          { label: "Cena", labelEn: "Dinner", value: "Dalle 20:00" },
        ],
      },
      {
        icon: "🏊",
        title: "Piscina & Check-out",
        titleEn: "Pool & Check-out",
        rows: [
          { label: "Piscina mattina", labelEn: "Pool morning", value: "09:00–13:00" },
          { label: "Piscina pomeriggio", labelEn: "Pool afternoon", value: "15:00–19:00" },
          { label: "Check-out", labelEn: "Check-out", value: "Entro le 10:00" },
        ],
      },
      {
        icon: "🏨",
        title: "Reception & Cassa",
        titleEn: "Reception & Cash",
        rows: [
          { label: "Reception", labelEn: "Reception", value: "24h" },
          { label: "Cassa", labelEn: "Cash desk", value: "08:30–22:30" },
          { label: "Transfer (48h)", labelEn: "Transfer (48h)", value: "0564 1810005" },
        ],
      },
      {
        icon: "🚌",
        title: "Navetta spiaggia",
        titleEn: "Beach shuttle",
        rows: [
          { label: "Giu/Set andata", labelEn: "Jun/Sep outbound", value: "09:20-10:50" },
          { label: "Giu/Set rientro", labelEn: "Jun/Sep return", value: "12:30-17:30" },
          { label: "Lug/Ago andata", labelEn: "Jul/Aug outbound", value: "09:20-11:20" },
          { label: "Lug/Ago rientro", labelEn: "Jul/Aug return", value: "12:30-17:30" },
        ],
      },
    ],
    benefits: [
      { icon: "🕛", title: "Reception 24h", titleEn: "24h reception", description: "Sempre attiva." },
      { icon: "🚌", title: "Navetta", titleEn: "Shuttle", description: "Per lo stabilimento IDEAL." },
      { icon: "🎯", title: "Sport", titleEn: "Sports", description: "Calcetto, basket, tennis, volley." },
      { icon: "🎭", title: "Animazione", titleEn: "Entertainment", description: "Laboratori e spettacoli." },
      { icon: "🏊", title: "Piscina", titleEn: "Pool", description: "Due fasce orarie." },
      { icon: "🌐", title: "Wi-Fi", titleEn: "Wi-Fi", description: "Nelle aree comuni." },
    ],
    gallery: [
      img("osaresort", "beach-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      img("osaresort", "pool-gitav_the-caesar-hotels_argentario-osa-r.jpeg"),
      img("osaresort", "restaurant-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      img("osaresort", "sports-campi-sportivi_2021-21.jpg"),
      img("osaresort", "entertainment-animazione-serale_varie-28.jpeg"),
      img("osaresort", "utility-navetta.jpg"),
    ],
    rules: [
      {
        titleIt: "Cuffia obbligatoria",
        descriptionIt: "L'uso della cuffia in piscina è obbligatorio.",
        descriptionEn: "Swim cap is mandatory in the pool.",
      },
      {
        titleIt: "Pulizia appartamenti",
        descriptionIt: "Inclusa la pulizia finale e la prima fornitura di biancheria. Cambio extra € 10/persona. Riassetto quotidiano su disponibilità € 30.",
        descriptionEn: "Final cleaning and first linen set included. Extra linen €10/person. Daily tidying (subject to availability) €30.",
      },
      {
        titleIt: "Noleggio teli mare",
        descriptionIt: "€ 7/giorno con cauzione € 50.",
        descriptionEn: "€7/day with €50 deposit.",
      },
      {
        titleIt: "Auto elettriche",
        descriptionIt: "Ricariche disponibili a Fonteblanda o Albinia.",
        descriptionEn: "Charging stations in Fonteblanda or Albinia.",
      },
      {
        titleIt: "Lavanderia",
        descriptionIt: "Servizio self-service ad Albinia.",
        descriptionEn: "Self-service laundry in Albinia.",
      },
    ],
    contacts: {
      numbers: [
        { label: "Transfer", value: "0564 1810005", phone: "+3905641810005" },
        { label: "Guardia Medica", value: "0564 869018/19", phone: "+390564869018" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [],
  },

  // ═══════════════════════════════════════════════════
  // TALAMONE
  // ═══════════════════════════════════════════════════
  {
    slug: "talamone",
    name: "Gitavillage Talamone",
    brand: "Gitavillage",
    shortName: "Talamone",
    type: "village",
    location: "Talamone",
    region: "Maremma Toscana",
    tagline: {
      it: "Natura, mare e sport acquatici",
      en: "Nature, sea and water sports",
    },
    description: {
      it: "Qui la natura incontra il mare e le giornate scorrono tra relax, sport e piccoli momenti da ricordare. Che tu sia in famiglia, con gli amici o in coppia, troverai il tuo ritmo tra spiaggia, attività e angoli di tranquillità.",
      en: "Here, nature meets the sea and your days flow between relaxation, activities and little moments to remember. Whether you're travelling with family, friends or as a couple, you'll find your own rhythm between the beach and experiences.",
    },
    badge: "⛵ Talamone · Maremma",
    heroImage: img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
    cardImage: img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
    heroSubtitle: {
      it: "Natura, mare e sport",
      en: "Nature, sea and sports",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Dove natura e",
    introTitleEm: "mare",
    introTitleAfter: "si incontrano",
    theme: "ocean",
    highlights: [
      {
        icon: "🏄",
        title: "Kite & Windsurf",
        titleEn: "Kite & Windsurf",
        description: "10% di sconto su corsi e noleggi TWKC.",
      },
      {
        icon: "🐾",
        title: "Dog friendly",
        titleEn: "Dog friendly",
        description: "Bau beach e area agility.",
      },
      {
        icon: "🏊",
        title: "Due piscine",
        titleEn: "Two pools",
        description: "Inferiore 09:00–19:00, superiore con pausa.",
      },
      {
        icon: "🏖️",
        title: "Spiaggia",
        titleEn: "Beach",
        description: "Servizio incluso per alloggi village.",
      },
    ],
    services: [
      {
        title: "Bar, Ristorante & Chiringuito",
        titleEn: "Bar, Restaurant & Chiringuito",
        description:
          "Bar principale aperto 07:30–00:00, Chiringuito 08:30–23:00. Il ristorante Gitavillage Talamone ti aspetta ogni giorno: pranzo 12:30–14:30 e cena 19:30–22:00, con servizio da asporto. Piatti senza glutine semplici (cucina non certificata). Minimarket 08:00–13:00 / 16:00–19:00.",
        descriptionEn:
          "Main bar open 07:30–00:00, Chiringuito 08:30–23:00. Gitavillage Talamone restaurant open daily: lunch 12:30–14:30 and dinner 19:30–22:00, with takeaway service. Simple gluten-free dishes (kitchen not certified). Minimarket 08:00–13:00 / 16:00–19:00.",
        image: img("talamone", "restaurant-gitav_gitavillage_talamone_barbecue-2.jpg"),
      },
      {
        title: "Spiaggia, Piscine & Water Sports",
        titleEn: "Beach, Pools & Water Sports",
        description:
          "Per alloggi village (villini, lodge, glamping) servizio spiaggia (1 ombrellone + 2 lettini) già incluso. Per piazzole noleggio a € 15 (giu/lug/set) o € 20 (ago). Convenzione Singita 20% spiaggia, 10% food & drink. Piscina inferiore 09:00–19:00, superiore con pausa 13:00–15:00 (cuffia non obbligatoria). Kitesurf/windsurf TWKC con sconto 10%.",
        descriptionEn:
          "For village stays (cottages, lodges, glamping) beach service (1 umbrella + 2 sunbeds) already included. For pitches rental at €15 (Jun/Jul/Sep) or €20 (Aug). Singita partnership 20% beach, 10% food & drink. Lower pool 09:00–19:00, upper pool closed 13:00–15:00 (no cap required). TWKC kite/windsurf with 10% discount.",
        image: img("talamone", "watersports-gitav_gitavillage_talamone_canoa_2021-12.jpg"),
      },
      {
        title: "Sport, Animazione & Dog Friendly",
        titleEn: "Sports, Entertainment & Dog Friendly",
        description:
          "Campi sportivi aperti 08:00–22:00 (tennis su prenotazione). Animazione con laboratori pomeridiani e spettacoli serali 3–4 volte a settimana: mattina in spiaggia, pomeriggio in piscina, sera in anfiteatro. Il tuo cane è il benvenuto: bau beach, area agility (non in piscina, sempre al guinzaglio).",
        descriptionEn:
          "Sports fields open 08:00–22:00 (tennis on reservation). Animation with afternoon workshops and evening shows 3–4 times a week: morning at the beach, afternoon at the pool, evening at the amphitheatre. Your dog is welcome: dog beach, agility area (not in the pool, always on a leash).",
        image: img("talamone", "pets-gitav_gitavillage_talamone_pet_2022-53.jpg"),
      },
    ],
    hours: [
      {
        icon: "☕",
        title: "Bar & Ristorante",
        titleEn: "Bar & Restaurant",
        rows: [
          { label: "Bar principale", labelEn: "Main bar", value: "07:30–00:00" },
          { label: "Chiringuito", labelEn: "Chiringuito", value: "08:30–23:00" },
          { label: "Pranzo", labelEn: "Lunch", value: "12:30–14:30" },
          { label: "Cena", labelEn: "Dinner", value: "19:30–22:00" },
        ],
      },
      {
        icon: "🏊",
        title: "Piscine & Sport",
        titleEn: "Pools & Sports",
        rows: [
          { label: "Piscina inferiore", labelEn: "Lower pool", value: "09:00–19:00" },
          { label: "Piscina superiore", labelEn: "Upper pool", value: "09:00–13:00 / 15:00–19:00" },
          { label: "Campi sportivi", labelEn: "Sports fields", value: "08:00–22:00" },
        ],
      },
      {
        icon: "🏕️",
        title: "Soggiorno",
        titleEn: "Stay",
        rows: [
          { label: "Alloggi check-out", labelEn: "Accommodation check-out", value: "Entro le 10:00" },
          { label: "Piazzole check-out", labelEn: "Pitches check-out", value: "Entro le 12:00" },
          { label: "Reception", labelEn: "Reception", value: "08:30–20:30" },
          { label: "Cassa", labelEn: "Cash desk", value: "08:30–19:30" },
        ],
      },
      {
        icon: "🌙",
        title: "Silenzio",
        titleEn: "Quiet Hours",
        rows: [
          { label: "Notte", labelEn: "Night", value: "00:00–08:00" },
          { label: "Minimarket", labelEn: "Minimarket", value: "08:00–13:00 / 16:00–19:00" },
        ],
      },
    ],
    benefits: [
      { icon: "🏄", title: "Kite/Windsurf", titleEn: "Kite/Windsurf", description: "10% sconto TWKC." },
      { icon: "🐾", title: "Dog friendly", titleEn: "Dog friendly", description: "Bau beach e agility." },
      { icon: "🚣", title: "Canoe & Pedalò", titleEn: "Canoes & Pedal Boats", description: "Gratis 30 min." },
      { icon: "🎭", title: "Animazione", titleEn: "Entertainment", description: "Laboratori e spettacoli." },
      { icon: "⚽", title: "Campi sportivi", titleEn: "Sports fields", description: "08:00–22:00." },
      { icon: "🌐", title: "Wi-Fi", titleEn: "Wi-Fi", description: "Nelle aree comuni." },
    ],
    gallery: [
      img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
      img("talamone", "pool-gitav_gitavillage_talamone_piscina_2021-.jpg"),
      img("talamone", "watersports-gitav_gitavillage_talamone_canoa_2021-12.jpg"),
      img("talamone", "sports-gitav_gitavillage_talamone_water-sport_2.png"),
      img("talamone", "entertainment-gitavillage-talamone_animazione_spettaco.jpg"),
      img("talamone", "pets-gitav_gitavillage_talamone_pet_2022-53.jpg"),
      img("talamone", "bikes-gitavillage-talamone_bici-2.png"),
    ],
    rules: [
      {
        titleIt: "Cani",
        descriptionIt: "Sempre al guinzaglio, usa le aree dedicate. Non ammessi in piscina.",
        descriptionEn: "Always on a leash, use dedicated areas. Not allowed in the pool.",
      },
      {
        titleIt: "Pesca",
        descriptionIt: "Vietata entro 200m dalla riva 08:30–19:30 durante la stagione balneare.",
        descriptionEn: "Not allowed within 200m from shore 08:30–19:30 during bathing season.",
      },
      {
        titleIt: "Circolazione",
        descriptionIt: "Vietata dalle 00:00 alle 08:00. Carico/scarico ai villini fino alle 00:00.",
        descriptionEn: "No vehicles 00:00–08:00. Loading/unloading at cottages until 00:00.",
      },
      {
        titleIt: "Auto elettriche",
        descriptionIt: "Colonnina nel parcheggio all'ingresso, € 3/ora.",
        descriptionEn: "Charging station at entrance parking, €3/hour.",
      },
      {
        titleIt: "Acqua potabile",
        descriptionIt: "Distributore naturale/frizzante, € 0,20/litro.",
        descriptionEn: "Still/sparkling water dispenser, €0.20/litre.",
      },
    ],
    contacts: {
      numbers: [
        { label: "Water Sports TWKC", value: "329 2426342", phone: "+393292426342" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "VTC Talamone", value: "+39 347 2607983", phone: "+393472607983" },
        { label: "Dr. Barrasso", value: "339 8751224", phone: "+393398751224" },
        { label: "Guardia Medica", value: "116117" },
        { label: "Emergenze", value: "112" },
      ],
    },
    pdfs: [],
  },
];

export const getHotelBySlug = (slug: string): Hotel | undefined =>
  hotels.find((h) => h.slug === slug);

export const getAllHotels = (): Hotel[] => hotels;
