module.exports = {
    resources: {
        posts: {
            name: 'Articles',
            fields: {
                title: 'Title'
            }
        },
        orarios: {
            name: "TimeTables"
        },
        profilos: {
            name: "Profiles"
        },
        vocis: {
            name: "Voices"
        },
        fasceDellaGiornatas: {
            name: "Time Slots of the Day"
        },
        fasceDelMonteOres: {
            name: "Slots of the Total Hours"
        },
        timbratureTipos: {
            name: "Type Stampings"
        },
        arrotondamentoTimbratures: {
            name: "Rounding off Stampings"
        },
        arrotondamentoStraordinarios: {
            name: "Extraordinary Rounding"
        },
        pauses: {
            name: "Pauses",
            fields: {
                orario: "Time",
                descrizione: "Description",
                dalle: "From",
                alle: "To",
                min: "Min",
                max: "Max",
                obbl: "Obbl",
                tipologia: "Tipology",
                voce: "Item",
                eccedenze: "Surpluses",
                vocePerSegnalazione: "Item for Reports"
            }
        }
    }
}