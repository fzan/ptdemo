import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'

function CardEsperto(record) {
    return (
        <TableBody>
            <TableRow width=''>
                <FormControlLabel control={
                    <CheckBox id="compensazioneCompensazioneSelettiva" checked={record.compensazioneCompensazioneSelettiva} InputProps={{ readOnly: true }} />
                } label="Compensazione Selettiva" />
                <TextField id="compensazioneCumuloAssenze" label="Cumulo Assenze" defaultValue={record.compensazioneCumuloAssenze} InputProps={{ readOnly: true }} />
                <TextField id="compensazioneCumuloStraordinario" label="Cumulo Straordinario" defaultValue={record.compensazioneCumuloStraordinario} InputProps={{ readOnly: true }} />
                <TextField id="compensazioneMassimale" label="Massimale" defaultValue={record.compensazioneMassimale} InputProps={{ readOnly: true }} />
                <FormControlLabel control={
                    <CheckBox id="compensazioneSaldoPositivo" checked={record.compensazioneSaldoPositivo} InputProps={{ readOnly: true }} />
                } label="Saldo Positivo" />
            </TableRow>
            <TableRow width=''>
                <FormControlLabel control={
                    <CheckBox id="compensazioneFasceSeAssenza" checked={record.compensazioneFasceSeAssenza} InputProps={{ readOnly: true }} />
                } label="Fasce se Assenza" />
                <FormControlLabel control={
                    <CheckBox id="compensazionePauseNonRispettate" checked={record.compensazionePauseNonRispettate} InputProps={{ readOnly: true }} />
                } label="Pause non Rispettate" />
                <FormControlLabel control={
                    <CheckBox id="compensazioneDeduzioneAdattivaTimbratureTipo" checked={record.compensazioneDeduzioneAdattivaTimbratureTipo} InputProps={{ readOnly: true }} />
                } label="Deduzione Adattiva Timbrature Tipo" />
                <TextField id="compensazioneSequenzeEu" label="Sequenze Eu" defaultValue={record.compensazioneSequenzeEu} InputProps={{ readOnly: true }} />
            </TableRow>
            <TableRow width=''>
                <TextField id="compensazioneTimbratureFuoriFasciaElastica" label="Timbrature fuori fascia Elastica" defaultValue={record.compensazioneTimbratureFuoriFasciaElastica} InputProps={{ readOnly: true }} />
                <TextField id="compensazioneSpostaTimbraturaTipo" label="Sposta Timbratura Tipo" defaultValue={record.compensazioneSpostaTimbraturaTipo} InputProps={{ readOnly: true }} />
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