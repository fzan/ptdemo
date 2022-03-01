import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslate } from 'react-admin'


const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEsperto(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableBody>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="selectiveCompensation" checked={record.selectiveCompensation} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.selectiveCompensation')} />
            </TableRow>
            <TableRow >
                <TextField id="cumulativeAbsence" label={translate('resources.cardEsperto.fields.cumulativeAbsence')} defaultValue={record.cumulativeAbsence} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="cumulativeOvertime" label={translate('resources.cardEsperto.fields.cumulativeOvertime')} defaultValue={record.cumulativeOvertime} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="maximal" label={translate('resources.cardEsperto.fields.maximal')} defaultValue={record.maximal} InputProps={{ readOnly: true }} className={classes.textInput} />
                <FormControlLabel control={
                    <CheckBox id="positiveBalanceForCompensateHours" checked={record.positiveBalanceForCompensateHours} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.positiveBalanceForCompensateHours')} />
            </TableRow>
            <TableRow >
                <FormControlLabel control={
                    <CheckBox id="bandsInCaseOfAbsence" checked={record.bandsInCaseOfAbsence} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.bandsInCaseOfAbsence')} />
                <FormControlLabel control={
                    <CheckBox id="extendOverMissedPauses" checked={record.extendOverMissedPauses} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.extendOverMissedPauses')} />
                <FormControlLabel control={
                    <CheckBox id="adaptiveDeductionOfStandardPunch" checked={record.adaptiveDeductionOfStandardPunch} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.adaptiveDeductionOfStandardPunch')} />
            </TableRow>
            <TableRow >
                <TextField id="eUSequences" label={translate('resources.cardEsperto.fields.eUSequences')} defaultValue={record.eUSequences} InputProps={{ readOnly: true }} className={classes.textInput} />
                <FormControlLabel control={
                    <CheckBox id="punchOutsideElasticBand" checked={record.punchOutsideElasticBand} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.punchOutsideElasticBand')} />    
                <FormControlLabel control={
                    <CheckBox id="movePunchType" checked={record.movePunchType} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.movePunchType')} />  
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="deactivateBandsAfterIdentifiedType" checked={record.deactivateBandsAfterIdentifiedType} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.deactivateBandsAfterIdentifiedType')} />
                <FormControlLabel control={
                    <CheckBox id="scheduleBecomeStiff" checked={record.scheduleBecomeStiff} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.scheduleBecomeStiff')} />
            </TableRow>
        </TableBody>
    );
}

export default CardEsperto;