/* ==========================================================
   geo-blocco.js — Sito disponibile solo in Italia, Portogallo
   e Germania.

   COME USARLO
   Aggiungi questa riga nel <head> di OGNI pagina, il più in alto
   possibile (subito dopo <meta charset>), SENZA "defer" o "async":

       <script src="geo-blocco.js"></script>

   ATTENZIONE: è un filtro lato browser. Chi usa una VPN o disattiva
   JavaScript può aggirarlo. Per un blocco davvero efficace usa una
   regola del server/CDN (es. Cloudflare), vedi le spiegazioni.
   ========================================================== */
   SIMULA_PAESE = ""
(function () {
    "use strict";

    /* ---------- CONFIGURAZIONE ---------- */

    // Codici paese ISO a 2 lettere dei paesi autorizzati
    const PAESI_CONSENTITI = ["IT", "PT", "DE"];

    // Se il paese non può essere rilevato (servizio non raggiungibile):
    //   "consenti" = il sito resta accessibile (consigliato)
    //   "blocca"   = il sito viene bloccato
    const SE_ERRORE = "consenti";

    // Per PROVARE il blocco: scrivi un codice paese non autorizzato, es. "FR".
    // Lascia "" per il funzionamento normale. Funziona anche in locale.
    const SIMULA_PAESE = "";

    // true = disattiva completamente il controllo (utile durante lo sviluppo)
    const DISATTIVATO = false;

    const DURATA_CACHE_ORE = 12;   // il paese rilevato viene ricordato per 12 ore
    const TIMEOUT_MS = 3000;       // attesa massima per ogni servizio
    const CACHE_KEY = "luneviaGeoPaese";

    // Servizi gratuiti di geolocalizzazione tramite IP (vengono interrogati insieme,
    // vince il primo che risponde).
    const SERVIZI = [
        { url: "https://api.country.is/",                    leggi: d => d.country },
        { url: "https://get.geojs.io/v1/ip/country.json",    leggi: d => d.country },
        { url: "https://ipapi.co/json/",                     leggi: d => d.country_code }
    ];

    /* ---------- Quando NON controllare ---------- */

    if (DISATTIVATO) return;

    const host = window.location.hostname;
    const inLocale = window.location.protocol === "file:" ||
        host === "localhost" || host === "127.0.0.1";

    // In locale non si blocca mai, tranne se stai simulando un paese.
    if (inLocale && !SIMULA_PAESE) return;

    /* ---------- Nasconde la pagina finché il paese non è verificato ---------- */

    const stileNascondi = document.createElement("style");
    stileNascondi.textContent = "html{visibility:hidden !important}";
    document.documentElement.appendChild(stileNascondi);

    function mostraPagina() {
        if (stileNascondi.parentNode) stileNascondi.remove();
    }

    // Sicurezza: la pagina non resta mai nascosta per più di qualche secondo.
    setTimeout(mostraPagina, TIMEOUT_MS + 1500);

    /* ---------- Schermata di blocco ---------- */

    function quandoPronto(funzione) {
        if (document.readyState === "loading") {
            document.addEventListener("DOMContentLoaded", funzione);
        } else {
            funzione();
        }
    }

    function blocca(paese) {
        quandoPronto(function () {
            // Nasconde tutto il contenuto del sito
            Array.from(document.body.children).forEach(function (elemento) {
                elemento.style.setProperty("display", "none", "important");
            });

            const box = document.createElement("div");
            box.setAttribute("role", "alert");
            box.style.cssText =
                "position:fixed;inset:0;z-index:2147483647;display:grid;place-items:center;" +
                "padding:24px;background:#F8F6F0;color:#173F35;text-align:center;" +
                "font-family:'Manrope',Arial,sans-serif;";

            const contenuto = document.createElement("div");
            contenuto.style.cssText = "max-width:480px;";

            const logo = document.createElement("div");
            logo.textContent = "Lunévia";
            logo.style.cssText =
                "margin-bottom:18px;font-family:'Cormorant Garamond',Georgia,serif;" +
                "font-size:38px;font-weight:700;";

            const titolo = document.createElement("h1");
            titolo.textContent = "Servizio non disponibile nel tuo paese";
            titolo.style.cssText =
                "margin:0 0 14px;font-family:'Cormorant Garamond',Georgia,serif;" +
                "font-size:30px;line-height:1.2;";

            const testo = document.createElement("p");
            testo.textContent =
                "Lunévia è disponibile soltanto in Italia, Portogallo e Germania.";
            testo.style.cssText = "margin:0;font-size:15px;line-height:1.6;";

            contenuto.append(logo, titolo, testo);

            if (paese) {
                const dettaglio = document.createElement("p");
                dettaglio.textContent = "Paese rilevato: " + paese;
                dettaglio.style.cssText = "margin:18px 0 0;font-size:12px;color:#777D76;";
                contenuto.appendChild(dettaglio);
            }

            box.appendChild(contenuto);
            document.body.appendChild(box);

            mostraPagina();
        });
    }

    function consenti() {
        mostraPagina();
    }

    function decidi(paese) {
        if (paese === null) {
            // Paese non rilevabile
            if (SE_ERRORE === "blocca") blocca(null);
            else consenti();
            return;
        }

        if (PAESI_CONSENTITI.indexOf(paese) !== -1) consenti();
        else blocca(paese);
    }

    /* ---------- Rilevamento del paese ---------- */

    function leggiCache() {
        try {
            const dati = JSON.parse(localStorage.getItem(CACHE_KEY) || "null");

            if (dati && /^[A-Z]{2}$/.test(dati.paese) &&
                Date.now() - dati.quando < DURATA_CACHE_ORE * 3600 * 1000) {
                return dati.paese;
            }
        } catch (errore) { /* cache non disponibile */ }

        return null;
    }

    function salvaCache(paese) {
        try {
            localStorage.setItem(CACHE_KEY, JSON.stringify({ paese: paese, quando: Date.now() }));
        } catch (errore) { /* cache non disponibile */ }
    }

    function chiedi(servizio) {
        const controllo = new AbortController();
        const timer = setTimeout(function () { controllo.abort(); }, TIMEOUT_MS);

        return fetch(servizio.url, { signal: controllo.signal, cache: "no-store" })
            .then(function (risposta) {
                if (!risposta.ok) throw new Error("HTTP " + risposta.status);
                return risposta.json();
            })
            .then(function (dati) {
                const codice = String(servizio.leggi(dati) || "").toUpperCase();
                if (!/^[A-Z]{2}$/.test(codice)) throw new Error("Codice paese non valido");
                return codice;
            })
            .finally(function () { clearTimeout(timer); });
    }

    // 1) paese simulato (per i test)
    if (SIMULA_PAESE) {
        decidi(String(SIMULA_PAESE).toUpperCase());
        return;
    }

    // 2) paese già rilevato di recente
    const inCache = leggiCache();
    if (inCache) {
        decidi(inCache);
        return;
    }

    // 3) rilevamento tramite IP (primo servizio che risponde)
    Promise.any(SERVIZI.map(chiedi))
        .then(function (paese) {
            salvaCache(paese);
            decidi(paese);
        })
        .catch(function (errore) {
            console.warn("Geolocalizzazione non riuscita:", errore);
            decidi(null);
        });
})();
