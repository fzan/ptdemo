import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";
import OrariDetails from "./OrariDetails";
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@material-ui/icons/CheckBoxOutlineBlankTwoTone';

const OrePreviste = (props) => {
    return (
        <div>Min {props.record.base} -*- Medie {props.record.minimum}</div>
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
        <div>Dalle {props.record.from} Alle {props.record.timbratureAlle}
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
            <TextField source="code" />
            <TextField source="description" />
            <TextField source="type" />
            <TextField source="savingDay" />
            <OrePreviste source="orePreviste" />
            <VisualizzazioneBool source="timbratureGiorniSuccessiviPerTimbratura" />
            <FasciaTimbrature source="fasciaTimbrature" />
            <VisualizzazioneBool source="segnalareTimbratureFuoriFasce" />
            <VisualizzazioneBool source="compensazioneCompensazioneSelettiva" />
            <OrariSostitutivi source="orariSostitutivi" />
            <VisualizzazioneBool source="profilosId" />
        </Datagrid>
    </List>
);