import type { ImageMetadata } from "astro";

import acupuncturaClasica from "@/assets/services/acupunctura_clasica.webp";
import apipunctura from "@/assets/services/apipunctura.webp";
import apiterapie from "@/assets/services/apiterapie.webp";
import aromaterapie from "@/assets/services/aromaterapie.webp";
import electroacupunctura from "@/assets/services/electroacupunctura.webp";
import fitoterapie from "@/assets/services/fitoterapie.webp";
import homeomezoterapie from "@/assets/services/homeomezoterapie.webp";
import homeopatie from "@/assets/services/homeopatie.webp";
import magnetic from "@/assets/services/magnetic.webp";
import moxibustie from "@/assets/services/moxibustie.webp";
import sujok from "@/assets/services/sujok.webp";
import terapieFloralaBach from "@/assets/services/terapie_florala_bach.webp";

export interface ServiceDefinition {
  slug: string;
  title: string;
  blurb: string;
  price: string | number;
  image: ImageMetadata;
  intro: string;
  details: string[];
  benefits: string[];
  extraNotes?: string;
  keywords?: string[];
}

export const services: ServiceDefinition[] = [
  {
    slug: "acupunctura-clasica-chineza",
    title: "Acupunctură Clasică Chineză",
    blurb:
      "Restabilește fluxul energetic și activează mecanismele naturale de vindecare prin stimularea punctelor de acupunctură cu ace fine, sterile.",
    price: "La cerere",
    image: acupuncturaClasica,
    intro:
      "Acupunctura tradițională este fundamentul medicinei chineze și urmărește echilibrarea Qi-ului (energia vitală) prin stimularea unor puncte specifice. Prin integrarea diagnosticului pulsului, observației limbii și evaluării simptomelor, tratamentul este adaptat pentru a susține recuperarea pe toate planurile.",
    details: [
      "Fiecare sesiune este concepută pentru a relaxa corpul, a diminua durerea și a restabili conexiunea dintre minte și corp. În funcție de nevoi, terapiile pot fi completate cu tehnici de cupping, masaj Tui Na sau consiliere nutrițională pentru a menține rezultatele.",
      "Abordarea poate fi combinată cu metode occidentale pentru o recuperare mai rapidă, fiind potrivită atât pentru afecțiuni cronice, cât și pentru dezechilibre emoționale sau tulburări funcționale.",
    ],
    benefits: [
      "Reducerea durerilor acute și cronice",
      "Îmbunătățirea calității somnului",
      "Reglarea sistemului nervos și hormonal",
      "Suport pentru fertilitate și sănătate reproductivă",
      "Creșterea rezilienței la stres",
    ],
  },
  {
    slug: "su-jok",
    title: "Su Jok",
    blurb:
      "Metodă coreeană care mapează organele pe palme și tălpi; stimularea punctelor reflexe reactivează fluxul energetic și reduce durerea.",
    price: "La cerere",
    image: sujok,
    intro:
      "Su Jok este o variantă rafinată a acupuncturii ce concentrează diagnosticul și tratamentul pe mâini și picioare. Fiecare organ și meridian este reflectat în aceste zone, iar stimularea lor ajută la reglarea rapidă a dezechilibrelor energetice.",
    details: [
      "Tehnica implică folosirea de ace foarte fine, semințe, magneți sau bile presopunctură pentru a activa punctele corespunzătoare. Este o metodă blândă, adaptată atât adulților cât și copiilor, fiind utilă în special celor care preferă abordări minim invazive.",
      "În cabinet, Su Jok este frecvent integrată în planurile de tratament pentru dureri articulare, tulburări digestive, anxietate și oboseală cronică, completând sesiunile clasice de acupunctură.",
    ],
    benefits: [
      "Intervenție rapidă pentru dureri acute",
      "Potrivită pentru pacienți sensibili la ace",
      "Poate fi susținută cu auto-tratament ghidat",
      "Îmbunătățește circulația și mobilitatea",
    ],
  },
  {
    slug: "moxibustie",
    title: "Moxibustie",
    blurb:
      "Aplicarea căldurii controlate cu pelin pentru a încălzi meridianele, a elimina frigul și a relaxa musculatura.",
    price: "La cerere",
    image: moxibustie,
    intro:
      "Moxibustia utilizează planta Artemisia vulgaris (pelin) pentru a induce căldură controlată asupra punctelor de acupunctură. Energia termică pătrunde în profunzime, reactivează circulația sângelui și Qi-ului și îndepărtează frigul și umezeala din corp.",
    details: [
      "Tratamentul poate fi aplicat direct (cu moxa taiată) sau indirect, prin intermediul acelor sau a unor dispozitive speciale. În funcție de diagnostic, este combinată cu acupunctură clasică pentru a consolida efectele.",
    ],
    benefits: [
      "Încălzire și relaxare musculară",
      "Ameliorarea durerilor articulare",
      "Reglarea digestiei și a metabolismului",
      "Stimularea imunității în sezoanele reci",
    ],
  },
  {
    slug: "electroacupunctura",
    title: "ElectroAcupunctură",
    blurb:
      "Combină acupunctura tradițională cu stimulare electrică blândă pentru rezultate eficiente în controlul durerii și relaxarea musculară.",
    price: "La cerere",
    image: electroacupunctura,
    intro:
      "Electroacupunctura amplifică efectul acelor clasice prin curenți electrici de joasă frecvență. Intensitatea și ritmul sunt ajustate personalizat pentru a obține relaxarea musculaturii și o stimulare nervoasă precisă.",
    details: [
      "Metoda este recomandată în special în recuperarea ortopedică, neuropatii periferice și dureri cronice rezistente la alte tratamente. Monitorizarea atentă asigură un nivel de confort optim pe tot parcursul sesiunii.",
    ],
    benefits: [
      "Reducerea rapidă a intensității durerii",
      "Decontractură musculară eficientă",
      "Stimularea proceselor naturale de vindecare",
      "Susținerea recuperării post-traumatice",
    ],
  },
  {
    slug: "homeomezoterapie",
    title: "Homeomezoterapie",
    blurb:
      "Remedii homeopatice injectate în zonele țintite pentru efecte rapide asupra durerii și inflamației.",
    price: "La cerere",
    image: homeomezoterapie,
    intro:
      "Homeomezoterapia îmbină principiile homeopatiei cu micro-injecții localizate în zonele afectate sau pe punctele de acupunctură. Astfel, substanțele active acționează direct acolo unde corpul are nevoie de susținere.",
    details: [
      "Tehnica este minim invazivă și utilizează soluții diluate, special selecționate pentru simptomele pacientului. Dr. Pavlișan personalizează fiecare formulă pentru a accelera recuperarea și a reduce dependența de antiinflamatoare clasice.",
    ],
    benefits: [
      "Calmarea durerii și a inflamației",
      "Regenerare tisulară accelerată",
      "Detoxifiere locală",
      "Îmbunătățirea mobilității articulațiilor",
    ],
  },
  {
    slug: "apipunctura",
    title: "Apipunctură",
    blurb:
      "Venin de albine aplicat terapeutic pe punctele de acupunctură sub supraveghere medicală specializată.",
    price: "La cerere",
    image: apipunctura,
    intro:
      "Apipunctura folosește veninul de albine pentru a stimula punctele energetice, având efecte antiinflamatorii, imunomodulatoare și analgezice. Terapia este realizată exclusiv după testarea sensibilității pentru a asigura siguranța fiecărui pacient.",
    details: [
      "În cabinet, aplicarea se face fie cu acul albinei, fie prin preparate standardizate. Sesiunile sunt atent dozate și monitorizate, iar protocolul include măsuri de protecție și consiliere pentru îngrijirea de după tratament.",
    ],
    benefits: [
      "Efect antiinflamator intens",
      "Suport pentru sistemul imunitar",
      "Ameliorarea durerilor articulare și reumatismale",
      "Stimulare circulatorie locală",
    ],
    extraNotes:
      "Înainte de prima ședință se efectuează un test de sensibilitate la veninul de albine pentru a preveni reacțiile alergice.",
  },
  {
    slug: "biomagnetic-pair-therapy",
    title: "Biomagnetic Pair Therapy",
    blurb:
      "Câmpuri magnetice plasate pe punctele energetice pentru a susține circulația și regenerarea.",
    price: "La cerere",
    image: magnetic,
    intro:
      "Terapia cu perechi biomagnetice echilibrează pH-ul corpului prin aplicarea simultană a magneților cu polarități opuse. Corectarea dezechilibrelor acide și alcaline ajută la reducerea inflamației și la susținerea mecanismelor naturale de apărare.",
    details: [
      "Sesiunea începe cu evaluarea zonelor afectate, iar magneții sunt poziționați strategic pentru a restabili armonia bioelectrică. Metoda este neinvazivă și complet nedureroasă, fiind potrivită pentru pacienți de toate vârstele.",
    ],
    benefits: [
      "Reechilibrarea mediului intern",
      "Susținerea imunității",
      "Reducerea oboselii cronice",
      "Îmbunătățirea proceselor metabolice",
    ],
  },
  {
    slug: "homeopatie",
    title: "Homeopatie",
    blurb:
      "Remedii homeopatice individualizate care stimulează capacitatea de autoreglare a organismului și armonizează nivelurile fizic și emoțional.",
    price: "La cerere",
    image: homeopatie,
    intro:
      "Homeopatia abordează persoana în ansamblu, selectând remedii diluate care oglindesc tabloul simptomatic al pacientului. Prin stimularea capacității de autoreglare, organismul este sprijinit să treacă de la dezechilibru la armonie.",
    details: [
      "Consultația homeopată include discuții detaliate despre istoricul medical, factorii emoționali și stilul de viață. Planul terapeutic poate fi integrat cu acupunctură sau alte terapii pentru a accelera recuperarea și a preveni recidivele.",
    ],
    benefits: [
      "Armonizarea nivelului emoțional",
      "Susținerea imunității",
      "Reducerea dependenței de medicație alopată",
      "Abordare blândă pentru copii și gravide",
    ],
  },
  {
    slug: "apiterapie",
    title: "Apiterapie",
    blurb:
      "Produse apicole precum miere, propolis și polen integrate terapeutic pentru efecte antiinflamatorii, imunostimulatoare și regenerative.",
    price: "La cerere",
    image: apiterapie,
    intro:
      "Apiterapia valorifică nutrienții și compușii activi din produsele stupului pentru a sprijini procesele de vindecare. Preparatele sunt selectate și dozate medical pentru a răspunde nevoilor individuale ale pacienților.",
    details: [
      "În funcție de diagnostic, pot fi recomandate tincturi cu propolis, creme cu venin de albine, suplimente cu lăptișor de matcă sau formule apicole combinate. Monitorizarea atentă asigură rezultate eficiente și minimizează riscul de sensibilități.",
    ],
    benefits: [
      "Imunostimulare naturală",
      "Reducerea inflamației",
      "Regenerare tisulară",
      "Suport pentru refacerea energiei",
    ],
  },
  {
    slug: "fitoterapie",
    title: "Fitoterapie",
    blurb:
      "Extracte din plante medicinale atent dozate pentru a susține organele țintă, detoxifiere și recuperare naturală.",
    price: "La cerere",
    image: fitoterapie,
    intro:
      "Fitoterapia folosește puterea plantelor medicinale pentru a susține organele aflate în dezechilibru și pentru a accelera detoxifierea. Preparatele sunt selectate după criterii fitoterapice moderne și sigure.",
    details: [
      "Planurile terapeutice includ infuzii, tincturi, extracte hidroalcoolice sau suplimente standardizate. Recomandările sunt adaptate sezonului și condiției pacientului, fiind armonizate cu alte terapii disponibile în cabinet.",
    ],
    benefits: [
      "Detoxifiere blândă",
      "Susținerea funcției hepatice și renale",
      "Reducerea inflamației și a durerii",
      "Sprijin pentru echilibrul hormonal",
    ],
  },
  {
    slug: "aromaterapie",
    title: "Aromaterapie",
    blurb:
      "Uleiuri esențiale pure, administrate prin inhalare sau masaj, pentru relaxare profundă, echilibru emoțional și suport respirator.",
    price: "La cerere",
    image: aromaterapie,
    intro:
      "Aromaterapia utilizează uleiuri esențiale de cea mai bună calitate pentru a interveni asupra sistemului nervos și respirator. Mirosurile selectate atent influențează direct starea emoțională, induc relaxare și stimulează mecanismele naturale de apărare.",
    details: [
      "Protocolul poate include inhalare controlată, masaj cu uleiuri diluate sau difuzare ambientală în timpul ședințelor. Alegerea sinergiilor se face ținând cont de istoricul pacientului și de obiectivele terapeutice stabilite împreună.",
    ],
    benefits: [
      "Reducerea stresului și anxietății",
      "Îmbunătățirea calității somnului",
      "Susținerea funcției respiratorii",
      "Stimularea stării de bine generale",
    ],
  },
  {
    slug: "terapie-florala-bach",
    title: "Terapie Florală Bach",
    blurb:
      "Esențe florale Bach alese personalizat pentru armonizarea emoțiilor, diminuarea stresului și susținerea transformărilor interioare.",
    price: "La cerere",
    image: terapieFloralaBach,
    intro:
      "Terapia florală Bach lucrează cu esențe vibrationale care ajută la echilibrarea stărilor emoționale negative. Prin identificarea emoțiilor predominante și a tiparelor comportamentale, se compune un amestec unic pentru fiecare pacient.",
    details: [
      "Remediile pot fi folosite singure sau integrate în planul terapeutic complex pentru a facilita vindecarea emoțională, dezvoltarea rezilienței și claritatea mentală. Consilierea periodică ajută la ajustarea formulei pe parcurs.",
    ],
    benefits: [
      "Gestionarea stresului și a anxietății",
      "Stabilizarea emoțiilor fluctuante",
      "Susținerea proceselor de transformare personală",
      "Îmbunătățirea relației cu sine și cu ceilalți",
    ],
  },
];
