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
        title: "MODULE Prestashop",
        kind: "Projet",
        subtitle: "Gestion des retours clients invités et connectés",
        context: "Stage — LUC Ratteli",
        summary: "Automatisation du cycle de vie d'articles.",
        description:
            "Création d'une bibliothèque open-source pour automatiser le cycle de vie d'articles, de l'ajout à la revente.",
        tech: [],
        cover: "from-violet-700 to-indigo-400",
    },
    // Tes modules PrestaShop : même format, avec kind: 'Module'
];
