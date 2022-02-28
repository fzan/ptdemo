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
                code: "Code",
                description: "Description",
                type: "Type",
                savingDay: "Saving Day",
                orePreviste: "Scheduled Hours",
                nextDays: "Multiple Days",
                fasciaTimbrature: "Band Stampings",
                reportPunchOutOfBands: "Stamping Compliance",
                selectiveCompensation: "Selective Compensation",
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
                scheduleId: "Type of Time"
            }
        },
        fasceDelMonteOres: {
            name: "Slots of the Total Hours",
            fields: {
                causale: "Causal",
                dalle: "From",
                alle: "To",
                scheduleId: "Type of Time"
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
                scheduleId: "Type of Time"
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
                scheduleId: "Type of Time"
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
                scheduleId: "Type of Time"
            },
        },
        pauses: {
            name: "Pauses",
            fields: {
                orario: "Time",
                description: "Description",
                dalle: "From",
                alle: "To",
                min: "Min",
                max: "Max",
                obbl: "Obbl",
                tipologia: "Tipology",
                voce: "Item",
                eccedenze: "Surpluses",
                vocePerSegnalazione: "Item for Reports",
                scheduleId: "Type of Time"
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
                description: "Description",
                code: "Code",
                brief: "Short",
                color: "Colour",
                subTitle1: " Type, expected hours and competence of the results",
                type: "Type",
                base: "Base Hours",
                minimum: "Minimum Hours",
                savingDay: "Saving Day",
                from: "From",
                to: "To",
                nextDays: "Subsequent days for stamping",
                onMoreDays: "Stamping over several days",
                causalCodesOutOfRange: "Cause them out of range",
                orario: "Hours",
                rigido: "Stiff",
                elastico: "Elastic",
                flessibile: "Flexible",
                entrata: "ENTRANCE - All about the entrance GG",
                uscita: "EXIT - All about the Day of GG",
                cavaliere: "KNIGHT - Selective",
                subTitle2: "Stamping Interval",
                nextDaysLabel: "Days Later"
            }
        },
        cardAvanzato: {
            fields: {
                subTitle1: "Replacement Hours",
                saturday: "Saturday",
                sundayHolyday: "Sunday and Holidays",
                preHolyday: "Pre-holiday",
                subTitle2: "Compliant stampings",
                reportPunchOutOfBands: "Report out-of-time stampings",
                subTitle3: "Computation of overtime",
                overtimeMustBeAuthorized: "Extraordinary authorized",
                rounding: "Rounding",
                applyRoundingInBandsToBeAuthorized: "Rounding on the bands to be authorized",
                subTitle4: "Profile of reworking",
                profilo: "Profile",
                ogniSingolaVoce: "Every single item",
                titolare: "Only the owner",
                primaSingolaVoce: "Every single item first",
                primaIlTotale: "Total first"
            }
        },
        cardEsperto: {
            fields: {
                selectiveCompensation: "Selective Compensation",
                cumulativeAbsence: "Cumulation of Absences",
                cumulativeOvertime: "Extraordinary cumulation",
                maximal: "Maximal",
                positiveBalanceForCompensateHours: "Positive Balance",
                bandsInCaseOfAbsence: "Bands if Absence",
                extendOverMissedPauses: "Breaks not respected",
                adaptiveDeductionOfStandardPunch: "Adaptive Deduction Stamping Type",
                eUSequences: "Eu sequences",
                PunchOutsideElasticBand: "Stamping out of the Elastic band",
                movePunchType: "Move Stamping Type",
                deactivateBandsAfterIdentifiedType: "Disable bands after locate Type",
                scheduleBecomeStiff: "Rigid timetable",
                prima: "Only First",
                tutteDallaPrima: "ALL - deduced from the first",
                tutteIndipendenti: "ALL - Independently"
            }
        },
        cardOrarioSpeciali: {
            fields: {
                subTitle1: "Post-processing for days without stamping",
                applyAutomaticCompensation: "Apply Automatic Compensation",
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
                OmissioneDescrizioneOrdiniServizio: "Omit the description in the service orders",
                minime: "Minimum",
                base: "Base",
                lavorativo: "WorkDay",
                nonLavorativo: "Not WorkDay",
                festivo: "Holiday",
            }
        },
        calendario: {
            fields: {
                entrata: "ENTRATA",
                uscita: "USCITA",
                title: "Insertion of Stamping Bands",
                istruzioni: "Instruction",
                istruzioni1: "You can move and recalibrate the time slot",
                istruzioni2: "Click on an event to be able to delete it",
                eventiInseriti: "Events Posted",
                alert: "Are you sure you want to delete the event ",
                dalle: "From",
                alle: "To"
            }
        }
    }
}
