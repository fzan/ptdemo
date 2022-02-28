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
                    <CheckBox id="compensazionePauseNonRispettate" checked={record.compensazionePauseNonRispettate} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazionePauseNonRispettate')} />
                <FormControlLabel control={
                    <CheckBox id="compensazioneDeduzioneAdattivaTimbratureTipo" checked={record.compensazioneDeduzioneAdattivaTimbratureTipo} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazioneDeduzioneAdattivaTimbratureTipo')} />
            </TableRow>
            <TableRow >
                <TextField id="compensazioneSequenzeEu" label={translate('resources.cardEsperto.fields.compensazioneSequenzeEu')} defaultValue={record.compensazioneSequenzeEu} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneTimbratureFuoriFasciaElastica" style={{ width: 250 }} label={translate('resources.cardEsperto.fields.compensazioneTimbratureFuoriFasciaElastica')} defaultValue={record.compensazioneTimbratureFuoriFasciaElastica} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneSpostaTimbraturaTipo" label={translate('resources.cardEsperto.fields.compensazioneSpostaTimbraturaTipo')} defaultValue={record.compensazioneSpostaTimbraturaTipo} InputProps={{ readOnly: true }} className={classes.textInput} />
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="compensazioneDisattivaFasceDopoIndividuaTipo" checked={record.compensazioneDisattivaFasceDopoIndividuaTipo} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazioneDisattivaFasceDopoIndividuaTipo')} />
                <FormControlLabel control={
                    <CheckBox id="compensazioneOrarioRigido" checked={record.compensazioneOrarioRigido} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazioneOrarioRigido')} />
            </TableRow>
        </TableBody>
    );
}

export default CardEsperto;