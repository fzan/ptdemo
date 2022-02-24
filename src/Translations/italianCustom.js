module.exports = {
    resources: {
        homeLabel: {
            fields: {
                homeLabel: "Questa è la prima Demo per il sistema"
            }
        },
        posts: {
            name: 'Articoli',
            fields: {
                title: 'Titolo'
            }
        },
        orarios: {
            name: "Orari",
            fields: {
                codice: "Codice",
                descrizione: "Descrizione",
                tipologiaTipo: "Tipo",
                tipologiaGiornoDiSalvataggio: "Giorno Di Salvataggio",
                orePreviste: "Ore Previste",
                timbratureGiorniSuccessiviPerTimbratura: "Copre più Giorni",
                fasciaTimbrature: "Fascia Timbrature",
                segnalareTimbratureFuoriFasce: "Conformità Timbrature",
                compensazioneCompensazioneSelettiva: "Compensazione Selettiva",
                orariSostitutivi: "Orari Sostitutivi",
                profilosId: "Rielaborazioni"
            },
        },
        profilos: {
            name: "Profili",
            fields: {
                nome: "Nome"
            }
        },
        vocis: {
            name: "Voci",
            fields: {
                title: "Titolo"
            }
        },
        fasceDellaGiornatas: {
            name: "Fasce della Giornata",
            fields: {
                causale: "Causale",
                dalle: "Dalle",
                alle: "Alle",
                priorita: "Priorità",
                orarioId: "Tipologia Orario"
            }
        },
        fasceDelMonteOres: {
            name: "Fasce del monte ore",
            fields: {
                causale: "Causale",
                dalle: "Dalle",
                alle: "Alle",
                orarioId: "Tipologia Orario"
            }
        },
        timbratureTipos: {
            name: "Timbrature tipo",
            fields: {
                v: "V",
                dalle: "Dalle",
                alle: "Alle",
                gg: "GG",
                timbratura: "Timbratura",
                tipo: "Tipo",
                orarioId: "Tipologia Orario"
            }
        },
        arrotondamentoTimbratures: {
            name: "Arrot. Timbrature",
            fields: {
                v: "V",
                dalle: "Dalle",
                tipo: "Tipo",
                ora: "Ora",
                minuti: "Minuti",
                plus_toll: "Plus Toll",
                cumula: "Cumula",
                orarioId: "Tipologia Orario"
            }
        },
        arrotondamentoStraordinarios: {
            name: "Arrot. Straordinario",
            fields: {
                dalle: "Dalle",
                tipo: "Tipo",
                ora: "Ora",
                minuti: "Minuti",
                toll: "toll",
                orarioId: "Tipologia Orario"
            }
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
                vocePerSegnalazione: "Voce per segnalazione",
                orarioId: "Tipologia Orario"
            }
        },
        orariDetails: {
            fields: {
                generale: "Generale",
                avanzato: "Avanzato",
                esperto: "Esperto",
                orarioSpeciale: "Orario Speciali"
            }
        },
        cardGenerale:{
            fields: {
                descrizione: "Descrizione",
                codice : "Codice",
                breve : "Breve",
                colore : "Colore",
                subTitle1: " Tipologia, ore previste e competenza dei risultati",
                tipologiaTipo: "Tipologia Tipo",
                tipologiaOreBase: "Ore Base",
                tipologiaOreMinime: "Ore Minime",
                tipologiaGiornoDiSalvataggio: "Giorno di Salvataggio",
                timbratureDalle: "Dalle",
                timbratureAlle: "Alle",
                timbratureGiorniSuccessiviPerTimbratura: "Giorni successivi per timbratura",
                timbratureTimbratureSuPiuGiorni: "Timbrature su piu giorni",
                timbratureCausaliFuoriIntervallo: "Causali fuori intervallo"
            }
        },
        cardAvanzato:{
            fields: {
                subTitle1: "Orari Sostitutivi",
                orariSostitutiviSabato: "Sabato",
                orariSostitutiviDomenicaEFestivo: "Domenica e Festivi",
                orariSostitutiviPreFestivo: "PreFestivo",
                subTitle2: "Timbrature conformi",
                segnalareTimbratureFuoriFasce: "Segnalare timbrature fuori fasce",
                subTitle3: "Computo del lavoro straordinario",
                lavoroStraordinarioAutorizzato: "Straordinario autorizzato",
                lavoroStraordinarioArrotondamento: "Arrotondamento",
                lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare: "Arrotondamento sulle fasce da Autorizzare",
                subTitle4: "Profilo di rielaborazione",
                profilo: "Profilo"
            }
        }
    }
}