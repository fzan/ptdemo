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

function CardGenerale(record) {
    const translate = useTranslate()
    const classes = useStyles();
    return (
        <TableBody>
            <TableRow >
                <TextField id="Descrizione" label={translate('resources.cardGenerale.fields.descrizione')} defaultValue={record.descrizione} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="Codice" label={translate('resources.cardGenerale.fields.codice')} defaultValue={record.codice} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="Breve" label={translate('resources.cardGenerale.fields.breve')} defaultValue={record.breve} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="Colore" label={translate('resources.cardGenerale.fields.colore')} defaultValue={record.colore} InputProps={{ readOnly: true }} className={classes.textInput} />
            </TableRow>

            <TableRow>
                {translate('resources.cardGenerale.fields.subTitle1')}
            </TableRow>
            <TableRow>
                <TextField id="tipologiaTipo" label={translate('resources.cardGenerale.fields.tipologiaTipo')} defaultValue={record.tipologiaTipo} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="tipologiaOreBase" label={translate('resources.cardGenerale.fields.tipologiaOreBase')} defaultValue={record.tipologiaOreBase} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="tipologiaOreMinime" label={translate('resources.cardGenerale.fields.tipologiaOreMinime')} defaultValue={record.tipologiaOreMinime} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="tipologiaGiornoDiSalvataggio" label={translate('resources.cardGenerale.fields.tipologiaGiornoDiSalvataggio')} defaultValue={record.tipologiaGiornoDiSalvataggio} InputProps={{ readOnly: true }} className={classes.textInput} />
            </TableRow>


            <TableRow>
                <TextField id="timbratureDalle" label={translate('resources.cardGenerale.fields.timbratureDalle')} defaultValue={record.timbratureDalle} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="timbratureAlle" label={translate('resources.cardGenerale.fields.timbratureAlle')} defaultValue={record.timbratureAlle} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="timbratureGiorniSuccessiviPerTimbratura" label={translate('resources.cardGenerale.fields.timbratureGiorniSuccessiviPerTimbratura')} defaultValue={record.timbratureGiorniSuccessiviPerTimbratura} InputProps={{ readOnly: true }} style={{ width: 230 }} className={classes.textInput} />
            </TableRow>
            <TableRow>
                <FormControlLabel control={
                    <CheckBox id="timbratureTimbratureSuPiuGiorni" checked={record.timbratureTimbratureSuPiuGiorni} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardGenerale.fields.timbratureTimbratureSuPiuGiorni')} />
                <FormControlLabel control={
                    <CheckBox id="timbratureCausaliFuoriIntervallo" checked={record.timbratureCausaliFuoriIntervallo} InputProps={{ readOnly: true }} />
                } label={translate('resources.cardGenerale.fields.timbratureCausaliFuoriIntervallo')} />
            </TableRow>

        </TableBody >

    );
}

export default CardGenerale;