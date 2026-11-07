/* =========================================================
   LUNÉVIA — SCRIPT PRINCIPAL
   Menu • Collection • Produit • Panier • Favoris • Contact
========================================================= */


/* =========================================================
   PRODUITS
========================================================= */

const luneviaProducts = {

    "assiette-positano": {
        name: "Assiette Positano",
        category: "Ceramica · Campania",
        price: 38,
        material: "Ceramica",
        origin: "Campania",
        weight: "0,65 kg",
        dimensions: "28 × 28 × 3 cm",
        stock: "Disponibile",
        symbol: "◒",
        number: "01",
        description: "Motivo dipinto a mano, ispirato alla luce della Costiera.",
        longDescription: "Un'elegante assiette in ceramica ispirata ai colori e alla luce della Costiera Amalfitana. Ogni pezzo è caratterizzato da dettagli dipinti a mano."
    },

    "vaso-maiolica": {
        name: "Vaso Maiolica",
        category: "Ceramica · Sicilia",
        price: 54,
        material: "Maiolica",
        origin: "Sicilia",
        weight: "0,90 kg",
        dimensions: "18 × 18 × 25 cm",
        stock: "Disponibile",
        symbol: "◓",
        number: "02",
        description: "Piccolo vaso smaltato con decoro floreale, fatto a mano.",
        longDescription: "Un piccolo vaso in maiolica caratterizzato da una decorazione floreale. La superficie smaltata valorizza la lavorazione artigianale e i colori mediterranei."
    },

    "tazza-amalfi": {
        name: "Tazza Amalfi",
        category: "Ceramica · Amalfi",
        price: 16,
        material: "Ceramica",
        origin: "Amalfi",
        weight: "0,30 kg",
        dimensions: "10 × 8 × 8 cm",
        stock: "Disponibile",
        symbol: "◉",
        number: "03",
        description: "Tazza da espresso con smalto blu profondo e manico sottile.",
        longDescription: "Una tazza da espresso dal carattere mediterraneo, con smalto blu profondo e una forma semplice pensata per l'uso quotidiano."
    },

    "olio-frantoio": {
        name: "Olio Frantoio",
        category: "Dispensa · Puglia",
        price: 17,
        material: "Olio extravergine di oliva",
        origin: "Puglia",
        weight: "0,75 kg",
        dimensions: "7 × 7 × 30 cm",
        stock: "Disponibile",
        symbol: "◉",
        number: "04",
        description: "Prima spremitura a freddo da una piccola azienda pugliese.",
        longDescription: "Un olio extravergine selezionato da una piccola realtà pugliese. Il suo carattere racconta la tradizione degli uliveti del Sud Italia."
    },

    "miele-castagno": {
        name: "Miele di castagno",
        category: "Dispensa · Toscana",
        price: 12,
        material: "Miele",
        origin: "Toscana",
        weight: "0,50 kg",
        dimensions: "8 × 8 × 12 cm",
        stock: "Disponibile",
        symbol: "✦",
        number: "05",
        description: "Ambrato, intenso e leggermente legnoso.",
        longDescription: "Un miele dal colore ambrato e dal gusto intenso, scelto per il suo carattere deciso e per il legame con il territorio toscano."
    },

    "pasta-artigianale": {
        name: "Pasta artigianale",
        category: "Dispensa · Puglia",
        price: 6,
        material: "Semola di grano duro",
        origin: "Puglia",
        weight: "0,50 kg",
        dimensions: "25 × 15 × 7 cm",
        stock: "Disponibile",
        symbol: "〰",
        number: "06",
        description: "Essiccazione lenta e semola di grano duro, formato paccheri.",
        longDescription: "Pasta artigianale prodotta con semola di grano duro e lavorata secondo una tradizione italiana che valorizza consistenza e sapore."
    },

    "taccuino-fabriano": {
        name: "Taccuino Fabriano",
        category: "Carta · Fabriano",
        price: 14,
        material: "Carta e tela",
        origin: "Fabriano",
        weight: "0,35 kg",
        dimensions: "21 × 14,8 × 2 cm",
        stock: "Disponibile",
        symbol: "✦",
        number: "07",
        description: "Carta vergata, copertina in tela e rilegatura cucita a mano.",
        longDescription: "Un taccuino pensato per chi ama scrivere a mano. La carta e la rilegatura esprimono la lunga tradizione cartaria italiana."
    },

    "penna-firenze": {
        name: "Penna Firenze",
        category: "Carta · Firenze",
        price: 29,
        material: "Resina",
        origin: "Firenze",
        weight: "0,12 kg",
        dimensions: "14 × 1,5 × 1,5 cm",
        stock: "Disponibile",
        symbol: "✒",
        number: "08",
        description: "Corpo in resina marmorizzata e pennino medio.",
        longDescription: "Una penna elegante dal corpo in resina marmorizzata, pensata per accompagnare la scrittura quotidiana con un tocco artigianale."
    },

    "corrispondenza": {
        name: "Set di corrispondenza",
        category: "Carta · Italia",
        price: 11,
        material: "Carta",
        origin: "Italia",
        weight: "0,25 kg",
        dimensions: "22 × 16 × 3 cm",
        stock: "Disponibile",
        symbol: "✉",
        number: "09",
        description: "Dieci carte e buste in carta materica dal bordo naturale.",
        longDescription: "Un set raffinato per lettere e messaggi personali. Le carte presentano una texture naturale che rende ogni parola ancora più speciale."
    },

    "stola-como": {
        name: "Stola in lino Como",
        category: "Tessile · Como",
        price: 42,
        material: "Lino",
        origin: "Como",
        weight: "0,40 kg",
        dimensions: "180 × 70 cm",
        stock: "Disponibile",
        symbol: "≈",
        number: "10",
        description: "Lino tessuto a Como con tintura vegetale blu profonda.",
        longDescription: "Una stola leggera in lino, realizzata con attenzione alla materia e alla tradizione tessile di Como. La tonalità blu profonda dona eleganza."
    },

    "strofinacci-sorrento": {
        name: "Strofinacci Sorrento",
        category: "Tessile · Sorrento",
        price: 19,
        material: "Cotone",
        origin: "Sorrento",
        weight: "0,30 kg",
        dimensions: "60 × 40 cm",
        stock: "Disponibile",
        symbol: "╱",
        number: "11",
        description: "Coppia in cotone spesso con tessitura tradizionale.",
        longDescription: "Una coppia di strofinacci in cotone spesso, pensata per portare nella cucina quotidiana una lavorazione tessile tradizionale italiana."
    },

    "cesto-vimini": {
        name: "Cesto in vimini",
        category: "Artigianato · Toscana",
        price: 48,
        material: "Vimini e cuoio",
        origin: "Toscana",
        weight: "1,20 kg",
        dimensions: "42 × 30 × 28 cm",
        stock: "Disponibile",
        symbol: "∩",
        number: "12",
        description: "Intrecciato a mano, con manici in cuoio naturale.",
        longDescription: "Un cesto intrecciato a mano secondo una tradizione artigianale italiana. I manici in cuoio naturale completano il carattere rustico ed elegante."
    }
};


/* =========================================================
   MENU
========================================================= */

function setupMenu() {

    const toggle = document.querySelector(".nav-toggle");
    const nav = document.querySelector(".main-nav");

    if (!toggle || !nav) return;

    toggle.addEventListener("click", function () {

        const isOpen =
            toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute(
            "aria-expanded",
            String(!isOpen)
        );

        nav.classList.toggle("open", !isOpen);

    });

    nav.querySelectorAll("a").forEach(function (link) {

        link.addEventListener("click", function () {

            toggle.setAttribute(
                "aria-expanded",
                "false"
            );

            nav.classList.remove("open");

        });

    });

}


/* =========================================================
   PANIER
========================================================= */

const LUNEVIA_CART_KEY = "lunevia_cart";


function getLuneviaCart() {

    try {

        const saved =
            localStorage.getItem(LUNEVIA_CART_KEY);

        const cart =
            saved ? JSON.parse(saved) : [];

        return Array.isArray(cart) ? cart : [];

    } catch (error) {

        return [];

    }

}


function saveLuneviaCart(cart) {

    localStorage.setItem(
        LUNEVIA_CART_KEY,
        JSON.stringify(cart)
    );

}


function updateLuneviaCartCount() {

    const cart = getLuneviaCart();

    const count = cart.reduce(
        function (total, item) {
            return total + Number(item.quantity || 0);
        },
        0
    );

    document
        .querySelectorAll(".cart-count, #cart-count")
        .forEach(function (element) {

            element.textContent = count;

        });

}


/* =========================================================
   AJOUTER AU PANIER
========================================================= */


function addLuneviaToCart(id, name, price, quantity = 1) {
    const product = luneviaProducts[id];

    if (!product) {
        console.error("Prodotto non trovato:", id);
        return false;
    }

    const safeQuantity = Math.max(
        1,
        Math.min(20, Math.floor(Number(quantity) || 1))
    );

    const cart = getLuneviaCart();

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity = Math.min(
            20,
            Number(existing.quantity || 0) + safeQuantity
        );
    } else {
        cart.push({
            id: id,
            name: product.name,
            price: product.price,
            quantity: safeQuantity
        });
    }

    saveLuneviaCart(cart);
    updateLuneviaCartCount();

    return true;
}



/* =========================================================
   BOUTONS PANIER — COLLECTION
========================================================= */

function setupCollectionCartButtons() {

    document
        .querySelectorAll(".add-to-cart")
        .forEach(function (button) {

            button.addEventListener("click", function () {

                const id = button.dataset.id;
                const name = button.dataset.name;
                const price = button.dataset.price;

                if (!id || !name || !price) {
                    console.error("Produit incomplet.");
                    return;
                }

                addLuneviaToCart(
                    id,
                    name,
                    price,
                    1
                );

                const originalText =
                    button.textContent;

                button.textContent =
                    "✓ Aggiunto";

                button.classList.add("cart-added");

                setTimeout(function () {

                    button.textContent =
                        originalText;

                    button.classList.remove(
                        "cart-added"
                    );

                }, 1200);

            });

        });

}


/* =========================================================
   PAGE PRODUIT
========================================================= */

function loadLuneviaProduct() {

    const productName =
        document.getElementById("product-name");

    if (!productName) return;

    const params =
        new URLSearchParams(
            window.location.search
        );

    const productId =
        params.get("id");

    const product =
        luneviaProducts[productId];

    if (!product) {

        productName.textContent =
            "Prodotto non trovato";

        return;

    }

    document.title =
        product.name + " — Lunévia";


    const elements = {

        "product-name": product.name,
        "product-category": product.category,
        "product-price":
            product.price.toLocaleString("it-IT") + " €",
        "product-stock": product.stock,
        "product-description": product.description,
        "product-material": product.material,
        "product-origin": product.origin,
        "product-weight": product.weight,
        "product-dimensions": product.dimensions,
        "product-symbol": product.symbol,
        "product-number": product.number,
        "product-long-description":
            product.longDescription

    };


    Object.entries(elements).forEach(
        function ([id, value]) {

            const element =
                document.getElementById(id);

            if (element) {
                element.textContent = value;
            }

        }
    );


    setupProductQuantity(
        productId,
        product
    );

    setupLuneviaFavorite(productId);

}


/* =========================================================
   QUANTITÉ + AJOUTER AU PANIER
========================================================= */

function setupProductQuantity(productId, product) {

    const quantityElement =
        document.getElementById("quantity");

    const minusButton =
        document.getElementById("quantity-minus");

    const plusButton =
        document.getElementById("quantity-plus");

    const addButton =
        document.getElementById("product-add-cart");


    if (!quantityElement ||
        !minusButton ||
        !plusButton ||
        !addButton) {

        return;

    }


    let quantity = 1;


    function updateQuantity() {

        quantityElement.textContent =
            quantity;

    }


    minusButton.addEventListener(
        "click",
        function () {

            if (quantity > 1) {
                quantity--;
            }

            updateQuantity();

        }
    );


    plusButton.addEventListener(
        "click",
        function () {

            if (quantity < 20) {
                quantity++;
            }

            updateQuantity();

        }
    );


    /* IMPORTANT :
       C'est ici que l'ancien code avait le problème.
       Il appelait addToCart(), qui n'existe pas.
    */

    addButton.addEventListener(
        "click",
        function () {

            addLuneviaToCart(
                productId,
                product.name,
                product.price,
                quantity
            );


            const original =
                addButton.innerHTML;


            addButton.innerHTML =
                "✓ Aggiunto al carrello";


            addButton.classList.add(
                "cart-added"
            );


            updateLuneviaCartCount();


            setTimeout(function () {

                addButton.innerHTML =
                    original;

                addButton.classList.remove(
                    "cart-added"
                );

            }, 1500);

        }
    );

}


/* =========================================================
   FAVORIS
========================================================= */

const LUNEVIA_FAVORITES_KEY =
    "lunevia_favorites";


function getLuneviaFavorites() {

    try {

        return JSON.parse(
            localStorage.getItem(
                LUNEVIA_FAVORITES_KEY
            )
        ) || [];

    } catch (error) {

        return [];

    }

}


function saveLuneviaFavorites(favorites) {

    localStorage.setItem(
        LUNEVIA_FAVORITES_KEY,
        JSON.stringify(favorites)
    );

}


function setupLuneviaFavorite(productId) {

    const button =
        document.getElementById(
            "product-favorite"
        );

    if (!button) return;


    let favorites =
        getLuneviaFavorites();


    if (favorites.includes(productId)) {

        button.textContent = "♥";

        button.classList.add(
            "favorite-active"
        );

    }


    button.addEventListener(
        "click",
        function () {

            if (favorites.includes(productId)) {

                favorites =
                    favorites.filter(
                        function (id) {
                            return id !== productId;
                        }
                    );

                button.textContent = "♡";

                button.classList.remove(
                    "favorite-active"
                );

            } else {

                favorites.push(productId);

                button.textContent = "♥";

                button.classList.add(
                    "favorite-active"
                );

            }


            saveLuneviaFavorites(
                favorites
            );

        }
    );

}


/* =========================================================
   FILTRES COLLECTION
========================================================= */

function setupFilters() {

    const buttons =
        document.querySelectorAll(
            ".filter-btn"
        );

    const cards =
        document.querySelectorAll(
            ".product-grid .card"
        );

    const empty =
        document.querySelector(
            ".empty-state"
        );


    if (!buttons.length || !cards.length) {
        return;
    }


    buttons.forEach(function (button) {

        button.addEventListener(
            "click",
            function () {

                buttons.forEach(function (b) {

                    b.classList.remove(
                        "active"
                    );

                    b.setAttribute(
                        "aria-pressed",
                        "false"
                    );

                });


                button.classList.add(
                    "active"
                );

                button.setAttribute(
                    "aria-pressed",
                    "true"
                );


                const category =
                    button.dataset.filter;

                let count = 0;


                cards.forEach(function (card) {

                    const show =
                        category === "tout" ||
                        card.dataset.category ===
                        category;

                    card.hidden = !show;

                    if (show) {
                        count++;
                    }

                });


                if (empty) {

                    empty.style.display =
                        count ? "none" : "block";

                }

            }
        );

    });

}


/* =========================================================
   PANIER — AFFICHAGE
========================================================= */

function renderLuneviaCart() {

    const container =
        document.getElementById(
            "cart-container"
        );

    if (!container) return;


    const cart =
        getLuneviaCart();


    if (!cart.length) {

        container.innerHTML = `

            <div class="cart-empty">

                <span class="cart-empty-icon">♡</span>

                <h2>
                    Il tuo carrello è vuoto
                </h2>

                <p>
                    Non hai ancora aggiunto
                    nessuna creazione.
                </p>

                <a
                    href="produits.html"
                    class="btn btn-primary">

                    Scopri la collezione →

                </a>

            </div>

        `;

        return;

    }


    let subtotal = 0;


    const itemsHTML =
        cart.map(function (item) {

            const itemTotal =
                Number(item.price) *
                Number(item.quantity);

            subtotal += itemTotal;


            return `

                <article class="cart-item">

                    <div class="cart-item-info">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.price} € / pezzo
                        </p>

                        <strong class="cart-item-price">
                            ${itemTotal.toFixed(2)} €
                        </strong>

                    </div>


                    <div class="cart-item-actions">

                        <button
                            class="cart-quantity-btn"
                            data-cart-minus="${item.id}">
                            −
                        </button>

                        <span class="cart-quantity">
                            ${item.quantity}
                        </span>

                        <button
                            class="cart-quantity-btn"
                            data-cart-plus="${item.id}">
                            +
                        </button>

                        <button
                            class="cart-remove"
                            data-cart-remove="${item.id}">
                            Rimuovi
                        </button>

                    </div>

                </article>

            `;

        }).join("");


    container.innerHTML = `

        <div class="cart-layout">

            <div class="cart-items">

                ${itemsHTML}

            </div>


            <aside class="cart-summary">

                <h2>
                    Riepilogo
                </h2>

                <div class="cart-summary-row">

                    <span>
                        Subtotale
                    </span>

                    <strong>
                        ${subtotal.toFixed(2)} €
                    </strong>

                </div>


                <div class="cart-summary-row">

                    <span>
                        Totale
                    </span>

                    <strong class="cart-total">
                        ${subtotal.toFixed(2)} €
                    </strong>

                </div>


                <button
                    class="cart-order"
                    type="button">

                    Procedi con l'ordine

                </button>

            </aside>

        </div>

    `;
    // Aller à la page de paiement
const orderButton = container.querySelector(".cart-order");

if (orderButton) {
    orderButton.addEventListener("click", function () {
        window.location.href = "pagamento.html";
    });
}


    /* PLUS */

    container
        .querySelectorAll(
            "[data-cart-plus]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    changeLuneviaQuantity(
                        button.dataset.cartPlus,
                        1
                    );

                }
            );

        });


    /* MOINS */

    container
        .querySelectorAll(
            "[data-cart-minus]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    changeLuneviaQuantity(
                        button.dataset.cartMinus,
                        -1
                    );

                }
            );

        });


    /* SUPPRIMER */

    container
        .querySelectorAll(
            "[data-cart-remove]"
        )
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    removeLuneviaFromCart(
                        button.dataset.cartRemove
                    );

                }
            );

        });

}


/* =========================================================
   CHANGER QUANTITÉ PANIER
========================================================= */

function changeLuneviaQuantity(
    id,
    amount
) {

    const cart =
        getLuneviaCart();


    const item =
        cart.find(function (product) {

            return product.id === id;

        });


    if (!item) return;


    item.quantity += amount;


    if (item.quantity <= 0) {

        const newCart =
            cart.filter(function (product) {

                return product.id !== id;

            });

        saveLuneviaCart(newCart);

    } else {

        saveLuneviaCart(cart);

    }


    updateLuneviaCartCount();

    renderLuneviaCart();

}


/* =========================================================
   SUPPRIMER PRODUIT
========================================================= */

function removeLuneviaFromCart(id) {

    const cart =
        getLuneviaCart();


    const newCart =
        cart.filter(function (item) {

            return item.id !== id;

        });


    saveLuneviaCart(newCart);

    updateLuneviaCartCount();

    renderLuneviaCart();

}


/* =========================================================
   CONTACT
========================================================= */

function setupContactForm() {

    const form =
        document.querySelector(
            "#contact-form"
        );

    const note =
        document.querySelector(
            ".form-note"
        );


    if (!form || !note) return;


    form.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const name =
                form.querySelector(
                    "#name"
                )?.value.trim();

            const email =
                form.querySelector(
                    "#email"
                )?.value.trim();

            const message =
                form.querySelector(
                    "#message"
                )?.value.trim();


            const validEmail =
                /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


            if (!name || !email || !message) {

                note.textContent =
                    "Compila tutti i campi prima di inviare il messaggio.";

                note.className =
                    "form-note err";

                return;

            }


            if (!validEmail.test(email)) {

                note.textContent =
                    "Inserisci un indirizzo e-mail valido.";

                note.className =
                    "form-note err";

                return;

            }


            note.textContent =
                `Grazie ${name}. Il messaggio è pronto per essere collegato al servizio di invio.`;

            note.className =
                "form-note ok";

            form.reset();

        }
    );

}


/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        setupMenu();

        setupFilters();

        setupCollectionCartButtons();

        setupContactForm();

        loadLuneviaProduct();

        updateLuneviaCartCount();

        renderLuneviaCart();

    }
);
/* =========================================================
   LUNÉVIA — PAGE PREFERITI
========================================================= */

function renderLuneviaFavorites() {

    const container =
        document.getElementById("favorites-container");

    if (!container) {
        return;
    }

    const FAVORITES_KEY = "lunevia_favorites";

    let favorites = [];

    try {

        favorites =
            JSON.parse(
                localStorage.getItem(FAVORITES_KEY)
            ) || [];

    } catch (error) {

        favorites = [];

    }


    /* Aucun favori */

    if (!favorites.length) {

        container.innerHTML = `

            <div class="favorites-empty">

                <div class="favorites-empty-symbol">
                    ♡
                </div>

                <h2>
                    Nessun preferito
                </h2>

                <p>
                    Non hai ancora salvato nessuna
                    creazione nella tua selezione.
                </p>

                <a href="produits.html">
                    Scopri la collezione →
                </a>

            </div>

        `;

        return;
    }


    /* Création des cartes */

    const cards = favorites
        .map(function (productId) {

            const product =
                luneviaProducts[productId];

            if (!product) {
                return "";
            }

            return `

                <article class="favorite-card">

                    <div class="favorite-card-visual">

                        <span class="favorite-card-symbol">
                            ${product.symbol}
                        </span>

                        <small class="favorite-card-number">
                            ${product.number}
                        </small>

                    </div>


                    <div class="favorite-card-content">

                        <div class="favorite-card-category">
                            ${product.category}
                        </div>

                        <h2>
                            ${product.name}
                        </h2>

                        <div class="favorite-card-price">
                            ${product.price.toLocaleString("it-IT")} €
                        </div>


                        <div class="favorite-card-actions">

                            <a
                                href="prodotto.html?id=${productId}"
                                class="favorite-view">

                                Scopri il prodotto →

                            </a>


                            <button
                                type="button"
                                class="favorite-remove"
                                data-remove-favorite="${productId}"
                                aria-label="Rimuovi dai preferiti">

                                ♥
                                
                            </button>

                        </div>

                    </div>

                </article>

            `;

        })
        .join("");


    container.innerHTML = `

        <div class="favorites-grid">

            ${cards}

        </div>

    `;


    /* Boutons supprimer */

    container
        .querySelectorAll("[data-remove-favorite]")
        .forEach(function (button) {

            button.addEventListener(
                "click",
                function () {

                    const productId =
                        button.dataset.removeFavorite;

                    let currentFavorites = [];

                    try {

                        currentFavorites =
                            JSON.parse(
                                localStorage.getItem(
                                    FAVORITES_KEY
                                )
                            ) || [];

                    } catch (error) {

                        currentFavorites = [];

                    }


                    currentFavorites =
                        currentFavorites.filter(
                            function (id) {
                                return id !== productId;
                            }
                        );


                    localStorage.setItem(
                        FAVORITES_KEY,
                        JSON.stringify(currentFavorites)
                    );


                    renderLuneviaFavorites();

                }
            );

        });

}


/* Lancement */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        renderLuneviaFavorites();

    }
);