import * as React from "react"
import { SelectInput, BooleanInput, FormDataConsumer, useTranslate } from "react-admin"
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

function CardEditOrariSpeciali(record) {
    const translate = useTranslate()
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
                <Grid item xs />
            </Grid>

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle1')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="applyAutomaticCompensation" label={translate('resources.cardOrarioSpeciali.fields.applyAutomaticCompensation')} />
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="generateAutomaticEntries" label={translate('resources.cardOrarioSpeciali.fields.generateAutomaticEntries')} />
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="realTypesWithoutStamping" label={translate('resources.cardOrarioSpeciali.fields.realTypesWithoutStamping')} />
                </Grid>
            </Grid>

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle2')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={12} sm="auto" md="auto">
                    <SelectInput source="theoreticalHours" label={translate('resources.cardOrarioSpeciali.fields.theoreticalHours')} className={classes.textInput} choices={[
                        { id: 0, name: translate('resources.cardOrarioSpeciali.fields.minime') },
                        { id: 1, name: translate('resources.cardOrarioSpeciali.fields.base') },
                    ]} />
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <SelectInput source="typeOfDay" label={translate('resources.cardOrarioSpeciali.fields.typeOfDay')} className={classes.textInput} choices={[
                        { id: 0, name: translate('resources.cardOrarioSpeciali.fields.lavorativo') },
                        { id: 1, name: translate('resources.cardOrarioSpeciali.fields.nonLavorativo') },
                        { id: 2, name: translate('resources.cardOrarioSpeciali.fields.festivo') },
                    ]} />
                </Grid>
                <Grid item xs md={1} />
            </Grid>

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle3')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="ignoreOrphanedPunch" label={translate('resources.cardOrarioSpeciali.fields.ignoreOrphanedPunch')} />
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="includePunchInAutomaticTimeDiscriminationPhase" label={translate('resources.cardOrarioSpeciali.fields.includePunchInAutomaticTimeDiscriminationPhase')} />
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="partialReceiptsIntoAssignedStiff" label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedStiff')} />
                </Grid>
            </Grid>

            <Grid container>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="partialReceiptsIntoAssignedFlex" label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedFlex')} />
                </Grid>
                <Grid item xs={12} sm="auto" md="auto">
                    <BooleanInput source="receiptsAssignedInAbsenceOfPunch" label={translate('resources.cardOrarioSpeciali.fields.receiptsAssignedInAbsenceOfPunch')} />
                </Grid>
                <Grid item xs md={1} />
            </Grid>

            <Grid container >
                <Grid item xs={10} md={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle4')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs={12} md={6}>
                    <BooleanInput source="omitDescriptionInServiceOrders" label={translate('resources.cardOrarioSpeciali.fields.omitDescriptionInServiceOrders')} />
                </Grid>
                <Grid item xs md />
            </Grid >

        </Grid>
    );
}

export default CardEditOrariSpeciali;