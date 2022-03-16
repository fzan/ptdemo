module.exports = {
    resources: {
        homeLabel: {
            fields: {
                homeLabel: "This is the first Demo",
                medium: "medium",
                min: "min",
                from: "From",
                to: "to",
                of: "Of",
                followingDay: " of the following day",
                followingDays: " Following days"
            }
        },
        posts: {
            name: 'Articles',
            fields: {
                title: 'Title'
            }
        },
        schedules: {
            name: "TimeTables",
            fields: {
                code: "Code",
                description: "Description",
                type: "Type",
                savingDay: "Saving Day",
                scheduledHours: "Scheduled Hours",
                nextDays: "Multiple Days",
                bandStampings: "Band Stampings",
                reportPunchOutOfBands: "Stamping Compliance",
                selectiveCompensation: "Selective Compensation",
                replacementHours: "Replacement Hours",
                profilosId: "Reworkings"
            },
        },
        profilos: {
            name: "Profiles",
            fields: {
                name: "Name"
            }
        },
        voices: {
            name: "Voices",
            fields: {
                title: "Title"
            }
        },
        workingDayBands: {
            name: "Time Slots of the Day",
            fields: {
                causalCodeId: "Causal",
                from: "From",
                to: "To",
                priority: "Priority",
                scheduleId: "Type of Time"
            }
        },
        workingHourBands: {
            name: "Slots of the Total Hours",
            fields: {
                causalCode: "Causal",
                from: "From",
                to: "To",
                scheduleId: "Type of Time"
            }
        },
        punchTypes: {
            name: "Type Stampings",
            fields: {
                v: "V",
                from: "From",
                to: "To",
                gg: "GG",
                punch: "Stamping",
                type: "Type",
                scheduleId: "Type of Time"
            }
        },
        punchRoundings: {
            name: "Rounding off Stampings",
            fields: {
                v: "V",
                from: "From",
                type: "Type",
                hour: "Hour",
                minutes: "Minutes",
                plus_toll: "Plus Toll",
                cumulate: "Cumulate",
                scheduleId: "Type of Time"
            },
        },
        overtimeRoundings: {
            name: "Extraordinary Rounding",
            fields: {
                from: "From",
                type: "Type",
                hour: "Hour",
                minutes: "Minutes",
                toll: "toll",
                scheduleId: "Type of Time"
            },
        },
        breaks: {
            name: "Breaks",
            fields: {
                scheduledIdLabel: "Time",
                description: "Description",
                from: "From",
                to: "To",
                min: "Min",
                max: "Max",
                obbl: "Obbl",
                typology: "Tipology",
                entry: "Item",
                surpluses: "Surpluses",
                reporting: "Item for Reports",
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
                scheduledIdLabel: "Hours",
                stiff: "Stiff",
                elastic: "Elastic",
                flexible: "Flexible",
                entrance: "ENTRANCE - All about the entrance GG",
                exit: "EXIT - All about the Day of GG",
                knight: "KNIGHT - Selective",
                subTitle2: "Stamping Interval",
                nextDaysLabel: "Days Later"
            }
        },
        cardAvanzato: {
            fields: {
                subTitle1: "Replacement Hours",
                saturday: "Saturday",
                sundayHolyday: "Holidays",
                preHolyday: "Pre-holiday",
                subTitle2: "Compliant stampings",
                reportPunchOutOfBands: "Report out-of-time stampings",
                subTitle3: "Computation of overtime",
                overtimeMustBeAuthorized: "Extraordinary authorized",
                rounding: "Rounding",
                applyRoundingInBandsToBeAuthorized: "Rounding on the bands to be authorized",
                subTitle4: "Profile of reworking",
                profilosId: "Profile",
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
                punchOutsideElasticBand: "Stamping out of the Elastic band",
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
                generateAutomaticEntries: "Generate Automatic Voices",
                realTypesWithoutStamping: "Use real and / or virtual Type even without stamping",
                subTitle2: "Theoretical hours and type of day",
                theoreticalHours: 'HH theoretical',
                typeOfDay: 'Type GG',
                subTitle3: "Processing engine strategies",
                ignoreOrphanedPunch: "Ignore orphaned clockings",
                includePunchInAutomaticTimeDiscriminationPhase: "Include the stampings in the automatic discrimination phase",
                partialReceiptsIntoAssignedStiff: "Convert partial vouchers (rigid)",
                partialReceiptsIntoAssignedFlex: "Convert partial vouchers (flex)",
                receiptsAssignedInAbsenceOfPunch: "Justifications assigned even without stamping",
                subTitle4: "Service orders",
                omitDescriptionInServiceOrders: "Omit the description in the service orders",
                minime: "Minimum",
                base: "Base",
                lavorativo: "WorkDay",
                nonLavorativo: "Not WorkDay",
                festivo: "Holiday",
            }
        },
        calendario: {
            fields: {
                entrance: "entrance",
                exit: "USCITA",
                title: "Insertion of Stamping Bands",
                istruzioni: "Instruction",
                istruzioni1: "You can move and recalibrate the time slot",
                istruzioni2: "Click on an event to be able to delete it",
                eventiInseriti: "Events Posted",
                alert: "Are you sure you want to delete the event ",
                from: "From",
                to: "To"
            }
        }
    }
}
