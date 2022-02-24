module.exports = {
    resources: {
        homeLabel: {
            fields: {
                homeLabel: "This is the first Demo"
            }
        },
        posts: {
            name: 'Articles',
            fields: {
                title: 'Title'
            }
        },
        orarios: {
            name: "TimeTables",
            fields: {
                codice: "Code",
                descrizione: "Description",
                tipologiaTipo: "Type",
                tipologiaGiornoDiSalvataggio: "Saving Day",
                orePreviste: "Scheduled Hours",
                timbratureGiorniSuccessiviPerTimbratura: "Multiple Days",
                fasciaTimbrature: "Band Stampings",
                segnalareTimbratureFuoriFasce: "Stamping Compliance",
                compensazioneCompensazioneSelettiva: "Selective Compensation",
                orariSostitutivi: "Replacement Hours",
                profilosId: "Reworkings"
            },
        },
        profilos: {
            name: "Profiles",
            fields: {
                nome: "Name"
            }
        },
        vocis: {
            name: "Voices",
            fields: {
                title: "Title"
            }
        },
        fasceDellaGiornatas: {
            name: "Time Slots of the Day",
            fields: {
                causale: "Causal",
                dalle: "From",
                alle: "To",
                priorita: "Priority",
                orarioId: "Type of Time"
            }
        },
        fasceDelMonteOres: {
            name: "Slots of the Total Hours",
            fields: {
                causale: "Causal",
                dalle: "From",
                alle: "To",
                orarioId: "Type of Time"
            }
        },
        timbratureTipos: {
            name: "Type Stampings",
            fields: {
                v: "V",
                dalle: "From",
                alle: "To",
                gg: "GG",
                timbratura: "Stamping",
                tipo: "Type",
                orarioId: "Type of Time"
            }
        },
        arrotondamentoTimbratures: {
            name: "Rounding off Stampings",
            fields: {
                v: "V",
                dalle: "From",
                tipo: "Type",
                ora: "Hour",
                minuti: "Minutes",
                plus_toll: "Plus Toll",
                cumula: "Cumulate",
                orarioId: "Type of Time"
            },
        },
        arrotondamentoStraordinarios: {
            name: "Extraordinary Rounding",
            fields: {
                dalle: "From",
                tipo: "Type",
                ora: "Hour",
                minuti: "Minutes",
                toll: "toll",
                orarioId: "Type of Time"
            },
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
                vocePerSegnalazione: "Item for Reports",
                orarioId: "Type of Time"
            }
        },
        orariDetails: {
            fields: {
                generale: "General",
                avanzato: "Advanced",
                esperto: "Expert",
                orarioSpeciale: "Special Time",
                timbrature: "Stampings"
            }
        },
        cardGenerale: {
            fields: {
                descrizione: "Description",
                codice: "Code",
                breve: "Short",
                colore: "Colour",
                subTitle1: " Type, expected hours and competence of the results",
                tipologiaTipo: "Type",
                tipologiaOreBase: "Base Hours",
                tipologiaOreMinime: "Minimum Hours",
                tipologiaGiornoDiSalvataggio: "Saving Day",
                timbratureDalle: "From",
                timbratureAlle: "To",
                timbratureGiorniSuccessiviPerTimbratura: "Subsequent days for stamping",
                timbratureTimbratureSuPiuGiorni: "Stamping over several days",
                timbratureCausaliFuoriIntervallo: "Cause them out of range",
                orario: "Hours",
                rigido: "Stiff",
                elastico: "Elastic",
                flessibile: "Flexible",
                entrata: "ENTRANCE - All about the entrance GG",
                uscita: "EXIT - All about the Day of GG",
                cavaliere: "KNIGHT - Selective",
                subTitle2: "Stamping Interval",
                giorniSuccessivi: "Days Later"
            }
        },
        cardAvanzato: {
            fields: {
                subTitle1: "Replacement Hours",
                orariSostitutiviSabato: "Saturday",
                orariSostitutiviDomenicaEFestivo: "Sunday and Holidays",
                orariSostitutiviPreFestivo: "Pre-holiday",
                subTitle2: "Compliant stampings",
                segnalareTimbratureFuoriFasce: "Report out-of-time stampings",
                subTitle3: "Computation of overtime",
                lavoroStraordinarioAutorizzato: "Extraordinary authorized",
                lavoroStraordinarioArrotondamento: "Rounding",
                lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare: "Rounding on the bands to be authorized",
                subTitle4: "Profile of reworking",
                profilo: "Profile"
            }
        },
        cardEsperto: {
            fields: {
                compensazioneCompensazioneSelettiva: "Selective Compensation",
                compensazioneCumuloAssenze: "Cumulation of Absences",
                compensazioneCumuloStraordinario: "Extraordinary cumulation",
                compensazioneMassimale: "Maximal",
                compensazioneSaldoPositivo: "Positive Balance",
                compensazioneFasceSeAssenza: "Bands if Absence",
                compensazionePauseNonRispettate: "Breaks not respected",
                compensazioneDeduzioneAdattivaTimbratureTipo: "Adaptive Deduction Stamping Type",
                compensazioneSequenzeEu: "Eu sequences",
                compensazioneTimbratureFuoriFasciaElastica: "Stamping out of the Elastic band",
                compensazioneSpostaTimbraturaTipo: "Move Stamping Type",
                compensazioneDisattivaFasceDopoIndividuaTipo: "Disable bands after locate Type",
                compensazioneOrarioRigido: "Rigid timetable",
            }
        },
        cardOrarioSpeciali: {
            fields: {
                subTitle1: "Post-processing for days without stamping",
                postElaborazioniCompensazioneAutomatica: "Apply Automatic Compensation",
                postElaborazioniVociAutomatiche: "Generate Automatic Voices",
                postElaborazioniUsaTipoReali: "Use real and / or virtual Type even without stamping",
                subTitle2: "Theoretical hours and type of day",
                oreTeoricheHHTeoriche: 'HH theoretical',
                oreTeoricheTipoGG: 'Type GG',
                subTitle3: "Processing engine strategies",
                strategieIgnorareTimbratureOrfane: "Ignore orphaned clockings",
                strategieTimbratureDiscriminazioneAutomatica: "Include the stampings in the automatic discrimination phase",
                strategieGiustificativiRigidi: "Convert partial vouchers (rigid)",
                strategieGiustificativiFlex: "Convert partial vouchers (flex)",
                strategieGiustificativiAssenzaTimbrature: "Justifications assigned even without stamping",
                subTitle4: "Service orders",
                OmissioneDescrizioneOrdiniServizio: "Omit the description in the service orders"
            }
        }
    }
}
