import * as React from "react"
import { Edit, TextInput, SelectInput, BooleanInput, NumberInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'

export const OrariEdit = props => (
    <Edit {...props}>
        <SimpleForm warnWhenUnsavedChanges>
            <Grid container spacing={1} style={{ width: "100%" }}>
                <Grid item xs={2} />
                <Grid item xs={8}>

                            <Typography gutterBottom variant="h5" component="div">
                                Azienda info B
                            </Typography>
                            <ReferenceInput source="orarioId" reference="orarios">
                                <SelectInput optionText="descrizione" />
                            </ReferenceInput>
                            <TextInput source="codice" />
                            <TextInput source="breve" />
                            <TextInput source="descrizione" />
                            <DateInput source="colore" />
                            <SelectInput source="tipologiaTipo" choices={[
                                { id: 'Rigido', name: 'Rigido' },
                                { id: 'Elastico', name: 'Elastico' },
                                { id: 'Flessibile', name: 'Flessibile' },
                            ]} />
                            <TextInput source="tipologiaOreBase" />
                            <TextInput source="tipologiaOreMinime" />
                            <TextInput source="tipologiaGiornoDiSalvataggio" />
                            <TextInput source="timbratureDalle" />
                            <TextInput source="timbratureAlle" />
                            <NumberInput source="timbratureGiorniSuccessiviPerTimbratura" />
                            <BooleanInput source="timbratureTimbratureSuPiuGiorni" />
                            <BooleanInput source="timbratureCausaliFuoriIntervallo" />
                            <DateInput source="orariSostitutiviSabato" />
                            <DateInput source="orariSostitutiviDomenicaEFestivo" />
                            <DateInput source="orariSostitutiviPreFestivo" />
                            <BooleanInput source="segnalareTimbratureFuoriFasce" />
                            <BooleanInput source="lavoroStraordinarioAutorizzato" />
                            <TextInput source="lavoroStraordinarioArrotondamento" />
                            <BooleanInput source="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" />
                            <ReferenceInput source="profilosId" reference="profilos">
                                <SelectInput optionText="nome" />
                            </ReferenceInput>
                            <BooleanInput source="compensazioneCompensazioneSelettiva" />
                            <DateInput source="compensazioneCumuloAssenze" />
                            <DateInput source="compensazioneCumuloStraordinario" />
                            <TextInput source="compensazioneMassimale" />
                            <BooleanInput source="compensazioneSaldoPositivo" />
                            <BooleanInput source="compensazioneFasceSeAssenza" />
                            <BooleanInput source="compensazionePauseNonRispettate" />
                            <BooleanInput source="compensazioneDeduzioneAdattivaTimbratureTipo" />
                            <DateInput source="compensazioneSequenzeEu" />
                            <DateInput source="compensazioneTimbratureFuoriFasciaElastica" />
                            <DateInput source="compensazioneSpostaTimbraturaTipo" />
                            <BooleanInput source="compensazioneDisattivaFasceDopoIndividuaTipo" />
                            <BooleanInput source="compensazioneOrarioRigido" />
                            <BooleanInput source="postElaborazioniCompensazioneAutomatica" />
                            <BooleanInput source="postElaborazioniVociAutomatiche" />
                            <BooleanInput source="postElaborazioniUsaTipoReali" />
                            <TextInput source="oreTeoricheHHTeoriche" />
                            <TextInput source="oreTeoricheTipoGG" />
                            <BooleanInput source="strategieIgnorareTimbratureOrfane" />
                            <BooleanInput source="strategieTimbratureDiscriminazioneAutomatica" />
                            <BooleanInput source="strategieGiustificativiRigidi" />
                            <BooleanInput source="strategieGiustificativiFlex" />
                            <BooleanInput source="strategieGiustificativiAssenzaTimbrature" />
                            <BooleanInput source="OmissioneDescrizioneOrdiniServizio" />

                </Grid>
                <Grid item xs={2} />
            </Grid>
        </SimpleForm>
        {/* <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="orarioId" reference="orarios">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="codice" />
            <DateInput source="breve" />
            <TextInput source="descrizione" />
            <DateInput source="colore" />
            <TextInput source="tipologiaTipo" />
            <TextInput source="tipologiaOreBase" />
            <TextInput source="tipologiaOreMinime" />
            <TextInput source="tipologiaGiornoDiSalvataggio" />
            <TextInput source="timbratureDalle" />
            <TextInput source="timbratureAlle" />
            <NumberInput source="timbratureGiorniSuccessiviPerTimbratura" />
            <BooleanInput source="timbratureTimbratureSuPiuGiorni" />
            <BooleanInput source="timbratureCausaliFuoriIntervallo" />
            <DateInput source="orariSostitutiviSabato" />
            <DateInput source="orariSostitutiviDomenicaEFestivo" />
            <DateInput source="orariSostitutiviPreFestivo" />
            <BooleanInput source="segnalareTimbratureFuoriFasce" />
            <BooleanInput source="lavoroStraordinarioAutorizzato" />
            <TextInput source="lavoroStraordinarioArrotondamento" />
            <BooleanInput source="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" />
            <ReferenceInput source="profilosId" reference="profilos">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <BooleanInput source="compensazioneCompensazioneSelettiva" />
            <DateInput source="compensazioneCumuloAssenze" />
            <DateInput source="compensazioneCumuloStraordinario" />
            <TextInput source="compensazioneMassimale" />
            <BooleanInput source="compensazioneSaldoPositivo" />
            <BooleanInput source="compensazioneFasceSeAssenza" />
            <BooleanInput source="compensazionePauseNonRispettate" />
            <BooleanInput source="compensazioneDeduzioneAdattivaTimbratureTipo" />
            <DateInput source="compensazioneSequenzeEu" />
            <DateInput source="compensazioneTimbratureFuoriFasciaElastica" />
            <DateInput source="compensazioneSpostaTimbraturaTipo" />
            <BooleanInput source="compensazioneDisattivaFasceDopoIndividuaTipo" />
            <BooleanInput source="compensazioneOrarioRigido" />
            <BooleanInput source="postElaborazioniCompensazioneAutomatica" />
            <BooleanInput source="postElaborazioniVociAutomatiche" />
            <BooleanInput source="postElaborazioniUsaTipoReali" />
            <TextInput source="oreTeoricheHHTeoriche" />
            <TextInput source="oreTeoricheTipoGG" />
            <BooleanInput source="strategieIgnorareTimbratureOrfane" />
            <BooleanInput source="strategieTimbratureDiscriminazioneAutomatica" />
            <BooleanInput source="strategieGiustificativiRigidi" />
            <BooleanInput source="strategieGiustificativiFlex" />
            <BooleanInput source="strategieGiustificativiAssenzaTimbrature" />
            <BooleanInput source="OmissioneDescrizioneOrdiniServizio" />
        </SimpleForm> */}
    </Edit>
);