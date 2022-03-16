import * as React from "react"
import { SelectInput, BooleanInput, ReferenceInput, FormDataConsumer, useTranslate } from "react-admin"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEditAvanzato(record) {
    const translate = useTranslate();
    const classes = useStyles();
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>

            <Grid container>
            <Grid item xs={10} md={6} style={{ textAlign: 'center' }}>
                    <FormDataConsumer>
                        {({ formData }) => (
                            <Typography gutterBottom variant="h5" component="div">
                                {translate('resources.cardGenerale.fields.scheduledIdLabel')}  {formData.description}
                            </Typography>
                        )}
                    </FormDataConsumer>
                </Grid>
                <Grid item xs md />
            </Grid>

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle1')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={12} sm="auto" md="auto">
                    <ReferenceInput source="saturday" label={translate('resources.cardAvanzato.fields.saturday')} allowEmpty reference="schedules" className={classes.textInput}>
                        <SelectInput optionText="description" />
                    </ReferenceInput>
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <ReferenceInput source="preHolyday" label={translate('resources.cardAvanzato.fields.preHolyday')} allowEmpty reference="schedules" className={classes.textInput}>
                        <SelectInput optionText="description" />
                    </ReferenceInput>
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <ReferenceInput source="sundayHolyday" label={translate('resources.cardAvanzato.fields.sundayHolyday')} allowEmpty reference="schedules" className={classes.textInput}>
                        <SelectInput optionText="description" />
                    </ReferenceInput>
                </Grid>
                <Grid item xs />
            </Grid>


            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle2')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <BooleanInput source="reportPunchOutOfBands" label={translate('resources.cardAvanzato.fields.reportPunchOutOfBands')} />
                </Grid>
                <Grid item xs md />
            </Grid >

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle3')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <BooleanInput source="overtimeMustBeAuthorized" label={translate('resources.cardAvanzato.fields.overtimeMustBeAuthorized')} />
                </Grid>
                <Grid item xs />
            </Grid >

            <Grid container>
                <Grid item xs={6}>
                    <SelectInput source="rounding" label={translate('resources.cardAvanzato.fields.rounding')} allowEmpty choices={[
                        { id: 1, name: translate('resources.cardAvanzato.fields.ogniSingolaVoce') },
                        { id: 2, name: translate('resources.cardAvanzato.fields.titolare') },
                        { id: 3, name: translate('resources.cardAvanzato.fields.primaSingolaVoce') },
                        { id: 4, name: translate('resources.cardAvanzato.fields.primaIlTotale') },
                    ]} />
                </Grid>
                <Grid item xs />
            </Grid >

            <Grid container>
                <Grid item xs={12} md={6}>
                    <BooleanInput source="applyRoundingInBandsToBeAuthorized" label={translate('resources.cardAvanzato.fields.applyRoundingInBandsToBeAuthorized')} />
                </Grid>
                <Grid item xs />
            </Grid >

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardAvanzato.fields.subTitle4')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={6}>
                    <ReferenceInput source="profilosId" reference="profilos">
                        <SelectInput optionText="name" />
                    </ReferenceInput>
                </Grid>
                <Grid item xs />
            </Grid >

        </Grid>
    );
}

export default CardEditAvanzato;