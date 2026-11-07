"use strict";

/* ==========================================================
   catalogo-dati.js — DONNÉES PARTAGÉES
   Chargé par produits.html ET prodotto.html.
   Pour modifier un titre, une description, un prix ou une
   image, modifie UNIQUEMENT ce fichier.
   ========================================================== */

// Clé unique du panier (utilisée par les deux pages)
const CART_KEY = "lunévia_cart";

/* ==========================================================
   ZONA 1 — TITOLI DEI PRODOTTI
   Aggiungi o modifica i nomi qui.
   Ogni catalogo contiene 21 prodotti.
   ========================================================== */

const ZONA_TITOLI = {

    arredamento: `
Divano modulare di design|
Poltrona ergonomica premium|
Tavolino da salotto moderno|
Tavolo da pranzo elegante|
Sedia di design imbottita|
Libreria contemporanea|
Mobile TV minimalista|
Letto matrimoniale imbottito|
Materasso ergonomico premium|
Comodino di design|
Armadio modulare moderno|
Lampada da terra elegante|
Lampadario contemporaneo|
Specchio decorativo grande|
Tappeto artigianale premium|
Tende oscuranti eleganti|
Set di cuscini decorativi|
Orologio da parete moderno|
Quadro decorativo da soggiorno|
Mensole da parete di design|
Cassettiera contemporanea
    `,

    cucina: `
Robot da cucina multifunzione|
Macchina da caffè automatica|
Forno elettrico multifunzione|
Friggitrice ad aria premium|
Impastatrice planetaria|
Frigorifero compatto premium|
Lavastoviglie da incasso|
Piano cottura a induzione|
Set professionale di pentole|
Set completo di coltelli da cucina|
Estrattore di succo professionale|
Frullatore ad alta potenza|
Macchina per il pane automatica|
Griglia elettrica professionale|
Cantinetta per vini|
Macchina sottovuoto alimentare|
Set di stoviglie di design|
Set di padelle antiaderenti|
Dispenser d'acqua filtrante|
Bilancia da cucina professionale|
Macchina per pasta fresca
    `,

    informatica: `
Computer portatile professionale|
Computer desktop ad alte prestazioni|
Monitor 4K professionale|
Stampante multifunzione laser|
Tablet professionale|
Smartphone di fascia alta|
Smartwatch multifunzione|
Cuffie wireless premium|
Altoparlante Bluetooth premium|
Videoproiettore Full HD|
Router Wi-Fi ad alta velocità|
Sistema mesh Wi-Fi|
Tastiera meccanica professionale|
Mouse ergonomico wireless|
Webcam professionale 4K|
Microfono USB da studio|
Disco SSD esterno ad alta capacità|
NAS per archiviazione domestica|
Monitor gaming ad alta frequenza|
Docking station professionale|
Sistema audio surround
    `,

    moda: `
Borsa in pelle di design|
Borsa da lavoro elegante|
Valigia rigida da viaggio|
Orologio da polso elegante|
Occhiali da sole premium|
Giacca invernale di qualità|
Cappotto classico sartoriale|
Sneakers di design|
Scarpe eleganti in pelle|
Stivali in pelle premium|
Zaino urbano multifunzione|
Portafoglio in pelle|
Cintura in pelle italiana|
Set di gioielli eleganti|
Collana dal design contemporaneo|
Bracciale raffinato|
Orecchini di design|
Sciarpa in cashmere|
Abito elegante da sera|
Giacca sportiva premium|
Borsa da viaggio capiente
    `,

    bellezza: `
Specchio cosmetico illuminato premium|
Asciugacapelli professionale|
Piastra per capelli professionale|
Arricciacapelli multifunzione|
Set professionale per manicure|
Poltrona massaggiante premium|
Massaggiatore elettrico multifunzione|
Epilatore elettrico premium|
Spazzolino elettrico avanzato|
Idropulsore dentale professionale|
Purificatore d'aria personale|
Sauna facciale domestica|
Dispositivo per pulizia del viso|
Set di strumenti per skincare|
Lampada professionale per unghie|
Bilancia pesapersone intelligente|
Rasoio elettrico premium|
Regolabarba professionale|
Diffusore di aromi premium|
Set per massaggio rilassante|
Specchio da trucco professionale
    `,

    sport: `
Tapis roulant pieghevole premium|
Bicicletta da spinning professionale|
Ellittica per allenamento domestico|
Panca multifunzione da palestra|
Set di manubri regolabili|
Stazione fitness multifunzione|
Vogatore per allenamento indoor|
Cyclette con display digitale|
Sacco da boxe professionale|
Tavolo da ping pong pieghevole|
Bicicletta da trekking premium|
Monopattino sportivo premium|
Tenda da campeggio familiare|
Bicicletta elettrica sportiva|
Set da golf professionale|
Tavolo da biliardo compatto|
Paddleboard gonfiabile premium|
Kayak gonfiabile da escursione|
Rastrelliera per attrezzatura sportiva|
Panca per sollevamento pesi|
Sistema di allenamento a cavi
    `,

    giardino: `
Set da giardino in rattan|
Tavolo da esterno allungabile|
Set di sedie da terrazza|
Pergola da giardino premium|
Ombrellone da giardino grande|
Lettino prendisole regolabile|
Barbecue a gas professionale|
Tagliaerba elettrico premium|
Robot tagliaerba intelligente|
Motosega elettrica professionale|
Soffiatore per foglie potente|
Idropulitrice ad alta pressione|
Sistema di irrigazione intelligente|
Serra da giardino modulare|
Fontana decorativa da esterno|
Fioriera verticale di design|
Casetta da giardino resistente|
Set di attrezzi da giardinaggio|
Compostiera da giardino premium|
Doccia solare da esterno|
Stufa da terrazza premium
    `,

    animali: `
Cuccia ortopedica per cani premium|
Trasportino rigido per animali|
Passeggino per cani di taglia piccola|
Tiragraffi alto multifunzione|
Albero tiragraffi con piattaforme|
Fontanella automatica per animali|
Distributore automatico di cibo|
Telecamera interattiva per animali|
Recinto modulare per cani|
Gabbia spaziosa per piccoli animali|
Acquario completo premium|
Filtro esterno per acquario|
Terrario professionale attrezzato|
Toelettatore elettrico professionale|
Tavolo da toelettatura per cani|
Cuccia da esterno isolata|
Zaino da trasporto per animali|
Letto rialzato per cani|
Lettiera automatica intelligente|
Cancello di sicurezza per animali|
Kit professionale per addestramento
    `,

    bambini: `
Passeggino modulare premium|
Seggiolino auto per bambini|
Lettino evolutivo per neonati|
Fasciatoio con cassetti|
Seggiolone evolutivo premium|
Baby monitor con videocamera|
Culla co-sleeping regolabile|
Marsupio ergonomico premium|
Carrozzina combinata completa|
Box gioco per bambini|
Sedia da allattamento confortevole|
Sterilizzatore elettrico per biberon|
Scaldabiberon multifunzione|
Seggiolino da bicicletta per bambini|
Bicicletta senza pedali premium|
Tavolo attività educativo|
Libreria Montessori per bambini|
Armadio per cameretta modulare|
Tenda gioco per bambini|
Materasso per lettino premium|
Sistema di sicurezza domestica per bambini
    `,

    auto: `
Monopattino elettrico premium|
Bicicletta elettrica urbana|
Dashcam anteriore e posteriore|
Sistema di navigazione GPS premium|
Compressore d'aria per auto|
Caricabatterie intelligente per auto|
Avviatore portatile per batteria|
Aspirapolvere per auto professionale|
Idropulitrice portatile per auto|
Set professionale per lucidatura auto|
Portabici da gancio traino|
Box da tetto per automobile|
Seggiolino auto evolutivo|
Frigorifero portatile per auto|
Telecamera di parcheggio avanzata|
Sistema di sensori di parcheggio|
Caricatore wireless per automobile|
Kit attrezzi meccanici professionali|
Supporto da officina per motocicli|
Casco da moto premium|
Scooter elettrico urbano
    `,

    ufficio: `
Scrivania regolabile elettrica|
Sedia ergonomica professionale|
Scrivania direzionale di design|
Stampante laser multifunzione|
Scanner documentale professionale|
Distruggidocumenti ad alta capacità|
Proiettore per sala riunioni|
Monitor professionale ultrawide|
Computer workstation professionale|
Telefono da conferenza professionale|
Tavolo da riunione modulare|
Cassaforte digitale professionale|
Armadio archivio metallico|
Cassettiere professionali per ufficio|
Lavagna interattiva digitale|
Videoconferenza con telecamera 4K|
Etichettatrice professionale|
Plastificatrice professionale|
Rilegatrice per documenti|
Laminatrice professionale per ufficio|
Sistema UPS di continuità elettrica
    `
};


/* ==========================================================
   ZONA 2 — DESCRIZIONI DEI PRODOTTI
   Modifica qui le descrizioni dei singoli prodotti.
   Le descrizioni sono organizzate per catalogo.
   ========================================================== */

const ZONA_DESCRIZIONI = {

    arredamento: `
Un complemento elegante per valorizzare gli spazi della casa.|
Comfort e stile contemporaneo per un ambiente accogliente.|
Un elemento funzionale dal design raffinato.|
Perfetto per creare un ambiente conviviale e moderno.|
Una seduta confortevole con finiture curate.|
Organizza libri e oggetti con eleganza.|
Una soluzione moderna per organizzare la zona televisiva.|
Un letto raffinato progettato per il riposo quotidiano.|
Un supporto confortevole per un riposo di qualità.|
Un complemento pratico per una camera ordinata.|
Una soluzione versatile per organizzare gli abiti.|
Illumina gli ambienti con una luce accogliente.|
Un punto luce elegante per interni contemporanei.|
Uno specchio decorativo che amplia visivamente gli spazi.|
Aggiunge personalità e comfort agli ambienti.|
Una soluzione elegante per gestire la luce naturale.|
Cuscini decorativi per rinnovare il soggiorno.|
Un orologio funzionale dal carattere contemporaneo.|
Una decorazione pensata per valorizzare le pareti.|
Mensole pratiche per esporre libri e accessori.|
Spazio aggiuntivo e stile per ogni ambiente.
    `,

    cucina: `
Un elettrodomestico versatile per semplificare la preparazione dei pasti.|
Prepara il caffè con praticità e gusto.|
Cottura versatile per ricette quotidiane e speciali.|
Prepara pietanze croccanti con meno olio.|
Ideale per impasti, dolci e preparazioni casalinghe.|
Una soluzione pratica per conservare gli alimenti.|
Organizza il lavaggio delle stoviglie con efficienza.|
Precisione e controllo per le tue ricette.|
Pentole versatili per diverse tecniche di cottura.|
Strumenti pratici per tagli precisi in cucina.|
Per preparare succhi freschi e bevande alla frutta.|
Potenza e versatilità per frullati e salse.|
Prepara pane fresco direttamente a casa.|
Per grigliare carne, verdure e altri alimenti.|
Conserva le bottiglie in modo ordinato.|
Aiuta a conservare gli alimenti più a lungo.|
Stoviglie eleganti per la tavola di tutti i giorni.|
Padelle versatili per molte preparazioni.|
Una soluzione pratica per l'acqua da bere.|
Misurazioni precise per ricette ben riuscite.|
Prepara pasta fresca con risultati uniformi.
    `,

    informatica: `
Una soluzione versatile per studio, lavoro e intrattenimento.|
Prestazioni adatte a molte attività professionali.|
Immagini dettagliate per lavorare e creare contenuti.|
Stampa e scansione in un'unica soluzione.|
Un dispositivo pratico per produttività e intrattenimento.|
Funzioni moderne per comunicazione e contenuti multimediali.|
Monitora attività quotidiane e notifiche compatibili.|
Audio coinvolgente per musica, chiamate e contenuti.|
Suono wireless per casa, ufficio e viaggi.|
Proietta contenuti su uno schermo di grandi dimensioni.|
Connessione di rete per dispositivi compatibili.|
Estende la copertura della rete negli ambienti.|
Digitazione precisa per lavoro e gaming.|
Controllo confortevole per attività quotidiane.|
Video nitido per riunioni e streaming.|
Uno strumento versatile per registrazioni e riunioni.|
Archivia file e documenti con praticità.|
Centralizza l'archiviazione dei dati nella rete domestica.|
Un display progettato per un'esperienza gaming coinvolgente.|
Collega periferiche e accessori alla postazione di lavoro.|
Un sistema audio per un'esperienza multimediale immersiva.
    `,

    moda: `
Un accessorio versatile per completare diversi outfit.|
Eleganza e praticità per gli impegni professionali.|
Spazio organizzato per viaggi e spostamenti.|
Un accessorio classico per completare il proprio stile.|
Un complemento raffinato per le giornate di sole.|
Un capo versatile per affrontare le giornate fredde.|
Uno stile senza tempo per occasioni diverse.|
Calzature moderne per un look urbano.|
Un modello elegante per occasioni formali.|
Stivali versatili con uno stile deciso.|
Uno zaino pratico per la vita urbana.|
Organizza carte e contanti con eleganza.|
Un accessorio classico da abbinare a diversi look.|
Un insieme coordinato per occasioni speciali.|
Un gioiello raffinato dal carattere moderno.|
Un accessorio elegante per completare il look.|
Orecchini dal design ricercato per diverse occasioni.|
Un accessorio morbido per completare gli outfit.|
Un abito pensato per eventi e serate eleganti.|
Uno strato versatile per uno stile dinamico.|
Una borsa capiente per organizzare gli spostamenti.
    `,

    bellezza: `
Un accessorio pratico per la routine di bellezza quotidiana.|
Asciugatura pratica per diverse esigenze di styling.|
Aiuta a creare acconciature lisce con praticità.|
Uno strumento versatile per realizzare diverse acconciature.|
Strumenti organizzati per la cura delle unghie.|
Una soluzione per rilassarsi comodamente a casa.|
Aiuta a rilassare i muscoli dopo una giornata intensa.|
Uno strumento elettrico per la cura personale.|
Supporta l'igiene orale quotidiana.|
Una soluzione complementare per l'igiene dentale.|
Contribuisce a migliorare la qualità dell'aria negli ambienti.|
Un accessorio per una routine viso rilassante.|
Un dispositivo dedicato alla pulizia del viso.|
Accessori pratici per organizzare la cura della pelle.|
Per realizzare manicure curate a casa.|
Uno strumento pratico per controllare il peso corporeo.|
Una soluzione per la rasatura quotidiana.|
Per regolare barba e baffi con precisione.|
Diffonde fragranze negli ambienti domestici.|
Accessori dedicati a momenti di relax.|
Una superficie illuminata per un trucco preciso.
    `,

    sport: `
Una soluzione pratica per allenarsi in casa.|
Allenamento cardiovascolare in uno spazio dedicato.|
Un attrezzo per esercizi a basso impatto.|
Supporto versatile per esercizi di forza.|
Pesi regolabili per allenamenti progressivi.|
Una postazione per esercizi di diversi gruppi muscolari.|
Un allenamento completo con movimento fluido.|
Per pedalare comodamente in casa.|
Attrezzatura per allenamenti di boxe.|
Un tavolo per partite e allenamenti in famiglia.|
Una bicicletta pensata per percorsi e uscite.|
Un mezzo pratico per attività sportive urbane.|
Riparo e comfort per campeggio ed escursioni.|
Mobilità elettrica per spostamenti e tempo libero.|
Accessori per allenarsi e giocare a golf.|
Una soluzione compatta per il biliardo ricreativo.|
Un'attrezzatura per esplorare acque calme.|
Per escursioni e attività ricreative sull'acqua.|
Organizza attrezzi e accessori per allenamento.|
Supporto per esercizi di forza e pesistica.|
Una struttura versatile per allenamenti muscolari.
    `,

    giardino: `
Arredi coordinati per rilassarsi all'aperto.|
Un tavolo pratico per pranzi e incontri in giardino.|
Sedute comode per terrazze e spazi esterni.|
Una struttura per creare una zona d'ombra.|
Protezione dal sole per giardini e terrazze.|
Un lettino regolabile per momenti di relax.|
Per preparare grigliate e pasti all'aperto.|
Uno strumento pratico per la cura del prato.|
Automatizza la manutenzione del prato compatibile.|
Attrezzatura per tagliare il legno e curare il giardino.|
Aiuta a raccogliere foglie e residui vegetali.|
Per pulire superfici esterne e attrezzature.|
Gestione pratica dell'irrigazione delle piante.|
Uno spazio protetto per coltivare piante e ortaggi.|
Un elemento decorativo per gli spazi esterni.|
Valorizza balconi, terrazze e giardini.|
Spazio protetto per attrezzi e accessori da esterno.|
Strumenti pratici per la manutenzione del verde.|
Una soluzione per trasformare gli scarti organici.|
Per una doccia rinfrescante negli spazi esterni.|
Una fonte di calore per le serate all'aperto.
    `,

    animali: `
Una superficie confortevole per il riposo del cane.|
Trasporto pratico per animali di diverse dimensioni compatibili.|
Una soluzione per accompagnare piccoli animali in passeggiata.|
Uno spazio dedicato al gioco e alla cura delle unghie feline.|
Piattaforme per arrampicarsi e riposare.|
Acqua in movimento per gli animali domestici.|
Aiuta a gestire gli orari di alimentazione.|
Permette di osservare gli animali da remoto.|
Una zona delimitata per il movimento controllato.|
Uno spazio organizzato per piccoli animali.|
Una soluzione per allestire un ambiente acquatico.|
Un sistema per mantenere l'acqua in movimento e filtrata.|
Una struttura per ambienti adatti a specie compatibili.|
Strumenti per la cura del pelo degli animali.|
Una superficie stabile per la toelettatura.|
Riparo esterno per animali domestici.|
Un accessorio per trasportare animali durante le uscite.|
Un posto rialzato per il riposo del cane.|
Una soluzione automatizzata per la gestione della lettiera.|
Aiuta a delimitare aree della casa.|
Accessori per attività educative e addestramento.
    `,

    bambini: `
Una soluzione versatile per gli spostamenti con il bambino.|
Un dispositivo di sicurezza da scegliere secondo età e statura.|
Un lettino progettato per accompagnare la crescita.|
Uno spazio pratico per il cambio e l'organizzazione.|
Una seduta pensata per i pasti del bambino.|
Controllo visivo del bambino da un dispositivo compatibile.|
Una culla progettata per stare vicino al letto dei genitori.|
Un supporto ergonomico per portare il bambino.|
Una soluzione completa per le passeggiate quotidiane.|
Uno spazio delimitato per il gioco sotto supervisione.|
Una seduta confortevole per momenti di allattamento.|
Un accessorio per la pulizia dei biberon.|
Aiuta a portare i biberon alla temperatura desiderata.|
Una soluzione per le uscite in bicicletta in sicurezza.|
Una bicicletta per familiarizzare con l'equilibrio.|
Un tavolo dedicato alle attività creative ed educative.|
Organizza libri e materiali nella cameretta.|
Spazio pratico per vestiti e accessori.|
Un angolo dedicato al gioco e alla fantasia.|
Un supporto per il riposo nel lettino compatibile.|
Accessori per rendere gli ambienti più sicuri.
    `,

    auto: `
Un mezzo elettrico per spostamenti urbani compatibili.|
Una soluzione elettrica per tragitti quotidiani.|
Registra immagini durante gli spostamenti in auto.|
Supporto per la navigazione e gli itinerari.|
Per controllare e gonfiare gli pneumatici compatibili.|
Una soluzione per la ricarica controllata della batteria.|
Aiuta ad avviare veicoli con batteria compatibile.|
Per rimuovere polvere e residui dall'abitacolo.|
Una soluzione portatile per la pulizia dell'auto.|
Accessori per la cura delle superfici della carrozzeria.|
Per trasportare biciclette con veicoli compatibili.|
Spazio aggiuntivo per bagagli e attrezzature.|
Un sistema di ritenuta da selezionare secondo le esigenze del bambino.|
Per conservare bevande e alimenti durante i viaggi.|
Aiuta a visualizzare la zona posteriore durante le manovre.|
Supporto per facilitare le manovre di parcheggio.|
Un accessorio per ricaricare dispositivi compatibili.|
Strumenti per riparazioni e manutenzione meccanica.|
Un supporto per lavorare su motocicli compatibili.|
Protezione per la guida in moto, da scegliere della taglia corretta.|
Mobilità elettrica per spostamenti quotidiani compatibili.
    `,

    ufficio: `
Una postazione regolabile per alternare seduta e posizione eretta.|
Una seduta progettata per il comfort durante il lavoro.|
Una scrivania elegante per ambienti professionali.|
Stampa documenti con funzioni integrate.|
Digitalizza documenti per archiviarli in formato elettronico.|
Per distruggere documenti riservati in modo controllato.|
Proiezione di contenuti per riunioni e presentazioni.|
Un display ampio per produttività e multitasking.|
Prestazioni per software e attività professionali compatibili.|
Per gestire riunioni audio in modo pratico.|
Un tavolo funzionale per incontri di lavoro.|
Uno spazio protetto per documenti e piccoli oggetti.|
Organizza cartelle e materiali professionali.|
Soluzioni pratiche per mantenere in ordine la postazione.|
Uno strumento interattivo per presentazioni e collaborazione.|
Attrezzatura per riunioni a distanza e videoconferenze.|
Per stampare etichette per prodotti e documenti.|
Per proteggere documenti e materiali stampati.|
Per rilegare documenti e presentazioni.|
Per applicare pellicole protettive a materiali compatibili.|
Aiuta a mantenere alimentati i dispositivi durante brevi interruzioni.
    `
};


/* ==========================================================
   ZONA 3 — PREZZI
   I prezzi sono in euro e superiori a 100 €.
   Modifica liberamente i valori.
   ========================================================== */

const ZONA_PREZZI = {
    arredamento: [649, 329, 189, 599, 219, 349, 279, 799, 459, 149, 899, 169, 299, 189, 249, 159, 129, 139, 179, 149, 329],
    cucina: [399, 549, 329, 179, 289, 799, 599, 249, 349, 229, 189, 159, 199, 169, 499, 149, 189, 159, 199, 119, 179],
    informatica: [1299, 1499, 499, 329, 399, 899, 199, 179, 149, 599, 189, 249, 129, 119, 179, 149, 199, 399, 449, 159, 329],
    moda: [249, 329, 299, 399, 179, 299, 349, 159, 229, 279, 149, 129, 119, 189, 159, 129, 149, 179, 249, 199, 189],
    bellezza: [129, 149, 169, 139, 119, 899, 179, 149, 129, 119, 199, 129, 119, 149, 129, 119, 139, 119, 129, 149, 129],
    sport: [799, 499, 449, 199, 249, 699, 399, 329, 179, 599, 799, 149, 249, 1299, 399, 699, 299, 279, 159, 199, 499],
    giardino: [899, 499, 229, 799, 199, 179, 449, 329, 899, 249, 179, 199, 149, 599, 249, 139, 699, 149, 179, 199, 229],
    animali: [149, 179, 199, 169, 249, 119, 129, 149, 179, 249, 299, 159, 399, 149, 229, 249, 129, 139, 499, 149, 119],
    bambini: [599, 249, 399, 249, 179, 149, 229, 129, 799, 169, 329, 119, 109, 149, 119, 139, 149, 399, 129, 179, 129],
    auto: [499, 899, 179, 249, 119, 149, 129, 119, 149, 129, 399, 449, 249, 179, 159, 139, 119, 249, 179, 199, 799],
    ufficio: [499, 329, 699, 349, 249, 199, 799, 449, 1299, 399, 899, 249, 299, 179, 1499, 599, 129, 139, 149, 179, 199]
};


/* ==========================================================
   ZONA 4 — IMMAGINI
   Inserisci le immagini nella cartella images/products/.
   Il nome del file si genera dal nome del prodotto.
   Puoi sostituire qualsiasi percorso nella funzione qui sotto.
   ========================================================== */

const ZONA_IMMAGINI = {
    cartella: "image/",
    estensione: ".jpg",
    immaginePredefinita: "image/Armadio modulare moderno.jpg"
};


/* ==========================================================
   ZONA 5 — ATTIVAZIONE DEI PRODOTTI
   true  = prodotto visibile
   false = prodotto nascosto
   Puoi disattivare un prodotto con il suo ID.
   ========================================================== */

const ZONA_ATTIVAZIONE = {};

const CATEGORIE = [
    {
        id: "arredamento",
        nome: "Arredamento e decorazione",
        sottotitolo: "Arredi e complementi per la casa",
        descrizioneCatalogo: "arredamento, mobili e decorazioni"
    },
    {
        id: "cucina",
        nome: "Cucina e attrezzature",
        sottotitolo: "Elettrodomestici e accessori per la cucina",
        descrizioneCatalogo: "cucina ed elettrodomestici"
    },
    {
        id: "informatica",
        nome: "Informatica ed elettronica",
        sottotitolo: "Tecnologia per il lavoro e il tempo libero",
        descrizioneCatalogo: "informatica ed elettronica"
    },
    {
        id: "moda",
        nome: "Moda e accessori",
        sottotitolo: "Accessori e articoli per uno stile personale",
        descrizioneCatalogo: "moda e accessori"
    },
    {
        id: "bellezza",
        nome: "Bellezza e cura personale",
        sottotitolo: "Accessori per il benessere quotidiano",
        descrizioneCatalogo: "bellezza e cura personale"
    },
    {
        id: "sport",
        nome: "Sport e fitness",
        sottotitolo: "Attrezzature per allenamento e attività sportive",
        descrizioneCatalogo: "sport e fitness"
    },
    {
        id: "giardino",
        nome: "Giardino e outdoor",
        sottotitolo: "Soluzioni per terrazze, giardini e spazi aperti",
        descrizioneCatalogo: "giardino e spazi esterni"
    },
    {
        id: "animali",
        nome: "Animali domestici",
        sottotitolo: "Accessori per il comfort e la cura degli animali",
        descrizioneCatalogo: "animali domestici"
    },
    {
        id: "bambini",
        nome: "Bebè e famiglia",
        sottotitolo: "Accessori per bambini e vita familiare",
        descrizioneCatalogo: "bebè e famiglia"
    },
    {
        id: "auto",
        nome: "Auto e mobilità",
        sottotitolo: "Accessori per veicoli e mobilità quotidiana",
        descrizioneCatalogo: "auto e mobilità"
    },
    {
        id: "ufficio",
        nome: "Ufficio e accessori professionali",
        sottotitolo: "Attrezzature per organizzare il lavoro",
        descrizioneCatalogo: "ufficio e accessori professionali"
    }
];


/* ==========================================================
   ZONA 6 — PREPARAZIONE DEI DATI
   Non è necessario modificare questa parte per cambiare
   i titoli, le descrizioni, i prezzi o l'attivazione.
   ========================================================== */

function creaSlug(testo) {
    return testo
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-|-$/g, "");
}

function dividiLista(testo) {
    return testo
        .trim()
        .split("|")
        .map(elemento => elemento.trim())
        .filter(Boolean);
}

const PRODOTTI = [];

CATEGORIE.forEach(categoria => {
    const titoli = dividiLista(ZONA_TITOLI[categoria.id]);
    const descrizioni = dividiLista(ZONA_DESCRIZIONI[categoria.id]);
    const prezzi = ZONA_PREZZI[categoria.id];

    titoli.forEach((titolo, indice) => {
        const id = `${categoria.id}-${String(indice + 1).padStart(2, "0")}-${creaSlug(titolo)}`;

        if (!(id in ZONA_ATTIVAZIONE)) {
            ZONA_ATTIVAZIONE[id] = true;
        }

        PRODOTTI.push({
            id,
            categoria: categoria.id,
            nomeCategoria: categoria.nome,
            titolo,
            descrizione: descrizioni[indice] || "Un prodotto selezionato per accompagnare le esigenze quotidiane.",
            prezzo: Number(prezzi[indice]),
            immagine: ZONA_IMMAGINI.cartella + titolo + ZONA_IMMAGINI.estensione,
            attivo: ZONA_ATTIVAZIONE[id] === true
        });
    });
});


/* Retrouve un produit à partir de son id (utilisé par prodotto.html) */
function trovaProdotto(id) {
    return PRODOTTI.find(prodotto => prodotto.id === id && prodotto.attivo) || null;
}
