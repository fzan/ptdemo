import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslate } from 'react-admin'
import Grid from '@material-ui/core/Grid'


const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEsperto(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>

            <Grid container  >
                <Grid item xs={3}>
                    <FormControlLabel control={
                        <CheckBox id="selectiveCompensation" checked={record.selectiveCompensation} />
                    } label={translate('resources.cardEsperto.fields.selectiveCompensation')} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="cumulativeAbsence" label={translate('resources.cardEsperto.fields.cumulativeAbsence')} defaultValue={record.cumulativeAbsence} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="cumulativeOvertime" label={translate('resources.cardEsperto.fields.cumulativeOvertime')} defaultValue={record.cumulativeOvertime} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="maximal" label={translate('resources.cardEsperto.fields.maximal')} defaultValue={record.maximal} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
            </Grid>

            <Grid container  >
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="positiveBalanceForCompensateHours" checked={record.positiveBalanceForCompensateHours} />
                    } label={translate('resources.cardEsperto.fields.positiveBalanceForCompensateHours')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="bandsInCaseOfAbsence" checked={record.bandsInCaseOfAbsence} />
                    } label={translate('resources.cardEsperto.fields.bandsInCaseOfAbsence')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="extendOverMissedPauses" checked={record.extendOverMissedPauses} />
                    } label={translate('resources.cardEsperto.fields.extendOverMissedPauses')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="adaptiveDeductionOfStandardPunch" checked={record.adaptiveDeductionOfStandardPunch} />
                    } label={translate('resources.cardEsperto.fields.adaptiveDeductionOfStandardPunch')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs />
                <Grid item xs={3} >
                    <TextField id="eUSequences" label={translate('resources.cardEsperto.fields.eUSequences')} defaultValue={record.eUSequences} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="punchOutsideElasticBand" checked={record.punchOutsideElasticBand} />
                    } label={translate('resources.cardEsperto.fields.punchOutsideElasticBand')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="movePunchType" checked={record.movePunchType} />
                    } label={translate('resources.cardEsperto.fields.movePunchType')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs />
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="deactivateBandsAfterIdentifiedType" checked={record.deactivateBandsAfterIdentifiedType} />
                    } label={translate('resources.cardEsperto.fields.deactivateBandsAfterIdentifiedType')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="scheduleBecomeStiff" checked={record.scheduleBecomeStiff} />
                    } label={translate('resources.cardEsperto.fields.scheduleBecomeStiff')} />
                </Grid>
                <Grid item xs />
            </Grid>

        </Grid>
    );
}

export default CardEsperto;