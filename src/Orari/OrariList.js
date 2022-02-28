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
        <div>from {props.record.from} Alle {props.record.to}
            {props.record.nextDays === 1 ? ' Del Giorno seguente' :
                props.record.nextDays > 1 ? ' Di ' + props.record.nextDays + ' Giorni successivi' :
                    null
            }
        </div>
    )
}
const OrariSostitutivi = (props) => {
    return (
        <div>
            {(props.record.saturday === '' && props.record.sundayHolyday === '' && props.record.preHolyday === '') ? <CheckBoxOutlineBlankTwoToneIcon /> : <CheckBoxTwoToneIcon />}
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
            <VisualizzazioneBool source="nextDays" />
            <FasciaTimbrature source="fasciaTimbrature" />
            <VisualizzazioneBool source="reportPunchOutOfBands" />
            <VisualizzazioneBool source="selectiveCompensation" />
            <OrariSostitutivi source="orariSostitutivi" />
            <VisualizzazioneBool source="profilosId" />
        </Datagrid>
    </List>
);