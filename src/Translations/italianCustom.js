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
                code: "code",
                description: "Descrizione",
                type: "Tipo",
                savingDay: "Giorno Di Salvataggio",
                orePreviste: "Ore Previste",
                nextDays: "Copre più Giorni",
                fasciaTimbrature: "Fascia Timbrature",
                segnalareTimbratureFuoriFasce: "Conformità Timbrature",
                selectiveCompensation: "Compensazione Selettiva",
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
                scheduleId: "Tipologia Orario"
            }
        },
        fasceDelMonteOres: {
            name: "Fasce del monte ore",
            fields: {
                causale: "Causale",
                dalle: "Dalle",
                alle: "Alle",
                scheduleId: "Tipologia Orario"
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
                scheduleId: "Tipologia Orario"
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
                scheduleId: "Tipologia Orario"
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
                scheduleId: "Tipologia Orario"
            }
        },
        pauses: {
            name: "Pause",
            fields: {
                orario: "Orario",
                description: "Descrizione",
                dalle: "Dalle",
                alle: "Alle",
                min: "Min",
                max: "Max",
                obbl: "Obbl",
                tipologia: "Tipologia",
                voce: "Voce",
                eccedenze: "Eccedenze",
                vocePerSegnalazione: "Voce per segnalazione",
                scheduleId: "Tipologia Orario"
            }
        },
        orariDetails: {
            fields: {
                generale: "Generale",
                avanzato: "Avanzato",
                esperto: "Esperto",
                orarioSpeciale: "Orario Speciali",
                timbrature: "Timbrature"
            }
        },
        cardGenerale: {
            fields: {
                description: "Descrizione",
                code: "code",
                brief: "Breve",
                color: "Colore",
                subTitle1: " Tipologia, ore previste e competenza dei risultati",
                type: "Tipologia Tipo",
                base: "Ore Base",
                minimum: "Ore Minime",
                savingDay: "Giorno di Salvataggio",
                from: "Dalle",
                to: "Alle",
                nextDays: "Giorni successivi per timbratura",
                onMoreDays: "Timbrature su piu giorni",
                causalCodesOutOfRange: "Causali fuori intervallo",
                orario: "Orario",
                rigido: "Rigido",
                elastico: "Elastico",
                flessibile: "Flessibile",
                entrata: "ENTRATA - Tutto sul GG di Ingresso",
                uscita: "USCITA - Tutto sul GG di Uscita",
                cavaliere: "CAVALIERE - Selettivo",
                subTitle2: "Intervallo Timbrature",
                nextDaysLabel: "Giorni Successivi"
            }
        },
        cardAvanzato: {
            fields: {
                subTitle1: "Orari Sostitutivi",
                saturday: "Sabato",
                sundayHolyday: "Domenica e Festivi",
                preHolyday: "PreFestivo",
                subTitle2: "Timbrature conformi",
                segnalareTimbratureFuoriFasce: "Segnalare timbrature fuori fasce",
                subTitle3: "Computo del lavoro straordinario",
                lavoroStraordinarioAutorizzato: "Straordinario autorizzato",
                rounding: "Arrotondamento",
                applyRoundingInBandsToBeAuthorized: "Arrotondamento sulle fasce da Autorizzare",
                subTitle4: "Profilo di rielaborazione",
                profilo: "Profilo",
                ogniSingolaVoce: "Ogni singola voce",
                titolare: "Solo il titolare",
                primaSingolaVoce: "Prima ogni singola voce",
                primaIlTotale: "Prima il totale"
            }
        },
        cardEsperto: {
            fields: {
                selectiveCompensation: "Compensazione Selettiva",
                cumulativeAbsence: "Cumulo Assenze",
                cumulativeOvertime: "Cumulo Straordinario",
                maximal: "Massimale",
                positiveBalanceForCompensateHours: "Saldo Positivo",
                compensazioneFasceSeAssenza: "Fasce se Assenza",
                compensazionePauseNonRispettate: "Pause non Rispettate",
                compensazioneDeduzioneAdattivaTimbratureTipo: "Deduzione Adattiva Timbrature Tipo",
                compensazioneSequenzeEu: "Sequenze Eu",
                compensazioneTimbratureFuoriFasciaElastica: "Timbrature fuori fascia Elastica",
                compensazioneSpostaTimbraturaTipo: "Sposta Timbratura Tipo",
                compensazioneDisattivaFasceDopoIndividuaTipo: "Disattiva fasce dopo individua Tipo",
                compensazioneOrarioRigido: "Orario Rigido",
                prima: "Solo prima",
                tutteDallaPrima: "TUTTE - desunte dalla prima",
                tutteIndipendenti: "TUTTE - In modo indipendente"
            }
        },
        cardOrarioSpeciali: {
            fields: {
                subTitle1: "Post-Elaborazioni per giornate prive di timbrature",
                postElaborazioniCompensazioneAutomatica: "Applicare Compensazione Automatica",
                postElaborazioniVociAutomatiche: "Generare Voci Automatiche",
                postElaborazioniUsaTipoReali: "Usare Tipo reali e/o virtuali anche senza timbrature",
                subTitle2: "Ore teoriche e tipologia della giornata",
                oreTeoricheHHTeoriche: 'HH teoriche',
                oreTeoricheTipoGG: 'Tipo GG',
                subTitle3: "Strategie per il motore di elaborazione",
                strategieIgnorareTimbratureOrfane: "Ignorare timbrature orfane",
                strategieTimbratureDiscriminazioneAutomatica: "Includere le timbrature nella fase di discriminazione automatica",
                strategieGiustificativiRigidi: "Convertire giustificativi parziali (rigidi)",
                strategieGiustificativiFlex: "Convertire giustificativi parziali (flex)",
                strategieGiustificativiAssenzaTimbrature: "Giustificativi assegnati anche senza timbratura",
                subTitle4: "Ordini di servizio",
                OmissioneDescrizioneOrdiniServizio: "Omettere la descrizione neglio ordini di servizio",
                minime: "Minime",
                base: "Base",
                lavorativo: "Lavorativo",
                nonLavorativo: "Non Lavorativo",
                festivo: "Festivo",

            }
        },
        calendario: {
            fields: {
                entrata: "ENTRATA",
                uscita: "USCITA",
                title: "Inserimento Fasce di Timbrature",
                istruzioni: "Istruzioni",
                istruzioni1: "Puoi spostare e ricalibrare la fascia oraria",
                istruzioni2: "Click su un evento per poterlo eliminare",
                eventiInseriti: "Eventi Inseriti",
                alert: "Sei sicuro di volere eliminare l'evento ",
                dalle: "Dalle",
                alle: "Alle"
            }
        }
    }
}