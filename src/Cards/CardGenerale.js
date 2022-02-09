import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

function CardGenerale(record) {
    return (
        <TableBody>
            <TableRow>
                <TextField id="Descrizione" label="Descrizione" defaultValue={record.descrizione} InputProps={{ readOnly: true }} />
                <TextField id="Codice" label="Codice" defaultValue={record.codice} InputProps={{ readOnly: true }} />
                <TextField id="Breve" label="Breve" defaultValue={record.breve} InputProps={{ readOnly: true }} />
                <TextField id="Colore" label="Colore" defaultValue={record.colore} InputProps={{ readOnly: true }} />
            </TableRow>

            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">Tipologia, ore previste e competenza dei risultati</ListSubheader>}
            >
                <TableRow>
                    <TextField id="tipologiaTipo" label="Tipo" defaultValue={record.tipologiaTipo} InputProps={{ readOnly: true }} />
                    <TextField id="tipologiaOreBase" label="Ore Base" defaultValue={record.tipologiaOreBase} InputProps={{ readOnly: true }} />
                    <TextField id="tipologiaOreMinime" label="Ore Minime" defaultValue={record.tipologiaOreMinime} InputProps={{ readOnly: true }} />
                    <TextField id="tipologiaGiornoDiSalvataggio" label="Giorno di Salvataggio" defaultValue={record.tipologiaGiornoDiSalvataggio} InputProps={{ readOnly: true }} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">Intervallo Timbrature</ListSubheader>}
            >
                <TableRow>
                    <TextField id="timbratureDalle" label="Dalle" defaultValue={record.timbratureDalle} InputProps={{ readOnly: true }} />
                    <TextField id="timbratureAlle" label="Alle" defaultValue={record.timbratureAlle} InputProps={{ readOnly: true }} />
                    <TextField id="timbratureGiorniSuccessiviPerTimbratura" label="Giorni successivi per timbratura" defaultValue={record.timbratureGiorniSuccessiviPerTimbratura} InputProps={{ readOnly: true }} />
                    <FormControlLabel control={
                        <CheckBox id="timbratureTimbratureSuPiuGiorni" checked={record.timbratureTimbratureSuPiuGiorni} InputProps={{ readOnly: true }} />
                    } label="Timbrature su piu giorni" />
                    <FormControlLabel control={
                        <CheckBox id="timbratureCausaliFuoriIntervallo" checked={record.timbratureCausaliFuoriIntervallo} InputProps={{ readOnly: true }} />
                    } label="Causali fuori intervallo" />
                </TableRow>
            </List>
        </TableBody>

    );
}

export default CardGenerale;