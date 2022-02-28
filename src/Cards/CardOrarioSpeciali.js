import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslate } from 'react-admin'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardOrarioSpeciali(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableBody>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle1')}</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="applyAutomaticCompensation" checked={record.applyAutomaticCompensation} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.applyAutomaticCompensation')} />
                    <FormControlLabel control={
                        <CheckBox id="generateAutomaticEntries" checked={record.generateAutomaticEntries} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.generateAutomaticEntries')} />
                    <FormControlLabel control={
                        <CheckBox id="realTypesWithoutStamping" checked={record.realTypesWithoutStamping} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.realTypesWithoutStamping')} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle2')}</ListSubheader>}
            >
                <TableRow width=''>
                    <TextField id="theoreticalHours" label={translate('resources.cardOrarioSpeciali.fields.theoreticalHours')} defaultValue={record.theoreticalHours} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="typeOfDay" label={translate('resources.cardOrarioSpeciali.fields.typeOfDay')} defaultValue={record.typeOfDay} InputProps={{ readOnly: true }} className={classes.textInput} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle3')}</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="ignoreOrphanedPunch" checked={record.ignoreOrphanedPunch} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.ignoreOrphanedPunch')} />
                    <FormControlLabel control={
                        <CheckBox id="includePunchInAutomaticTimeDiscriminationPhase" checked={record.includePunchInAutomaticTimeDiscriminationPhase} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.includePunchInAutomaticTimeDiscriminationPhase')} />
                    <FormControlLabel control={
                        <CheckBox id="partialReceiptsIntoAssignedStiff" checked={record.partialReceiptsIntoAssignedStiff} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedStiff')} />
                </TableRow>
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiFlex" checked={record.strategieGiustificativiFlex} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiFlex')} />
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiAssenzaTimbrature" checked={record.strategieGiustificativiAssenzaTimbrature} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.strategieGiustificativiAssenzaTimbrature')} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">{translate('resources.cardOrarioSpeciali.fields.subTitle4')}</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="OmissioneDescrizioneOrdiniServizio" checked={record.OmissioneDescrizioneOrdiniServizio} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardOrarioSpeciali.fields.OmissioneDescrizioneOrdiniServizio')} />
                </TableRow>
            </List>
        </TableBody>
    );
}

export default CardOrarioSpeciali;