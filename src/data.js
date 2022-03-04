import localStorageDataProvider from 'ra-data-local-storage';

const dataProvider = localStorageDataProvider({
    loggingEnabled: true,
    defaultData: {
        // modificaGenerale.png, modificaAvanzato.png, modificaEsperto.png e modificaOrariSpeciali.png
        schedules: [
            {   // 1: General = Generale
                id: 1,
                code: '0Q', // 2: Codice = code
                brief: '', // 3: Breve = brief
                description: 'Prova Quadro 8h', // 4: Descrizione = description
                color: '', // 5: Colore = color
                type: 1, // 6: Tipo = type // 1: Rigido, 2: Elastico, 3: Flessibile 
                base: '08:00', // 7: Base: base
                minimum: '08:00', // 8: Minime = minimum
                savingDay: 1, // 9: Giorno sul quale verranno salvati i risultati = savingDay
                from: '04:30', // 10: Dalle = from 
                to: '19:00', // 11: Alle = to
                nextDays: 1, // 12: giorni dopo = nextDays
                onMoreDays: true, // 13: Le timbrature possono distribuirsi su più giorni = onMoreDays
                causalCodesOutOfRange: false, // 14: Causali eccezione/sub-orario anche fuori intervallo = causalCodesOutOfRange
                // 15: Advanced = Avanzato
                saturday: '', // 16: Sabato = saturday
                sundayHolyday: '', // 17: Dom/Festivo = sundayHolyday 
                preHolyday: '', // 18: PreFestivo = preHolyday
                reportPunchOutOfBands: false, // 19: Segnalare timbrature fuori dalle fasce predefinite = reportPunchOutOfBands
                overtimeMustBeAuthorized: true, // 20: Il lavoro straordinario DEVE essere autorizzato = overtimeMustBeAuthorized
                rounding: 2, // 21: Arrotondamento = rounding 
                applyRoundingInBandsToBeAuthorized: false, // 22: Applicare arrotondamento alle fasce da autorizzare = applyRoundingInBandsToBeAuthorized
                profilosId: 1, // 23: Profilo di rielaborazione = profilosId
                // 24: Expert = Esperto
                selectiveCompensation: false, // 25: Compensazione selettiva = selectiveCompensation
                cumulativeAbsence: '', // 26: Voce per cumulo assenza = cumulativeAbsence
                cumulativeOvertime: '', // 27: Voce per cumulo lavoro straordinario = cumulativeOvertime
                maximal: '00:00', // 28: Massimale = maximal
                positiveBalanceForCompensateHours: false, // 29: Usa saldo positivo per compensare mente ore = positiveBalanceForCompensateHours
                bandsInCaseOfAbsence: false, //30: Considera fasce anche in caso di assenza = bandsInCaseOfAbsence
                extendOverMissedPauses: false, //31: Estendi anche su pause non rispettate = extendOverMissedPauses
                adaptiveDeductionOfStandardPunch: false, // 32: Deduzione adattiva delle timbrature tipo = adaptiveDeductionOfStandardPunch
                eUSequences: '', // 33: Sequenze EU = eUSequences
                punchOutsideElasticBand: false, // 34: Timbrature fuori fascia elastica = punchOutsideElasticBand
                movePunchType: false,  // 35: Sposta timbrature tipo = movePunchType
                deactivateBandsAfterIdentifiedType: false, // 36: Disattiva la fasce dopo aver individuato le tipo = deactivateBandsAfterIdentifiedType
                scheduleBecomeStiff: false, // 37: Orario diviene [Rigido] = scheduleBecomeStiff 
                // 38: Special Schedules = Orari speciali 
                applyAutomaticCompensation: false, // 39: Applicare compensazione automatica = applyAutomaticCompensation
                generateAutomaticEntries: false, // 40: Generare voci automatiche = generateAutomaticEntries
                realTypesWithoutStamping: true, // 41: Usare tipo reali e/o virtuali anche senza timbrature = realTypesWithoutStamping
                theoreticalHours: 1, // 42: HH teoriche = theoreticalHours
                typeOfDay: 0, // 43: Tipo GG = typeOfDay 
                ignoreOrphanedPunch: false, // 44: Ignorare eventuali timbrature orfane = ignoreOrphanedPunch
                includePunchInAutomaticTimeDiscriminationPhase: false, // 45: Includere le timbrature [tipo NO] nella fase di discriminazione automatica dell'orario = includePunchInAutomaticTimeDiscriminationPhase
                partialReceiptsIntoAssignedStiff: true, // 46: Convertire giustificativi parziali [rigidi] in assegnati = partialReceiptsIntoAssignedStiff
                partialReceiptsIntoAssignedFlex: false, // 47: Convertire giustificativi parziali [flex] in assegnati = partialReceiptsIntoAssignedFlex
                receiptsAssignedInAbsenceOfPunch: true, //48: Giustif. assegnati anche in assenza di timbrature = receiptsAssignedInAbsenceOfPunch
                omitDescriptionInServiceOrders: false //49: Omettere la descrizione neglio ordini di servizio = omitDescriptionInServiceOrders
            },
            {
                id: 2,
                code: '0Q7',
                brief: '',
                description: 'Prova Quadro 7h',
                color: '',
                type: 1,
                base: '07:00',
                minimum: '07:00',
                savingDay: 1,
                from: '04:00',
                to: '05:00',
                nextDays: 0,
                onMoreDays: true,
                causalCodesOutOfRange: false,
                saturday: '',
                sundayHolyday: '',
                preHolyday: '',
                reportPunchOutOfBands: true,
                overtimeMustBeAuthorized: true,
                rounding: 2,
                applyRoundingInBandsToBeAuthorized: false,
                profilosId: 2,
                selectiveCompensation: false,
                cumulativeAbsence: '',
                cumulativeOvertime: '',
                maximal: '00:00',
                positiveBalanceForCompensateHours: false,
                bandsInCaseOfAbsence: false,
                extendOverMissedPauses: false,
                adaptiveDeductionOfStandardPunch: false,
                eUSequences: '',
                punchOutsideElasticBand: false,
                movePunchType: '',
                deactivateBandsAfterIdentifiedType: false,
                scheduleBecomeStiff: false,
                applyAutomaticCompensation: false,
                generateAutomaticEntries: false,
                realTypesWithoutStamping: true,
                theoreticalHours: 1,
                typeOfDay: 0,
                ignoreOrphanedPunch: false,
                includePunchInAutomaticTimeDiscriminationPhase: false,
                partialReceiptsIntoAssignedStiff: true,
                partialReceiptsIntoAssignedFlex: false,
                receiptsAssignedInAbsenceOfPunch: true,
                omitDescriptionInServiceOrders: false
            },
            {
                id: 3,
                code: 'D01',
                brief: '',
                description: 'Dirigenti',
                color: '',
                type: 1,
                base: '08:00',
                minimum: '08:00',
                savingDay: 1,
                from: '05:00',
                to: '07:00',
                nextDays: 2,
                onMoreDays: true,
                causalCodesOutOfRange: false,
                saturday: '',
                sundayHolyday: '',
                preHolyday: 'asd',
                reportPunchOutOfBands: false,
                overtimeMustBeAuthorized: true,
                rounding: 2,
                applyRoundingInBandsToBeAuthorized: false,
                profilosId: 6,
                selectiveCompensation: false,
                cumulativeAbsence: '',
                cumulativeOvertime: '',
                maximal: '03:00',
                positiveBalanceForCompensateHours: false,
                bandsInCaseOfAbsence: true,
                extendOverMissedPauses: false,
                adaptiveDeductionOfStandardPunch: true,
                eUSequences: 'Solo Prima',
                punchOutsideElasticBand: false,
                movePunchType: 'Sino al limite della fascia',
                deactivateBandsAfterIdentifiedType: true,
                scheduleBecomeStiff: true,
                applyAutomaticCompensation: false,
                generateAutomaticEntries: false,
                realTypesWithoutStamping: true,
                theoreticalHours: 1,
                typeOfDay: 0,
                ignoreOrphanedPunch: false,
                includePunchInAutomaticTimeDiscriminationPhase: false,
                partialReceiptsIntoAssignedStiff: true,
                partialReceiptsIntoAssignedFlex: false,
                receiptsAssignedInAbsenceOfPunch: true,
                omitDescriptionInServiceOrders: false
            }
        ],
        // fasceDellaGiornata.png 
        workingDayBands: [ // 1: workingDayBands = Fasce della giornata
            {
                id: 1,
                scheduleId: 1,
                causalCode: 'Notturno 2', // 2: causalCode = Causale
                from: '00:00', // 3: Dalle = from
                to: '04:59', // 4: Alle = to
                priority: 0 // 5: Priorità = priority
            },
            { id: 2, scheduleId: 1, causalCode: 'Notturno 2', from: '20:00', to: '23:59', priority: 0 },
            { id: 6, scheduleId: 1, causalCode: 'Notturno 2', from: '00:00', to: '04:59', priority: 0 },
            { id: 7, scheduleId: 1, causalCode: 'Notturno 2', from: '20:00', to: '23:59', priority: 0 },
            { id: 3, scheduleId: 2, causalCode: 'Notturno 2', from: '20:00', to: '23:59', priority: 0 },
            { id: 4, scheduleId: 3, causalCode: 'Notturno 2', from: '00:00', to: '04:59', priority: 0 },
            { id: 5, scheduleId: 3, causalCode: 'Notturno 2', from: '20:00', to: '23:59', priority: 0 }
        ],
        // fasceDelMonteOre.png
        workingHourBands: [ // 1: workingHourBands = Fasce del monte ore
            {
                id: 1,
                scheduleId: 1,
                causalCode: 'Maggior presenza', // 2: causalCode = causale
                from: '00:00', // 3: Dalle = from
                to: '07:59'// 4: Alle = to
            },
            { id: 2, scheduleId: 1, causalCode: 'Maggior presenza', from: '08:00', to: '23:59' },
            { id: 3, scheduleId: 2, causalCode: 'Maggior presenza', from: '00:00', to: '06:59' },
            { id: 4, scheduleId: 2, causalCode: 'Maggior presenza', from: '07:00', to: '23:59' },
            { id: 5, scheduleId: 3, causalCode: 'Maggior presenza', from: '00:00', to: '07:59' },
            { id: 6, scheduleId: 3, causalCode: 'Maggior presenza', from: '08:00', to: '23:59' }
        ],
        // timbratureTipo.png
        punchTypes: [ // 1: punchTypes = Timbrature Tipo
            {
                id: 1,
                scheduleId: 1,
                v: 'E', //2 v : v (rimane lo stesso che tanto sarebbe stato Valore per Value [a naso])
                from: '03:55', // 3: Dalle = from
                to: '04:05', // 4: alle = to
                gg: 0, // 5: gg = gg (se > 0 sono le "TO" + "gg" giorni...COMODISSIMO!)
                punch: '04:00', // 6: Timbratura = punch
                type: 'virtuale', // 7: Tipo = type
                delType: '', // 0: tutte le timbature intervallo, 1: solo la prima,2  solo l'ultima
            },
            { id: 2, scheduleId: 1, v: 'U', from: '20:00', to: '23:59', gg: 0, punch: '20:00', type: 'reale', delType: '' },
            { id: 3, scheduleId: 2, v: 'E', from: '03:55', to: '04:05', gg: 0, punch: '04:00', type: 'virtuale', delType: '' },
            { id: 4, scheduleId: 2, v: 'U', from: '04:00', to: '04:10', gg: 0, punch: '04:05', type: 'virtuale', delType: '' },
            { id: 5, scheduleId: 3, v: 'E', from: '04:55', to: '05:05', gg: 0, punch: '05:00', type: 'virtuale', delType: '' },
            { id: 6, scheduleId: 3, v: 'U', from: '20:00', to: '23:59', gg: 0, punch: '20:00', type: 'reale', delType: '' }
        ],
        // arrotondamentoTimbrature1.png e arrotondamentoTimbrature2.png
        punchRoundings: [ // 1: punchRoundings = Arrotondamento Timbrature
            {
                id: 1,
                scheduleId: 1,
                v: 'U', // 2 v : v (rimane lo stesso che tanto sarebbe stato Valore per Value [a naso])
                from: '00:00', // 3: Dalle = from
                to: '04:00', // 4: alle = to
                type: 'Difetto', // 5: Tipo = type
                hour: '', // 6: Ora = hour
                minutes: '30', // 7: Minuti = minutes
                plusToll: '', // 8: Plus/Toll = plusToll (non so che fa/ dove si modifica) ('plus' ha senso anche in inglese e 'toll' sta per tolleranza, che è Tollerance. Lasciamo cosi)
                cumulate: '' // 9: Cumula = cumulate (non so che fa/ dove si modifica)
            },
            { id: 2, scheduleId: 1, v: 'U', from: '20:00', to: '20:59', type: 'Ora Specificata', hour: '20:00', minutes: '', plusToll: '', cumulate: '' },
            { id: 3, scheduleId: 1, v: 'U', from: '21:00', to: '23:59', type: 'Difetto', hour: '', minutes: '30', plusToll: '', cumulate: '' },
            { id: 4, scheduleId: 3, v: 'U', from: '00:00', to: '05:00', type: 'Difetto', hour: '', minutes: '30', plusToll: '', cumulate: '' },
            { id: 5, scheduleId: 3, v: 'U', from: '20:00', to: '20:59', type: 'Ora Specificata', hour: '20:00', minutes: '', plusToll: '', cumulate: '' },
            { id: 6, scheduleId: 3, v: 'U', from: '21:00', to: '23:59', type: 'Difetto', hour: '', minutes: '30', plusToll: '', cumulate: '' }
        ],
        // arrotondamentoStraordinario.png
        overtimeRoundings: [ // 1: overtimeRoundings = Arrotondamento Straordinario
            {
                id: 1,
                scheduleId: 1,
                from: '00:00', // 2: Dalle = from
                to: '00:59', // 3: alle = to
                type: 'Ora Specificata', // 4: Tipo = type
                hour: '00:00', // 5: Ora = hour
                minutes: '', // 6: Minuti = minutes
                toll: '' // 7: Toll = toll (la lasciamo cosi)
            },
            { id: 2, scheduleId: 1, from: '01:00', to: '23:59', type: 'Difetto', hour: '', minutes: '30', toll: '' },
            { id: 3, scheduleId: 2, from: '00:00', to: '00:59', type: 'Ora Specificata', hour: '00:00', minutes: '', toll: '' },
            { id: 4, scheduleId: 2, from: '01:00', to: '23:59', type: 'Difetto', hour: '', minutes: '30', toll: '' },
            { id: 5, scheduleId: 3, from: '00:00', to: '23:59', type: 'Ora Specificata', hour: '00:00', minutes: '', toll: '' }
        ],
        // pause1.png , pause2.png e pause3.png
        pauses: [ // 1: pauses = Pause
            {
                id: 1,
                scheduleId: 2,
                description: 'Pausa Pranzo', // 2: Descrizione = description
                from: '12:30', // 2: Dalle = from
                to: '14:30', // 3: Alle = to
                min: '00:45', // 4: Min = min
                max: '00:35', // 5: Max = max
                mandatory: '', // 6: Obbl. = mandatory ("Obbl." dovrebbe stare per Obbligatoria, quindi "mandatory" )
                typology: 'Pausa Pranzo', // 7: Tipologia = typology
                entry: '', // 8: voce = entry 
                surpluses: 'SOLO eccesso non lavorato', // 9: Eccedenze = surpluses
                reporting: '' // 10: Voce per Segnalazione = reporting
            }
        ],
        //questi 2 sono semplicemente per la popolazione di uno scenario base. Non hanno nessuna logica collegata
        profilos: [
            { id: 1, name: '00 - Quadri (prova)' },
            { id: 2, name: 'G - Banca ore 100%' },
            { id: 3, name: 'G - Banca ore 50%' },
            { id: 4, name: 'G - No Straordinario' },
            { id: 5, name: 'G - Straordinario 100%' },
            { id: 6, name: 'O - Genova Giornaliero' },
            { id: 7, name: 'O - Genova Riposo' },
            { id: 8, name: 'O - Priolo Giornaliero' }
        ],
        voices: [
            { id: 1, name: 'AARI Perm. Arca per riunioni' },
            { id: 2, name: 'AFEG Festività Goduta' },
            { id: 3, name: 'AI Assenza ingiustificata' },
            { id: 4, name: 'AIHH Assenza non giustificata' },
            { id: 5, name: 'ALOP Assenza giorno semifestivo' },
            { id: 6, name: 'ARIT Ritardo' },
            { id: 7, name: 'ASPG Aspettativa' },
            { id: 8, name: 'ASRE Assemb. Sind. retribuita' },
            { id: 9, name: 'FLEN Flessibilità negativa' },
            { id: 10, name: 'FLEP Flessibilità positiva' }
        ]
    }

});

export default dataProvider;