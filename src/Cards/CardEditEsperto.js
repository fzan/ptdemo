import * as React from "react"
import { TextInput, SelectInput, BooleanInput, ReferenceInput, regex, required, useTranslate } from "react-admin"
import Typography from '@material-ui/core/Typography'
import { FormDataConsumer } from 'react-admin'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'

const useStyles = makeStyles({
    textInput: {
        margin: 4
    }
});

const validateHoursFormat = regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/, 'Inserire un orario Valido (HH:mm)')

function CardEditEsperto(record) {
    const translate = useTranslate()
    const classes = useStyles()
    return (
        <Grid container spacing={1} style={{ width: "100%" }}>
            < FormDataConsumer >
                {({ formData, ...rest }) => (
                    <>
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

                        <Grid container>
                            <Grid item xs={12} md={6}>
                                <BooleanInput source="selectiveCompensation" label={translate('resources.cardEsperto.fields.selectiveCompensation')} />
                            </Grid>
                            <Grid item xs />
                        </Grid >

                        {formData.selectiveCompensation ?
                            <>
                                <Grid container  >
                                    <Grid item xs={12} sm="auto" md="auto">
                                        <ReferenceInput source="cumulativeAbsence" reference="voices" allowEmpty label={translate('resources.cardEsperto.fields.cumulativeAbsence')} className={classes.textInput}>
                                            <SelectInput optionText="name" />
                                        </ReferenceInput>
                                    </Grid>
                                    <Grid item xs={12} sm="auto" md="auto">
                                        <ReferenceInput style={{ width: '200px' }} source="cumulativeOvertime" reference="voices" allowEmpty label={translate('resources.cardEsperto.fields.cumulativeOvertime')} className={classes.textInput}>
                                            <SelectInput optionText="name" />
                                        </ReferenceInput>
                                    </Grid>
                                    <Grid item xs={12} sm="auto" md="auto">
                                        <TextInput source="maximal" label={translate('resources.cardEsperto.fields.maximal')} className={classes.textInput} validate={[required(), validateHoursFormat]} />
                                    </Grid>
                                    <Grid item xs md />
                                </Grid>

                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <BooleanInput source="positiveBalanceForCompensateHours" label={translate('resources.cardEsperto.fields.positiveBalanceForCompensateHours')} />
                                    </Grid>
                                    <Grid item xs />
                                </Grid >

                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <BooleanInput source="bandsInCaseOfAbsence" label={translate('resources.cardEsperto.fields.bandsInCaseOfAbsence')} />
                                    </Grid>
                                    <Grid item xs />
                                </Grid >

                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <BooleanInput source="extendOverMissedPauses" label={translate('resources.cardEsperto.fields.extendOverMissedPauses')} />
                                    </Grid>
                                    <Grid item xs />
                                </Grid >

                                <Grid container>
                                    <Grid item xs={12} md={6}>
                                        <BooleanInput source="adaptiveDeductionOfStandardPunch" label={translate('resources.cardEsperto.fields.adaptiveDeductionOfStandardPunch')} />
                                    </Grid>
                                    <Grid item xs />
                                </Grid >

                                {formData.adaptiveDeductionOfStandardPunch ?
                                    <>
                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <SelectInput source="eUSequences" label={translate('resources.cardEsperto.fields.eUSequences')} allowEmpty className={classes.textInput} choices={[
                                                    { id: 'prima', name: translate('resources.cardEsperto.fields.prima') },
                                                    { id: 'tutteDallaPrima', name: translate('resources.cardEsperto.fields.tutteDallaPrima') },
                                                    { id: 'tutteIndipendenti', name: translate('resources.cardEsperto.fields.tutteIndipendenti') },
                                                ]} />
                                            </Grid>
                                            <Grid item xs />
                                        </Grid >

                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <BooleanInput source="punchOutsideElasticBand" label={translate('resources.cardEsperto.fields.punchOutsideElasticBand')} />
                                            </Grid>
                                            <Grid item xs />
                                        </Grid >

                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <BooleanInput source="movePunchType" label={translate('resources.cardEsperto.fields.movePunchType')} />
                                            </Grid>
                                            <Grid item xs />
                                        </Grid >

                                        <Grid container>
                                            <Grid item xs={12} md={6}>
                                                <BooleanInput source="deactivateBandsAfterIdentifiedType" label={translate('resources.cardEsperto.fields.deactivateBandsAfterIdentifiedType')} />
                                            </Grid>
                                            <Grid item xs />
                                        </Grid >

                                        {formData.deactivateBandsAfterIdentifiedType ?
                                            <Grid container>
                                                <Grid item xs={12} md={6}>
                                                    <BooleanInput source="scheduleBecomeStiff" label={translate('resources.cardEsperto.fields.scheduleBecomeStiff')} />
                                                </Grid>
                                                <Grid item xs />
                                            </Grid >

                                            :
                                            null
                                        }
                                    </> :
                                    null
                                }
                            </> :
                            null
                        }

                    </>
                )
                }

            </FormDataConsumer >
        </Grid>
    );
}

export default CardEditEsperto;