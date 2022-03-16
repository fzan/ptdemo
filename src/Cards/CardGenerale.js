import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { useTranslate } from 'react-admin'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardGenerale(record) {
    const translate = useTranslate()
    const classes = useStyles();
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>

            <Grid container  >
                <Grid item xs={3} >
                    <TextField id="description" label={translate('resources.cardGenerale.fields.description')} defaultValue={record.description} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="code" label={translate('resources.cardGenerale.fields.code')} defaultValue={record.code} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="brief" label={translate('resources.cardGenerale.fields.brief')} defaultValue={record.brief} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="color" label={translate('resources.cardGenerale.fields.color')} defaultValue={record.color} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardGenerale.fields.subTitle1')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs={3} >
                    <TextField id="type" label={translate('resources.cardGenerale.fields.type')} defaultValue={record.type} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="base" label={translate('resources.cardGenerale.fields.base')} defaultValue={record.base} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="minimum" label={translate('resources.cardGenerale.fields.minimum')} defaultValue={record.minimum} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="savingDay" label={translate('resources.cardGenerale.fields.savingDay')} defaultValue={record.savingDay} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
            </Grid>

            <Grid container  >
                <Grid item xs />
                <Grid item xs={3} >
                    <TextField id="from" label={translate('resources.cardGenerale.fields.from')} defaultValue={record.from} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="to" label={translate('resources.cardGenerale.fields.to')} defaultValue={record.to} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="nextDays" label={translate('resources.cardGenerale.fields.nextDays')} defaultValue={record.nextDays} InputProps={{ readOnly: true }} style={{ width: 230 }} className={classes.textInput} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs />
                <Grid item xs={2} >
                    <FormControlLabel control={
                        <CheckBox id="onMoreDays" checked={record.onMoreDays} />
                    } label={translate('resources.cardGenerale.fields.onMoreDays')} />
                </Grid>
                <Grid item xs={2} >
                    <FormControlLabel control={
                        <CheckBox id="causalCodesOutOfRange" checked={record.causalCodesOutOfRange} />
                    } label={translate('resources.cardGenerale.fields.causalCodesOutOfRange')} />
                </Grid>
                <Grid item xs />
            </Grid>

        </Grid>
    );
}

export default CardGenerale;