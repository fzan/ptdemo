import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEsperto(record) {
    const classes = useStyles();
    return (
        <TableBody>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="compensazioneCompensazioneSelettiva" checked={record.compensazioneCompensazioneSelettiva} InputProps={{ readOnly: true }} />
                } label="Compensazione Selettiva" />
            </TableRow>
            <TableRow >
                <TextField id="compensazioneCumuloAssenze" label="Cumulo Assenze" defaultValue={record.compensazioneCumuloAssenze} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneCumuloStraordinario" label="Cumulo Straordinario" defaultValue={record.compensazioneCumuloStraordinario} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneMassimale" label="Massimale" defaultValue={record.compensazioneMassimale} InputProps={{ readOnly: true }} className={classes.textInput} />
                <FormControlLabel control={
                    <CheckBox id="compensazioneSaldoPositivo" checked={record.compensazioneSaldoPositivo} InputProps={{ readOnly: true }} />
                } label="Saldo Positivo" />
            </TableRow>
            <TableRow >
                <FormControlLabel control={
                    <CheckBox id="compensazioneFasceSeAssenza" checked={record.compensazioneFasceSeAssenza} InputProps={{ readOnly: true }} />
                } label="Fasce se Assenza" />
                <FormControlLabel control={
                    <CheckBox id="compensazionePauseNonRispettate" checked={record.compensazionePauseNonRispettate} InputProps={{ readOnly: true }} />
                } label="Pause non Rispettate" />
                <FormControlLabel control={
                    <CheckBox id="compensazioneDeduzioneAdattivaTimbratureTipo" checked={record.compensazioneDeduzioneAdattivaTimbratureTipo} InputProps={{ readOnly: true }} />
                } label="Deduzione Adattiva Timbrature Tipo" />
            </TableRow>
            <TableRow >
                <TextField id="compensazioneSequenzeEu" label="Sequenze Eu" defaultValue={record.compensazioneSequenzeEu} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneTimbratureFuoriFasciaElastica" style={{ width: 250 }} label="Timbrature fuori fascia Elastica" defaultValue={record.compensazioneTimbratureFuoriFasciaElastica} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="compensazioneSpostaTimbraturaTipo" label="Sposta Timbratura Tipo" defaultValue={record.compensazioneSpostaTimbraturaTipo} InputProps={{ readOnly: true }} className={classes.textInput} />
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="compensazioneDisattivaFasceDopoIndividuaTipo" checked={record.compensazioneDisattivaFasceDopoIndividuaTipo} InputProps={{ readOnly: true }} />
                } label="Disattiva fasce dopo individua Tipo" />
                <FormControlLabel control={
                    <CheckBox id="compensazioneOrarioRigido" checked={record.compensazioneOrarioRigido} InputProps={{ readOnly: true }} />
                } label="Orario Rigido" />
            </TableRow>
        </TableBody>
    );
}

export default CardEsperto;