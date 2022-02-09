import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'

function CardAvanzato(record) {
    return (
        <TableBody>
            <TableRow width=''>
                <TextField id="orariSostitutiviSabato" label="Sabato" defaultValue={record.orariSostitutiviSabato} InputProps={{ readOnly: true }} />
                <TextField id="orariSostitutiviDomenicaEFestivo" label="Domenica e Festivi" defaultValue={record.orariSostitutiviDomenicaEFestivo} InputProps={{ readOnly: true }} />
                <TextField id="orariSostitutiviPreFestivo" label="PreFestivo" defaultValue={record.orariSostitutiviPreFestivo} InputProps={{ readOnly: true }} />
                <FormControlLabel control={
                    <CheckBox id="segnalareTimbratureFuoriFasce" checked={record.segnalareTimbratureFuoriFasce} InputProps={{ readOnly: true }} />
                } label="Segnalare timbrature fuori fasce" />
            </TableRow>
            <TableRow width=''>
                <FormControlLabel control={
                    <CheckBox id="lavoroStraordinarioAutorizzato" checked={record.lavoroStraordinarioAutorizzato} InputProps={{ readOnly: true }} />
                } label="Straorinario autorizzato" />
                <TextField id="lavoroStraordinarioArrotondamento" label="Arrotondamento" defaultValue={record.lavoroStraordinarioArrotondamento} InputProps={{ readOnly: true }} />
                <FormControlLabel control={
                    <CheckBox id="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" checked={record.lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare} InputProps={{ readOnly: true }} />
                } label="Arrotondamento sulle fasce da Autorizzare" />
                <TextField id="profilosId" label="PROFILOID" defaultValue={record.profilosId} InputProps={{ readOnly: true }} />
            </TableRow>
        </TableBody>
    );
}

export default CardAvanzato;