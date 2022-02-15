import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardGenerale(record) {
    const classes = useStyles();
    return (
        <TableBody>
            <TableRow>
                <TextField id="Descrizione" label="Descrizione" defaultValue={record.descrizione} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="Codice" label="Codice" defaultValue={record.codice} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="Breve" label="Breve" defaultValue={record.breve} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="Colore" label="Colore" defaultValue={record.colore} InputProps={{ readOnly: true }} className={classes.textInput} />
            </TableRow>

            <TableRow>
                Tipologia, ore previste e competenza dei risultati
            </TableRow>
                <TableRow>
                    <TextField id="tipologiaTipo" label="Tipo" defaultValue={record.tipologiaTipo} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="tipologiaOreBase" label="Ore Base" defaultValue={record.tipologiaOreBase} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="tipologiaOreMinime" label="Ore Minime" defaultValue={record.tipologiaOreMinime} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="tipologiaGiornoDiSalvataggio" label="Giorno di Salvataggio" defaultValue={record.tipologiaGiornoDiSalvataggio} InputProps={{ readOnly: true }} className={classes.textInput} />
                </TableRow>
           

                <TableRow>
                    <TextField id="timbratureDalle" label="Dalle" defaultValue={record.timbratureDalle} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="timbratureAlle" label="Alle" defaultValue={record.timbratureAlle} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="timbratureGiorniSuccessiviPerTimbratura" label="Giorni successivi per timbratura" defaultValue={record.timbratureGiorniSuccessiviPerTimbratura} InputProps={{ readOnly: true }} style={{ width: 230 }} className={classes.textInput} />
                </TableRow>
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="timbratureTimbratureSuPiuGiorni" checked={record.timbratureTimbratureSuPiuGiorni} InputProps={{ readOnly: true }} />
                    } label="Timbrature su piu giorni" />
                    <FormControlLabel control={
                        <CheckBox id="timbratureCausaliFuoriIntervallo" checked={record.timbratureCausaliFuoriIntervallo} InputProps={{ readOnly: true }} />
                    } label="Causali fuori intervallo" />
                </TableRow>
      
        </TableBody >

    );
}

export default CardGenerale;