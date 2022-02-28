import * as React from "react"
import { Create, TextInput, SelectInput, BooleanInput, NumberInput, DateInput, ReferenceInput, SimpleForm } from "react-admin"

export const OrariCreate = props => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="id" />
            <ReferenceInput source="scheduleId" reference="orarios">
                <SelectInput optionText="id" />
            </ReferenceInput>
            <TextInput source="code" />
            <DateInput source="brief" />
            <TextInput source="description" />
            <DateInput source="color" />
            <TextInput source="type" />
            <TextInput source="base" />
            <TextInput source="minimum" />
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
        </SimpleForm>
    </Create>
);