import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";
import OrariDetails from "./OrariDetails";
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@material-ui/icons/CheckBoxOutlineBlankTwoTone';

const OrePreviste = (props) => {
    return (
        <div>Min {props.record.tipologiaOreBase} -*- Medie {props.record.tipologiaOreMinime}</div>
    )
}
const VisualizzazioneBool = (props) => {
    return (
        <div>
            {props.record[props.source] ? <CheckBoxTwoToneIcon /> : <CheckBoxOutlineBlankTwoToneIcon />}
        </div>
    )
}
const FasciaTimbrature = (props) => {
    return (
        <div>Dalle {props.record.timbratureDalle} Alle {props.record.timbratureAlle}
            {props.record.timbratureGiorniSuccessiviPerTimbratura === 1 ? ' Del Giorno seguente' :
                props.record.timbratureGiorniSuccessiviPerTimbratura > 1 ? ' Di ' + props.record.timbratureGiorniSuccessiviPerTimbratura + ' Giorni successivi' :
                    null
            }
        </div>
    )
}
const OrariSostitutivi = (props) => {
    return (
        <div>
            {(props.record.orariSostitutiviSabato === '' && props.record.orariSostitutiviDomenicaEFestivo === '' && props.record.orariSostitutiviPreFestivo === '') ? <CheckBoxOutlineBlankTwoToneIcon /> : <CheckBoxTwoToneIcon />}
        </div>
    )
}

export const OrariList = props => (
    <List {...props} bulkActionButtons={false} >
        <Datagrid rowClick="edit" expand={<OrariDetails />}>
            {/* <TextField source="id" /> */}
            {/* <ReferenceField source="orarioId" reference="orarios">
                <TextField source="descrizione" />
            </ReferenceField> */}
            <TextField source="codice" />
            {/* <TextField source="breve" /> */}
            <TextField source="descrizione" />
            <TextField source="tipologiaTipo" />
            <TextField source="tipologiaGiornoDiSalvataggio" />
            <OrePreviste source="orePreviste" />
            <VisualizzazioneBool source="timbratureGiorniSuccessiviPerTimbratura" label="Copre più Giorni" />
            <FasciaTimbrature source="fasciaTimbrature" />
            <VisualizzazioneBool source="segnalareTimbratureFuoriFasce" label="Conformità Timbrature" />
            <VisualizzazioneBool source="compensazioneCompensazioneSelettiva" label="Compensazione Selettiva" />
            <OrariSostitutivi source="orariSostitutivi" />
            <VisualizzazioneBool source="profilosId" label="Rielaborazioni" />

            {/* <TextField source="colore" /> */}
            {/* <TextField source="tipologiaTipo" /> */}
            {/* <TextField source="tipologiaOreBase" /> */}
            {/* <TextField source="tipologiaOreMinime" /> */}
            {/* <TextField source="tipologiaGiornoDiSalvataggio" /> */}
            {/* <TextField source="timbratureDalle" /> */}
            {/* <TextField source="timbratureAlle" /> */}
            {/* <NumberField source="timbratureGiorniSuccessiviPerTimbratura" /> */}
            {/* <BooleanField source="timbratureTimbratureSuPiuGiorni" /> */}
            {/* <BooleanField source="timbratureCausaliFuoriIntervallo" /> */}

            {/* <DateField source="orariSostitutiviSabato" /> */}
            {/* <DateField source="orariSostitutiviDomenicaEFestivo" /> */}
            {/* <DateField source="orariSostitutiviPreFestivo" /> */}
            {/* <BooleanField source="segnalareTimbratureFuoriFasce" /> */}
            {/* <BooleanField source="lavoroStraordinarioAutorizzato" /> */}
            {/* <TextField source="lavoroStraordinarioArrotondamento" /> */}
            {/* <BooleanField source="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" /> */}

            {/* <ReferenceField source="profilosId" reference="profilos" link={false}>
                <TextField source="nome" />
            </ReferenceField> */}

            {/* <BooleanField source="compensazioneCompensazioneSelettiva" /> */}
            {/* <TextField source="compensazioneCumuloAssenze" /> */}
            {/* <TextField source="compensazioneCumuloStraordinario" /> */}
            {/* <TextField source="compensazioneMassimale" /> */}
            {/* <BooleanField source="compensazioneSaldoPositivo" /> */}
            {/* <BooleanField source="compensazioneFasceSeAssenza" /> */}
            {/* <BooleanField source="compensazionePauseNonRispettate" /> */}
            {/* <BooleanField source="compensazioneDeduzioneAdattivaTimbratureTipo" /> */}
            {/* <TextField source="compensazioneSequenzeEu" /> */}
            {/* <TextField source="compensazioneTimbratureFuoriFasciaElastica" /> */}
            {/* <TextField source="compensazioneSpostaTimbraturaTipo" /> */}
            {/* <BooleanField source="compensazioneDisattivaFasceDopoIndividuaTipo" /> */}
            {/* <BooleanField source="compensazioneOrarioRigido" /> */}

            {/* <BooleanField source="postElaborazioniCompensazioneAutomatica" /> */}
            {/* <BooleanField source="postElaborazioniVociAutomatiche" /> */}
            {/* <BooleanField source="postElaborazioniUsaTipoReali" /> */}
            {/* <TextField source="oreTeoricheHHTeoriche" /> */}
            {/* <TextField source="oreTeoricheTipoGG" /> */}
            {/* <BooleanField source="strategieIgnorareTimbratureOrfane" /> */}
            {/* <BooleanField source="strategieTimbratureDiscriminazioneAutomatica" /> */}
            {/* <BooleanField source="strategieGiustificativiRigidi" /> */}
            {/* <BooleanField source="strategieGiustificativiFlex" /> */}
            {/* <BooleanField source="strategieGiustificativiAssenzaTimbrature" /> */}
            {/* <BooleanField source="OmissioneDescrizioneOrdiniServizio" /> */}
        </Datagrid>
    </List>
);