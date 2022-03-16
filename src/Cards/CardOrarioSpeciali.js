import * as React from 'react'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import CheckBox from '@material-ui/core/Checkbox'
import { useTranslate, SelectField, Labeled } from 'react-admin'
import Grid from '@material-ui/core/Grid'

const theoreticalHoursChoices = [
    { id: 1, name: 'resources.cardOrarioSpeciali.fields.minime' },
    { id: 2, name: 'resources.cardOrarioSpeciali.fields.base' }
];

const typeOfDayChoices = [
    { id: 0, name: 'resources.cardOrarioSpeciali.fields.lavorativo' },
    { id: 1, name: 'resources.cardOrarioSpeciali.fields.nonLavorativo' },
    { id: 2, name: 'resources.cardOrarioSpeciali.fields.festivo' },
]

function CardOrarioSpeciali(record) {
    const translate = useTranslate()
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle1')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs />
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="applyAutomaticCompensation" checked={record.applyAutomaticCompensation} />
                    } label={translate('resources.cardOrarioSpeciali.fields.applyAutomaticCompensation')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="generateAutomaticEntries" checked={record.generateAutomaticEntries} />
                    } label={translate('resources.cardOrarioSpeciali.fields.generateAutomaticEntries')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="realTypesWithoutStamping" checked={record.realTypesWithoutStamping} />
                    } label={translate('resources.cardOrarioSpeciali.fields.realTypesWithoutStamping')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle2')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs />
                <Grid item xs={3} >
                    <Labeled label={translate('resources.cardOrarioSpeciali.fields.theoreticalHours')}>
                        <SelectField source="theoreticalHours" choices={theoreticalHoursChoices} />
                    </Labeled>
                </Grid>
                <Grid item xs={3} >
                    <Labeled label={translate('resources.cardOrarioSpeciali.fields.typeOfDay')}>
                        <SelectField source="typeOfDay" choices={typeOfDayChoices} />
                    </Labeled>
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle3')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container  >
                <Grid item xs />
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="ignoreOrphanedPunch" checked={record.ignoreOrphanedPunch} />
                    } label={translate('resources.cardOrarioSpeciali.fields.ignoreOrphanedPunch')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="includePunchInAutomaticTimeDiscriminationPhase" checked={record.includePunchInAutomaticTimeDiscriminationPhase} />
                    } label={translate('resources.cardOrarioSpeciali.fields.includePunchInAutomaticTimeDiscriminationPhase')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="partialReceiptsIntoAssignedStiff" checked={record.partialReceiptsIntoAssignedStiff} />
                    } label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedStiff')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container>
                <Grid item xs />
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="partialReceiptsIntoAssignedFlex" checked={record.partialReceiptsIntoAssignedFlex} />
                    } label={translate('resources.cardOrarioSpeciali.fields.partialReceiptsIntoAssignedFlex')} />
                </Grid>
                <Grid item xs={3} >
                    <FormControlLabel control={
                        <CheckBox id="receiptsAssignedInAbsenceOfPunch" checked={record.receiptsAssignedInAbsenceOfPunch} />
                    } label={translate('resources.cardOrarioSpeciali.fields.receiptsAssignedInAbsenceOfPunch')} />
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px', color: '#40b2d4' }} >
                    {translate('resources.cardOrarioSpeciali.fields.subTitle4')}
                </Grid>
                <Grid item xs />
            </Grid>

            <Grid container spacing={1} >
                <Grid item xs />
                <Grid item xs={6} style={{ textAlign: 'center', marginBottom: '10px' }} >
                    <FormControlLabel control={
                        <CheckBox id="omitDescriptionInServiceOrders" checked={record.omitDescriptionInServiceOrders} />
                    } label={translate('resources.cardOrarioSpeciali.fields.omitDescriptionInServiceOrders')} />
                </Grid>
                <Grid item xs />
            </Grid>

        </Grid>
    );
}

export default CardOrarioSpeciali;