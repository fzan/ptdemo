import * as React from 'react'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { makeStyles } from '@material-ui/core/styles'
import { ReferenceField, useTranslate } from 'react-admin'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardAvanzato(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle1')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs />
                <Grid item xs={3} >
                    <TextField id="saturday" label={translate('resources.cardAvanzato.fields.saturday')} defaultValue={record.saturday} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="sundayHolyday" label={translate('resources.cardAvanzato.fields.sundayHolyday')} defaultValue={record.sundayHolyday} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="preHolyday" label={translate('resources.cardAvanzato.fields.preHolyday')} defaultValue={record.preHolyday} InputProps={{ readOnly: true }} className={classes.textInput} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle2')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs={2} />
                <Grid item xs={6} >
                    <FormControlLabel control={
                        <CheckBox id="reportPunchOutOfBands" checked={record.reportPunchOutOfBands} />
                    } label={translate('resources.cardAvanzato.fields.reportPunchOutOfBands')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle3')}
                </Grid>
                <Grid item xs />
            </Grid>


            <Grid container  >
                <Grid item xs />
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="overtimeMustBeAuthorized" checked={record.overtimeMustBeAuthorized} />
                    } label={translate('resources.cardAvanzato.fields.overtimeMustBeAuthorized')} />
                </Grid>
                <Grid item xs={3} >
                    <TextField id="rounding" label={translate('resources.cardAvanzato.fields.rounding')} defaultValue={record.rounding} InputProps={{ readOnly: true }} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="applyRoundingInBandsToBeAuthorized" checked={record.applyRoundingInBandsToBeAuthorized} />
                    } label={translate('resources.cardAvanzato.fields.applyRoundingInBandsToBeAuthorized')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle4')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={2} />
                <Grid item xs={6}>
                    <ReferenceField source="profilosId" reference="profilos" link={false}>
                        <ProfiloDiRielaborazione />
                    </ReferenceField>
                </Grid>
                <Grid item xs />
            </Grid >

        </Grid>
    );
}

const ProfiloDiRielaborazione = (props) => {
    const translate = useTranslate()
    return (
        <TextField label={translate('resources.cardAvanzato.fields.subTitle1')} defaultValue={props.record.name} InputProps={{ readOnly: true }} />
    )
}

export default CardAvanzato;