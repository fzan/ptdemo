import * as React from "react";
import { List, Datagrid, TextField } from "react-admin";
import OrariDetails from "./OrariDetails";
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@material-ui/icons/CheckBoxOutlineBlankTwoTone';

const scheduledHours = (props) => {
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
const bandStampings = (props) => {
    return (
        <div>from {props.record.from} to {props.record.to}
            {props.record.nextDays === 1 ? ' Del Giorno seguente' :
                props.record.nextDays > 1 ? ' Di ' + props.record.nextDays + ' Giorni successivi' :
                    null
            }
        </div>
    )
}
const replacementHours = (props) => {
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
            <scheduledHours source="scheduledHours" />
            <VisualizzazioneBool source="nextDays" />
            <bandStampings source="bandStampings" />
            <VisualizzazioneBool source="reportPunchOutOfBands" />
            <VisualizzazioneBool source="selectiveCompensation" />
            <replacementHours source="replacementHours" />
            <VisualizzazioneBool source="profilosId" />
        </Datagrid>
    </List>
);