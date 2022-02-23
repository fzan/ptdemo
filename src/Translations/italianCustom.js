module.exports = {
    resources: {
        posts: {
            name: 'Articoli',
            fields: {
                title: 'Titolo'
            }
        },
        orarios: {
            name: "Orari"
        },
        profilos: {
            name: "Profili"
        },
        vocis: {
            name: "Voci"
        },
        fasceDellaGiornatas: {
            name: "Fasce della Giornata"
        },
        fasceDelMonteOres: {
            name: "Fasce del monte ore"
        },
        timbratureTipos: {
            name: "Timbrature tipo"
        },
        arrotondamentoTimbratures: {
            name: "Arrot. Timbrature"
        },
        arrotondamentoStraordinarios: {
            name: "Arrot. Straordinario"
        },
        pauses: {
            name: "Pause",
            fields: {
                orario: "Orario",
                descrizione: "Descrizione",
                dalle: "Dalle",
                alle: "Alle",
                min: "Min",
                max: "Max",
                obbl: "Obbl",
                tipologia: "Tipologia",
                voce: "Voce",
                eccedenze: "Eccedenze",
                vocePerSegnalazione: "Voce per segnalazione"
            }
        }
    }
}