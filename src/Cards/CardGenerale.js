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
                <TextField id="description" label={translate('resources.cardGenerale.fields.description')} defaultValue={record.description} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="code" label={translate('resources.cardGenerale.fields.code')} defaultValue={record.code} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="brief" label={translate('resources.cardGenerale.fields.brief')} defaultValue={record.brief} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="color" label={translate('resources.cardGenerale.fields.color')} defaultValue={record.color} InputProps={{ readOnly: true }} className={classes.textInput} />
            </TableRow>

            <TableRow>
                {translate('resources.cardGenerale.fields.subTitle1')}
            </TableRow>
            <TableRow>
                <TextField id="type" label={translate('resources.cardGenerale.fields.type')} defaultValue={record.type} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="base" label={translate('resources.cardGenerale.fields.base')} defaultValue={record.base} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="minimum" label={translate('resources.cardGenerale.fields.minimum')} defaultValue={record.minimum} InputProps={{ readOnly: true }} className={classes.textInput} />
                <TextField id="savingDay" label={translate('resources.cardGenerale.fields.savingDay')} defaultValue={record.savingDay} InputProps={{ readOnly: true }} className={classes.textInput} />
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