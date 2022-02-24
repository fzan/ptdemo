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
                    <CheckBox id="compensazioneCompensazioneSelettiva" checked={record.compensazioneCompensazioneSelettiva} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazioneCompensazioneSelettiva')} />
            </TableRow>
            <TableRow >
                <TextField id="compensazioneCumuloAssenze" label={translate('resources.cardEsperto.fields.compensazioneCumuloAssenze')} defaultValue={record.compensazioneCumuloAssenze} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneCumuloStraordinario" label={translate('resources.cardEsperto.fields.compensazioneCumuloStraordinario')} defaultValue={record.compensazioneCumuloStraordinario} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneMassimale" label={translate('resources.cardEsperto.fields.compensazioneMassimale')} defaultValue={record.compensazioneMassimale} InputProps={{ readOnly: true }} className={classes.textInput} />
                <FormControlLabel control={
                    <CheckBox id="compensazioneSaldoPositivo" checked={record.compensazioneSaldoPositivo} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazioneSaldoPositivo')} />
            </TableRow>
            <TableRow >
                <FormControlLabel control={
                    <CheckBox id="compensazioneFasceSeAssenza" checked={record.compensazioneFasceSeAssenza} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardEsperto.fields.compensazioneFasceSeAssenza')} />
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