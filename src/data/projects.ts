export type ProjectKind = "Projet" | "Module";

export type Project = {
    title: string;
    kind: ProjectKind;
    subtitle: string; // ligne courte sous la pochette, ex. « React · PWA »
    context: string; // où / pour qui, ex. « Formation UHA 4.0 », « S2I Evolution »
    summary: string; // une phrase, affichée en haut de la fiche
    description: string; // le descriptif complet de la fiche
    tech: string[];
    cover: string; // classes Tailwind du dégradé, écrites en entier
    links?: { github?: string; demo?: string };
};

export const projects: Project[] = [
    {
        title: "SDIS 67",
        kind: "Projet",
        subtitle: "React · PWA",
        context: "Formation UHA 4.0",
        summary: "Application React utilisable sans réseau.",
        description:
            "Application React avec gestion des données hors-ligne via Service Workers pour assurer la continuité de service en zones blanches.",
        tech: ["React", "Service Workers", "PWA"],
        cover: "from-red-600 to-orange-400",
    },
    {
        title: "EBN",
        kind: "Projet",
        subtitle: "React Native",
        context: "Formation UHA 4.0",
        summary: "Collecte de bio-déchets sur mobile.",
        description:
            "Application React Native de collecte de bio-déchets avec dashboard de suivi statistique en temps réel.",
        tech: ["React Native", "Dashboard"],
        cover: "from-emerald-600 to-lime-400",
    },
    {
        title: "ENVIE",
        kind: "Projet",
        subtitle: "Plateforme web",
        context: "Formation UHA 4.0",
        summary: "Référencement de pièces détachées.",
        description:
            "Plateforme de référencement de pièces détachées avec identification par numéro de série et marque.",
        tech: [],
        cover: "from-sky-600 to-cyan-400",
    },
    {
        title: "MDC",
        kind: "Projet",
        subtitle: "Ionic · Mobile",
        context: "Formation UHA 4.0",
        summary: "Organisation d'activités de groupe.",
        description:
            "Application Ionic de mise en relation sociale et d'organisation d'activités de groupe.",
        tech: ["Ionic"],
        cover: "from-fuchsia-600 to-pink-400",
    },
    {
        title: "LUC Ratteli",
        kind: "Projet",
        subtitle: "Librairie open-source",
        context: "Stage — LUC Ratteli",
        summary: "Automatisation du cycle de vie d'articles.",
        description:
            "Création d'une bibliothèque open-source pour automatiser le cycle de vie d'articles, de l'ajout à la revente.",
        tech: [],
        cover: "from-violet-700 to-indigo-400",
    },
    {
        title: "Retours Clients",
        kind: "Module",
        subtitle: "Gestion des retours",
        context: "S2I Evolution",
        summary: "Gestion des retours clients invités et connectés",
        description: `Conception et développement complet d’un module PrestaShop de gestion des retours de commandes,
            accessible aux clients connectés comme aux invités.
            Client connecté : choix de la commande dans son historique pour pré-remplir automatiquement le formulaire.
            Client invité : accès à sa commande via son adresse email.
            Formulaire de retour complet, avec les caractéristiques spécifiques des lunettes (marque, photos, etc.) pour justifier le motif.
            Intégration au back-office pour consulter et suivre chaque demande,
            et envoi automatique d’un email de prise en compte au client.`,
        tech: ["PrestaShop", "PHP", "Smarty", "JavaScript"],
        cover: "from-violet-700 to-indigo-400",
    },
    {
        title: "Campagnes & Visuels",
        kind: "Module",
        subtitle: "Planification d’événements",
        context: "S2I Evolution",
        summary: "Programmation des visuels du site pour les soldes et les événements",
        description: `Développement d’un module PrestaShop permettant de préparer à l’avance les événements commerciaux (soldes, opérations spéciales…).
            L’équipe ajoute ses visuels, choisit la date et l’heure de mise en ligne ainsi que la zone du site à remplacer
            (image d’accueil, bandeau « SOLDES », etc.).
            Les changements s’appliquent automatiquement au moment prévu, sans intervention manuelle le jour J.`,
        tech: ["PrestaShop", "PHP", "Smarty", "JavaScript"],
        cover: "from-amber-500 to-rose-500",
    },
    {
        title: "Factures ZPL",
        kind: "Module",
        subtitle: "Automatisation logistique",
        context: "S2I Evolution",
        summary: "Génération d’étiquettes ZPL à partir des factures, prêtes à scanner",
        description: `Développement d’un module PrestaShop qui génère automatiquement, à partir des factures,
            des étiquettes au format ZPL (langage des imprimantes thermiques Zebra).
            Les documents imprimés peuvent être scannés directement,
            ce qui supprime plusieurs manipulations manuelles et limite les erreurs de saisie.`,
        tech: ["PrestaShop", "PHP", "ZPL"],
        cover: "from-slate-600 to-teal-400",
    },
    {
        title: "Cache Varnish",
        kind: "Module",
        subtitle: "Performance & cache",
        context: "S2I Evolution",
        summary: "Vidage ciblé des caches PrestaShop et Varnish après une mise à jour",
        description: `Développement d’un module PrestaShop qui vide automatiquement le cache PrestaShop et le cache Varnish
            lorsque certaines données sont modifiées : ajout de produit, changement de prix, nouvelle image produit
            ou nouvelle image d’accueil.
            Le vidage peut être planifié via une tâche cron, pour que les mises à jour apparaissent immédiatement
            côté client sans intervention manuelle.`,
        tech: ["PrestaShop", "PHP", "Varnish", "Cron"],
        cover: "from-blue-700 to-sky-400",
    },
    // Tes modules PrestaShop : même format, avec kind: 'Module'
];
