Progetto Web con EmailJS e Funzionalità Avanzate
Benvenuti! In questo progetto ho creato una semplice pagina web che include una navbar, una sezione di newsletter, uno slider interattivo, e l'integrazione con EmailJS per inviare le email direttamente dalla pagina.

Funzionalità principali:
Navbar Sticky
La barra di navigazione (navbar) rimane sempre visibile in cima alla pagina anche quando si scorre verso il basso (effetto "sticky"). È responsiva, quindi si adatta automaticamente a schermi più piccoli (come quelli dei dispositivi mobili).

Sezione Newsletter Funzionante
Ho implementato un modulo per raccogliere le email degli utenti. Quando un utente inserisce un'email e preme "Invia", i dati vengono inviati tramite EmailJS.

Slider Interattivo
Ho creato uno slider utilizzando Swiper, che consente di mostrare recensioni e feedback degli sviluppatori sulla "paperella di gomma". Questo slider ha una navigazione con indicatori e transizioni fluide.

Font Personalizzati
L'intero sito utilizza il font Montserrat, che rende il design più moderno e leggibile.

Come è stato realizzato:
Creazione della Navbar
La navbar è stata progettata con il framework Bootstrap e arricchita con l'effetto sticky. Inizialmente è stata creata con l'inclusione di un logo e di una lista di collegamenti alle diverse sezioni del sito.

Sezione Newsletter
Un modulo è stato aggiunto con un campo di input per l'email dell'utente e un pulsante di invio. La funzionalità di invio è gestita tramite EmailJS, un servizio che consente di inviare email senza dover configurare un server. Quando un utente invia il modulo, l'email viene ricevuta all'indirizzo configurato.

Integrazione con EmailJS
Ho usato EmailJS per inviare le email. Si è configurato un service ID, template ID e una public key tramite il servizio EmailJS. Ogni volta che un utente invia la newsletter, viene chiamata la funzione di invio di EmailJS, che gestisce l'invio dell'email.

Implementazione dello Slider con Swiper
Invece di utilizzare il tradizionale Bootstrap carousel, ho scelto Swiper per uno slider più moderno e dinamico. Swiper consente transizioni fluide, e gli utenti possono scorrere tra diverse recensioni.

Font Montserrat
Il font è stato scelto per il suo aspetto moderno e leggibile. È stato integrato tramite il servizio Google Fonts.

Cosa è stato fatto passo dopo passo:
Navbar:
Creazione della barra di navigazione con l'uso di Bootstrap.
Aggiunta dell'effetto "sticky" per mantenerla sempre visibile.
Configurazione di un menu "burger" per i dispositivi mobili.

Sezione Newsletter:
Creazione di un modulo di iscrizione alla newsletter con un campo di input per l'email.
Configurazione del modulo con EmailJS per inviare le email.

Slider:
Implementazione di uno slider per le recensioni con il pacchetto Swiper.
Aggiunta di indicatori per navigare tra i contenuti dello slider.

Stile:
Aggiunta del font Montserrat su tutto il sito per migliorare l'aspetto visivo.

Puoi caricare il progetto su un server locale per testarlo o su un server web per renderlo accessibile online.
Struttura del Progetto:
index.html: La pagina principale con tutte le sezioni.
styles.css: Il file CSS per gli stili personalizzati, inclusi gli stili per la navbar, il modulo della newsletter e lo slider.
script.js: Il file JavaScript che gestisce la logica per l'invio della newsletter tramite EmailJS e la gestione delle funzionalità interattive.