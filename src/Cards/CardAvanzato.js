import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'

function CardAvanzato(record) {
    return (
        <TableBody>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">Orari Sostitutivi</ListSubheader>}
                >
                    <TextField id="orariSostitutiviSabato" label="Sabato" defaultValue={record.orariSostitutiviSabato} InputProps={{ readOnly: true }} />
                    <TextField id="orariSostitutiviDomenicaEFestivo" label="Domenica e Festivi" defaultValue={record.orariSostitutiviDomenicaEFestivo} InputProps={{ readOnly: true }} />
                    <TextField id="orariSostitutiviPreFestivo" label="PreFestivo" defaultValue={record.orariSostitutiviPreFestivo} InputProps={{ readOnly: true }} />
                </List>
            </TableRow>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">Timbrature conformi</ListSubheader>}
                >
                    <FormControlLabel control={
                        <CheckBox id="segnalareTimbratureFuoriFasce" checked={record.segnalareTimbratureFuoriFasce} InputProps={{ readOnly: true }} />
                    } label="Segnalare timbrature fuori fasce" />
                </List>
            </TableRow>

            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">Computo del lavoro straordinario</ListSubheader>}
                >
                    <FormControlLabel control={
                        <CheckBox id="lavoroStraordinarioAutorizzato" checked={record.lavoroStraordinarioAutorizzato} InputProps={{ readOnly: true }} />
                    } label="Straorinario autorizzato" />
                </List>
            </TableRow>
            <TableRow>
                <TextField id="lavoroStraordinarioArrotondamento" label="Arrotondamento" defaultValue={record.lavoroStraordinarioArrotondamento} InputProps={{ readOnly: true }} />
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" checked={record.lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare} InputProps={{ readOnly: true }} />
                } label="Arrotondamento sulle fasce da Autorizzare" />
            </TableRow>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">Profilo di rielaborazione</ListSubheader>}
                >
                    <TextField id="profilosId" label="PROFILOID" defaultValue={record.profilosId} InputProps={{ readOnly: true }} />
                </List>
            </TableRow>
        </TableBody>
    );
}

export default CardAvanzato;