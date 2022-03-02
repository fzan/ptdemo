import * as React from "react";
import { List, Datagrid, TextField, SelectField, useTranslate } from "react-admin";
import OrariDetails from "./OrariDetails";
import CheckBoxTwoToneIcon from '@material-ui/icons/CheckBoxTwoTone';
import CheckBoxOutlineBlankTwoToneIcon from '@material-ui/icons/CheckBoxOutlineBlankTwoTone';

const ScheduledHours = (props) => {
    const translate = useTranslate()
    return (
        <div>{translate('resources.homeLabel.fields.min')} {props.record.base} -*- {translate('resources.homeLabel.fields.medium')} {props.record.minimum}</div>
    )
}
const VisualizzazioneBool = (props) => {
    return (
        <div>
            {props.record[props.source] ? <CheckBoxTwoToneIcon /> : <CheckBoxOutlineBlankTwoToneIcon />}
        </div>
    )
}
const BandStampings = (props) => {
    const translate = useTranslate()
    return (
        <div>{translate('resources.homeLabel.fields.from')} {props.record.from} {translate('resources.homeLabel.fields.to')} {props.record.to}
            {props.record.nextDays === 1 ? translate('resources.homeLabel.fields.followingDay') :
                props.record.nextDays > 1 ? " "+ translate('resources.homeLabel.fields.of') +" "+ props.record.nextDays +  translate('resources.homeLabel.fields.followingDays') :
                    null
            }
        </div>
    )
}
const ReplacementHours = (props) => {
    return (
        <div>
            {(props.record.saturday === '' && props.record.sundayHolyday === '' && props.record.preHolyday === '') ? <CheckBoxOutlineBlankTwoToneIcon /> : <CheckBoxTwoToneIcon />}
        </div>
    )
}

const typeChoices = [
    { id: 1, name: 'resources.cardGenerale.fields.stiff' },
    { id: 2, name: 'resources.cardGenerale.fields.elastic' },
    { id: 3, name: 'resources.cardGenerale.fields.flexible' },
];

const savingDayChoices = [
    { id: 1, name: 'resources.cardGenerale.fields.entrance' },
    { id: 2, name: 'resources.cardGenerale.fields.exit' },
    { id: 3, name: 'resources.cardGenerale.fields.knight' }
]

export const OrariList = props => (
    <List {...props} bulkActionButtons={false} >
        <Datagrid rowClick="edit" expand={<OrariDetails />}>
            <TextField source="code" />
            <TextField source="description" />
            <SelectField source="type" choices={typeChoices} />
            <SelectField source="savingDay" choices={savingDayChoices} />
            <ScheduledHours source="scheduledHours" />
            <VisualizzazioneBool source="nextDays" />
            <BandStampings source="bandStampings" />
            <VisualizzazioneBool source="reportPunchOutOfBands" />
            <VisualizzazioneBool source="selectiveCompensation" />
            <ReplacementHours source="replacementHours" />
            <VisualizzazioneBool source="profilosId" />
        </Datagrid>
    </List>
);