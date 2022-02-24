import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import TableBody from '@material-ui/core/TableBody'
import TableRow from '@material-ui/core/TableRow'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import List from '@material-ui/core/List'
import ListSubheader from '@material-ui/core/ListSubheader'
import { makeStyles } from '@material-ui/core/styles'
import { ReferenceField, useTranslate } from 'react-admin'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardAvanzato(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <TableBody>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle1')}</ListSubheader>}
                >
                    <TextField id="orariSostitutiviSabato" label={translate('resources.cardAvanzato.fields.orariSostitutiviSabato')} defaultValue={record.orariSostitutiviSabato} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="orariSostitutiviDomenicaEFestivo" label={translate('resources.cardAvanzato.fields.orariSostitutiviDomenicaEFestivo')} defaultValue={record.orariSostitutiviDomenicaEFestivo} InputProps={{ readOnly: true }} className={classes.textInput} />
                    <TextField id="orariSostitutiviPreFestivo" label={translate('resources.cardAvanzato.fields.orariSostitutiviPreFestivo')} defaultValue={record.orariSostitutiviPreFestivo} InputProps={{ readOnly: true }} className={classes.textInput} />
                </List>
            </TableRow>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle2')}</ListSubheader>}
                >
                    <FormControlLabel control={
                        <CheckBox id="segnalareTimbratureFuoriFasce" checked={record.segnalareTimbratureFuoriFasce} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardAvanzato.fields.segnalareTimbratureFuoriFasce')} />
                </List>
            </TableRow>

            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle3')}</ListSubheader>}
                >
                    <FormControlLabel control={
                        <CheckBox id="lavoroStraordinarioAutorizzato" checked={record.lavoroStraordinarioAutorizzato} InputProps={{ readOnly: true }} />
                    } label={translate('resources.cardAvanzato.fields.lavoroStraordinarioAutorizzato')} />
                </List>
            </TableRow>
            <TableRow>
                <TextField id="lavoroStraordinarioArrotondamento" label={translate('resources.cardAvanzato.fields.lavoroStraordinarioArrotondamento')} defaultValue={record.lavoroStraordinarioArrotondamento} InputProps={{ readOnly: true }} />
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare" checked={record.lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardAvanzato.fields.lavoroStraordinarioArrotondamentoSulleFasceDaAutorizzare')} />
            </TableRow>
            <TableRow>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    subheader={<ListSubheader color="primary">{translate('resources.cardAvanzato.fields.subTitle4')}</ListSubheader>}
                >

                    <ReferenceField source="profilosId" reference="profilos" link={false}>
                        <ProfiloDiRielaborazione />
                    </ReferenceField>

                </List>
            </TableRow>
        </TableBody>
    );
}

const ProfiloDiRielaborazione = (props) => {
    const translate = useTranslate()
    return (
        <div>
            <TextField label={translate('resources.cardAvanzato.fields.subTitle1')} defaultValue={props.record.nome} InputProps={{ readOnly: true }} />
        </div>
    )
}

export default CardAvanzato;