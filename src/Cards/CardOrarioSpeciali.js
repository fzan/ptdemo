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

function CardOrarioSpeciali(record) {
    const classes = useStyles();
    return (
        <TableBody>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">Post-Elaborazioni per giornate prive di timbrature</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="postElaborazioniCompensazioneAutomatica" checked={record.postElaborazioniCompensazioneAutomatica} InputProps={{ readOnly: true }} />
                    } label="Applicare Compensazione Automatica" />
                    <FormControlLabel control={
                        <CheckBox id="postElaborazioniVociAutomatiche" checked={record.postElaborazioniVociAutomatiche} InputProps={{ readOnly: true }} />
                    } label="Generare Voci Automatiche" />
                    <FormControlLabel control={
                        <CheckBox id="postElaborazioniUsaTipoReali" checked={record.postElaborazioniUsaTipoReali} InputProps={{ readOnly: true }} />
                    } label="Usare Tipo reali e/o virtuali anche senza timbrature" />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">Ore teoriche e tipologia della giornata</ListSubheader>}
            >
                <TableRow width=''>
                    <TextField id="oreTeoricheHHTeoriche" label="HH teoriche" defaultValue={record.oreTeoricheHHTeoriche} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="oreTeoricheTipoGG" label="Tipo GG" defaultValue={record.oreTeoricheTipoGG} InputProps={{ readOnly: true }} className={classes.textInput} />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">Strategie per il motore di elaborazione</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="strategieIgnorareTimbratureOrfane" checked={record.strategieIgnorareTimbratureOrfane} InputProps={{ readOnly: true }} />
                    } label="Ignorare timbrature orfane" />
                    <FormControlLabel control={
                        <CheckBox id="strategieTimbratureDiscriminazioneAutomatica" checked={record.strategieTimbratureDiscriminazioneAutomatica} InputProps={{ readOnly: true }} />
                    } label="Includere le timbrature nella fase di discriminazione automatica" />
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiRigidi" checked={record.strategieGiustificativiRigidi} InputProps={{ readOnly: true }} />
                    } label="Convertire giustificativi parziali (rigidi)" />
                </TableRow>
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiFlex" checked={record.strategieGiustificativiFlex} InputProps={{ readOnly: true }} />
                    } label="Convertire giustificativi parziali (flex)" />
                    <FormControlLabel control={
                        <CheckBox id="strategieGiustificativiAssenzaTimbrature" checked={record.strategieGiustificativiAssenzaTimbrature} InputProps={{ readOnly: true }} />
                    } label="Giustificativi assegnati anche senza timbratura" />
                </TableRow>
            </List>
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                subheader={<ListSubheader color="primary">Ordini di servizio</ListSubheader>}
            >
                <TableRow>
                    <FormControlLabel control={
                        <CheckBox id="OmissioneDescrizioneOrdiniServizio" checked={record.OmissioneDescrizioneOrdiniServizio} InputProps={{ readOnly: true }} />
                    } label="Omettere la descrizione neglio ordini di servizio" />
                </TableRow>
            </List>
        </TableBody>
    );
}

export default CardOrarioSpeciali;