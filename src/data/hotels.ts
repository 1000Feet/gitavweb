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
      it: "Benvenuti al Gitavillage Il Gabbiano",
      en: "Welcome to Gitavillage Il Gabbiano",
    },
    description: {
      it: "Al Gitavillage Il Gabbiano la vacanza scorre con semplicità: natura, spazi aperti e tutto quello che serve per stare bene insieme.\nChe tu sia qui per rilassarti, giocare con i bambini o goderti il mare, sei nel posto giusto.\n\nEcco tutto quello che c'è da sapere per vivere al meglio il tuo soggiorno in libertà...e senza pensieri.",
      en: "At Gitavillage Il Gabbiano, holidays flow simply: nature, open spaces, and everything you need to feel good together.\nWhether you're here to relax, play with your children, or enjoy the sea, you're in the right place.\n\nHere's everything you need to know to make the most of your stay... in total freedom and without worries.",
    },
    badge: "🏕️ Orbetello · Maremma Toscana",
    heroImage: img("ilgabbiano", "beach-gitav_gitavillage_gabbiano_spiaggia_2021.jpg"),
    cardImage: img("ilgabbiano", "beach-gitav_gitavillage_gabbiano_spiaggia_2021.jpg"),
    heroSubtitle: {
      it: "Benvenuti al Gitavillage Il Gabbiano",
      en: "Welcome to Gitavillage Il Gabbiano",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Gitavillage",
    introTitleEm: "Il Gabbiano",
    theme: "ocean",
    highlights: [],
    services: [
      {
        title: "🕒 Gli Orari",
        titleEn: "Hours & Info",
        description:
          "Il buongiorno parte da qui (Bar)\nPer iniziare la giornata con calma (e magari un buon caffè), il bar ti aspetta dalle 08:00 alle 23:00.\n\nA tavola, quando vuoi tu (Ristorante & Pizzeria)\nPranzo dalle 12:30 alle 14:00 e cena dalle 19:30 alle 23:00.\nLa sera puoi gustare anche un'ottima pizza.\nNota: disponibili piatti senza glutine semplici (cucina non certificata).\n\nIl momento dei saluti (Check-out)\nLa sistemazione va liberata entro le ore 10:00, ma puoi continuare a goderti il villaggio fino alle 12:00.\n\nOrario del Silenzio: Dalle 13:00 alle 15:30 e dalle 19:30 alle 08:30 il villaggio si rilassa: in queste fasce non è possibile accedere, montare o spostare mezzi.\n\nUfficio Cassa: A tua disposizione dalle 09:00 alle 12:30 e dalle 15:00 alle 18:00.\n\nOrari Reception: la reception è aperta dalle 08:00 alle 20:00.",
        descriptionEn:
          "Start your day here (Bar)\nTo begin your day at your own pace (and maybe with a good coffee), the bar is open from 08:00 to 23:00.\n\nDining, whenever you like (Restaurant & Pizzeria)\nLunch from 12:30 to 14:00 and dinner from 19:30 to 23:00.\nIn the evening, you can also enjoy delicious pizza.\nNote: simple gluten-free options are available (non-certified kitchen).\n\nTime to say goodbye (Check-out)\nAccommodation must be vacated by 10:00, but you can continue enjoying the village until 12:00.\n\nQuiet Hours: From 13:00 to 15:30 and from 19:30 to 08:30 the village slows down: during these times it is not allowed to enter, set up, or move vehicles.\n\nCash Desk: Available from 09:00 to 12:30 and from 15:00 to 18:00.\n\nReception Hours: The reception is open from 08:00 to 20:00.",
        image: img("ilgabbiano", "market-minimarket.jpg"),
      },
      {
        title: "🌊 Gusto & Relax (Servizi & Spiaggia)",
        titleEn: "Food & Relax (Services & Beach)",
        description:
          "Spiaggia: Puoi prenotare il tuo posto (previa verifica della disponibilità all'atto della prenotazione):\n€ 20 al giorno (giugno, luglio, settembre)\n€ 25 ad agosto\n(1 ombrellone + 2 lettini).\n\nConvenzione SINGITA: Con il braccialetto Gitav hai:\n20% di sconto sui servizi spiaggia\n10% su food & drink\n\nLa Piscina è aperta tutti i giorni dalle 09:00 alle 19:00.\nIl giovedì chiude alle 18:00 per preparare la grigliata serale.\nLa cuffia è consigliata, ma non obbligatoria.\n\nIl Minimarket è aperto tutti i giorni dalle 08:00 alle 13:00 e dalle 16:00 alle 19:00.\n\nCanoe & Pedalò: Puoi prenotare gratuitamente canoe e pedalò per 30 min.",
        descriptionEn:
          "Beach: You can reserve your spot (subject to availability at the time of booking):\n€ 20 per day (June, July, September)\n€ 25 in August\n(1 umbrella + 2 sunbeds)\n\nSINGITA Partnership: With your Gitav bracelet you get:\n20% discount on beach services\n10% on food & drinks\n\nThe swimming pool is open every day from 09:00 to 19:00.\nOn Thursdays it closes at 18:00 for the evening BBQ setup.\nSwimming caps are recommended but not mandatory.\n\nThe minimarket is open every day from 08:00 to 13:00 and from 16:00 to 19:00.\n\nCanoes & Paddle Boats: You can book canoes and paddle boats free of charge for 30 minutes.",
        image: img("ilgabbiano", "pool-gitav_gitavillage-il-gabbiano_piscina-20.jpeg"),
      },
      {
        title: "🚲 Esplorare e Divertirsi (Sport & Attività)",
        titleEn: "Explore & Have Fun (Sports & Activities)",
        description:
          "In Movimento:\nVuoi scoprire i dintorni?\nPuoi noleggiare bici con i partner esterni:\nMaremma Escursioni [+39 3713837052] o VTC Talamone [+39 347 2607983].\n\nEscursioni: Puoi prenotare una minicrociera all'isola del Giglio, una gita alle cascate di Saturnia o una passeggiata in carrozza nel Parco della Maremma e tante altre esperienze, chiamando il numero +39 371 3837052\n\nSport & Divertimento:\n• Campi Sportivi & Ping-Pong: Campo da calcetto in erba sintetica e tavoli da ping-pong sono disponibili prenotandoli in Reception. Il materiale si ritira e si riconsegna direttamente lì.\n• Animazione: Attività sportive, giochi e spettacoli serali per tutta la famiglia. Dai un'occhiata al programma in bacheca!\n• Il parco giochi ombreggiato è perfetto per scatenarsi in totale sicurezza!\n\nConnessione Wi-Fi: Disponibile nelle aree comuni (piscina, reception, ristorante e bar).\nRegistrati con email, Google o Facebook per ricevere il PIN.",
        descriptionEn:
          "On the Move:\nWould you like to explore the surroundings? You can rent bikes with our external partners:\nMaremma Escursioni [+39 3713837052] or VTC Talamone [+39 347 2607983].\n\nExcursions: You can book a mini cruise to Giglio Island, a trip to the Saturnia waterfalls, or a carriage ride in the Maremma Park and many other experiences by calling +39 371 3837052.\n\nSports & Entertainment:\n• Sports fields & Table Tennis: A five-a-side football field with synthetic grass and table tennis tables are available by booking at Reception. Equipment can be collected and returned there.\n• Entertainment: Sports activities, games, and evening shows for the whole family. Check the notice board for the full program!\n• The shaded playground is perfect for having fun in total safety!\n\nWi-Fi Connection: Available in common areas (pool, reception, restaurant, and bar).\nRegister via email, Google, or Facebook to receive your PIN.",
        image: img("ilgabbiano", "sports-gitav_gitavillage_gabbiano_sport_2021-25.jpg"),
      },
      {
        title: "🧺 Utilità per la Piazzola & Emergenze",
        titleEn: "Pitch Utilities & Emergencies",
        description:
          "Servizi Tecnici:\n• Energia: ogni piazzola dispone di un attacco luce da 5A (max 1 kw) con spina europea (è consentito 1 solo attacco per piazzola).\n• Acqua: Docce calde sono incluse e funzionano tramite chip elettronico. Acqua potabile disponibile (consigliata solo per cucinare).\n• Barbecue: l'area comune è a disposizione per le tue grigliate.\n\nL'Area Lavanderia è situata all'ingresso del blocco bagni (zona barbecue).\nLavatrici e asciugatrici a moneta: € 5 a ciclo (monete da 1 o 2 euro), il detersivo è incluso nel lavaggio.\n\nComfort in alloggio\n• Acqua potabile disponibile in tutta la struttura\n• Acqua calda solo in bagno\n• Piastra di cottura: [SCARICA LE ISTRUZIONI PDF]\n\nVarie:\n• L'ATM si trova subito dopo l'uscita dal villaggio, sulla destra.\n• L'auto non può essere parcheggiata in piazzola.\n\nSicurezza: Numero unico emergenze 112 | Guardia Medica: 0564 869018/19.\n\nAmbiente: l'isola ecologica per la raccolta differenziata si trova all'interno del parcheggio.\n\nPer orientarti al meglio, qui trovi la mappa del villaggio [FILE PDF]",
        descriptionEn:
          "Technical Services:\n• Electricity: Each pitch is equipped with a 5A power connection (max 1 kW) with a European plug (only 1 connection per pitch is allowed).\n• Water: Hot showers are included and operate via electronic chip. Drinking water is available (recommended for cooking only).\n• Barbecue: Shared area available for your BBQs.\n\nThe laundry area is located at the entrance of the restroom block (BBQ area).\nCoin-operated washing machines and dryers: € 5 per cycle (1 or 2 euro coins), detergent included.\n\nIn your accommodation:\n• Drinking water available throughout the property\n• Hot water available in the bathroom only\n• Cooking hob: [DOWNLOAD PDF INSTRUCTIONS]\n\nGeneral Info:\n• The ATM is located just outside the village exit, on the right.\n• Cars cannot be parked on the pitch.\n\nSafety: Emergency number 112 | Medical Service: +39 0564 869018/19.\n\nEnvironment: The recycling area is located inside the parking area.",
        image: img("ilgabbiano", "utility-free-wifi.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("ilgabbiano", "beach-gitav_gitavillage_gabbiano_spiaggia_2021.jpg"),
      img("ilgabbiano", "pool-gitav_gitavillage-il-gabbiano_piscina-20.jpeg"),
      img("ilgabbiano", "entertainment-gitav_gitavillage_gabbiano_animazione_20.jpg"),
      img("ilgabbiano", "sports-gitav_gitavillage_gabbiano_sport_2021-25.jpg"),
      img("ilgabbiano", "playground-gitav_gitavillage_gabbiano_-parco-giochi.jpg"),
      img("ilgabbiano", "watersports-gitavillage-argentario_canoe-e-pedalo-20.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "0564 869018/19", phone: "+390564869018" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "VTC Talamone", value: "+39 347 2607983", phone: "+393472607983" },
      ],
    },
    pdfs: [
      {
        label: "Istruzioni piano cottura",
        labelEn: "Cooking hob instructions",
        url: pdf("ilgabbiano", "istruzioni-piano-cottura-il-gabbiano.pdf"),
      },
    ],
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
      it: "Benvenuti al Gitavillage Argentario",
      en: "Welcome to Gitavillage Argentario",
    },
    description: {
      it: "Qui la vacanza prende il suo ritmo, tra il mare a pochi passi e la tranquillità della pineta. Al Gitavillage Argentario trovi spazi pensati per vivere ogni momento con semplicità: dal relax in spiaggia alle giornate in piscina, fino ai servizi che rendono tutto più facile, per grandi e piccoli.\n\nEcco tutto quello che ti serve sapere per vivere al meglio il tuo soggiorno tra mare e pineta.",
      en: "Here, your holiday finds its own rhythm, between the sea just a few steps away and the peaceful shade of the pine forest. At Gitavillage Argentario, you'll find spaces designed to enjoy every moment with ease: from relaxing on the beach to spending your day by the pool, with all the services you need to make everything simple, for both adults and children.\n\nEverything you need to know to make the most of your stay, between the sea and the pine forest.",
    },
    badge: "🌲 Albinia · Costa d'Argento",
    heroImage: img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
    cardImage: img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
    heroSubtitle: {
      it: "Benvenuti al Gitavillage Argentario",
      en: "Welcome to Gitavillage Argentario",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Gitavillage",
    introTitleEm: "Argentario",
    theme: "pine",
    highlights: [],
    services: [
      {
        title: "🕒 Gli Orari",
        titleEn: "Hours & Info",
        description: "Iniziamo con il piede giusto: la colazione viene servita dalle 07:30 alle 10:30 in entrambi i bar principali. Sono disponibili anche prodotti senza glutine semplici (cucina non certificata).\n\nCheck-out:\nSe soggiorni in una sistemazione del villaggio, ti chiediamo di liberare l'alloggio e il parcheggio entro le ore 10:00. Puoi continuare a usufruire dei servizi della struttura fino alle ore 12:00.\nse viaggi con camper o roulotte, ti chiediamo di lasciare piazzola e parcheggio entro le ore 10:00;\nse soggiorni in tenda, il check-out è sempre alle 10:00, ma puoi continuare a usufruire dei servizi (piscina, parcheggio, canoe) fino alle 12:00.\n\nOrario del Silenzio: Per il relax di tutti, è importante rispettare l'orario del silenzio, dalle 12:30 alle 15:30 e dalle 19:30 alle 08:30. In queste fasce non è consentito accedere al campeggio, montare o smontare attrezzature o spostare i mezzi.\n\nLa Reception è aperta tutti i giorni dalle 08:00 alle 20:00\nLa cassa è aperta tutti i giorni dalle 09:00 alle 12:00 e dalle 16:00 alle 19:00",
        descriptionEn: "Let's start the day right: breakfast is served from 07:30 to 10:30 at both main bars. Simple gluten-free products are also available (non-certified kitchen).\n\nCheck-out:\nIf you are staying in accommodation within the resort, we kindly ask you to vacate your accommodation and parking space by 10:00. You can continue to enjoy the village facilities until 12:00.\nif you are travelling with a camper or caravan, we kindly ask you to leave your pitch and parking space by 10:00;\nif you are staying in a tent, check-out is at 10:00, but you can continue to use the facilities (pool, parking, canoes) until 12:00.\n\nQuiet hours: for everyone's relaxation, it is important to respect quiet hours, from 12:30 to 15:30 and from 19:30 to 08:30. During these times, access to the campsite, setting up or taking down equipment, and moving vehicles are not allowed.\n\nReception is open daily from 08:00 to 20:00\nThe ticket office is open daily from 09:00 to 12:00 and from 16:00 to 19:00",
        image: img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
      },
      {
        title: "🌊 Gusto & Relax (Food & Drinks)",
        titleEn: "Food & Relax (Dining & Drinks)",
        description: "Tra campeggio, villaggio e spiaggia hai diverse opzioni per mangiare e rilassarti durante la giornata.\n\nZona Villaggio:\nIl ristorante \"Le Piscine\" ti aspetta a pranzo (12:30–15:00) e a cena (19:30–23:30), mentre il bar è aperto dalle 07:30 fino a mezzanotte.\n\nZona Camping & Spiaggia:\nIl ristorante \"Al Mare Da Angela\" è aperto a pranzo (12:00–14:30) e a cena (18:30–22:30). Il bar è aperto dalle 07:15.\nSulla spiaggia trovi anche La Rotonda, con bar aperto dalle 07:30 alle 22:30 e servizio ristorante a pranzo (12:30–14:30) e cena (19:30–22:30).\n\nLa spiaggia attrezzata è attiva dalle 09:00 alle 19:00. Se il servizio non è incluso, puoi verificare la disponibilità direttamente con il bagnino (€ 20,00 al giorno per 1 ombrellone + 2 lettini).\n\nGrazie alla convenzione con Singita, hai anche uno sconto del 20% sulla spiaggia e del 10% su food & drink, mostrando il braccialetto.",
        descriptionEn: "Between the campsite, village and beach, you'll find several options to eat and relax throughout the day.\n\nVillage Area:\nThe \"Le Piscine\" restaurant is open for lunch (12:30–15:00) and dinner (19:30–23:30), while the bar is open from 07:30 until midnight.\n\nCamping & Beach Area:\nThe \"Al Mare Da Angela\" restaurant is open for lunch (12:00–14:30) and dinner (18:30–22:30), with the bar opening from 07:15.\nAt the beach, you'll also find \"La Rotonda\" bar & restaurant:\nthe bar is open from 07:30 to 22:30, while the restaurant serves lunch (12:30–14:30) and dinner (19:30–22:30).\n\nThe equipped beach is available from 09:00 to 19:00. If the service is not included, you can check availability directly with the lifeguard (€20.00 per day for 1 umbrella + 2 sunbeds).\n\nThanks to the partnership with Singita, you can also enjoy a 20% discount on beach services and 10% on food & drinks by showing your bracelet.",
        image: img("argentario", "restaurant-gitav_gitavillage-_argentario_bar-la-rot.jpg"),
      },
      {
        title: "🚲 Esplorare e Divertirsi (Servizi & Sport)",
        titleEn: "Explore & Have Fun (Services & Sports)",
        description: "In Movimento:\nNoleggio Bici: Ci appoggiamo a partner esterni. Maremma Escursioni [+39 3713837052] o VTC Talamone (+39 347 2607983).\nCanoe & Pedalò: puoi utilizzare canoe e pedalò, gratuitamente e su prenotazione (durata 30 minuti).\nEscursioni: Puoi prenotare una minicrociera all'isola del Giglio, una gita alle cascate di Saturnia o una passeggiata in carrozza nel Parco della Maremma e tante altre esperienze, chiamando il numero +39 371 3837052.\n\nSport & Divertimento:\nCampi Sportivi: All'interno del villaggio trovi campi di calcetto, pallavolo e tavolo da ping-pong. Puoi richiedere attrezzatura e utilizzo direttamente allo staff dell'animazione.\nAnimazione: Attività sportive durante il giorno e spettacoli serali. Puoi consultare il programma in bacheca.\nPiscina: Aperta tutti i giorni dalle 09:00 alle 19:00. È obbligatorio l'uso della cuffia.",
        descriptionEn: "Getting around:\nBike rental: we work with external partners. Maremma Escursioni (+39 371 3837052) or VTC Talamone (+39 347 2607983).\nCanoes & pedal boats: free use upon reservation (30 minutes).\nExcursions: you can book a mini cruise to Giglio Island, a trip to the Saturnia hot springs or a carriage ride in the Maremma Park, along with many other experiences, by calling +39 371 3837052.\n\nSports & Entertainment:\nSports courts: within the village you'll find football, volleyball and table tennis courts. Equipment and access can be requested directly from the animation staff.\nEntertainment: sports activities during the day and evening shows. You can check the program on the notice board.\nSwimming pool: open daily from 09:00 to 19:00. A swimming cap is required.",
        image: img("argentario", "sports-gitav_gitavillage-argentario_impianti-sp.jpg"),
      },
      {
        title: "🧺 Utilità & Emergenze",
        titleEn: "Utilities & Emergencies",
        description: "Biancheria: Se non inclusa nella tua prenotazione, puoi noleggiarla a € 10,00 a persona per set. Contattaci allo 0564 1838523 (int. 3).\n\nIl minimarket è aperto:\nMaggio e settembre: 08:00–13:00 / 17:00–20:00\nGiugno, Luglio e Agosto: 08:00–14:00 / 16:30–20:00\nTel: 0564 870012\n\nComfort in alloggio:\nAcqua potabile disponibile in tutta la struttura\nAcqua calda solo in bagno\nPiastra di cottura: [SCARICA LE ISTRUZIONI PDF]\n\nVarie:\ntrovi un ATM accanto alla Reception.\nI Tabacchi sono disponibili presso il Bar \"Al Mare Da Angela\" o Bar \"La Rotonda\".\nAuto Elettriche: le colonnine di ricarica più vicine si trovano ad Albinia.\nLavanderia: non è presente all'interno del villaggio, ma puoi utilizzare quelle self-service ad Albinia. In villaggio sono presenti delle lavatrici e asciugatrici a moneta nei blocchi dei bagni.\nSicurezza: Per qualsiasi necessità, il numero unico di emergenza è il 112, mentre la Guardia Medica risponde allo 0564 869018/19.\n\nPer il rispetto dell'ambiente, sono presenti due isole ecologiche nel parcheggio. Gli ospiti giornalieri non sono ammessi.\n\nConnessione Wi-Fi: Puoi restare connesso nelle aree comuni (piscine, reception, ristoranti e bar).\nAccesso: Registrati tramite email, Google o Facebook per ricevere il PIN.\n\nPesca: è consentita solo dalle 19:00 alle 07:00 (fuori orario balneazione).\n\nPer orientarti al meglio, qui trovi la mappa del villaggio [FILE PDF]\n\nDettagli area camping:\nEnergia: ogni piazzola dispone di un attacco luce da 6A (max 1 kw) con spina europea (è consentito 1 solo attacco per piazzola).\nLe docce calde funzionano tramite chip elettronico (attenzione: in caso di smarrimento è prevista una penale di € 20,00).\nAcqua & Camper: l'acqua potabile è disponibile presso le fontane nelle aree toilette (carico con tanica). In struttura è disponibile il Camper Service.\nBarbecue & Frigo: è consentito l'uso del barbecue nell'area apposita (non in piazzola). mentre è disponibile un frigo comune per siberini (nel settore vecchio).\nIl posto auto è disponibile solo nell'area di fronte alla reception (non in piazzola).",
        descriptionEn: "Linen: if not included, you can rent it for €10.00 per person per set. Contact us at +39 0564 1838523 (ext. 3).\n\nMinimarket:\nMay/September: 08:00–13:00 / 17:00–20:00\nJune/July/August: 08:00–14:00 / 16:30–20:00\nFor further information, please call +39 0564 870012.\n\nIn your accommodation:\nDrinking water available throughout the property\nHot water available in the bathroom only\nCooking hob: [DOWNLOAD PDF INSTRUCTIONS]\n\nGeneral info:\nyou'll find an ATM next to the reception.\nTobacco products are available at \"Al Mare Da Angela\" bar or \"La Rotonda\" bar.\nElectric cars: the nearest charging stations are in Albinia.\nLaundry: not available inside the village, but you can use self-service laundries in Albinia. Coin-operated washing machines are also available in the bathroom blocks within the village.\nSafety: For any need, the emergency number is 112, while the medical service is available at +39 0564 869018/19.\n\nTo respect the environment, two recycling areas are located in the parking area. Daily guests are not allowed.\n\nWi-Fi connection: you can stay connected in the common areas (pools, reception, restaurants and bars).\nAccess: register via email, Google or Facebook to receive your PIN.\n\nFishing: allowed only from 19:00 to 07:00 (outside swimming hours).\n\nTo help you find your way around, here is a map of the village [PDF FILE]\n\nPitch Utilities & Emergencies:\nPower: each pitch is equipped with a 6A electricity connection (max 1 kW) with a European plug (only one connection per pitch is allowed).\nHot Showers: operate with an electronic chip (please note: in case of loss, a €20.00 penalty will be charged).\nWater & Camper: potable water is available at the fountains in the restroom areas (tank filling). Camper service is available on-site.\nBBQ & Fridge: barbecue use is allowed in the designated area (not on the pitch), while a shared fridge is available for ice packs only (old sector).\nParking is available only in the area in front of reception (not on the pitch).",
        image: img("argentario", "utility-pesca.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("argentario", "beach-gitav_gitavillage_argentario_spiaggia_20.png"),
      img("argentario", "pool-gitav_gitavillage_argentario_piscine_202.jpg"),
      img("argentario", "watersports-gitavillage-argentario_canoe-e-pedalo-20.jpg"),
      img("argentario", "entertainment-gitav_gitavillage_argentario_animazione_.jpeg"),
      img("argentario", "bikes-gitav_gitavillage-argentario_viale_bici_.jpg"),
      img("argentario", "excursions-escursioni.png"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Reception", value: "0564 1838523", phone: "+3905641838523" },
        { label: "Minimarket", value: "0564 870012", phone: "+390564870012" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "VTC Talamone", value: "+39 347 2607983", phone: "+393472607983" },
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "0564 869018/19", phone: "+390564869018" },
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
    location: "Montalto di Castro",
    region: "Lazio · Maremma Laziale",
    tagline: {
      it: "Benvenuti al Gitavillage California",
      en: "Welcome to Gitavillage California",
    },
    description: {
      it: "Immerso nella pineta e a pochi passi dal mare, il Gitavillage California è il luogo perfetto per vivere una vacanza in libertà. Qui il tempo rallenta, le giornate scorrono tra spiaggia, natura e momenti condivisi, e ogni spazio è pensato per farti sentire subito a tuo agio, come in una piccola casa lontano da casa.\n\nQui trovi tutto quello che c'è da sapere per vivere al meglio il tuo soggiorno tra pineta e mare.",
      en: "Nestled in a pine forest and just a few steps from the sea, Gitavillage California is the perfect place to enjoy a carefree holiday. Here, time slows down, days flow between the beach, nature and shared moments, and every space is designed to make you feel at ease right away—like a home away from home.\n\nHere you'll find everything you need to make the most of your stay between pine forest and sea.",
    },
    badge: "🌲 Montalto di Castro · Maremma Laziale",
    heroImage: img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
    cardImage: img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
    heroSubtitle: {
      it: "Benvenuti al Gitavillage California",
      en: "Welcome to Gitavillage California",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Gitavillage",
    introTitleEm: "California",
    theme: "pine",
    highlights: [],
    services: [
      {
        title: "🕒 Gli Orari",
        titleEn: "Opening Hours",
        description: "Il buongiorno parte dal bar\nSe ti piace iniziare la giornata con calma, il bar nella zona piscine è aperto dalle 07:30 alle 24:00: perfetto per la colazione, una pausa fresca o un drink serale.\n\nA tavola, ogni giorno\nIl ristorante ti accoglie a pranzo (12:30–14:30) e a cena (19:00–22:30) con piatti semplici e gustosi.\nTi consigliamo di prenotare al numero 0766 396067.\nSono disponibili anche piatti senza glutine semplici (cucina non certificata).\n\nIl momento della partenza\nPer gli alloggi dell'area village, il check-out è entro le 10:00, ma puoi continuare a utilizzare i servizi fino alle 12:00.\nPrima di lasciare l'alloggio ti chiediamo di pulire l'angolo cottura e smaltire i rifiuti: la cauzione verrà restituita alla riconsegna delle chiavi.\nPer le piazzole, il check-out è previsto entro le 12:00 (servizi utilizzabili fino allo stesso orario). Anche qui, ti chiediamo di smaltire l'immondizia prima della partenza.\n\nTempo di relax (anche per gli altri)\nDalle 13:00 alle 16:00 e dalle 00:00 alle 08:00 è l'orario del silenzio: niente veicoli, montaggi o spostamenti, per garantire tranquillità a tutti.\n\nLa reception è aperta dalle 08:30 alle 20:30. Per le emergenze puoi chiamare il numero +39 376 1330296, attivo h24.\nLa cassa è aperta dalle 08:30 alle 13:30 e dalle 14:30 alle 19:30",
        descriptionEn: "Start your day at the bar: If you enjoy a slow and relaxed morning, the poolside bar is open from 07:30 to 24:00—perfect for breakfast, a refreshing break or an evening drink.\n\nAt the table, every day: The restaurant welcomes you for lunch (12:30–14:30) and dinner (19:00–22:30) with simple and tasty dishes.\nWe recommend booking at +39 0766 396067.\nSimple gluten-free options are also available (kitchen not certified).\n\nDeparture time:\nFor village accommodations, check-out is by 10:00, but you can continue using the facilities until 12:00.\nBefore leaving, we kindly ask you to clean the kitchenette and dispose of waste. The deposit will be returned upon key handover.\nFor pitches, check-out is by 12:00 (services available until the same time). Please also remember to dispose of waste before departure.\n\nQuiet hours (for everyone's comfort)\nFrom 13:00 to 16:00 and from 00:00 to 08:00, please respect quiet hours: no vehicle access, setup or movement, to ensure peace for all guests.\n\nReception is open from 08:30 to 20:30. For emergencies, you can call +39 376 1330296 (24h).\nCash desk open from 08:30 to 13:30 and 14:30 to 19:30",
        image: img("california", "pool-gitav_gitavillage-california_piscina_202.jpg"),
      },
      {
        title: "🌊 Gusto & Relax (Servizi & Spiaggia)",
        titleEn: "Food & Relax (Services & Beach)",
        description: "La spiaggia, a due passi\nIl nostro stabilimento è aperto dalle 09:00 alle 19:00: qui puoi goderti il mare in totale relax.\nPer i villini in muratura il servizio spiaggia (1 ombrellone + 2 lettini) è incluso.\nPer le altre sistemazioni è disponibile su richiesta:\n€20,00 al giorno (giugno, luglio, settembre)\n€25,00 al giorno (agosto)\n\nPiscine per tutta la famiglia\nAperte dalle 09:00 alle 19:00, con lettini e ombrelloni fino a esaurimento.\nRicorda: la cuffia è obbligatoria.\n\nTutto a portata di mano: Il minimarket e il bazar sono aperti 08:00–13:00 e 16:30–20:00: qui trovi alimentari, giornali e tutto ciò che può servirti durante il soggiorno.\n\nComfort in alloggio\nAcqua potabile disponibile in tutta la struttura\nAcqua calda solo in bagno\nPiastra di cottura: [SCARICA LE ISTRUZIONI PDF]",
        descriptionEn: "The beach, just steps away\nOur beach establishment is open from 09:00 to 19:00, where you can fully enjoy the sea and relax.\nFor masonry villas, the beach service (1 umbrella + 2 sunbeds) is included.\nFor other accommodations, it is available on request:\n€20.00 per day (June, July, September)\n€25.00 per day (August)\n\nPools for the whole family: Open from 09:00 to 19:00, with sunbeds and umbrellas available until full capacity.\nPlease note: swim cap is mandatory.\n\nEverything within reach: The minimarket and bazaar are open 08:00–13:00 and 16:30–20:00: here you'll find groceries, newspapers and everything you may need during your stay.\n\nIn your accommodation:\nDrinking water available throughout the property\nHot water available in the bathroom only\nCooking hob: [DOWNLOAD PDF INSTRUCTIONS]",
        image: img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
      },
      {
        title: "🚲 Esplorare e Divertirsi (Sport & Attività)",
        titleEn: "Explore & Enjoy (Sports & Activities)",
        description: "Muoversi e scoprire il territorio\nVuoi esplorare i dintorni?\nNoleggio bici: Jolly Bike (Montalto Marina) – Massimiliano 339 1328662\nCanoe & pedalò: gratuiti per 30 minuti (su prenotazione)\nEscursioni: minicrociere all'Isola del Giglio, terme di Saturnia, Parco della Maremma e molto altro al numero +39 371 3837052\n\nSport & Wellness:\nCampi Sportivi:\nOspiti village → prenotazione in Reception (max 1 ora al giorno, attrezzatura gratuita lasciando un documento).\nOspiti camping → Tennis/Basket €10,00/h – Calcetto €25,00/h.\n\nPalestra open-air gratuita, immersa nella pineta. Scarica il PDF con il percorso completo [FILE PDF allegato]\n\nBocce e ping-pong disponibili liberamente (attrezzatura in Reception)\n\nSPA: Concediti un momento tutto per te nella Spa privata California Wellness, dove il percorso benessere ti avvolgerà con idromassaggio: percorso Kneipp, doccia emozionale e massaggi. Scopri i trattamenti cliccando qui [FILE PDF allegato]\n\nAnimazione\nDal 06/06 al 06/09 la giornata è sempre piena di energia:\nSpiaggia ore 10:00\nPiscina ore 16:00\nAnfiteatro ore 21:30\n\nControlla il programma in bacheca e scegli cosa fare ogni giorno!",
        descriptionEn: "Getting around and discovering the area\nWould you like to explore the surroundings?\nBike rental: Jolly Bike (Montalto Marina) – Massimiliano +39 339 1328662\nCanoes & pedal boats: free for 30 minutes (upon reservation)\nExcursions: mini-cruises to Giglio Island, Saturnia hot springs, Parco della Maremma and much more at +39 371 3837052\n\nSports & Wellness:\nSports fields\nVillage guests → book at Reception (max 1 hour per day, equipment free with ID deposit)\nCamping guests → Tennis/Basket €10.00/hour – Five-a-side football €25.00/hour.\n\nOpen-Air Gym: Free access, immersed in the pine forest. Download the full training path [PDF FILE]\n\nBocce & Table Tennis: Free use (equipment available at Reception with ID).\n\nSPA: Treat yourself to a relaxing moment at California Wellness Spa, where a wellness path awaits you with hydromassage, Kneipp path, emotional showers and massages. Discover all treatments here [PDF FILE]\n\nAnimation: From 06/06 to 06/09, every day is full of energy:\nBeach at 10:00\nPool at 16:00\nAmphitheatre at 21:30\n\nCheck the notice board for the daily program and choose your activities!",
        image: img("california", "sports-gitav_gitavillage_california_campi-sport.jpg"),
      },
      {
        title: "🧺 Utilità & Emergenze",
        titleEn: "Useful Info & Emergencies",
        description: "Lavanderia: La trovi dopo le piscine, lungo la pineta: lavatrici e asciugatrici a moneta (€ 5,00 a ciclo, accetta monete da € 1,00/2,00).\n\nBiancheria: Inclusa nei Villini in muratura. Per le altre sistemazioni è disponibile a noleggio (€10,00 a persona).\n\nTrasporti & NCC: La stazione dista 4 km e non sono disponibili taxi pubblici.\nTi consigliamo di prenotare in anticipo:\nAngelo Nacci: 328 5396582\nTaxi Capalbio: 366 3922147\n\nAltri servizi utili:\nATM vicino alla Reception\nArea barbecue comune (solo carbonella)\nOspiti giornalieri ammessi da lunedì a giovedì (tariffe variabili)\n\nEmergenze sanitarie\nNumero unico: 112\nGuardia medica Montalto Marina: +39 350 1744989\n\nAmbiente\nL'isola ecologica si trova vicino al market.\n\nWi-Fi\n1 ora gratuita al giorno.\nPer connessione illimitata (fino a 2 dispositivi): €10,00 per 7 giorni.\n\nPer orientarti al meglio, qui trovi la mappa del villaggio [FILE PDF]\n\nInformazioni utili per le piazzole\nPer chi sceglie il camping, ecco qualche informazione in più per vivere al meglio l'esperienza:\nEnergia: attacco 4A (circa 800W) – necessaria prolunga con attacco europeo\nAcqua & camper service: docce calde incluse, fontanelle per acqua potabile e area camper service disponibile\nBarbecue: area comune gratuita (solo carbonella)\nPosto auto: esterno alla piazzola, nell'area fronte reception",
        descriptionEn: "Laundry: Located after the pools along the pine forest: washing machines and dryers (€5.00 per cycle, €1/€2 coins accepted).\n\nLinen: Included in masonry villas. For other accommodations, rental available (€10.00 per person).\n\nTransport & NCC: The train station is 4 km away and there are no public taxis.\nWe recommend booking in advance:\nAngelo Nacci: +39 328 5396582\nTaxi Capalbio: +39 366 3922147\n\nOther useful services:\nATM near Reception\nShared barbecue area (charcoal only)\nDay guests allowed Monday–Thursday (seasonal rates apply)\n\nMedical Emergency: 112 | Medical Service Montalto Marina: +39 350 1744989.\n\nEnvironment: The recycling area is located near the market.\n\nWi-Fi: 1 hour free per day. Unlimited connection (up to 2 devices): €10.00 for 7 days.\n\nTo help you find your way around, here is a map of the village [PDF FILE]\n\nUseful information for pitches\nFor those choosing camping, here's some extra info to enjoy your stay:\nElectricity: 4A connection (approx. 800W) – European adapter required\nWater & camper service: hot showers included, drinking water points and camper service available\nBarbecue: free shared area (charcoal only)\nParking: outside the pitch, in the area in front of Reception",
        image: img("california", "market-minimarket.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("california", "beach-gitav_gitavillage-california_spiaggia_20.jpg"),
      img("california", "pool-gitav_gitavillage-california_piscina_202.jpg"),
      img("california", "sports-palestra-open-air.jpg"),
      img("california", "bikes-bici.png"),
      img("california", "entertainment-animazione.jpeg"),
      img("california", "excursions-escursioni.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Ristorante", value: "0766 396067", phone: "+390766396067" },
        { label: "Reception (emergenze h24)", value: "+39 376 1330296", phone: "+393761330296" },
        { label: "Jolly Bike", value: "+39 339 1328662", phone: "+393391328662" },
        { label: "Angelo Nacci (NCC)", value: "328 5396582", phone: "+393285396582" },
        { label: "Taxi Capalbio", value: "366 3922147", phone: "+393663922147" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "+39 350 1744989", phone: "+393501744989" },
      ],
    },
    pdfs: [
      {
        label: "Istruzioni angolo cottura",
        labelEn: "Cooking hob instructions",
        url: pdf("california", "istruzioni-angolo-cottura-california.pdf"),
      },
      {
        label: "Palestra open-air",
        labelEn: "Open-air gym",
        url: pdf("california", "area-fitness-californiapdf.pdf"),
      },
      {
        label: "SPA California Wellness",
        labelEn: "SPA California Wellness",
        url: pdf("california", "spa-california.pdf"),
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
    region: "Maremma Laziale",
    tagline: {
      it: "Benvenuti al Club degli Amici",
      en: "Welcome to Club degli Amici",
    },
    description: {
      it: "Sei arrivato al Club degli Amici: qui trovi tutto quello che ti serve per vivere la tua vacanza in modo semplice, comodo e senza pensieri, insieme a tutta la famiglia… anche quella a quattro zampe.\n\nQui trovi tutto quello che c'è da sapere per vivere al meglio il vostro soggiorno.",
      en: "You've arrived at Club degli Amici: here you'll find everything you need to enjoy your holiday in a simple, comfortable and carefree way, together with your whole family… including your four-legged one.\n\nHere's everything you need to know to make the most of your stay.",
    },
    badge: "🏡 Pescia Romana · Maremma Laziale",
    heroImage: img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
    cardImage: img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
    heroSubtitle: {
      it: "Benvenuti al Club degli Amici",
      en: "Welcome to Club degli Amici",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Club degli",
    introTitleEm: "Amici",
    theme: "sand",
    highlights: [],
    services: [
      {
        title: "🕒 Gli Orari",
        titleEn: "Opening Hours",
        description: "Buongiorno & oltre (Bar)\nInizia la giornata con calma: il bar ti aspetta dalle 06:30 alle 24:00, dalla prima colazione fino all'ultimo drink.\n\nGusto in tavola (Ristorante)\nQui puoi fermarti ogni giorno per pranzo (12:00–15:00) e cena (19:00–23:00), con piatti semplici e gustosi, perfetti per tutta la famiglia.\nSe hai esigenze particolari, trovi anche proposte senza glutine (cucina non certificata). Per richieste specifiche puoi contattarci al 333 1844969.\n\nCheck-out:\nSe soggiorni in una sistemazione dell'area village, ti chiediamo di lasciare l'alloggio entro le ore 10:00, riconsegnando chiavi e ricevuta della cauzione (€50).\nPrima di partire, ti chiediamo solo di lasciare l'angolo cottura pulito e smaltire i rifiuti.\nE se vuoi goderti ancora un po' il villaggio, puoi restare e utilizzare i servizi fino alle 12:00.\n\nSe invece sei in piazzola:\nPiazzole Smart \"oltre parcheggio\": entro le 22:00 (dal 04/08 al 24/08 entro le 12:00)\nPiazzole Comfort / Smart con bagno: entro le 12:00\nVuoi prendertela ancora più con calma?\nChiedi in Reception per il late check-out fino alle 20:00 (su disponibilità).\n\nOrario della Reception: dalle 08:00 alle 20:00\nOrario cassa: dalle 08:00 alle 13:00 e dalle 14:00 alle 19:00",
        descriptionEn: "Good morning & beyond (Bar)\nStart your day at your own pace: the bar is open from 06:30 to 24:00, from breakfast to your evening drink.\n\nTaste at the table (Restaurant)\nStop by every day for lunch (12:00–15:00) and dinner (19:00–23:00), with simple and tasty dishes perfect for the whole family.\nIf you have special dietary needs, gluten-free options are available (non-certified kitchen). For specific requests, contact +39 333 1844969.\n\n(Check-out)\nIf you are staying in a village accommodation, please leave your unit by 10:00, returning the keys and the deposit receipt (€50).\nBefore leaving, we simply ask you to clean the kitchenette and dispose of your waste.\nIf you'd like to enjoy a little more time in the village, you can continue using the facilities until 12:00.\n\nIf you are staying in a pitch:\nSmart pitches \"oltre parcheggio\": by 22:00 (from 04/08 to 24/08 by 12:00)\nComfort / Smart pitches with bathroom: by 12:00\nWant to take it easy a little longer?\nAsk at Reception about late check-out until 20:00 (subject to availability).\n\nReception hours: 08:00 – 20:00\nCash desk hours: 08:00 – 13:00 and 14:00 – 19:00",
        image: img("clubdegliamici", "market-minimarket.jpg"),
      },
      {
        title: "🌊 Gusto & Relax (Food & Beach)",
        titleEn: "Taste & Relax (Food & Beach)",
        description: "Spiaggia\nQui il mare è a due passi: puoi rilassarti nel nostro stabilimento dalle 09:00 alle 19:00.\nSe soggiorni nell'area village, hai già inclusa una postazione con ombrellone e due lettini.\nSe invece sei in camping, puoi noleggiarla (dalle 09:30, secondo disponibilità). Il costo è di € 7 per l'ombrellone e € 7 per ogni lettino.\nAnche il giorno della partenza, se vuoi restare ancora un po', puoi continuare a goderti la spiaggia, noleggiando ombrellone e lettini.\n\nAcqua & Comfort: L'acqua negli alloggi è potabile (consigliata per uso culinario). L'acqua calda è disponibile solo in bagno.",
        descriptionEn: "Beach\nThe sea is just a few steps away: relax at our beach facility from 09:00 to 19:00.\nIf you are staying in the village area, one beach set (1 umbrella + 2 sunbeds) is included.\nIf you are in the camping area, you can rent it (from 09:30, subject to availability) at €7 per umbrella and €7 per sunbed.\nOn your departure day, you can still enjoy the beach by renting umbrellas and sunbeds.\n\nWater & Comfort: Water in the accommodations is drinkable (also suitable for cooking).\nHot water is available in the bathrooms.",
        image: img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
      },
      {
        title: "🚲 Esplorare e Divertirsi (Servizi & Sport)",
        titleEn: "Explore & Have Fun (Services & Sports)",
        description: "In Movimento:\nNoleggio Bici: Puoi noleggiare una bici e partire alla scoperta dei dintorni. Il servizio è esterno con consegna sul posto. Contattare Cristian: 389 0187339 (Piazza delle Mimose, 6).\nCanoe & Pedalò: Uso gratuito per 30 minuti su prenotazione.\nEscursioni: Puoi prenotare una minicrociera all'isola del Giglio, una gita alle cascate di Saturnia o una passeggiata in carrozza nel Parco della Maremma e tante altre esperienze, chiamando il numero +39 371 3837052.\n\nSport & Animazione: Se ami lo sport, trovi campi sportivi (tennis, calcetto, basket e pallavolo) sempre disponibili\nGratuiti per gli ospiti dell'area village (villini in muratura e lodge). È possibile prenotarli in Reception, l'attrezzatura può essere ritirata e riconsegnata in loco.\nPer gli ospiti delle piazzole questi sono i costi:\nTennis: € 10,00/ora (€ 15,00 dopo le 21:00).\nCalcetto: € 30,00/ora (€ 35,00 dopo le 21:00).\nGratuiti: Campi da Basket e Pallavolo a disposizione. Prenotazioni in Reception.\n\nDivertimento: Qui le giornate scorrono leggere ma non ci si annoia mai: laboratori per bambini e spettacoli serali\nDal 06/06 al 06/09 la giornata è sempre piena di energia:\nmattina in spiaggia (ore 10:00)\npomeriggio in piscina (ore 16:00)\nsera in anfiteatro (ore 21:30)\n\nControlla il programma e scegli cosa ti va di fare, senza obblighi!\n\nYoga: Se cerchi un momento tutto per te, a luglio e agosto puoi partecipare alle lezioni gratuite di yoga (mercoledì e venerdì, 19:00–20:00).",
        descriptionEn: "Stay active\nBike rental: Rent a bike and explore the surroundings. External service with delivery on site. Contact Cristian: +39 389 0187339 (Piazza delle Mimose, 6).\nCanoes & pedal boats: Free use for 30 minutes upon reservation.\nExcursions: Book a mini cruise to Giglio Island, a trip to Saturnia waterfalls or a carriage ride in the Maremma Park, and much more by calling +39 371 3837052.\n\nSports & Entertainment\nIf you love sports, you'll find courts always available (tennis, five-a-side football, basketball and volleyball).\nFree for village guests (brick villas and lodges). Booking at Reception, equipment available on site.\nFor camping guests:\nTennis: €10/hour (€15 after 21:00)\nFive-a-side football: €30/hour (€35 after 21:00)\nBasketball and volleyball courts are always free. Bookings at Reception.\n\nFun: Days flow easily here… but there's always something to do.\nFrom 06/06 to 06/09:\nmorning at the beach (10:00)\nafternoon at the pool (16:00)\nevening at the amphitheatre (21:30)\nWorkshops for kids and evening shows for everyone.\nCheck the daily programme and choose what you feel like doing—no pressure.\n\nYoga: If you're looking for some time just for yourself, join our free yoga classes in July and August (Wednesday and Friday, 19:00–20:00).",
        image: img("clubdegliamici", "sports-gitav_gitavillage-club-degli-amici_sport.jpg"),
      },
      {
        title: "🐾 Vacanza insieme, davvero",
        titleEn: "Holiday together, truly",
        description: "Qui il tuo cane è in vacanza con te, non \"in più\".\nTrovi spazi e servizi pensati per vivere tutto insieme, in libertà:\npatio con cancelletto\ndocce dedicate (anche in spiaggia)\ndog beach\ncampo agility\nattività cinofile gratuite nei mesi di luglio e agosto\n\nPerché la vacanza è più bella quando nessuno resta indietro.",
        descriptionEn: "Here, your dog is on holiday with you—not \"extra\".\nYou'll find spaces and services designed to enjoy everything together, freely:\ngated patio\ndedicated showers (also on the beach)\ndog beach\nagility area\nfree dog activities in July and August\n\nBecause holidays are better when no one is left behind.",
        image: img("clubdegliamici", "pets-gitav_gitavillage_club-degli-amici_cinof.jpg"),
      },
      {
        title: "🧺 Utilità & Emergenze",
        titleEn: "Utilities & Emergencies",
        description: "Lavanderia: Servizio self-service a moneta nei blocchi bagni del campeggio (€ 4,00 a ciclo). Non sono presenti asciugatrici.\n\nBiancheria: Inclusa nei Villini e Lodge Comfort. Per Lodge Smart o cambi extra: € 10,00 a persona per set.\n\nMinimarket: Per le vostre necessità quotidiane, siamo aperti dalle 08:00 alle 13:00 e dalle 17:00 alle 20:00.\n\nTabacchi & ATM: I punti più vicini si trovano nel paese di Pescia Romana.\n\nSicurezza:\nEmergenze: Numero unico 112.\nGuardia Medica: Montalto Marina (350 1744989) in Via Tevere.\nFarmacia: Pescia Romana (0766 831138), Piazza delle Mimose 15.\n\nTrasporti (NCC): Renato (366 3922147), Emiliano (348 3630623) o Nannoni Bus (339 7031080)\n\nConnessione Wi-Fi: Restiamo in contatto nelle aree comuni e negli appartamenti.\nPassword: Clubamici23.\n\nPer orientarti al meglio, qui trovi la mappa del villaggio [FILE PDF]\n\nInformazioni utili per le piazzole\nPer chi sceglie il camping, ecco qualche informazione in più per vivere al meglio l'esperienza:\nEnergia: attacco 6A (circa 1000W) – necessaria prolunga con attacco europeo\nAcqua & camper service: docce calde incluse, fontanelle per acqua potabile e area camper service disponibile\nBarbecue: area comune gratuita (solo carbonella)\nPosto auto: esterno alla piazzola, nell'area fronte reception",
        descriptionEn: "Laundry: Coin-operated washing machines in the public campsite bathrooms (€ 4,00 per cycle). No dryers available.\n\nLinen: Included in Villini and Lodge Comfort. For Lodge Smart or extra changes: € 10,00 per person.\n\nMinimarket: Open daily (08:00–13:00 and 17:00–20:00).\n\nTobacco shop & ATM: Available in Pescia Romana village.\n\nSafety:\nEmergencies: Dial 112.\nMedical Service: Montalto Marina (+39 350 1744989).\nPharmacy: Pescia Romana (+39 0766 831138).\n\nTransport (NCC): Renato (+39 366 3922147), Emiliano (+39 348 3630623), Nannoni Bus (+39 339 7031080)\n\nWi-Fi connection\nStay connected in common areas and apartments.\nPassword: Clubamici23\n\nTo help you find your way around, here is a map of the village [PDF FILE]\n\nUseful info for pitches\nIf you've chosen camping, here are a few extra tips:\nElectricity: 6A connection (approx. 1000W) – European adapter required\nWater & camper service: hot showers included, drinking water points and camper service area available\nBarbecue: free shared area (charcoal only)\nParking: outside the pitch, in the area in front of Reception",
        image: img("clubdegliamici", "utility-acqua-potabile.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("clubdegliamici", "beach-gitav_gitavillage-club-degli-amici_spiag.jpg"),
      img("clubdegliamici", "sports-gitav_gitavillage-club-degli-amici_sport.jpg"),
      img("clubdegliamici", "pets-gitav_gitavillage_club-degli-amici_cinof.jpg"),
      img("clubdegliamici", "entertainment-gitav_gitavillage-club-degli-amici_anima.jpeg"),
      img("clubdegliamici", "bikes-gitav_gitavillage-club-degli-amici_noleg.jpg"),
      img("clubdegliamici", "watersports-canoa-e-pedalo.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Ristorante", value: "333 1844969", phone: "+393331844969" },
        { label: "Noleggio Bici (Cristian)", value: "389 0187339", phone: "+393890187339" },
        { label: "Maremma Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "NCC Renato", value: "366 3922147", phone: "+393663922147" },
        { label: "NCC Emiliano", value: "348 3630623", phone: "+393483630623" },
        { label: "Nannoni Bus", value: "339 7031080", phone: "+393397031080" },
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "350 1744989", phone: "+393501744989" },
        { label: "Farmacia Pescia Romana", value: "0766 831138", phone: "+390766831138" },
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
    location: "Talamone",
    region: "Maremma Toscana",
    tagline: {
      it: "Qui il tempo rallenta davvero",
      en: "Here, time truly slows down",
    },
    description: {
      it: "Tra il profumo della macchia mediterranea e il silenzio della Maremma, ogni giornata trova il suo ritmo naturale, lontano da notifiche e distrazioni.\n\nLe Cannelle è un agriturismo diffuso dove puoi semplicemente lasciarti guidare: dai sapori genuini, dalla luce che cambia durante il giorno, da piccoli gesti quotidiani che riportano all'essenziale.\n\nPer aiutarti a vivere al meglio questa esperienza, trovi qui tutte le informazioni utili per il tuo soggiorno.",
      en: "Between the scent of Mediterranean scrub and the silence of the Maremma, each day finds its natural rhythm, far from notifications and distractions.\n\nLe Cannelle is a scattered agriturismo where you can simply let yourself be guided: by genuine flavors, by the changing light throughout the day, by small daily gestures that bring you back to what really matters.\n\nTo help you make the most of this experience, here you'll find all the useful information for your stay.",
    },
    badge: "🌿 Talamone · Maremma Toscana",
    heroImage: img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
    cardImage: img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
    heroSubtitle: {
      it: "Qui il tempo rallenta davvero",
      en: "Here, time truly slows down",
    },
    introLabel: "Benvenuto · Welcome",
    introTitleIt: "The Caesar",
    introTitleEm: "Le Cannelle",
    theme: "sand",
    highlights: [],
    services: [
      {
        title: "🕒 Orari e Ristorazione",
        titleEn: "Timings & Dining",
        description: "La giornata inizia con la colazione a buffet dolce e salato, servita nella sala ristorante dalle ore 08:00 alle ore 09:00.\n\nPer il pranzo, in formula pensione completa, è previsto un pasto freddo consegnato alle ore 12:30 presso Villa a Mare.\nIl pranzo viene preparato in cestini termici contrassegnati con il numero della tua camera e può essere gustato dove preferisci: in camera, ai tavoli di Villa a Mare oppure sulla spiaggia Poseidonia, lasciandoti la libertà di vivere la giornata con i tuoi tempi.\n\nLa cena viene servita alle ore 20:00 presso il ristorante. Ti chiediamo gentilmente di rispettare l'orario, per permettere a tutti di vivere questo momento con tranquillità.\n\nIl giorno della partenza ti preghiamo di liberare l'alloggio entro le ore 10:00.\n\nLa reception è aperta dalle 09:00 alle 19:00",
        descriptionEn: "The day begins with a sweet and savory buffet breakfast, served in the restaurant from 08:00 to 09:00.\n\nFor lunch, with the full board option, a cold meal is delivered at 12:30 at Villa a Mare.\nYour lunch is prepared in thermal baskets marked with your room number and can be enjoyed wherever you prefer: in your room, at the tables at Villa a Mare, or on Poseidonia beach, giving you the freedom to experience the day at your own pace.\n\nDinner is served at 20:00 in the restaurant. We kindly ask you to respect the timing, allowing everyone to enjoy this moment in a relaxed atmosphere.\n\nOn your departure day, we kindly ask you to vacate your accommodation by 10:00.\n\nThe reception is open from 09:00 to 19:00.",
        image: img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
      },
      {
        title: "🧺 Pulizia e Biancheria",
        titleEn: "Cleaning & Linen",
        description: "Servizio Camera: Ci occupiamo quotidianamente della pulizia della camera e del cambio della biancheria (inclusa nel soggiorno) quando necessario.\n\nSupplemento Torre: Per la sistemazione in Torre, offriamo la possibilità di noleggiare un cambio biancheria extra al costo di € 10,00 a set per persona.",
        descriptionEn: "Room Service: We take care of daily room cleaning and linen changes (included in your stay) whenever necessary.\n\nTower Supplement: For guests staying in the Tower, we offer the possibility to request an extra linen change at a cost of € 10.00 per set, per person.",
        image: img("lecannelle", "utility-biancheria.jpg"),
      },
      {
        title: "🚲 Esplorare il Territorio",
        titleEn: "Exploring the Area",
        description: "Noleggio Bici: Ci appoggiamo a un fornitore esterno nel paese di Talamone. Per informazioni e prenotazioni, puoi contattare direttamente il Sig. Carlo al numero: + 39 347 2607983.\n\nEscursioni e Parco: Per scoprire la Maremma, consigliamo di consultare il sito maremmaescursioni.it. Per visite guidate al Parco Regionale della Maremma, puoi visitare parco-maremma.it o contattare il numero +39 0564 393238.",
        descriptionEn: "Bike Rental: We collaborate with an external provider in the village of Talamone. For information and bookings, you can contact Mr. Carlo directly at: +39 347 2607983.\n\nExcursions & Park: To explore the Maremma, we recommend visiting maremmaescursioni.it. For guided tours of the Maremma Regional Park, you can visit parco-maremma.it or call +39 0564 393238.",
        image: img("lecannelle", "bikes-bike.png"),
      },
      {
        title: "🚑 Salute e Utilità",
        titleEn: "Health & Utilities",
        description: "Farmacie: Segnaliamo la Farmacia a Fonteblanda (3 km) e la Parafarmacia ad Albinia (12 km).\n\nSicurezza: Per cure non urgenti, offriamo il riferimento del numero unico europeo 116117. In caso di emergenza, contattare il 112. L'ospedale più vicino si trova a Orbetello (21 km).",
        descriptionEn: "Pharmacies: The nearest pharmacy is in Fonteblanda (3 km) and a parapharmacy is located in Albinia (12 km).\n\nSafety: For non-urgent medical assistance, please refer to the European number 116117. In case of emergency, dial 112. The nearest hospital is in Orbetello (21 km).",
        image: img("lecannelle", "utility-salute.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("lecannelle", "restaurant-gitav_the-caesar-hotels_club-le-cannelle.jpg"),
      img("lecannelle", "bikes-bike.png"),
      img("lecannelle", "excursions-escursioni.png"),
      img("lecannelle", "utility-salute.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Noleggio Bici (Carlo)", value: "+39 347 2607983", phone: "+393472607983" },
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
      it: "Benvenuti al Gitavillage Le Marze",
      en: "Welcome to Gitavillage Le Marze",
    },
    description: {
      it: "Immerso nella pineta e a pochi passi dal mare, il Gitavillage Le Marze è il luogo perfetto per vivere la Toscana in modo autentico. Tra natura, sport e momenti di relax, ogni giornata qui segue il tuo ritmo: puoi rallentare, esplorare o semplicemente goderti il tempo all'aria aperta.",
      en: "Nestled in the pine forest and just a few steps from the sea, Gitavillage Le Marze is the perfect place to experience Tuscany in an authentic way. Between nature, sports and moments of relaxation, every day here follows your own rhythm: you can slow down, explore or simply enjoy your time outdoors.",
    },
    badge: "🌲 Castiglione della Pescaia · Maremma Toscana",
    heroImage: img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
    cardImage: img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
    heroSubtitle: {
      it: "Benvenuti al Gitavillage Le Marze",
      en: "Welcome to Gitavillage Le Marze",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "Gitavillage",
    introTitleEm: "Le Marze",
    theme: "pine",
    highlights: [],
    services: [
      {
        title: "🕒 Gli Orari",
        titleEn: "Opening Hours",
        description: "Al mattino puoi iniziare la giornata con calma al Bar Centrale o al Bar Piscina, aperti dalle 07:30 alle 23:30. Se sei già in spiaggia, trovi il bar attivo dalle 09:00 alle 20:00.\n\nPer i momenti a tavola, il Ristorante & Pizzeria ti accoglie a pranzo (12:30–14:30) e a cena (19:00–22:30), con possibilità anche di asporto. Per informazioni e prenotazioni puoi contattare Fiorella al 335 6364972 oppure consultare il menù online.\nSono disponibili anche piatti senza glutine semplici (cucina non certificata).\n\nIl giorno della partenza, puoi lasciare l'alloggio entro le 10:00 oppure la piazzola entro le 12:00, ma continuare comunque a goderti tutti i servizi del villaggio per il resto della giornata.\n\nPer il relax di tutti, ti chiediamo di rispettare gli orari del silenzio: dalle 13:00 alle 15:00 e dalle 22:00 alle 07:00. In queste fasce non è consentito circolare con mezzi o montare/smontare attrezzature.\n\nLa reception è aperta dalle 09:00 alle 20:00, mentre per qualsiasi necessità notturna puoi contattare la guardiania al +39 333 4800599.",
        descriptionEn: "In the morning, you can start your day at your own pace at the Central Bar or the Pool Bar, open from 07:30 to 23:30. If you are already at the beach, you will find the beach bar open from 09:00 to 20:00.\n\nFor dining, the Restaurant & Pizzeria welcomes you for lunch (12:30–14:30) and dinner (19:00–22:30), with takeaway service also available. For information and reservations, you can contact Fiorella at +39 335 6364972 or check the menu online.\nSimple gluten-free dishes are also available (non-certified kitchen).\n\nOn your departure day, you can leave your accommodation by 10:00 or your pitch by 12:00, while still enjoying all the village services for the rest of the day.\n\nFor everyone's relaxation, we kindly ask you to respect the quiet hours: from 13:00 to 15:00 and from 22:00 to 07:00. During these times, it is not allowed to move vehicles or assemble/disassemble equipment.\n\nReception is open from 09:00 to 20:00. For any night-time needs, you can contact the night security service at +39 333 4800599.",
        image: img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
      },
      {
        title: "🌊 Mare, Piscina & Avventura",
        titleEn: "Sea, Pool & Adventure",
        description: "La spiaggia è uno dei punti forti del villaggio: il servizio è incluso per le sistemazioni Top Castiglione, Air Dream, Premium, Superior e Pineta.\nPer le altre tipologie e le piazzole, il costo è di € 20,00 al giorno in giugno e settembre, € 25,00 a luglio e € 28,00 ad agosto.\n\nSe preferisci la piscina, è aperta tutti i giorni dalle 10:00 alle 19:00 (ricorda la cuffia!).\n\nPer chi ama l'avventura, il Parco Avventura tra gli alberi è aperto dalle 15:00 alle 20:00 (fino al 14/09), con tariffe agevolate per gli ospiti, da € 8,00 a € 17,00 in base all'età.\n\nE se viaggi con il tuo cane, sei nel posto giusto: gli amici a 4 zampe sono i benvenuti. Trovi docce dedicate nei bagni Bianco e Giallo, mentre la spiaggia per cani più vicina è la Bau Beach Selene (a 4 km). Ti ricordiamo che devono essere sempre al guinzaglio sotto l'ombrellone e non possono fare il bagno in mare.",
        descriptionEn: "The beach is one of the highlights of the village: the service is included for Top Castiglione, Air Dream, Premium, Superior and Pineta accommodations.\nFor other accommodation types and pitches, the cost is €20.00 per day in June and September, €25.00 in July and €28.00 in August.\n\nIf you prefer the pool, it is open daily from 10:00 to 19:00 (swimming cap required).\n\nFor adventure lovers, the Adventure Park among the trees is open from 15:00 to 20:00 (until 14/09), with special rates for guests, ranging from €8.00 to €17.00 depending on age.\n\nAnd if you are travelling with your dog, you are in the right place: pets are welcome everywhere. You will find dedicated showers in the White and Yellow bathroom blocks, while the nearest dog beach is Bau Beach Selene (4 km away). Please remember that dogs must always be on a leash under the umbrella and are not allowed to swim in the sea.",
        image: img("lemarze", "pool-gitav_gitavillage_le-marze_piscina_2021-.jpeg"),
      },
      {
        title: "🚲 Esplorare e Divertirsi (Sport & Utility)",
        titleEn: "Explore & Enjoy (Sport & Utility)",
        description: "Qui puoi vivere le tue giornate come preferisci: attive, rilassate o un mix delle due.\n\nPuoi noleggiare una bici direttamente in struttura (09:00–12:30 e 16:00–19:30) al costo di € 10,00 al giorno, oppure organizzare escursioni passando dall'INFO POINT all'ingresso (aperto tutti i giorni dalle 17:00 alle 20:00).\n\nPer lo sport, hai a disposizione gratuitamente campi da calcetto, pallavolo e ping-pong, senza bisogno di prenotazione (il materiale lo trovi dagli animatori).\n\nL'animazione accompagna la tua giornata con un ritmo naturale:\nmattina in spiaggia\npomeriggio in piscina\nsera in anfiteatro\n\nTra laboratori e spettacoli, c'è sempre qualcosa da fare: controlla il programma in bacheca e scegli ogni giorno la tua attività.\n\nPer l'acqua potabile, puoi utilizzare quella degli alloggi per uso culinario oppure i distributori (naturale e frizzante) vicino alla reception e ai bagni gialli (€ 0,20/litro).",
        descriptionEn: "Here you can spend your days just the way you like: active, relaxed or a mix of both.\n\nYou can rent a bike directly on site (09:00–12:30 and 16:00–19:30) at a cost of €10.00 per day, or organise excursions at the INFO POINT at the village entrance (open daily from 17:00 to 20:00).\n\nFor sports, you have free access to football, volleyball and table tennis courts, without reservation (equipment is available from the animation staff).\n\nThe entertainment follows a natural daily rhythm:\nmorning at the beach\nafternoon at the pool\nevening at the amphitheatre\n\nBetween workshops and shows, there is always something to do: check the daily programme on the notice board and choose your activities.\n\nFor drinking water, you can use the water in the accommodations for cooking purposes or the dispensers (still and sparkling) located near reception and the yellow bathrooms (€0.20/litre).",
        image: img("lemarze", "sports-gitav_gitavillage_le-marze_campi-sportiv.jpg"),
      },
      {
        title: "🧺 Informazioni utili & Emergenze",
        titleEn: "Useful Information & Emergencies",
        description: "Nel villaggio trovi tutto quello che serve per una vacanza senza pensieri.\n\nLe lavanderie sono presenti in tutti i blocchi bagni, con lavatrici e asciugatrici a moneta (€ 5,00 a ciclo, detersivo incluso).\nLa prima fornitura di biancheria è inclusa negli alloggi; eventuali cambi extra costano € 10,00 a persona per set (lenzuola e asciugamani).\n\nHai a disposizione anche:\nATM interno\ntabacchi a Castiglione della Pescaia o Marina di Grosseto (5 km)\nservizio taxi (Claudio: +39 338 7295102)\n\nPer emergenze: 112 | Guardia Medica: 116117\nMedico su appuntamento: Dr. Vaziri (€ 50,00 a visita)\n\nPer l'ambiente, sono presenti punti di raccolta differenziata lungo la strada perimetrale (apertura a pedale).\n\nLa connessione Wi-Fi è disponibile nelle aree comuni (bar, ristorante, piscina): rete CampeggioLeMarze, accesso tramite e-mail.\n\nPer orientarti al meglio, qui trovi la mappa del villaggio [FILE PDF]\n\nInformazioni utili per chi soggiorna in piazzola\nSe scegli la piazzola, hai a disposizione tutti i servizi essenziali per una vacanza comoda e immersa nella natura.\nOgni piazzola dispone di un attacco luce da 6 A (max 1 kW) con spina europea (un solo attacco). Le docce calde sono incluse.\nAll'interno del campeggio trovi anche il camper service con carico acqua e scarico acque nere e grigie.\nÈ disponibile un'area barbecue comune, mentre per le bombole del gas puoi affidarti a PietroGas (Marina di Grosseto), con consegna direttamente in villaggio al numero 328 1636024.\nIl posto auto è previsto nel parcheggio (non in piazzola).",
        descriptionEn: "In the village you will find everything you need for a carefree holiday.\n\nLaundry facilities are available in all bathroom blocks, with coin-operated washing machines and dryers (€5.00 per cycle, detergent included).\nThe first supply of linen is included in all accommodations; extra changes cost €10.00 per person per set (bed linen and towels).\n\nYou will also find:\nATM on site\ntobacconists in Castiglione della Pescaia or Marina di Grosseto (5 km)\ntaxi service (Claudio: +39 338 7295102)\n\nFor emergencies: 112 | Medical Guard: 116117\nDoctor by appointment: Dr. Vaziri (€50.00 per visit)\n\nFor environmental care, waste separation points are located along the perimeter road (pedal opening).\n\nWi-Fi connection is available in common areas (bar, restaurant, pool): network CampeggioLeMarze, access via e-mail.\n\nTo help you find your way around, here is a map of the village [PDF FILE]\n\nUseful Information for Pitch Guests\nIf you choose a pitch, you will have all the essential services for a comfortable holiday immersed in nature.\nEach pitch has a 6 A electricity connection (max 1 kW) with a European plug (one connection per pitch). Hot showers are included.\nInside the campsite, you will also find a camper service with water supply and grey/black water disposal.\nA shared barbecue area is available, while for gas cylinders you can rely on PietroGas (Marina di Grosseto), with delivery directly to the village at +39 328 1636024.\nThe parking space is located in the parking area (not on the pitch).",
        image: img("lemarze", "utility-acqua-potabile.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("lemarze", "beach-gitav_gitavillage_le-marze_spiaggia_2021.jpg"),
      img("lemarze", "pool-gitav_gitavillage_le-marze_piscina_2021-.jpeg"),
      img("lemarze", "adventure-gitav_gitavillage_le-marze_parco-avventu.jpg"),
      img("lemarze", "sports-gitav_gitavillage_le-marze_campi-sportiv.jpg"),
      img("lemarze", "bikes-noleggio-bici.jpg"),
      img("lemarze", "pets-gitav_gitavillage_le-marze_pet-friendly_.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Ristorante (Fiorella)", value: "+39 335 6364972", phone: "+393356364972" },
        { label: "Guardiania notturna", value: "+39 333 4800599", phone: "+393334800599" },
        { label: "Taxi (Claudio)", value: "+39 338 7295102", phone: "+393387295102" },
        { label: "PietroGas", value: "328 1636024", phone: "+393281636024" },
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "116117" },
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
    location: "Fonteblanda",
    region: "Costa d'Argento · Toscana",
    tagline: {
      it: "Benvenuti al The Caesar Argentario Osa Resort",
      en: "Welcome to The Caesar Argentario Osa Resort",
    },
    description: {
      it: "Immerso nella quiete della natura e a pochi passi dal mare, il resort è il luogo ideale per rallentare i ritmi e ritrovare il piacere delle cose semplici. Qui trovi tutte le informazioni utili per vivere il tuo soggiorno con serenità, tra comfort, servizi e momenti di puro relax.",
      en: "Nestled in the quiet of nature and just a short distance from the sea, the resort is the perfect place to slow down and rediscover the pleasure of simple things. Here you will find all the information you need to enjoy your stay with ease, surrounded by comfort, services, and moments of pure relaxation.",
    },
    badge: "🏨 Fonteblanda · Costa d'Argento",
    heroImage: img("osaresort", "pool-gitav_the-caesar-hotels_argentario-osa-r.jpeg"),
    cardImage: img("osaresort", "pool-gitav_the-caesar-hotels_argentario-osa-r.jpeg"),
    heroSubtitle: {
      it: "Benvenuti al The Caesar Argentario Osa Resort",
      en: "Welcome to The Caesar Argentario Osa Resort",
    },
    introLabel: "Benvenuti · Welcome",
    introTitleIt: "The Caesar",
    introTitleEm: "Osa Resort",
    theme: "sunset",
    highlights: [],
    services: [
      {
        title: "🕒 Gli Orari",
        titleEn: "Schedules",
        description: "Colazione\nLa giornata comincia con calma: la colazione a buffet è servita dalle 07:30 alle 10:30.\n\nCheck-out\nTi chiediamo di liberare l'alloggio entro le 10:00. Dopo il check-out puoi comunque continuare a usufruire dei servizi della struttura per il resto della giornata.\n\nReception\nLa Reception è aperta 24h su 24. L'orario della cassa è dalle 08:30 alle 22:30",
        descriptionEn: "Breakfast\nStart your day at a relaxed pace: buffet breakfast is served from 07:30 AM to 10:30 AM.\n\nCheck-out\nPlease vacate your accommodation by 10:00 AM. After check-out, you are welcome to continue enjoying the resort's facilities for the rest of the day.\n\nReception\nReception is open 24 hours a day.\nCash desk hours: 08:30 AM – 10:30 PM.",
        image: img("osaresort", "restaurant-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      },
      {
        title: "🍽️ Gusto & Relax",
        titleEn: "Taste & Relax",
        description: "Bar\nAperto tutti i giorni dalle 07:30 alle 24:00.\n\nRistorante & Pizzeria\nA pranzo, dalle 12:00 alle 14:00, è disponibile una carta dedicata.\nLa sera, dalle 20:00, ti aspettano il menù à la carte e le pizze.\nNota: su richiesta prepariamo semplici piatti senza glutine. Ti segnaliamo però che la cucina non è certificata per contaminazioni: per esigenze specifiche, ti invitiamo a contattarci direttamente.\n\nAcqua\nL'acqua negli alloggi è potabile ed è consigliata per cucinare, anche se il gusto potrebbe non essere ottimale.\nL'acqua calda è disponibile solo in bagno.",
        descriptionEn: "Bar\nOpen daily from 07:30 AM to 12:00 AM.\n\nRestaurant & Pizzeria\nLunch is served from 12:00 PM to 02:00 PM with a dedicated menu.\nDinner starts from 08:00 PM, featuring an à la carte menu and freshly baked pizzas.\nSimple gluten-free dishes are available upon request. Please note that the kitchen is not certified for cross-contamination. For specific dietary needs, we kindly invite you to contact us in advance.\n\nWater\nTap water in the accommodations is drinkable and suitable for cooking, although the taste may vary.\nHot water is available in the bathroom only.",
        image: img("osaresort", "utility-gluten-free.jpg"),
      },
      {
        title: "🏊 Esplorare e rilassarsi",
        titleEn: "Explore & Relax",
        description: "Piscina\nLa piscina è aperta ogni giorno dalle 09:00 alle 13:00 e dalle 15:00 alle 19:00. L'uso della cuffia è obbligatorio.\n\nSpiaggia & Convenzioni\nStabilimento IDEAL: Si trova a pochi chilometri dal resort, in direzione Roma, ed è raggiungibile in auto oppure con navetta prenotabile alla Reception.\nStabilimento SINGITA: Mostrando il braccialetto consegnato all'arrivo puoi usufruire del 20% di sconto sui servizi spiaggia e del 10% su food & drink.\n\nNavetta per la spiaggia\nGiugno e Settembre (fino al 14/09)\nAndata: 09:20, 09:50, 10:20, 10:50\nRientro: 12:30, 15:30, 16:30, 17:30\n\nLuglio e Agosto\nAndata: 09:20, 09:50, 10:20, 10:50, 11:20\nRientro: 12:30, 15:30, 16:15, 16:50, 17:30\n\nEscursioni: Puoi prenotare una minicrociera all'isola del Giglio, una gita alle cascate di Saturnia o una passeggiata in carrozza nel Parco della Maremma e tante altre esperienze, chiamando il numero +39 371 3837052.",
        descriptionEn: "Swimming Pool\nOpen daily from 09:00 AM to 01:00 PM and 03:00 PM to 07:00 PM.\nSwimming cap is mandatory.\n\nBeach & Agreements\nIDEAL Beach Club: Located a few kilometres from the resort (towards Rome), reachable by car or via shuttle service bookable at Reception.\nSINGITA Beach Club: By showing the bracelet provided at check-in, you can enjoy 20% discount on beach services and 10% on food & drinks.\n\nShuttle to the Beach\nJune & September (until 14/09)\nOutbound: 09:20, 09:50, 10:20, 10:50\nReturn: 12:30, 03:30 PM, 04:30 PM, 05:30 PM\n\nJuly & August\nOutbound: 09:20, 09:50, 10:20, 10:50, 11:20\nReturn: 12:30, 03:30 PM, 04:15 PM, 04:50 PM, 05:30 PM\n\nExcursions: you can book a mini cruise to Giglio Island, a trip to the Saturnia hot springs or a carriage ride in the Maremma Park, along with many other experiences, by calling +39 371 3837052.",
        image: img("osaresort", "beach-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      },
      {
        title: "⚽ Sport & Animazione",
        titleEn: "Sport & Entertainment",
        description: "Campi sportivi\nSono disponibili calcetto, basket, tennis, ping pong, bocce e volley.\nPer prenotazioni e attrezzatura puoi rivolgerti alla Reception.\n\nIntrattenimento\nDurante la settimana sono previsti laboratori per bambini e spettacoli, con una frequenza di 3-4 volte a settimana. Il programma è disponibile in piscina.\n\nNoleggio teli mare\nIl costo è di € 7,00 al giorno, con cauzione di € 50,00.",
        descriptionEn: "Sports facilities\nFootball, basketball, tennis, table tennis, bowls, and volleyball are available.\nFor bookings and equipment, please contact Reception.\n\nEntertainment\nThroughout the week, there are kids' workshops and evening shows, taking place 3–4 times per week. The full program is available by the pool area.\n\nBeach towel rental\n€ 7.00 per day, with a € 50.00 deposit.",
        image: img("osaresort", "sports-campi-sportivi_2021-21.jpg"),
      },
      {
        title: "🧺 Utilità & Servizi",
        titleEn: "Utilities & Services",
        description: "Pulizie & Biancheria\nCamere: Pulizia giornaliera e cambio biancheria giornaliero su richiesta.\nAppartamenti: È inclusa solo la pulizia finale e la prima fornitura di biancheria.\nUn cambio extra set costa € 10,00 a persona.\nIl riassetto quotidiano, su disponibilità, costa € 30,00.\n\nServizi in loco\nATM in galleria, tra reception e parcheggio\nIsola ecologica nel parcheggio\n\nServizi esterni\nLavanderia a gettoni ad Albinia\nTabacchi a Fonteblanda\n\nAuto elettriche: Le ricariche sono disponibili a Fonteblanda o Albinia.\n\nSicurezza & Emergenze\nPer le emergenze: 112\nGuardia Medica: 0564-869018/19\n\nTransfer: Il servizio transfer è prenotabile con 48 ore di anticipo al numero 0564 1810005.\n\nWi-Fi: La connessione è disponibile nelle aree comuni. Per accedere è sufficiente registrarsi con la tua email.",
        descriptionEn: "Cleaning & Linen\nHotel Rooms: Daily cleaning and daily linen change on request.\nApartments: Includes final cleaning and first linen set only.\nExtra linen set: € 10.00 per person.\nDaily tidying (subject to availability): € 30.00.\n\nOn-site services\nATM in the gallery (between reception and parking area)\nRecycling area in the parking lot\n\nNearby services\nSelf-service laundry in Albinia\nTobacconist in Fonteblanda\n\nElectric cars: Charging stations are available in Fonteblanda and Albinia.\n\nSafety & Emergencies\nEmergency number: 112\nMedical service: +39 0564 869018 / 19\n\nTransfer: The transfer service can be booked at least 48 hours in advance by calling +39 0564 1810005.\n\nWi-Fi: Available in the common areas. To access the service, simply register with your email address.",
        image: img("osaresort", "utility-acqua-potabile.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("osaresort", "pool-gitav_the-caesar-hotels_argentario-osa-r.jpeg"),
      img("osaresort", "beach-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      img("osaresort", "restaurant-gitav_the-caesar-hotels_argentario-osa-r.jpg"),
      img("osaresort", "sports-campi-sportivi_2021-21.jpg"),
      img("osaresort", "entertainment-animazione-serale_varie-28.jpeg"),
      img("osaresort", "utility-navetta.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Escursioni", value: "+39 371 3837052", phone: "+393713837052" },
        { label: "Transfer", value: "0564 1810005", phone: "+3905641810005" },
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "0564-869018/19", phone: "+390564869018" },
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
      it: "Benvenuto al Gitavillage Talamone",
      en: "Welcome to Gitavillage Talamone",
    },
    description: {
      it: "Qui la natura incontra il mare e le giornate scorrono tra relax, sport e piccoli momenti da ricordare. Che tu sia in famiglia, con gli amici o in coppia, troverai il tuo ritmo tra spiaggia, attività e angoli di tranquillità.\n\nPer aiutarti a vivere al meglio ogni momento, qui trovi tutte le informazioni utili durante il soggiorno.",
      en: "Here, nature meets the sea and your days flow between relaxation, activities and little moments to remember. Whether you're travelling with family, friends or as a couple, you'll find your own rhythm between the beach, experiences and quiet corners.\n\nTo help you make the most of every moment, here's everything you need to know during your stay.",
    },
    badge: "⛵ Talamone · Maremma Toscana",
    heroImage: img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
    cardImage: img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
    heroSubtitle: {
      it: "Benvenuto al Gitavillage Talamone",
      en: "Welcome to Gitavillage Talamone",
    },
    introLabel: "Benvenuto · Welcome",
    introTitleIt: "Gitavillage",
    introTitleEm: "Talamone",
    theme: "ocean",
    highlights: [],
    services: [
      {
        title: "🕒 I tuoi tempi in villaggio",
        titleEn: "Your time in the village",
        description: "Al Talamone le giornate iniziano con calma… e finiscono quando vuoi tu.\n\nPuoi partire con una colazione al bar principale, aperto dalle 07:30 alle 00:00, oppure goderti l'atmosfera del Chiringuito, attivo dalle 08:30 alle 23:00.\n\nSe vuoi sederti a tavola, il ristorante Gitavillage Talamone ti aspetta ogni giorno:\npranzo dalle 12:30 alle 14:30\ncena dalle 19:30 alle 22:00\n\nÈ disponibile anche il servizio da asporto, perfetto se vuoi mangiare nel tuo alloggio o all'aria aperta. (Sono disponibili piatti senza glutine semplici, ma la cucina non è certificata.)\n\nCheck-out\nPer la partenza:\ngli alloggi vanno liberati entro le 10:00\nle piazzole entro le 12:00\nDopo il check-out puoi comunque restare e continuare a vivere il villaggio per tutta la giornata.\n\nCircolazione Mezzi: Per la tranquillità di tutti, è vietata la circolazione dei veicoli dalle ore 00:00 alle 08:00.\n\nOrario Reception: dalle 08:30 alle 20:30\nOrario Cassa: dalle 08:30 alle 19:30",
        descriptionEn: "At Talamone, days start slowly… and end whenever you like.\n\nYou can begin with breakfast at the main bar, open from 07:30 to 00:00, or enjoy the relaxed vibe of the Chiringuito, open from 08:30 to 23:00.\n\nIf you'd like to sit down for a meal, the Gitavillage Talamone restaurant welcomes you every day:\nlunch from 12:30 to 14:30\ndinner from 19:30 to 22:00\n\nTakeaway service is also available, perfect if you prefer to eat in your accommodation or outdoors. (Simple gluten-free options are available, but the kitchen is not certified.)\n\nCheck-out\nFor departure:\naccommodations must be vacated by 10:00\npitches must be vacated by 12:00\nAfter check-out, you're welcome to stay and enjoy the village for the rest of the day.\n\nVehicle circulation: for everyone's comfort, vehicles are not allowed from 00:00 to 08:00\n\nReception hours: from 08:30 to 20:30\nCash desk hours: from 08:30 to 19:30",
        image: img("talamone", "restaurant-gitav_gitavillage_talamone_barbecue-2.jpg"),
      },
      {
        title: "🌊 Tra mare, piscina e servizi",
        titleEn: "Between sea, pool and services",
        description: "Qui sei sempre vicino all'acqua, in tutte le sue forme.\n\nSe soggiorni nelle sistemazioni del villaggio (villini, lodge, tende glamping), il servizio spiaggia (1 ombrellone e 2 lettini) è già incluso: ti basta mostrare il braccialetto ai bagnini.\nSe soggiorni in una piazzola, puoi usufruire del noleggio giornaliero (1 ombrellone e 2 lettini) a 15,00 € (Giugno/Luglio/Settembre) e 20,00 € (Agosto). Disponibilità e pagamento presso la Reception.\n\nConvenzione SINGITA: Sconto 20% sui servizi spiaggia e 10% su food & drink (esibendo il braccialetto).\n\nPiscine: La piscina inferiore è aperta dalle 09:00 alle 19:00. Quella superiore osserva una pausa dalle 13:00 alle 15:00. La cuffia non è obbligatoria.\n\nIl minimarket è aperto dalle 08:00 alle 13:00 e dalle 16:00 alle 19:00.\n\nComfort in Alloggio:\nL'acqua è potabile e ottima per cucinare\nL'acqua calda è disponibile solo in bagno.\nCottura: Istruzioni per l'accensione della piastra disponibili in PDF",
        descriptionEn: "Here, you are always close to water, in all its forms.\n\nIf you stay in village accommodations (cottages, lodges, glamping tents), the beach service (1 umbrella + 2 sunbeds) is already included: simply show your wristband to the lifeguards.\nIf you stay on a pitch, you can use the daily rental service (1 umbrella + 2 sunbeds):\n€15 (June/July/September)\n€20 (August)\nAvailability and payment at Reception.\n\nSINGITA agreement:\n20% discount on beach services and 10% on food & drink (by showing your wristband).\n\nPools:\nThe lower pool is open from 09:00 to 19:00.\nThe upper pool closes from 13:00 to 15:00.\nSwimming cap is not required.\n\nThe minimarket is open from 08:00 to 13:00 and from 16:00 to 19:00.\n\nAccommodation comfort\nWater is drinkable and suitable for cooking\nHot water is available only in the bathroom\nCooking: instructions for using the hob are available in PDF",
        image: img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
      },
      {
        title: "🚲 Esperienze da vivere (Sport & Attività)",
        titleEn: "Experiences to enjoy (Sports & Activities)",
        description: "Qui puoi scegliere ogni giorno cosa fare… oppure non fare nulla.\n\nIn Movimento:\nWater Sports (TWKC): Sconto 10% per i nostri ospiti su corsi di gruppo Kitesurf/Windsurf e noleggi lunghi. Info: 329 2426342.\nNoleggio Bici: Ci appoggiamo a partner esterni. Maremma Escursioni [+39 3713837052] o VTC Talamone (+39 347 2607983).\nCanoe & Pedalò: Uso gratuito (30 min) per i nostri ospiti. Rivolgersi ai bagnini.\nEscursioni: Puoi prenotare una minicrociera all'isola del Giglio, una gita alle cascate di Saturnia o una passeggiata in carrozza nel Parco della Maremma e tante altre esperienze, chiamando il numero +39 371 3837052.\n\nSport & Divertimento:\nI campi sportivi sono aperti dalle 08:00 alle 22:00. Il campo da tennis necessita di prenotazione in Reception.\n\nAnimazione: Sono previsti laboratori pomeridiani e spettacoli serali (3/4 volte a settimana).\nInoltre, tutti i giorni lo staff dell'animazione organizza tante attività:\nMattina in spiaggia\nPomeriggio in piscina\nSera in Anfiteatro\n\nControlla il programma in bacheca e scegli cosa fare ogni giorno!\n\nPesca: vietata entro 200m dalla riva (08:30-19:30) durante la stagione balneare.",
        descriptionEn: "Here, you can choose what to do every day… or do nothing at all.\n\nStay active\nWater Sports (TWKC): 10% discount for our guests on group Kitesurf/Windsurf courses and long rentals. Info: +39 329 2426342\nBike rental: we rely on external partners\nMaremma Escursioni [+39 3713837052]\nVTC Talamone [+39 347 2607983]\nCanoes & pedal boats: free use (30 minutes) for our guests. Ask the lifeguards.\nExcursions: you can book a mini cruise to Giglio Island, a trip to Saturnia hot springs or a carriage ride in the Maremma Park, and many other experiences by calling +39 371 3837052.\n\nSports & fun\nSports fields are open from 08:00 to 22:00.\nThe tennis court requires booking at Reception.\n\nEntertainment: afternoon workshops and evening shows (3/4 times per week).\nIn addition, every day the entertainment team organizes activities:\nmorning on the beach\nafternoon at the pool\nevening in the amphitheatre\n\nCheck the notice board and choose what to do every day!\n\nFishing: not allowed within 200 metres from the shore (08:30–19:30) during the bathing season.",
        image: img("talamone", "watersports-gitav_gitavillage_talamone_canoa_2021-12.jpg"),
      },
      {
        title: "🐾 In vacanza con il tuo cane",
        titleEn: "Holiday with your dog",
        description: "Al Gitavillage Talamone il tuo amico a quattro zampe è il benvenuto\n\nPuoi vivere la vacanza insieme a lui, tra natura, spazi aperti e passeggiate vista mare:\nBau beach\nArea agility\n\nTi chiediamo solo qualche attenzione per il rispetto di tutti gli ospiti:\ntienilo sempre al guinzaglio\nutilizza le aree dedicate quando previste\nrispetta gli spazi comuni: non può venire con te in piscina!\n\nPer il resto… godetevi il soggiorno insieme.",
        descriptionEn: "At Gitavillage Talamone, your four-legged friend is welcome.\n\nYou can enjoy your holiday together, surrounded by nature, open spaces and seaside walks:\ndog beach\nagility area\n\nWe kindly ask you to follow a few simple rules for the respect of all guests:\nalways keep your dog on a leash\nuse dedicated areas where provided\nrespect common areas: dogs are not allowed in the pool\n\nFor the rest… enjoy your stay together.",
        image: img("talamone", "pets-gitav_gitavillage_talamone_pet_2022-53.jpg"),
      },
      {
        title: "🧺 Utilità & Emergenze",
        titleEn: "Utilities & Emergencies",
        description: "Lavanderia: trovi lavatrici e asciugatrici a moneta in entrambi i blocchi bagni. € 5,00 a ciclo (monete da 1 o 2 euro), detersivo incluso.\n\nBiancheria: la prima fornitura è inclusa in tutte le sistemazioni (Glamping comprese). Cambi extra a noleggio: € 10,00 a persona per set (lenzuola e asciugamani)\n\nAuto Elettriche: Colonnina di ricarica nel parcheggio all'ingresso: € 3,00 all'ora. Rivolgersi allo staff per l'attivazione.\n\nAcqua potabile: Presente un distributore (naturale/frizzante) vicino alla (€ 0,20/litro).\n\nCircolazione: Carico/scarico consentito ai villini fino alle 00:00. Successivamente le auto devono sostare nel parcheggio principale.\n\nVarie: ATM e Tabacchi disponibili nel paese di Talamone.\n\nEmergenza Medica: 112 | Guardia Medica (non urgenti): 116117.\nMedico su appuntamento: Dott. Barrasso 339 8751224 (a pagamento).\n\nAmbiente: Punto di raccolta differenziata nel parcheggio all'ingresso.\n\nConnessione Wi-Fi: Disponibile nelle aree comuni (piscine e reception). Registrazione tramite e-mail per ricevere il PIN di accesso.\n\nPer orientarti al meglio, qui trovi la mappa del villaggio [FILE PDF]\n\nUtilità per la Piazzola:\nEnergia: ogni piazzola dispone di un attacco luce da 6A (max 1 kw) con spina europea (è consentito 1 solo attacco per piazzola).\nAcqua: Docce calde incluse.\nCamper Service: Ritirare la chiave in Reception. Si trova fuori dal campeggio: uscire dal cancello principale, svoltare a sinistra (senza immettersi sulla provinciale) e procedere dritti.\nBarbecue: è consentito l'uso del barbecue nell'area apposita (non in piazzola).\nIl posto auto è disponibile solo nell'area di fronte alla reception (non in piazzola).",
        descriptionEn: "Laundry: washing machines and dryers are available in both sanitary blocks. €5 per cycle (1€ or 2€ coins), detergent included.\n\nLinen: first supply is included in all accommodations (including glamping). Extra sets available for rent: €10 per person (bed linen and towels).\n\nElectric cars: charging station in the entrance parking area (€3 per hour). Ask staff for activation.\n\nDrinking water: There is a water dispenser (still/sparkling) nearby (€0.20 per litre).\n\nCirculation: loading/unloading allowed near the cottages until 00:00. After that, cars must be parked in the main parking area.\n\nOther services: ATM and tobacco shop available in the village of Talamone.\n\nMedical emergency: 112\nMedical service (non-urgent): 116117\nDoctor by appointment: Dr. Barrasso +39 339 8751224 (paid service).\n\nEnvironment: waste sorting area in the entrance parking.\n\nWi-Fi: available in common areas (pools and reception). Registration via email required to receive access PIN.\n\nTo help you find your way around, here is a map of the village [PDF FILE]\n\nPitch utilities:\nElectricity: each pitch has a 6A connection (max 1 kW) with European plug (only one connection per pitch allowed).\nWater: hot showers included.\nCamper service: collect the key at Reception. It is located outside the campsite: exit the main gate, turn left (without entering the main road) and go straight.\nBarbecue: allowed only in the designated area (not on the pitch).\nParking space is available only in the area in front of Reception (not on the pitch).",
        image: img("talamone", "utility-pesca.jpg"),
      },
    ],
    hours: [],
    benefits: [],
    gallery: [
      img("talamone", "beach-gitav_gitavillage_talamone_spiaggia_2021.jpg"),
      img("talamone", "pool-gitav_gitavillage_talamone_piscina_2021-.jpg"),
      img("talamone", "watersports-gitav_gitavillage_talamone_canoa_2021-12.jpg"),
      img("talamone", "entertainment-gitavillage-talamone_animazione_spettaco.jpg"),
      img("talamone", "sports-gitav_gitavillage_talamone_water-sport_2.png"),
      img("talamone", "pets-gitav_gitavillage_talamone_pet_2022-53.jpg"),
    ],
    rules: [],
    contacts: {
      numbers: [
        { label: "Water Sports (TWKC)", value: "329 2426342", phone: "+393292426342" },
        { label: "Maremma Escursioni", value: "+39 3713837052", phone: "+393713837052" },
        { label: "VTC Talamone", value: "+39 347 2607983", phone: "+393472607983" },
        { label: "Dott. Barrasso", value: "339 8751224", phone: "+393398751224" },
        { label: "Emergenze", value: "112" },
        { label: "Guardia Medica", value: "116117" },
      ],
    },
    pdfs: [],
  },
];

export function getHotelBySlug(slug: string): Hotel | undefined {
  return hotels.find((h) => h.slug === slug);
}
